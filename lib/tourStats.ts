/**
 * What a client's stats page shows: their tours (set up in the CRM) and the counters this site
 * writes. Same sums as the CRM's lib/tour-stats.ts.
 */
import type { Pool } from 'pg'

import { LINK_KINDS, type LinkKind } from './tourLinks'

export interface TourStat {
    slug: string
    name: string
    active: boolean
    views: number
    views30: number
    clicks: number
    clicks30: number
    byKind: Partial<Record<LinkKind, number>>
    popups: { id: string; title: string; count: number }[]
}

export interface ClientStats {
    name: string
    tours: TourStat[]
    daily: { day: string; views: number; clicks: number }[]
}

const DAYS = 30

/** Tour name and popup titles from the tour's own manifest; the slug and ids when it can't be read. */
async function manifestInfo(origin: string, slug: string): Promise<{ name: string; titles: Map<string, string> }> {
    try {
        const r = await fetch(`${origin}/tours/${slug}/tour.json`, { next: { revalidate: 3600 } })
        if (!r.ok) throw new Error(String(r.status))
        const m = (await r.json()) as { tour?: { name?: string }; hotspots?: { id: string; title?: string }[] }
        return { name: m.tour?.name || slug, titles: new Map((m.hotspots ?? []).map((h) => [h.id, h.title || h.id])) }
    } catch {
        return { name: slug, titles: new Map() }
    }
}

/** `origin` = where this request came in (the tour files are served from the same deploy). */
export async function statsForToken(pool: Pool, token: string, origin: string): Promise<ClientStats | null> {
    const { rows: [client] } = await pool.query<{ id: string; name: string }>(
        'SELECT id, name FROM clients WHERE stats_token = $1 AND deleted_at IS NULL',
        [token],
    )
    if (!client) return null
    const { rows: tours } = await pool.query<{ slug: string; active: boolean }>(
        'SELECT slug, active FROM tours WHERE client_id = $1 ORDER BY created_at DESC',
        [client.id],
    )
    const slugs = tours.map((t) => t.slug)
    const [{ rows: sums }, { rows: daily }, infos] = await Promise.all([
        pool.query<{ slug: string; event: string; target: string; total: number; recent: number }>(
            `SELECT slug, event, target, sum(count)::int AS total,
                    sum(CASE WHEN day > (now() AT TIME ZONE 'Africa/Cairo')::date - $2::int THEN count ELSE 0 END)::int AS recent
             FROM tour_stats WHERE slug = ANY($1) GROUP BY slug, event, target`,
            [slugs, DAYS],
        ),
        pool.query<{ day: string; views: number; clicks: number }>(
            `SELECT to_char(day, 'YYYY-MM-DD') AS day,
                    sum(CASE WHEN event = 'view' THEN count ELSE 0 END)::int AS views,
                    sum(CASE WHEN event = 'click' THEN count ELSE 0 END)::int AS clicks
             FROM tour_stats
             WHERE slug = ANY($1) AND day > (now() AT TIME ZONE 'Africa/Cairo')::date - $2::int
             GROUP BY day`,
            [slugs, DAYS],
        ),
        Promise.all(slugs.map((s) => manifestInfo(origin, s))),
    ])

    const out: TourStat[] = tours.map((t, i) => ({ slug: t.slug, name: infos[i].name, active: t.active, views: 0, views30: 0, clicks: 0, clicks30: 0, byKind: {}, popups: [] }))
    const bySlug = new Map(out.map((t) => [t.slug, t]))
    for (const r of sums) {
        const t = bySlug.get(r.slug)
        if (!t) continue
        if (r.event === 'view') {
            t.views += r.total
            t.views30 += r.recent
        } else if (r.event === 'click' && (LINK_KINDS as readonly string[]).includes(r.target)) {
            t.clicks += r.total
            t.clicks30 += r.recent
            t.byKind[r.target as LinkKind] = (t.byKind[r.target as LinkKind] ?? 0) + r.total
        } else if (r.event === 'popup') {
            const titles = infos[slugs.indexOf(r.slug)].titles
            t.popups.push({ id: r.target, title: titles.get(r.target) ?? r.target, count: r.total })
        }
    }
    out.forEach((t) => t.popups.sort((a, b) => b.count - a.count))

    // every day of the window, oldest first, zeros included
    const byDay = new Map(daily.map((d) => [d.day, d]))
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Cairo' }).format(new Date())
    const days = Array.from({ length: DAYS }, (_, i) => {
        const d = new Date(`${today}T00:00:00Z`)
        d.setUTCDate(d.getUTCDate() - (DAYS - 1 - i))
        const day = d.toISOString().slice(0, 10)
        return { day, views: byDay.get(day)?.views ?? 0, clicks: byDay.get(day)?.clicks ?? 0 }
    })
    return { name: client.name, tours: out, daily: days }
}
