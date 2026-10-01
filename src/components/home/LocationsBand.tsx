import Link from 'next/link';
import { suburbs } from '@/data/catalog';

export default function LocationsBand() {
  return (
    <section className="section-pad border-t border-line bg-surface">
      <div className="mx-auto max-w-wide">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Service area</p>
            <h2 className="font-display mt-3 text-balance">Alberton base. East Rand reach.</h2>
            <p className="section-lede">
              Production at 99 Second Avenue, Florentia — serving Alrode industry, Germiston, and Johannesburg South with
              short-haul logistics and on-site install.
            </p>
            <Link href="/locations" className="btn-secondary mt-8">
              Explore locations
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/locations/${suburb.slug}/cnc-routing`}
                className="bg-surface px-4 py-5 transition-colors hover:bg-background"
              >
                <p className="font-display text-base font-bold text-foreground">{suburb.name}</p>
                <p className="spec-mono mt-1 text-[0.65rem] uppercase tracking-[0.12em] text-muted">
                  {suburb.emphasis === 'industrial' ? 'Industrial' : 'Retail / local'}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
