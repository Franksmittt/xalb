import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/ServiceDetail';
import { commercialServices, catalogMap } from '@/data/catalog';

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return commercialServices.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const service = catalogMap[params.slug];
  if (!service || service.silo !== 'commercial') return { title: 'Service' };
  return {
    title: service.title,
    description: service.tagline,
    alternates: { canonical: `/services/commercial/${service.slug}` },
    openGraph: { title: service.title, description: service.tagline },
  };
}

export default function CommercialServicePage({ params }: Props) {
  const service = catalogMap[params.slug];
  if (!service || service.silo !== 'commercial') notFound();
  return <ServiceDetail service={service} />;
}
