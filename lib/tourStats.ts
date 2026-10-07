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
    byKind30: Partial<Record<LinkKind, number>>
    /** Every popup opened at least once: all-time and last-30-day opens. */
    popups: { id: string; title: string; count: number; count30: number }[]
    /** This tour's last 30 days, oldest first, zeros included. */
    daily: Day[]
}

export interface Day {
    day: string
    views: number
    clicks: number
}

export interface ClientStats {
    name: string
    tours: TourStat[]
    /** All the client's tours together. */
    daily: Day[]
}

const DAYS = 30

/**
 * Tour name and popup labels from the tour's own manifest; the slug and ids when it can't be read.
 * A popup is labelled by the report name set in the TourForge editor, else its visitor-facing
 * title, else its id (same order as the CRM's lib/tour-stats.ts).
 */
async function manifestInfo(origin: string, slug: string): Promise<{ name: string; titles: Map<string, string> }> {
    try {
        const r = await fetch(`${origin}/tours/${slug}/tour.json`, { next: { revalidate: 3600 } })
        if (!r.ok) throw new Error(String(r.status))
        const m = (await r.json()) as { tour?: { name?: string }; hotspots?: { id: string; name?: string; title?: string }[] }
        return {
            name: m.tour?.name || slug,
            titles: new Map((m.hotspots ?? []).map((h) => [h.id, h.name?.trim() || h.title?.trim() || h.id])),
        }
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
        pool.query<{ slug: string; day: string; views: number; clicks: number }>(
            `SELECT slug, to_char(day, 'YYYY-MM-DD') AS day,
                    sum(CASE WHEN event = 'view' THEN count ELSE 0 END)::int AS views,
                    sum(CASE WHEN event = 'click' THEN count ELSE 0 END)::int AS clicks
             FROM tour_stats
             WHERE slug = ANY($1) AND day > (now() AT TIME ZONE 'Africa/Cairo')::date - $2::int
             GROUP BY slug, day`,
            [slugs, DAYS],
        ),
        Promise.all(slugs.map((s) => manifestInfo(origin, s))),
    ])

    // every day of the window, oldest first
    const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Africa/Cairo' }).format(new Date())
    const days = Array.from({ length: DAYS }, (_, i) => {
        const d = new Date(`${today}T00:00:00Z`)
        d.setUTCDate(d.getUTCDate() - (DAYS - 1 - i))
        return d.toISOString().slice(0, 10)
    })
    const series = (rows: { day: string; views: number; clicks: number }[]): Day[] => {
        const byDay = new Map<string, Day>()
        for (const r of rows) {
            const d = byDay.get(r.day) ?? { day: r.day, views: 0, clicks: 0 }
            d.views += r.views
            d.clicks += r.clicks
            byDay.set(r.day, d)
        }
        return days.map((day) => byDay.get(day) ?? { day, views: 0, clicks: 0 })
    }

    const out: TourStat[] = tours.map((t, i) => ({
        slug: t.slug,
        name: infos[i].name,
        active: t.active,
        views: 0,
        views30: 0,
        clicks: 0,
        clicks30: 0,
        byKind: {},
        byKind30: {},
        popups: [],
        daily: series(daily.filter((d) => d.slug === t.slug)),
    }))
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
            const k = r.target as LinkKind
            t.byKind[k] = (t.byKind[k] ?? 0) + r.total
            t.byKind30[k] = (t.byKind30[k] ?? 0) + r.recent
        } else if (r.event === 'popup') {
            const titles = infos[slugs.indexOf(r.slug)].titles
            t.popups.push({ id: r.target, title: titles.get(r.target) ?? r.target, count: r.total, count30: r.recent })
        }
    }
    out.forEach((t) => t.popups.sort((a, b) => b.count30 - a.count30 || b.count - a.count))
    return { name: client.name, tours: out, daily: series(daily) }
}
