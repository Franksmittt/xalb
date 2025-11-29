import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Xsphere Marketing and Design. Call +27 11 869 9169, email info@xsphere.co.za, or visit our Alberton facility. Book a strategy call, site survey, or sample review.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us | Xsphere Marketing and Design',
    description: 'Get in touch with Xsphere. Book a strategy call, request a quote, or schedule a facility tour.',
    type: 'website',
    url: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

