/**
 * Ad and analytics tags for GateVerse's own marketing pages. The IDs are public (they ship in
 * every page that loads the tags), so they live here rather than in env vars. Empty = not loaded.
 *
 * Instagram has no pixel of its own: Instagram ads report through the Meta pixel.
 */
export const GA_MEASUREMENT_ID = 'G-FXKTFVDNCN' // Google Analytics 4: property "GateVerse", stream "GateVerse Website"
export const META_PIXEL_ID = '1318222228991031' // Meta (Facebook + Instagram) dataset for the website
export const TIKTOK_PIXEL_ID = '' // TikTok Ads Manager > Events > Web; fill in when created

/**
 * Tags run only where GateVerse markets itself. Tour pages belong to the client (they are embedded
 * on the client's own site, and their visitors are the client's customers), the stats pages are
 * private to each client, and admin/api are tools: none of them get GateVerse's trackers.
 */
export function isMarketingPath(pathname: string | null): boolean {
    if (!pathname) return false
    return !/^\/(tour|stats|admin|api)(\/|$)/.test(pathname)
}
