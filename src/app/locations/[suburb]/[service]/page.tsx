import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import StructuredData from '@/components/StructuredData';
import {
  suburbs,
  suburbBySlug,
  locationServiceSlugs,
  locationServiceMeta,
  servicePath,
  catalogMap,
  type LocationServiceSlug,
} from '@/data/catalog';

type Props = { params: { suburb: string; service: string } };

export function generateStaticParams() {
  return suburbs.flatMap((suburb) =>
    locationServiceSlugs.map((service) => ({ suburb: suburb.slug, service })),
  );
}

export function generateMetadata({ params }: Props): Metadata {
  const suburb = suburbBySlug(params.suburb);
  const service = locationServiceMeta[params.service as LocationServiceSlug];
  if (!suburb || !service) return { title: 'Location' };
  return {
    title: `${service.title} in ${suburb.name}`,
    description: `End-to-end ${service.title.toLowerCase()} serving ${suburb.name}. ${suburb.context}`,
    alternates: { canonical: `/locations/${params.suburb}/${params.service}` },
  };
}

export default function LocationServicePage({ params }: Props) {
  const suburb = suburbBySlug(params.suburb);
  const meta = locationServiceMeta[params.service as LocationServiceSlug];
  if (!suburb || !meta) notFound();
  const catalog = catalogMap[meta.catalogSlug];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${meta.title} serving ${suburb.name}`,
    description: `${meta.blurb} ${suburb.context}`,
    areaServed: suburb.name,
    provider: { '@type': 'Organization', name: 'Xsphere Marketing and Design' },
  };

  return (
    <main className="page-shell">
      <StructuredData data={jsonLd} />
      <section className="bg-[#050505] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-400">{suburb.name}</p>
          <h1 className="font-display mt-3 text-4xl font-bold">
            {meta.title} facility serving {suburb.name}
          </h1>
          <p className="mt-5 max-w-2xl text-neutral-300">{suburb.context}</p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content space-y-6 text-ink-muted">
          <p>
            Xsphere Marketing and Design operates an end-to-end manufacturing floor in Alberton delivering{' '}
            {meta.title.toLowerCase()}. {meta.blurb}
          </p>
          <p>
            By keeping CNC routing for MDF, ABS, and commercial plastics, litho programmes, and 3.2 m UV large format in
            one Alberton operation, {suburb.name} contracts are not queued behind an unrelated vendor.
          </p>
          {catalog && (
            <Link href={servicePath(catalog)} className="inline-flex font-semibold text-accent">
              Full {catalog.navLabel} specification →
            </Link>
          )}
          <div className="pt-8">
            <Link href="/contact" className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white">
              Brief a {suburb.name} project
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
