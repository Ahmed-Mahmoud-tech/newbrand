/** Fire-and-forget counting (app/api/track). Never throws, never delays the page. */
export function track(slug: string, e: 'view' | 'click' | 'popup', t = ''): void {
    const body = JSON.stringify({ s: slug, e, t })
    try {
        // sendBeacon survives the page being left right after a tap (WhatsApp, a call…)
        if (navigator.sendBeacon?.('/api/track', new Blob([body], { type: 'application/json' }))) return
    } catch {}
    fetch('/api/track', { method: 'POST', body, keepalive: true, headers: { 'Content-Type': 'application/json' } }).catch(() => {})
}

/** A view counts once per tab session, so reloads and the iframe re-rendering don't inflate it. */
export function trackViewOnce(slug: string): void {
    const key = `gv-viewed:${slug}`
    try {
        if (sessionStorage.getItem(key)) return
        sessionStorage.setItem(key, '1')
    } catch {
        // storage blocked (third-party iframe, private mode): count anyway
    }
    track(slug, 'view')
}
