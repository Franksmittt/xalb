import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

// Get base URL from environment variable or default to production domain
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xsphere.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: '%s | Xsphere Marketing and Design',
    default: 'Xsphere Marketing and Design | Integrated Design, Production, and Installation Services',
  },
  description: 'Integrated Design, Production, and Installation Services. 17 years of expertise in large format printing, laser cutting, vehicle branding, and signage installation across Gauteng.',
  keywords: ['signage', 'large format printing', 'vehicle branding', 'laser cutting', 'fabrication', 'Alberton', 'Gauteng', 'South Africa', 'graphic design', 'installation'],
  authors: [{ name: 'Xsphere Marketing and Design' }],
  creator: 'Xsphere Marketing and Design',
  publisher: 'Xsphere Marketing and Design',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: baseUrl,
    siteName: 'Xsphere Marketing and Design',
    title: 'Xsphere Marketing and Design | Integrated Design, Production, and Installation Services',
    description: '17 years of expertise in large format printing, laser cutting, vehicle branding, and signage installation across Gauteng.',
    // Add Open Graph image path when available
    // images: [
    //   {
    //     url: '/images/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: 'Xsphere Marketing and Design',
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xsphere Marketing and Design',
    description: 'Integrated Design, Production, and Installation Services',
    // Add Twitter image path when available
    // images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Google Search Console verification - Add your verification token here
  // verification: {
  //   google: 'your-google-verification-token',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

