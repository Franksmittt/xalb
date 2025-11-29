import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Access Xsphere\'s resource hub: Material guides, print-ready checklists, signage bylaws, vehicle branding laws, UV protection ratings, and timeline calculators for your printing and signage projects.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'Resources | Xsphere Marketing and Design',
    description: 'Educational resources, guides, and tools for printing and signage projects.',
    type: 'website',
    url: '/resources',
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

