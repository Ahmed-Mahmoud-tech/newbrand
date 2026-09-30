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

// NOT `dynamicParams = false`: the dev server caches the list above, so a tour imported at
// /admin while it runs was a 404 until the cache refreshed. Unknown slugs still 404 through
// tourName() -> notFound(); deploys still prebuild every tour committed under public/tours.

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const name = tourName(slug)
    if (!name) return { title: 'جولة افتراضية', robots: { index: false } }
    const title = `${name} — جولة افتراضية`
    const description = `جولة افتراضية ثلاثية الأبعاد تفاعلية: ${name}. تجوّل في كل زاوية وقِس المساحات من موبايلك — من إنتاج GateVerse.`
    return {
        title,
        description,
        alternates: { canonical: `/tour/${slug}` },
        openGraph: { type: 'website', url: `/tour/${slug}`, siteName: 'GateVerse', locale: 'ar_EG', title, description },
        twitter: { card: 'summary_large_image', title, description },
    }
}

export default async function TourPage({ params }: Props) {
    const { slug } = await params
    const name = tourName(slug)
    if (!name) notFound()
    return <TourViewer slug={slug} name={name} />
}
