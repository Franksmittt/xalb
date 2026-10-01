import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { commercialServices, retailServices } from '@/data/catalog';

export default function ServicesIndex() {
  return (
    <section className="section-pad border-t border-line bg-surface">
      <div className="mx-auto max-w-wide">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Full catalogue</p>
            <h2 className="mt-3 text-balance">Everything on the Alberton floor.</h2>
            <p className="section-lede">
              Browse by discipline. Images are placeholders for now so you can judge the layout before final photography.
            </p>
          </div>
          <Link href="/services" className="btn-secondary self-start">
            Browse all services
          </Link>
        </div>

        <div className="section-stack">
          <div className="mb-4 flex items-baseline justify-between border-b border-line pb-3">
            <h3 className="text-xl font-bold text-foreground">Commercial</h3>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              {commercialServices.length} disciplines
            </p>
          </div>
          <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commercialServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>

        <div className="section-stack">
          <div className="mb-4 flex items-baseline justify-between border-b border-line pb-3">
            <h3 className="text-xl font-bold text-foreground">Retail counter</h3>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Walk-in · Alberton</p>
          </div>
          <div className="grid items-stretch gap-5 sm:grid-cols-2">
            {retailServices.map((service) => (
              <ServiceCard key={service.slug} service={service} showCapacity={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
