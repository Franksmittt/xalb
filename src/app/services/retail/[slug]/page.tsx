import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/ServiceDetail';
import { retailServices, catalogMap } from '@/data/catalog';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return retailServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = catalogMap[params.slug];
  if (!service || service.silo !== 'retail') return { title: 'Service' };
  return {
    title: service.title,
    description: service.tagline,
    alternates: { canonical: `/services/retail/${service.slug}` },
    openGraph: { title: service.title, description: service.tagline },
  };
}

export default function RetailServicePage({ params }: Props) {
  const service = catalogMap[params.slug];
  if (!service || service.silo !== 'retail') notFound();
  return <ServiceDetail service={service} />;
}
