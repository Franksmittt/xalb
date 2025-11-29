import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xsphere.co.za';
  
  // Disallow crawling in staging/development environments
  const isProduction = process.env.NODE_ENV === 'production' && baseUrl.includes('xsphere.co.za');
  
  if (!isProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: undefined,
    };
  }

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Allow Googlebot to access all static assets for rendering
        // Do NOT block /_next/static/ as this breaks JavaScript rendering
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        // Explicitly allow JavaScript and CSS for Googlebot rendering
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

