import type { Metadata } from "next";
import { Syne, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://xsphere.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    template: "%s | Xsphere Commercial Manufacturing",
    default: "Xsphere Marketing & Design | High-Volume Litho & CNC Manufacturing",
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
    title: "Xsphere | CNC & Laser Engraving",
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
    <html lang="en-ZA" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
