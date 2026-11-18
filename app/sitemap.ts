import type { MetadataRoute } from 'next'

import { SOLUTION_SLUGS } from '@/lib/content'
import { absolute, href } from '@/lib/i18n'
import { listTours } from '@/lib/tourImport'

/** Marketing pages in both languages (with hreflang alternates), then one page per live tour. */
const PAGES: { path: string; priority: number; changeFrequency: 'monthly' | 'yearly' }[] = [
    { path: '/', priority: 1, changeFrequency: 'monthly' },
    { path: '/solutions', priority: 0.9, changeFrequency: 'monthly' },
    ...SOLUTION_SLUGS.map((s) => ({ path: `/solutions/${s}`, priority: 0.9, changeFrequency: 'monthly' as const })),
    { path: '/portfolio', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
    { path: '/about', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/pricing', priority: 0.5, changeFrequency: 'monthly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const tours = await listTours()
    const now = new Date()
    const pages = PAGES.flatMap((p) => {
        const languages = { en: absolute(href('en', p.path)), ar: absolute(href('ar', p.path)), 'x-default': absolute(href('en', p.path)) }
        return (['en', 'ar'] as const).map((l) => ({
            url: absolute(href(l, p.path)),
            lastModified: now,
            changeFrequency: p.changeFrequency,
            priority: l === 'en' ? p.priority : Math.round(p.priority * 90) / 100,
            alternates: { languages },
        }))
    })
    return [
        ...pages,
        // One page per tour committed under public/tours (see app/(tools)/tour/[slug]).
        ...tours.map((t) => ({
            url: `${absolute('/tour/')}${t.slug}`,
            lastModified: new Date(t.updatedAt),
            changeFrequency: 'yearly' as const,
            priority: 0.5,
        })),
    ]
}
