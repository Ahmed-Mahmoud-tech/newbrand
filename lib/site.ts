/**
 * Site-wide facts shared by metadata, JSON-LD, robots, sitemap and the footer.
 * Keep them identical everywhere: search engines and AI assistants cross-check them.
 */

/** Production origin. Override per deploy with NEXT_PUBLIC_SITE_URL (no trailing slash). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://massah.tours').replace(/\/+$/, '')

export const BRAND = 'GateVerse'

export const WHATSAPP_NUMBER = '201113232886'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`
export const TELEPHONE = '+20-111-323-2886'
export const EMAIL = 'hello@massah.tours'

export const SOCIAL_LINKS = [
    { id: 'instagram', label: 'Instagram', labelAr: 'إنستجرام', url: 'https://www.instagram.com/gateverse_tour' },
    { id: 'facebook', label: 'Facebook', labelAr: 'فيسبوك', url: 'https://www.facebook.com/people/Gateverse/61594652920757/' },
    { id: 'tiktok', label: 'TikTok', labelAr: 'تيك توك', url: 'https://www.tiktok.com/@gateverse_tour' },
] as const

/** Profiles that are the same entity as this site (schema.org `sameAs`). */
export const SAME_AS = SOCIAL_LINKS.map((s) => s.url)
