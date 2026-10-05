/**
 * The contact buttons a tour page may show. The CRM stores them normalised
 * (clientMangment/lib/tour-links.ts: phones as 20XXXXXXXXXX, accounts as https URLs); this file
 * only turns them into links. Keep the kinds in step with TOUR_LINK_KINDS in the CRM schema.
 */
export const LINK_KINDS = ['whatsapp', 'phone', 'facebook', 'instagram', 'tiktok', 'website', 'maps', 'email'] as const
export type LinkKind = (typeof LINK_KINDS)[number]
export type TourLinks = Partial<Record<LinkKind, string>>

export const LINK_LABEL: Record<LinkKind, string> = {
    whatsapp: 'واتساب',
    phone: 'اتصال',
    facebook: 'فيسبوك',
    instagram: 'إنستجرام',
    tiktok: 'تيك توك',
    website: 'الموقع',
    maps: 'اللوكيشن',
    email: 'إيميل',
}

/** Brand-ish colour for each button's icon circle. */
export const LINK_COLOR: Record<LinkKind, string> = {
    whatsapp: '#25d366',
    phone: '#4fe0c8',
    facebook: '#1877f2',
    instagram: '#e1306c',
    tiktok: '#111111',
    website: '#d9a24b',
    maps: '#ea4335',
    email: '#8a94a6',
}

const isKind = (k: string): k is LinkKind => (LINK_KINDS as readonly string[]).includes(k)

/** The href of a stored value, or null when it is not something we will link to. */
export function linkHref(kind: LinkKind, value: string, tourName: string): string | null {
    if (kind === 'whatsapp') {
        if (!/^20\d{10}$/.test(value)) return null
        return `https://wa.me/${value}?text=${encodeURIComponent(`أهلاً، شفت جولة ${tourName} الافتراضية وعايز أستفسر`)}`
    }
    if (kind === 'phone') return /^20\d{8,10}$/.test(value) ? `tel:+${value}` : null
    if (kind === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? `mailto:${value}` : null
    // Anything else must already be an https URL (the CRM forces it); never render other schemes.
    return /^https:\/\/[^\s"<>]+$/.test(value) ? value : null
}

/** Only the known kinds with a value we can link, in a stable order. */
export function cleanLinks(raw: unknown): TourLinks {
    const out: TourLinks = {}
    if (!raw || typeof raw !== 'object') return out
    for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
        if (isKind(k) && typeof v === 'string' && v) out[k] = v
    }
    return out
}

/** 24-px icons (stroke/fill in currentColor). */
export const LINK_ICON: Record<LinkKind, string> = {
    whatsapp:
        'M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm4.5 12.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z',
    phone: 'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z',
    facebook: 'M14 8h3V4.2c-.5-.1-2-.2-3.6-.2C10 4 8 6 8 9.5V12H5v4h3v8h4v-8h3.3l.7-4h-4V9.8c0-1.2.4-1.8 2-1.8Z',
    instagram:
        'M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM21 8.1c-.1-1.5-.4-2.8-1.5-3.9S17 2.8 15.5 2.7c-1.5-.1-5.9-.1-7.4 0-1.5.1-2.8.4-3.9 1.5S2.8 6.6 2.7 8.1c-.1 1.5-.1 5.9 0 7.4.1 1.5.4 2.8 1.5 3.9s2.4 1.4 3.9 1.5c1.5.1 5.9.1 7.4 0 1.5-.1 2.8-.4 3.9-1.5s1.4-2.4 1.5-3.9c.1-1.5.1-5.9 0-7.4Zm-2 9.1a3 3 0 0 1-1.7 1.7c-1.2.5-4 .4-5.3.4s-4.1.1-5.3-.4a3 3 0 0 1-1.7-1.7c-.5-1.2-.4-4-.4-5.3s-.1-4.1.4-5.3A3 3 0 0 1 6.7 5c1.2-.5 4-.4 5.3-.4s4.1-.1 5.3.4A3 3 0 0 1 19 6.7c.5 1.2.4 4 .4 5.3s.1 4.1-.4 5.2Z',
    tiktok: 'M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-1.8-2.5V9.7a5.7 5.7 0 1 0 4.9 5.7V9a7.3 7.3 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5Z',
    website: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-3a15.6 15.6 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8ZM12 4a14 14 0 0 1 1.9 4h-3.8A14 14 0 0 1 12 4ZM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3Zm.8 2h3a15.6 15.6 0 0 0 1.4 3.6A8 8 0 0 1 5.1 16Zm3-8h-3a8 8 0 0 1 4.4-3.6A15.6 15.6 0 0 0 8.1 8ZM12 20a14 14 0 0 1-1.9-4h3.8A14 14 0 0 1 12 20Zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4Zm.2 5.6a15.6 15.6 0 0 0 1.4-3.6h3a8 8 0 0 1-4.4 3.6Zm1.8-5.6a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4Z',
    maps: 'M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z',
    email: 'M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z',
}
