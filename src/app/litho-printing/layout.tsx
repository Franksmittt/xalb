import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lithographic Printing',
  description: 'High-volume offset lithographic printing for brochures, catalogs, and corporate materials. 10-day lead time, superior quality, cost-effective at scale. Minimum 1000+ units.',
  alternates: {
    canonical: '/litho-printing',
  },
  openGraph: {
    title: 'Lithographic Printing | Xsphere Marketing and Design',
    description: 'Traditional offset printing delivering superior quality, color accuracy, and cost-effectiveness for large print runs.',
    type: 'website',
    url: '/litho-printing',
  },
};

export default function LithoPrintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

