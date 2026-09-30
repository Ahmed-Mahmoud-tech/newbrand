import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'GateVerse — جولات افتراضية ثلاثية الأبعاد',
        short_name: 'GateVerse',
        description: 'جولات افتراضية ثلاثية الأبعاد تفاعلية للعقارات في مصر.',
        lang: 'ar',
        dir: 'rtl',
        start_url: '/',
        display: 'standalone',
        background_color: '#0b1622',
        theme_color: '#0b1622',
        icons: [
            { src: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
            { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
            { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
    }
}
