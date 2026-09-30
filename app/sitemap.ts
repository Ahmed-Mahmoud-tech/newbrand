import type { MetadataRoute } from 'next'

import { SITE_URL } from '@/lib/site'
import { listTours } from '@/lib/tourImport'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const tours = await listTours()
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        // One page per tour committed under public/tours (see app/tour/[slug]).
        ...tours.map((t) => ({
            url: `${SITE_URL}/tour/${t.slug}`,
            lastModified: new Date(t.updatedAt),
            changeFrequency: 'yearly' as const,
            priority: 0.6,
        })),
    ]
}
