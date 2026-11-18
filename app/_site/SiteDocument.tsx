import type { Metadata, Viewport } from 'next'

import Pixels from '@/app/components/Pixels'
import { dict } from '@/lib/content'
import { DIR, OG_LOCALE, type Locale } from '@/lib/i18n'
import { BRAND, DESCRIPTOR, EMAIL, SAME_AS, SITE_URL, TELEPHONE } from '@/lib/site'

import { arabic, sans, serif } from './fonts'
import Footer from './Footer'
import Header from './Header'
import { JsonLd } from './Sections'
import './site.css'

export const siteViewport: Viewport = {
    themeColor: '#0c0d0e',
    colorScheme: 'light',
    width: 'device-width',
    initialScale: 1,
}

/** Defaults every marketing page inherits; each page sets its own title, description and URLs. */
export function siteMetadata(locale: Locale): Metadata {
    const t = dict(locale)
    return {
        metadataBase: new URL(SITE_URL),
        title: { default: t.meta.homeTitle, template: `%s | ${BRAND}` },
        description: t.meta.homeDescription,
        applicationName: BRAND,
        authors: [{ name: BRAND, url: SITE_URL }],
        creator: BRAND,
        publisher: BRAND,
        category: 'Real estate technology',
        formatDetection: { email: false, address: false, telephone: false },
        manifest: '/manifest.webmanifest',
        openGraph: { type: 'website', siteName: BRAND, locale: OG_LOCALE[locale] },
        robots: {
            index: true,
            follow: true,
            googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
        },
        // Search Console / Bing ownership (env vars on the host). public/google*.html also verifies.
        verification: {
            google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
            other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
        },
        other: {
            'geo.region': 'EG-ALX',
            'geo.placename': 'Alexandria, Egypt',
        },
    }
}

/** Organization + WebSite: ties the site to its social profiles as one brand. */
function siteSchema(locale: Locale) {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Organization',
                '@id': `${SITE_URL}/#organization`,
                name: BRAND,
                alternateName: ['GateVerse', 'جيت فيرس'],
                slogan: DESCRIPTOR,
                description: dict('en').meta.homeDescription,
                url: SITE_URL,
                logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/icon-512.png`, width: 512, height: 512 },
                email: EMAIL,
                telephone: TELEPHONE,
                contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: TELEPHONE,
                    email: EMAIL,
                    contactType: 'sales',
                    availableLanguage: ['English', 'Arabic'],
                },
                sameAs: SAME_AS,
            },
            {
                '@type': 'WebSite',
                '@id': `${SITE_URL}/#website`,
                url: SITE_URL,
                name: BRAND,
                inLanguage: locale,
                publisher: { '@id': `${SITE_URL}/#organization` },
            },
        ],
    }
}

/** The <html> document for one locale: fonts, header, footer and the marketing tags. */
export default function SiteDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
    const t = dict(locale)
    return (
        // Browser extensions add attributes to <html>/<body> before hydration; this silences only
        // those two elements' attribute mismatches.
        <html lang={locale} dir={DIR[locale]} suppressHydrationWarning>
            <body className={`${serif.variable} ${sans.variable} ${arabic.variable}`} suppressHydrationWarning>
                <a href="#main" className="skip-link">
                    {t.common.skipToContent}
                </a>
                <JsonLd data={siteSchema(locale)} />
                <Header locale={locale} />
                <main id="main">{children}</main>
                <Footer locale={locale} />
                <Pixels />
            </body>
        </html>
    )
}
