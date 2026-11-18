import type { Metadata } from 'next'

import { BRAND, SITE_URL } from './site'

/**
 * The marketing site is English at the root and Arabic under /ar, with the same paths after the
 * prefix (/solutions/3d-walkthroughs <-> /ar/solutions/3d-walkthroughs).
 */
export const LOCALES = ['en', 'ar'] as const
export type Locale = (typeof LOCALES)[number]

export const DIR: Record<Locale, 'ltr' | 'rtl'> = { en: 'ltr', ar: 'rtl' }
export const OG_LOCALE: Record<Locale, string> = { en: 'en_US', ar: 'ar_EG' }

/** A site path ("/", "/contact", "/#process") in the given locale. */
export function href(locale: Locale, path: string): string {
    if (locale === 'en') return path
    if (path === '/') return '/ar'
    if (path.startsWith('/#')) return `/ar${path.slice(1)}`
    return `/ar${path}`
}

/** The same page in the other locale, from a pathname. */
export function switchLocale(pathname: string, to: Locale): string {
    const bare = pathname === '/ar' ? '/' : pathname.startsWith('/ar/') ? pathname.slice(3) : pathname
    return href(to, bare || '/')
}

/**
 * Share image (app/opengraph-image.png). Set explicitly: the root layouts live in route groups, so
 * the app-root image file is not attached to these pages on its own.
 */
const OG_IMAGE = { url: '/opengraph-image.png', width: 1200, height: 630, alt: `${BRAND}: Immersive Real Estate Experiences` }

/** Metadata for one marketing page: title, description, canonical, hreflang pair, OG/Twitter. */
export function pageMeta(opts: { locale: Locale; path: string; title: string; description: string; absoluteTitle?: boolean }): Metadata {
    const { locale, path, title, description } = opts
    const url = href(locale, path)
    return {
        title: opts.absoluteTitle ? { absolute: title } : title,
        description,
        alternates: {
            canonical: url,
            languages: { en: href('en', path), ar: href('ar', path), 'x-default': href('en', path) },
        },
        openGraph: {
            type: 'website',
            siteName: BRAND,
            locale: OG_LOCALE[locale],
            alternateLocale: [OG_LOCALE[locale === 'en' ? 'ar' : 'en']],
            url,
            title,
            description,
            images: [OG_IMAGE],
        },
        twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url] },
    }
}

export const absolute = (path: string) => `${SITE_URL}${path === '/' ? '' : path}`
