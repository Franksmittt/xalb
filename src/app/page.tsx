import LaserCutHero from '@/components/LaserCutHero';
import CapabilitiesBento from '@/components/home/CapabilitiesBento';
import PrecisionDeepDive from '@/components/home/PrecisionDeepDive';
import PrintCarousel from '@/components/home/PrintCarousel';
import LargeFormatBand from '@/components/home/LargeFormatBand';
import DualPath from '@/components/home/DualPath';
import AuthorityGrid from '@/components/home/AuthorityGrid';
import StructuredData from '@/components/StructuredData';
import { organizationGraph } from '@/lib/schema';

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
    </main>
  );
}
