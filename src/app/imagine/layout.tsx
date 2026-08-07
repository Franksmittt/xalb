import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imagine — Novelty, Gifts & Ideas in MDF, Plexi, Rowmark & ABS',
  description:
    'See what’s possible with Xsphere laser (1200×900 mm) and CNC (3×2 m): novelty, gifts, corporate pieces, signs, and maker prototypes in MDF, plexiglass, Rowmark, and ABS.',
  alternates: {
    canonical: '/imagine',
  },
};

export default function ImagineLayout({ children }: { children: React.ReactNode }) {
  return children;
}
