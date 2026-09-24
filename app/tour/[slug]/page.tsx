import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import TourViewer from './TourViewer'

const TOURS_DIR = path.join(process.cwd(), 'public', 'tours')

function tourName(slug: string): string | null {
    if (!/^[a-z0-9][a-z0-9_-]{0,79}$/.test(slug)) return null
    try {
        const m = JSON.parse(fs.readFileSync(path.join(TOURS_DIR, slug, 'tour.json'), 'utf8')) as { tour?: { name?: string } }
        return m.tour?.name || slug
    } catch {
        return null
    }
}

/** One page per imported tour (public/tours/<slug>/tour.json), built at deploy time. */
export function generateStaticParams(): { slug: string }[] {
    try {
        return fs
            .readdirSync(TOURS_DIR, { withFileTypes: true })
            .filter((d) => d.isDirectory() && !d.name.startsWith('.') && fs.existsSync(path.join(TOURS_DIR, d.name, 'tour.json')))
            .map((d) => ({ slug: d.name }))
    } catch {
        return []
    }
}

export const dynamicParams = false

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const name = tourName(params.slug)
    return name
        ? { title: `${name} — جولة افتراضية`, description: `جولة افتراضية ثلاثية الأبعاد: ${name}` }
        : { title: 'جولة افتراضية' }
}

export default function TourPage({ params }: { params: { slug: string } }) {
    const name = tourName(params.slug)
    if (!name) notFound()
    return <TourViewer slug={params.slug} name={name} />
}
