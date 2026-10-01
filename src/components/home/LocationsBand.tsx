import Link from 'next/link';
import { suburbs } from '@/data/catalog';

export default function LocationsBand() {
  return (
    <section className="section-pad border-t border-line bg-surface">
      <div className="mx-auto max-w-wide">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:gap-10">
          <div className="flex flex-col">
            <p className="section-eyebrow">Service area</p>
            <h2 className="mt-3 text-balance">Alberton base. East Rand reach.</h2>
            <p className="section-lede">
              Production at 99 Second Avenue, Florentia — serving Alrode industry, Germiston, and Johannesburg South with
              short-haul logistics and on-site install.
            </p>
            <Link href="/locations" className="btn-secondary mt-8 self-start">
              Explore locations
            </Link>
          </div>
          <div className="grid h-full grid-cols-2 content-stretch gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
            {suburbs.map((suburb) => (
              <Link
                key={suburb.slug}
                href={`/locations/${suburb.slug}/cnc-routing`}
                className="flex min-h-[5.5rem] flex-col justify-center bg-surface px-4 py-4 transition-colors hover:bg-background"
              >
                <p className="text-base font-bold text-foreground">{suburb.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-muted">
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
