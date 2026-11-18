import { IBM_Plex_Sans_Arabic, Instrument_Serif, Manrope } from 'next/font/google'

/** Display serif for English headlines. */
export const serif = Instrument_Serif({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-serif',
})

/** Text and interface face (also the Latin face on Arabic pages). */
export const sans = Manrope({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
    variable: '--font-sans',
})

/** Arabic text and headings. Preloaded only where it is used first (Arabic pages set preload). */
export const arabic = IBM_Plex_Sans_Arabic({
    subsets: ['arabic'],
    weight: ['400', '500', '600'],
    display: 'swap',
    preload: false,
    variable: '--font-ar',
})
