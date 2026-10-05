import { NextResponse } from 'next/server'

import { db, SLUG } from '@/lib/db'
import { cleanLinks } from '@/lib/tourLinks'

/** The contact buttons the CRM set for this tour. Empty when none, when off, or with no database. */
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const pool = db()
    let links = {}
    if (pool && SLUG.test(slug)) {
        try {
            const { rows } = await pool.query<{ links: unknown }>('SELECT links FROM tours WHERE slug = $1 AND active', [slug])
            links = cleanLinks(rows[0]?.links)
        } catch (e) {
            // a database hiccup must never break the tour itself
            console.error('[tour-links]', (e as Error).message)
        }
    }
    // Short CDN cache: an edit in the CRM shows within a minute, a viral tour costs one query a minute.
    return NextResponse.json({ links }, { headers: { 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300' } })
}
