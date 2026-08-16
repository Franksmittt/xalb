import type { Metadata } from 'next';
import Link from 'next/link';
import { commercialServices, retailServices, servicePath } from '@/data/catalog';

export const metadata: Metadata = {
  title: 'Services | Commercial manufacturing & retail print',
  description:
    'Commercial CNC, litho, and large format in Alberton, plus walk-in print for Alberton, Brackenhurst, and Meyersdal.',
  alternates: { canonical: '/services' },
};

export default function ServicesIndexPage() {
  return (
    <main className="page-shell">
      <section className="bg-[#050505] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">Service silos</p>
          <h1 className="font-display mt-3 text-4xl font-bold md:text-5xl">Commercial manufacturing. Retail counter.</h1>
          <p className="mt-5 max-w-2xl text-neutral-400">
            High-volume CNC, litho, and large format are documented separately from walk-in print so procurement and
            local customers each land on the right intent.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold text-ink">Commercial</h2>
            <Link href="/services/commercial" className="text-sm font-semibold text-accent">
              View silo →
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {commercialServices.map((s) => (
              <Link
                key={s.slug}
                href={servicePath(s)}
                className="border border-[var(--line)] bg-surface p-6 transition-colors hover:border-accent"
              >
                <h3 className="font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.tagline}</p>
                <p className="mt-3 text-xs font-semibold text-ink-muted">
                  {s.capacity} · {s.leadTime}
                </p>
              </Link>
            ))}
          </div>

          <h2 className="font-display mt-16 text-2xl font-bold text-ink">Retail</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {retailServices.map((s) => (
              <Link
                key={s.slug}
                href={servicePath(s)}
                className="border border-[var(--line)] bg-surface p-6 transition-colors hover:border-accent"
              >
                <h3 className="font-display text-xl font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{s.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
