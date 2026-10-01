import LaserCutHero from '@/components/LaserCutHero';
import SpecBar from '@/components/home/SpecBar';
import ProcessStrip from '@/components/home/ProcessStrip';
import CapabilitiesBento from '@/components/home/CapabilitiesBento';
import PrecisionDeepDive from '@/components/home/PrecisionDeepDive';
import PrintCarousel from '@/components/home/PrintCarousel';
import LargeFormatBand from '@/components/home/LargeFormatBand';
import FleetBand from '@/components/home/FleetBand';
import SignageInstall from '@/components/home/SignageInstall';
import DesignCapability from '@/components/home/DesignCapability';
import ServicesIndex from '@/components/home/ServicesIndex';
import WorkProof from '@/components/home/WorkProof';
import LocationsBand from '@/components/home/LocationsBand';
import AuthorityGrid from '@/components/home/AuthorityGrid';
import DualPath from '@/components/home/DualPath';
import FinalCta from '@/components/home/FinalCta';
import StructuredData from '@/components/StructuredData';
import { organizationGraph } from '@/lib/schema';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <StructuredData data={organizationGraph()} />
      <LaserCutHero />
      <SpecBar />
      <ProcessStrip />
      <CapabilitiesBento />
      <PrecisionDeepDive />
      <PrintCarousel />
      <LargeFormatBand />
      <FleetBand />
      <SignageInstall />
      <DesignCapability />
      <ServicesIndex />
      <WorkProof />
      <LocationsBand />
      <AuthorityGrid />
      <DualPath />
      <FinalCta />
    </main>
  );
}
