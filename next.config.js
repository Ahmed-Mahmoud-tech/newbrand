/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Permissions-Policy',
            value:
              'xr-spatial-tracking=*, gyroscope=*, accelerometer=*, magnetometer=*, camera=*, microphone=*',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
