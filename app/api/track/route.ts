import { NextResponse } from 'next/server'

import { db, SLUG } from '@/lib/db'
import { LINK_KINDS } from '@/lib/tourLinks'

/**
 * Counts a tour view, a contact-button tap or a popup open: one daily counter per tour, event and
 * target. Nothing about the visitor is stored. Only tours the CRM knows (and has on) are counted,
 * so random slugs can't fill the table.
 */
const POPUP_ID = /^[A-Za-z0-9_-]{1,64}$/

// Per server instance: blunts a script hammering one counter. Not persisted anywhere.
const recent = new Map<string, { n: number; until: number }>()
const WINDOW_MS = 10 * 60_000
const MAX_PER_WINDOW = 30

function limited(key: string): boolean {
    const now = Date.now()
    const r = recent.get(key)
    if (!r || r.until < now) {
        if (recent.size > 5000) recent.clear()
        recent.set(key, { n: 1, until: now + WINDOW_MS })
        return false
    }
    r.n++
    return r.n > MAX_PER_WINDOW
}

function valid(body: unknown): { slug: string; event: string; target: string } | null {
    if (!body || typeof body !== 'object') return null
    const { s, e, t } = body as Record<string, unknown>
    if (typeof s !== 'string' || !SLUG.test(s)) return null
    if (e === 'view') return { slug: s, event: 'view', target: '' }
    if (e === 'click' && typeof t === 'string' && (LINK_KINDS as readonly string[]).includes(t)) return { slug: s, event: 'click', target: t }
    if (e === 'popup' && typeof t === 'string' && POPUP_ID.test(t)) return { slug: s, event: 'popup', target: t }
    return null
}

export async function POST(req: Request) {
    const pool = db()
    const text = await req.text()
    if (!pool || text.length > 300) return new NextResponse(null, { status: 204 })
    let body: unknown
    try {
        body = JSON.parse(text)
    } catch {
        return new NextResponse(null, { status: 204 })
    }
    const x = valid(body)
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? ''
    if (!x || limited(`${ip}|${x.slug}|${x.event}|${x.target}`)) return new NextResponse(null, { status: 204 })
    try {
        await pool.query(
            `INSERT INTO tour_stats (slug, day, event, target, count)
             SELECT $1, (now() AT TIME ZONE 'Africa/Cairo')::date, $2, $3, 1
             WHERE EXISTS (SELECT 1 FROM tours WHERE slug = $1 AND active)
             ON CONFLICT (slug, day, event, target) DO UPDATE SET count = tour_stats.count + 1`,
            [x.slug, x.event, x.target],
        )
    } catch (e) {
        console.error('[track]', (e as Error).message)
    }
    // Always 204: the page never waits on or reacts to counting.
    return new NextResponse(null, { status: 204 })
}
