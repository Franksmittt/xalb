import type { Metadata } from 'next';
import Link from 'next/link';
import { commercialServices, servicePath } from '@/data/catalog';

export const metadata: Metadata = {
  title: 'Commercial manufacturing services | Alberton & East Rand',
  description:
    'In-house CNC routing, laser cutting, litho, and 3.2 m large format for Alrode, Germiston, and Johannesburg South.',
  alternates: { canonical: '/services/commercial' },
};

export default function CommercialIndex() {
  return (
    <main className="page-shell">
      <section className="bg-[#050505] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-400">B2B</p>
          <h1 className="font-display mt-3 text-4xl font-bold">Commercial manufacturing</h1>
          <p className="mt-5 max-w-2xl text-neutral-400">
            CNC and laser for MDF, ABS, and plastics. Litho volume. UV large format. Dimensional signage and Gauteng
            install.
          </p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-4 md:grid-cols-2">
          {commercialServices.map((s) => (
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
