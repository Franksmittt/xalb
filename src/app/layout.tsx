import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://xsphere.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Xsphere",
    default: "Xsphere | Commercial Manufacturing, Print & CNC — Alberton",
  },
  description:
    "End-to-end commercial printing and precision CNC manufacturing in Alberton. In-house routing and laser for MDF, ABS, and plastics, 3.2 m UV, litho volume, and walk-in print for the East Rand.",
  keywords: [
    "CNC routing",
    "laser engraving",
    "laser cutting",
    "dimensional signage",
    "acrylic signs",
    "custom fabrication",
    "Alberton",
    "Gauteng",
    "South Africa",
    "large format printing",
    "vehicle branding",
  ],
  authors: [{ name: "Xsphere Marketing and Design" }],
  creator: "Xsphere Marketing and Design",
  publisher: "Xsphere Marketing and Design",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: baseUrl,
    siteName: "Xsphere",
    title: "Xsphere Manufacturing & Design Facility",
    description:
      "Alberton facility for high-volume litho, 3.2 m large format, and precision CNC routing of MDF, ABS, and industrial plastics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xsphere | CNC, Litho & Large Format",
    description:
      "Dimensional signage, engraved detail, and custom fabricated pieces for brands across Gauteng.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className={sans.variable}>
      <body className="font-sans antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
