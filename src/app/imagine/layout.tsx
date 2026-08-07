import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imagine — What Laser & CNC Can Make',
  description:
    'Explore what’s possible with laser cutting, laser engraving, and CNC routing — dimensional signage, awards, retail builds, and branded environments from Xsphere.',
  alternates: {
    canonical: '/imagine',
  },
};

export default function ImagineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
