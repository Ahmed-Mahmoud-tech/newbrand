import type { Metadata } from 'next'
import { Tajawal, IBM_Plex_Sans_Arabic, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const tajawal = Tajawal({
    subsets: ['arabic'],
    weight: ['500', '700', '800', '900'],
    display: 'swap',
    variable: '--font-tajawal',
})

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
    subsets: ['arabic'],
    weight: ['400', '500', '600'],
    display: 'swap',
    variable: '--font-ibm-plex-sans',
})

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ['latin'],
    weight: ['500', '600'],
    display: 'swap',
    variable: '--font-ibm-plex-mono',
})

const SITE_URL = 'https://massah.tours'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    /* ── SEO core ── */
    title: {
        default: 'GateVerse | جولات افتراضية ثلاثية الأبعاد —  مصر',
        template: '%s | GateVerse',
    },
    description:
        'GateVerse تحوّل عقارك لجولة تفاعلية ثلاثية الأبعاد — عميلك يتجوّل في كل زاوية ويقيس المساحات من موبايله قبل الزيارة. معاينات جادة فقط، رابط دائم، وتسليم خلال 48 ساعة.',
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
    authors: [{ name: 'GateVerse', url: SITE_URL }],
    creator: 'GateVerse',
    publisher: 'GateVerse',
    category: 'Real Estate Photography',
    formatDetection: { email: false, address: false, telephone: false },

    /* ── Open Graph (GEO: social discovery) ── */
    openGraph: {
        type: 'website',
        locale: 'ar_EG',
        alternateLocale: ['en_US'],
        url: SITE_URL,
        siteName: 'GateVerse',
        title: 'GateVerse | جولات افتراضية ثلاثية الأبعاد ',
        description:
            'جولات 3D تفاعلية تُحوّل عقارك لتجربة حضور رقمية — معاينات جادة فقط، قياسات تفاعلية، روابط دائمة، وتوافق مع كل الأجهزة.',
    },

    /* ── Twitter / X card ── */
    twitter: {
        card: 'summary_large_image',
        title: 'GateVerse | جولات افتراضية ثلاثية الأبعاد',
        description: 'حوّل عقارك لجولة تفاعلية 3D — عميلك يتجوّل ويقيس من موبايله. تسليم خلال 48 ساعة.',
        creator: '@gateverse',
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

    /* ── Canonical ── */
    alternates: { canonical: SITE_URL },

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

        /* AI-readability signals (LLMO) */
        'ai-content-declaration': 'human-created',
        rating: 'General',
        language: 'Arabic',
        revisit: '7 days',
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ar" dir="rtl">
            <head>
                <meta name="theme-color" content="#0b1622" />
                <link rel="icon" href="/images/favicon.ico" sizes="any" />
            </head>
            <body
                className={`${tajawal.variable} ${ibmPlexSansArabic.variable} ${ibmPlexMono.variable}`}
            >
                {children}
            </body>
        </html>
    )
}
