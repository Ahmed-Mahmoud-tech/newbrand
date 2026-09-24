/**
 * Import a tour exported from TourForge ("Export .zip" in its editor) into this site.
 *
 * Workflow: run this site locally (`npm run dev`), import the zip at /admin, then commit and
 * push — the tour is plain static files under public/, so Vercel serves it with the site.
 * Vercel's filesystem is read-only, which is why importing only works on the local dev server.
 *
 * Archive layout (written by TourForge):
 *   tourforge-export.json   { format: "tourforge-tour", slug, name, playerVersion, ... }
 *   tourforge-player.js     standalone player  → public/tourforge/player.js
 *   tourforge-nadir.jpg     default tripod logo → public/tourforge/nadir.jpg
 *   tour/…                  the tour itself     → public/tours/<slug>/…
 */
import { mkdir, readdir, readFile, rename, rm, stat, writeFile } from 'fs/promises'
import path from 'path'
import { inflateRawSync } from 'zlib'

export const PUBLIC_DIR = path.join(process.cwd(), 'public')
export const TOURS_DIR = path.join(PUBLIC_DIR, 'tours')
export const PLAYER_DIR = path.join(PUBLIC_DIR, 'tourforge')

const SLUG = /^[a-z0-9][a-z0-9_-]{0,79}$/

export class ImportError extends Error {
    constructor(readonly status: number, message: string) {
        super(message)
    }
}

export function toSlug(input: string): string {
    const s = input
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 80)
    if (!SLUG.test(s)) throw new ImportError(400, 'Invalid tour name: use English letters, numbers and dashes.')
    return s
}

interface ZipEntry {
    name: string
    data: Buffer
}

/** Read every file of a zip held in memory (stored and deflate, as TourForge and OS zippers write). */
function readZip(buf: Buffer): ZipEntry[] {
    let eocd = -1
    for (let i = buf.length - 22; i >= Math.max(0, buf.length - 66_000); i--) {
        if (buf.readUInt32LE(i) === 0x06054b50) {
            eocd = i
            break
        }
    }
    if (eocd < 0) throw new ImportError(400, 'Not a zip file.')
    const count = buf.readUInt16LE(eocd + 10)
    let p = buf.readUInt32LE(eocd + 16)
    const out: ZipEntry[] = []
    for (let i = 0; i < count; i++) {
        if (buf.readUInt32LE(p) !== 0x02014b50) throw new ImportError(400, 'Corrupt zip (central directory).')
        const method = buf.readUInt16LE(p + 10)
        const compressed = buf.readUInt32LE(p + 20)
        const nameLen = buf.readUInt16LE(p + 28)
        const extraLen = buf.readUInt16LE(p + 30)
        const commentLen = buf.readUInt16LE(p + 32)
        const local = buf.readUInt32LE(p + 42)
        const name = buf.subarray(p + 46, p + 46 + nameLen).toString('utf8')
        p += 46 + nameLen + extraLen + commentLen
        if (name.endsWith('/')) continue // directory entry
        if (buf.readUInt32LE(local) !== 0x04034b50) throw new ImportError(400, `Corrupt zip entry: ${name}`)
        const start = local + 30 + buf.readUInt16LE(local + 26) + buf.readUInt16LE(local + 28)
        const raw = buf.subarray(start, start + compressed)
        if (method === 0) out.push({ name, data: raw })
        else if (method === 8) out.push({ name, data: inflateRawSync(raw) })
        else throw new ImportError(400, `Unsupported compression in ${name}.`)
    }
    return out
}

/** A zip path as a safe path under `root`, or null (absolute, `..`, drive letters...). */
function safeJoin(root: string, rel: string): string | null {
    if (!rel || rel.includes('\\') || rel.includes('\0') || rel.startsWith('/') || /^[a-z]:/i.test(rel)) return null
    if (rel.split('/').some((part) => part === '..' || part === '')) return null
    const abs = path.resolve(root, rel)
    return abs.startsWith(root + path.sep) ? abs : null
}

async function exists(p: string): Promise<boolean> {
    return stat(p).then(
        () => true,
        () => false,
    )
}

export interface ImportResult {
    slug: string
    name: string
    files: number
    replaced: boolean
}

