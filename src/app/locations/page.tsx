import type { Metadata } from 'next';
import Link from 'next/link';
import { suburbs, locationServiceSlugs, locationServiceMeta } from '@/data/catalog';

export const metadata: Metadata = {
  title: 'Locations | Alberton manufacturing serving the East Rand',
  description:
    'Xsphere in Alberton serves Alrode, Brackenhurst, Meyersdal, Germiston, East Rand, and Johannesburg South.',
  alternates: { canonical: '/locations' },
};

export default function LocationsIndex() {
  return (
    <main className="page-shell">
      <section className="bg-[#050505] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-400">Coverage</p>
          <h1 className="font-display mt-3 text-4xl font-bold">Manufactured in Alberton. Delivered across the East Rand.</h1>
          <p className="mt-5 max-w-2xl text-neutral-400">
            Suburb pages exist so local search and procurement land on unique logistics context — not duplicated
            brochure copy.
          </p>
        </div>
      </section>
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content space-y-10">
          {suburbs.map((suburb) => (
            <div key={suburb.slug} className="border-t border-[var(--line)] pt-8">
              <h2 className="font-display text-2xl font-bold text-ink">{suburb.name}</h2>
              <p className="mt-2 text-ink-muted">{suburb.context}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {locationServiceSlugs.map((svc) => (
                  <Link
                    key={svc}
                    href={`/locations/${suburb.slug}/${svc}`}
                    className="rounded-full border border-[var(--line)] px-4 py-2 text-sm text-ink hover:border-accent"
                  >
                    {locationServiceMeta[svc].title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
