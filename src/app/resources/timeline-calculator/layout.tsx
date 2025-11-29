import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Installation Timeline Calculator',
  description: 'Estimate project timelines based on scope, material availability, and site access requirements. Plan your printing and signage installation projects.',
  alternates: {
    canonical: '/resources/timeline-calculator',
  },
};

export default function TimelineCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

