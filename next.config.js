const isDev = process.env.NODE_ENV === 'development'

/**
 * Content-Security-Policy. `'unsafe-inline'` scripts are required by the App Router's inline
 * hydration payload unless every page is rendered per request with a nonce, which would give up
 * static rendering. JSON-LD blocks are data, not scripts, and are not affected by CSP.
 */
function csp(frameAncestors) {
    return [
        "default-src 'self'",
        `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: blob:",
        "font-src 'self' data:",
        // the TourForge player fetches tour.json / panoramas from this origin and may use blob: URLs
        `connect-src 'self' blob: data:${isDev ? ' ws: wss:' : ''}`,
        "media-src 'self' blob: data:",
        "worker-src 'self' blob:",
        'frame-src https://my.matterport.com https://*.matterport.com',
        `frame-ancestors ${frameAncestors}`,
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        ...(isDev ? [] : ['upgrade-insecure-requests']),
    ].join('; ')
}

const securityHeaders = [
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
    { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
    { key: 'X-DNS-Prefetch-Control', value: 'on' },
    {
        // Motion sensors / XR only for this site and the Matterport embed; nothing may use the
        // camera, microphone or location.
        key: 'Permissions-Policy',
        value: [
            'camera=()',
            'microphone=()',
            'geolocation=()',
            'payment=()',
            'usb=()',
            'xr-spatial-tracking=(self "https://my.matterport.com")',
            'gyroscope=(self "https://my.matterport.com")',
            'accelerometer=(self "https://my.matterport.com")',
            'magnetometer=(self "https://my.matterport.com")',
            'fullscreen=(self "https://my.matterport.com")',
        ].join(', '),
    },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
    // a stray lockfile higher up the drive otherwise becomes the tracing root
    outputFileTracingRoot: __dirname,
    poweredByHeader: false,
    reactStrictMode: true,

    async headers() {
        return [
            { source: '/:path*', headers: securityHeaders },
            // Everything except tour pages: no framing by other sites (clickjacking).
            {
                source: '/((?!tour/).*)',
                headers: [
                    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
                    { key: 'Content-Security-Policy', value: csp("'self'") },
                ],
            },
            // Tour pages are meant to be embedded (iframe) on agents' and portals' websites.
            { source: '/tour/:slug*', headers: [{ key: 'Content-Security-Policy', value: csp('*') }] },

            // Keep private tools out of search results even if a link leaks.
            { source: '/admin', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },
            { source: '/api/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }] },

            // Static assets from public/ (Next serves them with max-age=0 by default). Not
            // content-hashed, so browsers revalidate daily; the CDN copy is replaced on deploy.
            {
                source: '/images/:path*',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
            },
            {
                source: '/tours/:path*',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
            },
            // Re-importing a tour replaces these in place, so keep them fresher.
            {
                source: '/tours/:slug/tour.json',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=300, stale-while-revalidate=86400' }],
            },
            {
                source: '/tourforge/:path*',
                headers: [{ key: 'Cache-Control', value: 'public, max-age=3600, stale-while-revalidate=86400' }],
            },
        ]
    },
}

module.exports = nextConfig
