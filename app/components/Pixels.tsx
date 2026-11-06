'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

import { GA_MEASUREMENT_ID, META_PIXEL_ID, TIKTOK_PIXEL_ID, isMarketingPath } from '@/lib/pixels'

type Win = {
    gtag?: (...a: unknown[]) => void
    fbq?: (...a: unknown[]) => void
    ttq?: { track: (e: string, p?: Record<string, unknown>) => void }
    [k: string]: unknown
}
const win = () => window as unknown as Win

/** A tap on WhatsApp or the phone number is the lead GateVerse's ads optimise for. */
function leadMethod(href: string): string | null {
    if (href.startsWith('https://wa.me/') || href.startsWith('https://api.whatsapp.com/')) return 'whatsapp'
    if (href.startsWith('tel:')) return 'phone'
    return null
}

export default function Pixels() {
    const pathname = usePathname()
    const on = isMarketingPath(pathname)

    // If the visitor moves on to a page we don't track, stop Google's history-based page views.
    useEffect(() => {
        if (GA_MEASUREMENT_ID) win()[`ga-disable-${GA_MEASUREMENT_ID}`] = !on
    }, [on])

    useEffect(() => {
        if (!on) return
        const onClick = (e: MouseEvent) => {
            const a = (e.target as Element | null)?.closest?.('a[href]') as HTMLAnchorElement | null
            const method = a && leadMethod(a.getAttribute('href') ?? '')
            if (!method) return
            const w = win()
            w.gtag?.('event', 'generate_lead', { method })
            w.fbq?.('track', 'Contact', { content_name: method })
            w.ttq?.track('Contact', { content_name: method })
        }
        document.addEventListener('click', onClick, { capture: true })
        return () => document.removeEventListener('click', onClick, { capture: true })
    }, [on])

    if (!on) return null
    return (
        <>
            {GA_MEASUREMENT_ID && (
                <>
                    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
                    <Script id="ga4" strategy="afterInteractive">{`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');
`}</Script>
                </>
            )}
            {META_PIXEL_ID && (
                <Script id="meta-pixel" strategy="afterInteractive">{`
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq.disablePushState = true;
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');
`}</Script>
            )}
            {TIKTOK_PIXEL_ID && (
                <Script id="tiktok-pixel" strategy="afterInteractive">{`
!function (w, d, t) {
w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
ttq.load('${TIKTOK_PIXEL_ID}');
ttq.page();
}(window, document, 'ttq');
`}</Script>
            )}
        </>
    )
}
