import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Work',
  description: 'Explore Xsphere\'s portfolio of large format printing, laser cutting, vehicle branding, and signage installation projects across retail, industrial, and fleet sectors.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'The Work | Xsphere Marketing and Design',
    description: 'View our portfolio of integrated design, production, and installation projects.',
    type: 'website',
    url: '/work',
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

