import LaserCutHero from '@/components/LaserCutHero';
import CapabilitiesBento from '@/components/home/CapabilitiesBento';
import PrecisionDeepDive from '@/components/home/PrecisionDeepDive';
import PrintCarousel from '@/components/home/PrintCarousel';
import LargeFormatBand from '@/components/home/LargeFormatBand';
import DualPath from '@/components/home/DualPath';
import AuthorityGrid from '@/components/home/AuthorityGrid';
import StructuredData from '@/components/StructuredData';
import { organizationGraph } from '@/lib/schema';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-[#050505]">
      <StructuredData data={organizationGraph()} />
      <LaserCutHero />
      <CapabilitiesBento />
      <PrecisionDeepDive />
      <PrintCarousel />
      <LargeFormatBand />
      <AuthorityGrid />
      <DualPath />
      <section className="bg-black px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[8vw] font-black uppercase leading-none tracking-tighter text-transparent bg-gradient-to-b from-white to-neutral-600 bg-clip-text">
            Ready to manufacture?
          </p>
          <p className="mt-6 max-w-2xl text-lg text-neutral-400">
            Drop CAD, print specs, or walk in with an idea. CNC, litho, and 3.2 m UV from Alberton — Alrode to Johannesburg
            South.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-red-500 px-8 py-4 text-sm font-bold text-white"
            >
              Request an enterprise quote
            </Link>
            <a
              href="tel:+27118699169"
              className="inline-flex items-center justify-center rounded-full border border-white px-8 py-4 text-sm font-bold text-white"
            >
              Call the production floor
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
