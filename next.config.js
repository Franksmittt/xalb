/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Consistent trailing slash policy for canonical URLs
  trailingSlash: false,
  
  // Image optimization settings for better LCP
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  
  // Enable compression
  compress: true,
  
  // PoweredBy header removal for security
  poweredByHeader: false,

  // Old staff-login URLs should never surface again
  async redirects() {
    return [
      { source: '/login', destination: '/', permanent: true },
      { source: '/login/:path*', destination: '/', permanent: true },
      { source: '/solutions', destination: '/services', permanent: true },
      { source: '/solutions/fabrication', destination: '/services/commercial/cnc-laser-cutting', permanent: true },
      {
        source: '/solutions/large-format-printing',
        destination: '/services/commercial/large-format-printing',
        permanent: true,
      },
      {
        source: '/solutions/fleet-branding',
        destination: '/services/commercial/vehicle-fleet-branding',
        permanent: true,
      },
      { source: '/solutions/design', destination: '/services/commercial/graphic-design', permanent: true },
      { source: '/solutions/installation', destination: '/services/commercial/installation', permanent: true },
      { source: '/litho-printing', destination: '/services/commercial/litho-printing', permanent: true },
    ];
  },
}

module.exports = nextConfig

