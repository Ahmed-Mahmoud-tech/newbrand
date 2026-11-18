import type { Metadata, Viewport } from 'next'
import { El_Messiri, IBM_Plex_Mono, IBM_Plex_Sans_Arabic, Tajawal } from 'next/font/google'

import { BRAND, SITE_URL } from '@/lib/site'
import './tools.css'

/**
 * Root layout for the tool pages: client tours (/tour/*), client stats (/stats/*) and the local
 * admin (/admin). They are Arabic-first and keep their own look; the marketing site has separate
 * root layouts in app/(en) and app/(ar). No GateVerse ad tags here (see lib/pixels.ts).
 */

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

export const viewport: Viewport = {
    themeColor: '#0b1622',
    colorScheme: 'dark',
    width: 'device-width',
    initialScale: 1,
}

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: { default: BRAND, template: `%s | ${BRAND}` },
    applicationName: BRAND,
    formatDetection: { email: false, address: false, telephone: false },
}

export default function ToolsLayout({ children }: { children: React.ReactNode }) {
    return (
        // Browser extensions add attributes to <html>/<body> before hydration; this silences only
        // those two elements' attribute mismatches.
        <html lang="ar" dir="rtl" suppressHydrationWarning>
            <body
                className={`${elMessiri.variable} ${tajawal.variable} ${ibmPlexSansArabic.variable} ${ibmPlexMono.variable}`}
                suppressHydrationWarning
            >
                {children}
            </body>
        </html>
    )
}
