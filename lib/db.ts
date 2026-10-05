/**
 * The CRM's database (clientMangment), shared for two tables: `tours` (the contact buttons the
 * CRM sets per tour) and `tour_stats` (daily counters this site writes). Without DATABASE_URL —
 * local work on the site alone — tours simply show no buttons and nothing is counted.
 */
import { Pool } from 'pg'

const cache = globalThis as unknown as { gvPool?: Pool }

export function db(): Pool | null {
    const url = process.env.DATABASE_URL
    if (!url) return null
    // One small pool per server instance; serverless instances each get their own.
    cache.gvPool ??= new Pool({ connectionString: url, max: 3, idleTimeoutMillis: 10_000 })
    return cache.gvPool
}

export const SLUG = /^[a-z0-9][a-z0-9_-]{0,79}$/
