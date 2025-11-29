# Google Search Console SEO Implementation

This document outlines all the SEO optimizations implemented for Google Search Console compliance following Next.js best practices.

## ✅ Completed Implementations

### 1. Root Layout Metadata (`src/app/layout.tsx`)
- ✅ Enhanced metadata with title template (`%s | Brand Name`)
- ✅ Added `metadataBase` for absolute URL resolution
- ✅ Comprehensive Open Graph tags
- ✅ Twitter Card metadata
- ✅ Robots directives (index, follow)
- ✅ Googlebot-specific configurations
- ✅ Locale set to `en-ZA` (South Africa)
- ⚠️ **TODO**: Add Google Search Console verification token when available

### 2. Dynamic Robots.txt (`src/app/robots.ts`)
- ✅ Environment-aware (blocks crawling in staging/dev)
- ✅ Allows all crawlers in production
- ✅ Explicitly allows Googlebot access to static assets
- ✅ Links to sitemap.xml
- ✅ Does NOT block `/_next/static/` (critical for JavaScript rendering)

### 3. Dynamic Sitemap (`src/app/sitemap.ts`)
- ✅ Includes all static pages
- ✅ Includes all dynamic service pages
- ✅ Includes all resource pages
- ✅ Proper priority and changeFrequency settings
- ✅ Auto-generates from service catalog

### 4. 404 Error Handling (`src/app/not-found.tsx`)
- ✅ Proper HTTP 404 status code (not Soft 404)
- ✅ Helpful error page with navigation
- ✅ Metadata with `robots: { index: false, follow: false }`

### 5. Page-Level Metadata

#### Static Pages with Layout Files:
- ✅ `/contact` - Contact page metadata
- ✅ `/process` - Our Process page metadata
- ✅ `/work` - Portfolio page metadata
- ✅ `/solutions` - Solutions index metadata
- ✅ `/resources` - Resources index metadata
- ✅ `/litho-printing` - Lithographic printing metadata

#### Dynamic Pages with generateMetadata:
- ✅ `/solutions/[slug]` - Service pages with dynamic metadata

#### Resource Sub-Pages:
- ✅ `/resources/material-guide`
- ✅ `/resources/print-ready-checklist`
- ✅ `/resources/signage-bylaws`
- ✅ `/resources/vehicle-branding-laws`
- ✅ `/resources/uv-protection`
- ✅ `/resources/timeline-calculator` (client component - uses layout)

### 6. Structured Data (JSON-LD)

#### Implemented:
- ✅ Organization schema on home page
- ✅ Service schema on service pages (`/solutions/[slug]`)
- ✅ Structured data component (`src/components/StructuredData.tsx`)

#### JSON-LD Features:
- ✅ Properly escaped (`replace(/</g, '\\u003c')` for XSS prevention)
- ✅ Server-side rendered (in initial HTML)
- ✅ No JavaScript execution required for Googlebot

### 7. Next.js Configuration (`next.config.js`)
- ✅ Consistent trailing slash policy (`trailingSlash: false`)
- ✅ Image optimization (AVIF/WebP formats)
- ✅ Compression enabled
- ✅ PoweredBy header removed (security)

### 8. Canonical URLs
- ✅ All pages have self-referencing canonical tags
- ✅ Uses `metadataBase` for consistent absolute URLs
- ✅ Dynamic pages generate canonicals with route params

## 🔧 Configuration Required

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_BASE_URL=https://xsphere.co.za
```

**Important**: Update this to your actual production domain before deployment.

### Google Search Console Verification

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property (URL prefix or Domain)
3. Choose verification method:
   - **Recommended**: DNS TXT record (most reliable)
   - **Alternative**: HTML meta tag (uncomment in `src/app/layout.tsx`)

If using HTML meta tag:
```typescript
verification: {
  google: 'your-verification-token-here',
},
```

## 📊 SEO Best Practices Implemented

### ✅ Architecture
- Server-Side Rendering (SSR) / Static Site Generation (SSG)
- React Server Components (RSC) for initial HTML payload
- No client-side-only content (all critical content in HTML)

### ✅ Metadata
- Unique titles for all pages
- Descriptive meta descriptions
- Open Graph tags for social sharing
- Twitter Card metadata
- Proper canonical URLs

### ✅ Technical SEO
- Valid HTML structure
- Semantic HTML5 elements
- Proper heading hierarchy (h1, h2, h3)
- Alt text ready (add when images are available)
- Fast page load times

### ✅ Structured Data
- Organization schema
- Service schema
- Ready for LocalBusiness schema (if needed)

### ✅ Mobile Optimization
- Responsive design
- Mobile-first approach
- Viewport meta tag (handled by Next.js)

### ✅ Performance
- Image optimization (AVIF/WebP)
- Compression enabled
- Efficient bundle sizes

## ⚠️ Items Requiring Attention

### Images
- [ ] Add Open Graph images (`/images/og-image.jpg` - 1200x630px)
- [ ] Add Twitter images (`/images/twitter-image.jpg`)
- [ ] Implement `next/image` with `priority` prop for LCP images
- [ ] Add alt text to all images

### Social Media
- [ ] Add social media URLs to Organization schema (`sameAs` array)
- [ ] Create and link social media profiles

### Additional Structured Data (Optional)
- [ ] LocalBusiness schema for Google Business Profile
- [ ] BreadcrumbList schema for navigation
- [ ] FAQPage schema for resource pages (if applicable)

### Content
- [ ] Verify all content is indexable (not behind authentication)
- [ ] Ensure all internal links are crawlable
- [ ] Add alt text to decorative and informative images

## 🧪 Testing & Validation

### Pre-Launch Checklist

1. **Robots.txt Validation**
   ```bash
   curl https://xsphere.co.za/robots.txt
   ```

2. **Sitemap Validation**
   ```bash
   curl https://xsphere.co.za/sitemap.xml
   ```

3. **Metadata Validation**
   - Use browser DevTools to inspect `<head>` tags
   - Verify canonical URLs match page URLs
   - Check Open Graph tags with [Facebook Debugger](https://developers.facebook.com/tools/debug/)

4. **Structured Data Validation**
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Schema.org Validator](https://validator.schema.org/)

5. **Performance Testing**
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: LCP < 2.5s, CLS < 0.1, INP < 200ms

6. **404 Testing**
   - Visit non-existent URL: `https://xsphere.co.za/non-existent`
   - Verify HTTP 404 status code (not 200)

### Post-Launch Monitoring

1. Submit sitemap in Google Search Console
2. Monitor Coverage report for indexing issues
3. Check Core Web Vitals in GSC
4. Monitor Search Performance for keywords

## 📝 Notes

- The home page is a client component but still includes structured data in the HTML
- All service pages use `generateMetadata` for dynamic SEO
- Resource pages have individual metadata exports
- Canonical URLs are self-referencing by default
- All pages use the title template from root layout

## 🚀 Next Steps

1. Set `NEXT_PUBLIC_BASE_URL` environment variable
2. Add Google Search Console verification token
3. Submit sitemap to Google Search Console
4. Add Open Graph images
5. Optimize images with `next/image` and priority flags
6. Monitor GSC for indexing status

## 📚 References

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)

