import type { Metadata } from 'next';
import Link from 'next/link';
import { retailServices, servicePath } from '@/data/catalog';

export const metadata: Metadata = {
  title: 'Walk-in printing | Alberton retail print centre',
  description:
    'Walk-in documents, plans, cards, flyers, binding, and laminating in Alberton — with the commercial floor next door.',
  alternates: { canonical: '/services/retail' },
};

export default function RetailIndex() {
  return (
    <main className="page-shell">
      <section className="bg-[#1c2118] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <p className="text-xs uppercase tracking-[0.28em] text-accent-bright">B2C · Alberton</p>
          <h1 className="font-display mt-3 text-4xl font-bold">Retail & walk-in print</h1>
          <p className="mt-5 max-w-2xl text-[#c4cbb8]">
            Short-run digital, plans, and stationery for Alberton, Brackenhurst, and Meyersdal — without waiting behind a
            litho pallet.
          </p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-4 md:grid-cols-2">
          {retailServices.map((s) => (
            <Link key={s.slug} href={servicePath(s)} className="border border-[var(--line)] bg-surface p-6 hover:border-accent">
              <h2 className="font-display text-xl font-bold text-ink">{s.title}</h2>
              <p className="mt-2 text-sm text-ink-muted">{s.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
