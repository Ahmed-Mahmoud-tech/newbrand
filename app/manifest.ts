import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Gateverse | Immersive Real Estate Experiences',
        short_name: 'Gateverse',
        description: '360° virtual tours, 3D walkthroughs and off-plan experiences for real estate developers.',
        lang: 'en',
        dir: 'ltr',
        start_url: '/',
        display: 'standalone',
        background_color: '#0c0d0e',
        theme_color: '#0c0d0e',
        icons: [
            { src: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
            { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
    }
}