export async function importTour(zip: Buffer, slugOverride?: string): Promise<ImportResult> {
    const entries = readZip(zip)
    const byName = new Map(entries.map((e) => [e.name, e]))

    const infoEntry = byName.get('tourforge-export.json')
    if (!infoEntry) throw new ImportError(400, 'This zip is not a TourForge export (tourforge-export.json is missing).')
    const info = JSON.parse(infoEntry.data.toString('utf8')) as { format?: string; slug?: string; name?: string }
    if (info.format !== 'tourforge-tour') throw new ImportError(400, 'Unknown export format.')

    const manifestEntry = byName.get('tour/tour.json')
    if (!manifestEntry) throw new ImportError(400, 'The export has no tour/tour.json.')
    const manifest = JSON.parse(manifestEntry.data.toString('utf8')) as {
        version?: number
        tour?: { name?: string }
        sweeps?: unknown[]
    }
    if (manifest.version !== 3 || !Array.isArray(manifest.sweeps) || manifest.sweeps.length === 0) {
        throw new ImportError(400, 'tour.json is not a valid version 3 tour.')
    }
    const player = byName.get('tourforge-player.js')
    if (!player) throw new ImportError(400, 'The export has no player (tourforge-player.js).')

    const slug = toSlug(slugOverride || info.slug || manifest.tour?.name || '')
    await mkdir(TOURS_DIR, { recursive: true })
    const stamp = Date.now().toString(36)
    const staging = path.join(TOURS_DIR, `.staging-${slug}-${stamp}`)
    await mkdir(staging, { recursive: true })

    let files = 0
    try {
        for (const e of entries) {
            if (!e.name.startsWith('tour/')) continue
            const target = safeJoin(staging, e.name.slice('tour/'.length))
            if (!target) throw new ImportError(400, `Unsafe path in zip: ${e.name}`)
            await mkdir(path.dirname(target), { recursive: true })
            await writeFile(target, e.data)
            files++
        }

        // The newest import's player serves every tour: players read all older v3 tours.
        await mkdir(PLAYER_DIR, { recursive: true })
        await writeFile(path.join(PLAYER_DIR, 'player.js.tmp'), player.data)
        await rename(path.join(PLAYER_DIR, 'player.js.tmp'), path.join(PLAYER_DIR, 'player.js'))
        const nadir = byName.get('tourforge-nadir.jpg')
        if (nadir) await writeFile(path.join(PLAYER_DIR, 'nadir.jpg'), nadir.data)

        // Swap the finished folder into place, so a half-written tour is never served.
        const final = path.join(TOURS_DIR, slug)
        const replaced = await exists(final)
        const old = path.join(TOURS_DIR, `.old-${slug}-${stamp}`)
        if (replaced) await rename(final, old)
        await rename(staging, final)
        if (replaced) await rm(old, { recursive: true, force: true })
        return { slug, name: manifest.tour?.name || info.name || slug, files, replaced }
    } catch (err) {
        await rm(staging, { recursive: true, force: true })
        throw err
    }
}

export interface TourSummary {
    slug: string
    name: string
    sweeps: number
    hotspots: number
    updatedAt: string
}

export async function listTours(): Promise<TourSummary[]> {
    if (!(await exists(TOURS_DIR))) return []
    const out: TourSummary[] = []
    for (const d of await readdir(TOURS_DIR, { withFileTypes: true })) {
        if (!d.isDirectory() || d.name.startsWith('.')) continue
        const file = path.join(TOURS_DIR, d.name, 'tour.json')
        try {
            const [text, st] = await Promise.all([readFile(file, 'utf8'), stat(file)])
            const m = JSON.parse(text) as { tour?: { name?: string }; sweeps?: unknown[]; hotspots?: unknown[] }
            out.push({
                slug: d.name,
                name: m.tour?.name || d.name,
                sweeps: m.sweeps?.length ?? 0,
                hotspots: m.hotspots?.length ?? 0,
                updatedAt: st.mtime.toISOString(),
            })
        } catch {
            /* not a tour folder */
        }
    }
    return out.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
}

export async function deleteTour(slug: string): Promise<void> {
    const s = toSlug(slug)
    await rm(path.join(TOURS_DIR, s), { recursive: true, force: true })
}
