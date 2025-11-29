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
}

module.exports = nextConfig

