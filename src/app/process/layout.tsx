import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Process',
  description: 'Discover Xsphere\'s integrated workflow: Discovery & Intake, Design & Visualization, Production & Fabrication, Quality Assurance, and Installation. Learn how we deliver from concept to installation.',
  alternates: {
    canonical: '/process',
  },
  openGraph: {
    title: 'Our Process | Xsphere Marketing and Design',
    description: 'Learn how Xsphere delivers integrated design, production, and installation services with military precision.',
    type: 'website',
    url: '/process',
  },
};

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

