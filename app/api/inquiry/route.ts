import { NextResponse } from 'next/server'

import { db } from '@/lib/db'
import { parse, validate } from '@/lib/inquiry'

/**
 * Project inquiries from the contact form, stored in the CRM's database (table site_inquiries,
 * created here on first use; the CRM's migrations never touch tables they don't define).
 *
 * Responses: 201 {ok, ref} stored · 400 {error:'invalid', fields} · 403 cross-site · 413 too big ·
 * 429 rate limited · 503 {error:'unavailable'} no database configured · 500 storage failed.
 * The form shows success only on 201; on any error it offers WhatsApp/email with the same details.
 */
export const dynamic = 'force-dynamic'

const MAX_BODY = 10_000
const WINDOW_MS = 10 * 60_000
const MAX_PER_WINDOW = 5

// Per server instance; blunts a script submitting in a loop. Not persisted.
const recent = new Map<string, { n: number; until: number }>()
function limited(ip: string): boolean {
    const now = Date.now()
    const r = recent.get(ip)
    if (!r || r.until < now) {
        if (recent.size > 5000) recent.clear()
        recent.set(ip, { n: 1, until: now + WINDOW_MS })
        return false
    }
    return ++r.n > MAX_PER_WINDOW
}

let ready: Promise<unknown> | null = null
function ensureTable(pool: NonNullable<ReturnType<typeof db>>) {
    ready ??= pool
        .query(
            `CREATE TABLE IF NOT EXISTS site_inquiries (
                id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
                created_at timestamptz NOT NULL DEFAULT now(),
                status text NOT NULL DEFAULT 'new',
                locale text,
                name text NOT NULL,
                company text,
                email text NOT NULL,
                phone text NOT NULL,
                project_type text,
                project_location text,
                project_status text,
                service text,
                details text,
                page text,
                referrer text,
                user_agent text
            )`,
        )
        .catch((e) => {
            ready = null // retry on the next request
            throw e
        })
    return ready
}

const short = (v: unknown, max: number) => (typeof v === 'string' ? v.slice(0, max) : null)

export async function POST(req: Request) {
    // Same-site only: a form on another site must not post here.
    const origin = req.headers.get('origin')
    const host = req.headers.get('x-forwarded-host') ?? req.headers.get('host')
    if (origin && host) {
        let from = ''
        try {
            from = new URL(origin).host
        } catch {
            // "null" or malformed: treated as cross-site
        }
        if (from !== host) return NextResponse.json({ error: 'forbidden' }, { status: 403 })
    }

    const text = await req.text()
    if (text.length > MAX_BODY) return NextResponse.json({ error: 'too_large' }, { status: 413 })
    let body: Record<string, unknown>
    try {
        body = JSON.parse(text)
    } catch {
        return NextResponse.json({ error: 'invalid' }, { status: 400 })
    }

    // Honeypot: a hidden field people never see. Bots that fill it get a normal-looking reply.
    if (typeof body.hp === 'string' && body.hp.trim()) return NextResponse.json({ ok: true, ref: 'GV-OK' }, { status: 201 })

    const inquiry = parse(body)
    if (!inquiry) return NextResponse.json({ error: 'invalid' }, { status: 400 })
    const fields = validate(inquiry)
    if (Object.keys(fields).length) return NextResponse.json({ error: 'invalid', fields }, { status: 400 })

    const ip = req.headers.get('x-real-ip') ?? req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
    if (limited(ip)) return NextResponse.json({ error: 'rate_limited' }, { status: 429 })

    const pool = db()
    if (!pool) return NextResponse.json({ error: 'unavailable' }, { status: 503 })

    try {
        await ensureTable(pool)
        const { rows } = await pool.query<{ id: string }>(
            `INSERT INTO site_inquiries
                (locale, name, company, email, phone, project_type, project_location, project_status, service, details, page, referrer, user_agent)
             VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING id`,
            [
                body.locale === 'ar' ? 'ar' : 'en',
                inquiry.name,
                inquiry.company,
                inquiry.email,
                inquiry.phone,
                inquiry.projectType,
                inquiry.location,
                inquiry.status,
                inquiry.service,
                inquiry.details || null,
                short(body.page, 500),
                short(body.referrer, 500),
                short(req.headers.get('user-agent'), 300),
            ],
        )
        const ref = `GV-${rows[0].id.slice(0, 8).toUpperCase()}`
        return NextResponse.json({ ok: true, ref }, { status: 201 })
    } catch (e) {
        console.error('[inquiry]', (e as Error).message)
        return NextResponse.json({ error: 'server' }, { status: 500 })
    }
}
