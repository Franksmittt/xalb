import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions',
  description: 'Explore Xsphere\'s full-stack service solutions: Large Format Printing, Precision Fabrication, Vehicle Branding, Graphic Design, and Installation & Logistics. Design → Production → Installation.',
  alternates: {
    canonical: '/solutions',
  },
  openGraph: {
    title: 'Solutions | Xsphere Marketing and Design',
    description: 'Integrated Design, Production, and Installation Services across the entire value chain.',
    type: 'website',
    url: '/solutions',
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

