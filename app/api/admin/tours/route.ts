/**
 * Tour admin API — LOCAL DEV SERVER ONLY. Importing writes into public/, which only exists as
 * a writable folder on your machine; on Vercel the filesystem is read-only. Import locally,
 * then commit and push.
 *
 *   GET                  list imported tours
 *   POST ?slug=<name>    body = the .zip exported from TourForge (slug optional)
 *   DELETE ?slug=<name>  remove a tour
 */
import { NextResponse } from 'next/server'

import { deleteTour, importTour, ImportError, listTours } from '@/lib/tourImport'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Sent by AdminClient. A custom header makes cross-site requests need a CORS preflight, which
 *  this route never grants, so other websites open in the browser cannot call it (CSRF). */
const ADMIN_HEADER = 'x-gateverse-admin'

const LOOPBACK_HOST = /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/i

function localOnly(req: Request): Response | null {
    if (process.env.NODE_ENV !== 'development') {
        return NextResponse.json(
            { error: 'The tour admin only works on the local dev server (npm run dev). Import there, then push.' },
            { status: 403 },
        )
    }
    // `next dev` listens on every network interface: refuse other machines on the LAN and
    // DNS-rebinding pages, which reach the server under a non-loopback Host.
    const host = req.headers.get('host') ?? ''
    const origin = req.headers.get('origin')
    const sameOrigin = !origin || (() => {
        try {
            return new URL(origin).host === host
        } catch {
            return false
        }
    })()
    if (!LOOPBACK_HOST.test(host) || !sameOrigin || req.headers.get(ADMIN_HEADER) !== '1') {
        return NextResponse.json({ error: 'Open the admin at http://localhost:3000/admin.' }, { status: 403 })
    }
    return null
}

function fail(err: unknown): Response {
    const status = err instanceof ImportError ? err.status : 500
    return NextResponse.json({ error: (err as Error).message }, { status })
}

export async function GET(req: Request): Promise<Response> {
    const blocked = localOnly(req)
    if (blocked) return blocked
    return NextResponse.json({ tours: await listTours() })
}

export async function POST(req: Request): Promise<Response> {
    const blocked = localOnly(req)
    if (blocked) return blocked
    try {
        const slug = new URL(req.url).searchParams.get('slug') || undefined
        const zip = Buffer.from(await req.arrayBuffer())
        if (zip.length === 0) throw new ImportError(400, 'Empty upload.')
        return NextResponse.json({ tour: await importTour(zip, slug) }, { status: 201 })
    } catch (err) {
        return fail(err)
    }
}

export async function DELETE(req: Request): Promise<Response> {
    const blocked = localOnly(req)
    if (blocked) return blocked
    try {
        const slug = new URL(req.url).searchParams.get('slug')
        if (!slug) throw new ImportError(400, 'Missing slug.')
        await deleteTour(slug)
        return NextResponse.json({ ok: true })
    } catch (err) {
        return fail(err)
    }
}
