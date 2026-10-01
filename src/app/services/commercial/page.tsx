import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { commercialServices } from '@/data/catalog';

export const metadata: Metadata = {
  title: 'Commercial manufacturing services | Alberton & East Rand',
  description:
    'In-house CNC routing, laser cutting, litho, large format, display, gifting, and install for Alrode, Germiston, and Johannesburg South.',
  alternates: { canonical: '/services/commercial' },
};

export default function CommercialIndex() {
  return (
    <main className="page-shell bg-background">
      <section className="border-b border-line bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-wide">
          <p className="section-eyebrow">B2B</p>
          <h1 className="mt-3 text-4xl font-bold">Commercial manufacturing</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            CNC and laser for MDF, ABS, and plastics. Litho volume. UV large format. Display systems, gifting,
            dimensional signage, and Gauteng install.
          </p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-wide gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {commercialServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>
    </main>
  );
}
