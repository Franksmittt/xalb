import Link from 'next/link';
import { commercialServices, retailServices, servicePath } from '@/data/catalog';

export default function ServicesIndex() {
  return (
    <section className="section-pad border-t border-line bg-surface">
      <div className="mx-auto max-w-wide">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Full catalogue</p>
            <h2 className="font-display mt-3 text-balance">Everything on the Alberton floor.</h2>
            <p className="section-lede">
              Commercial manufacturing for procurement programmes — plus a retail counter when you need something today.
            </p>
          </div>
          <Link href="/services" className="btn-secondary self-start">
            Browse all services
          </Link>
        </div>

        <div className="mt-12">
          <div className="mb-4 flex items-baseline justify-between border-b border-line pb-3">
            <h3 className="font-display text-xl font-bold text-foreground">Commercial</h3>
            <p className="spec-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
              {commercialServices.length} disciplines
            </p>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {commercialServices.map((service) => (
              <Link
                key={service.slug}
                href={servicePath(service)}
                className="group flex flex-col bg-surface p-6 transition-colors hover:bg-background"
              >
                <p className="font-display text-lg font-bold text-foreground group-hover:text-accent">
                  {service.navLabel}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{service.tagline}</p>
                <p className="spec-mono mt-4 text-[0.68rem] uppercase tracking-[0.12em] text-steel">
                  {service.leadTime} · {service.capacity}
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="mb-4 flex items-baseline justify-between border-b border-line pb-3">
            <h3 className="font-display text-xl font-bold text-foreground">Retail counter</h3>
            <p className="spec-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">Walk-in · Alberton</p>
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {retailServices.map((service) => (
              <Link
                key={service.slug}
                href={servicePath(service)}
                className="group flex flex-col bg-surface p-6 transition-colors hover:bg-background"
              >
                <p className="font-display text-lg font-bold text-foreground group-hover:text-accent">
                  {service.navLabel}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.tagline}</p>
                <p className="spec-mono mt-4 text-[0.68rem] uppercase tracking-[0.12em] text-steel">
                  {service.leadTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
