import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { retailServices } from '@/data/catalog';

export const metadata: Metadata = {
  title: 'Walk-in printing | Alberton retail print centre',
  description:
    'Walk-in documents, plans, cards, flyers, binding, and laminating in Alberton, with the commercial floor next door.',
  alternates: { canonical: '/services/retail' },
};

export default function RetailIndex() {
  return (
    <main className="page-shell bg-background">
      <section className="border-b border-line bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-wide">
          <p className="section-eyebrow">B2C · Alberton</p>
          <h1 className="mt-3 text-4xl font-bold">Retail & walk-in print</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Short-run digital, plans, and stationery for Alberton, Brackenhurst, and Meyersdal, without waiting behind a
            litho pallet.
          </p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-wide gap-5 sm:grid-cols-2">
          {retailServices.map((s) => (
            <ServiceCard key={s.slug} service={s} showCapacity={false} />
          ))}
        </div>
      </section>
    </main>
  );
}
