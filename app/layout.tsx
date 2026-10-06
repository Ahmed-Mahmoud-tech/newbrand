import type { Metadata, Viewport } from 'next'
import { Tajawal, IBM_Plex_Sans_Arabic, IBM_Plex_Mono, El_Messiri } from 'next/font/google'

import { BRAND, EMAIL, SAME_AS, SITE_URL, TELEPHONE } from '@/lib/site'
import './globals.css'

// Body text. Self-hosted by next/font (was a render-blocking Google Fonts @import in CSS).
const elMessiri = El_Messiri({
    subsets: ['arabic', 'latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-el-messiri',
})

const tajawal = Tajawal({
    subsets: ['arabic'],
    weight: ['500', '700', '800', '900'],
    display: 'swap',
    variable: '--font-tajawal',
})

// Secondary faces (buttons, numbers): not preloaded, so they don't compete with the headings.
const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
    subsets: ['arabic'],
    weight: ['400', '500', '600'],
    display: 'swap',
    preload: false,
    variable: '--font-ibm-plex-sans',
})

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['500', '600'],
    display: 'swap',
    preload: false,
    variable: '--font-ibm-plex-mono',
})

const DESCRIPTION =
    'GateVerse تحوّل عقارك لجولة تفاعلية ثلاثية الأبعاد — عميلك يتجوّل في كل زاوية ويقيس المساحات من موبايله قبل الزيارة. معاينات جادة فقط، رابط دائم، وتسليم خلال 48 ساعة.'

export const viewport: Viewport = {
    themeColor: '#0b1622',
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    /* ── SEO core ── */
    title: {
        default: 'GateVerse | جولات افتراضية ثلاثية الأبعاد — مصر',
        template: '%s | GateVerse',
    },
    description: DESCRIPTION,
    applicationName: BRAND,
    keywords: [
        'جولة افتراضية ثلاثية الأبعاد',
        'جولة افتراضية عقارية',
        'جولة 360 درجة',
        'معاينة افتراضية',
        'تصوير عقاري 3D',
        'عقارات مصر',
        'virtual tour Egypt',
        '3D virtual tour real estate',
        'interactive property tour',
        'real estate photography Egypt',
        'GateVerse',
        'جولة تفاعلية عقارات',
        'معاينة عقار اونلاين',
    ],
    authors: [{ name: BRAND, url: SITE_URL }],
    creator: BRAND,
    publisher: BRAND,
    category: 'Real Estate Photography',
    formatDetection: { email: false, address: false, telephone: false },
    manifest: '/manifest.webmanifest',

    /* ── Open Graph (image comes from app/opengraph-image.png) ── */
    openGraph: {
        type: 'website',
        locale: 'ar_EG',
        alternateLocale: ['en_US'],
        url: '/',
        siteName: BRAND,
        title: 'GateVerse | جولات افتراضية ثلاثية الأبعاد',
        description:
            'جولات 3D تفاعلية تُحوّل عقارك لتجربة حضور رقمية — معاينات جادة فقط، قياسات تفاعلية، روابط دائمة، وتوافق مع كل الأجهزة.',
    },

    /* ── Twitter / X card (image comes from app/twitter-image.png) ── */
    twitter: {
        card: 'summary_large_image',
        title: 'GateVerse | جولات افتراضية ثلاثية الأبعاد',
        description: 'حوّل عقارك لجولة تفاعلية 3D — عميلك يتجوّل ويقيس من موبايله. تسليم خلال 48 ساعة.',
    },

    /* ── Crawl directives ── */
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    /* ── Search Console / Bing Webmaster ownership (set the env vars on the host) ── */
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
            ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
            : undefined,
    },

    /* ── GEO / LLMO extra meta ── */
    other: {
        /* Geographic tags for local SEO & GEO */
        'geo.region': 'EG-ALX',
        'geo.placename': 'Alexandria, Egypt',
        'geo.position': '31.2001;29.9187',
        ICBM: '31.2001, 29.9187',

        /* Dublin Core for entity clarity (LLMO) */
        'DC.language': 'ar',
        'DC.coverage': 'Alexandria, Egypt',
        'DC.subject': 'Virtual Tours, Real Estate Photography, 3D Tours',
        'DC.creator': 'GateVerse',
        'DC.type': 'Service',
    },
}

/**
 * Site-wide entity graph. Search engines and AI assistants use Organization + sameAs to tie the
 * site to its social profiles and treat them as one brand; WebSite names the site in results.
 */
const siteSchema = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: BRAND,
            alternateName: ['GateVerse Virtual Tours', 'جيت فيرس'],
            url: SITE_URL,
            logo: {
                '@type': 'ImageObject',
                url: `${SITE_URL}/images/icon-512.png`,
                width: 512,
                height: 512,
            },
            image: `${SITE_URL}/images/logo-sm.png`,
            email: EMAIL,
            telephone: TELEPHONE,
            contactPoint: {
                '@type': 'ContactPoint',
                telephone: TELEPHONE,
                contactType: 'sales',
                areaServed: 'EG',
                availableLanguage: ['Arabic', 'English'],
            },
            sameAs: SAME_AS,
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: BRAND,
            inLanguage: 'ar',
            publisher: { '@id': `${SITE_URL}/#organization` },
        },
    ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        // Browser extensions (Dark Reader, translators, Grammarly) add attributes to <html> and
        // <body> before React hydrates; this silences only those two elements' attribute
        // mismatches, not their children.
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <body
                className={`${elMessiri.variable} ${tajawal.variable} ${ibmPlexSansArabic.variable} ${ibmPlexMono.variable}`}
                suppressHydrationWarning
            >
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }} />
                {children}
            </body>
        </html>
    )
}
