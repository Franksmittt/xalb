import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';
import { commercialServices, retailServices } from '@/data/catalog';

export const metadata: Metadata = {
  title: 'Services | Commercial manufacturing & retail print',
  description:
    'Commercial CNC, litho, large format, display, gifting, and walk-in print in Alberton.',
  alternates: { canonical: '/services' },
};

export default function ServicesIndexPage() {
  return (
    <main className="page-shell bg-background">
      <section className="border-b border-line bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-wide">
          <p className="section-eyebrow">Services</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold md:text-5xl">
            Commercial manufacturing. Retail counter.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            High-volume CNC, print, display, and branding documented separately from walk-in print so procurement and
            local customers each land on the right intent.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-wide">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-foreground">Commercial</h2>
            <Link href="/services/commercial" className="text-sm font-semibold text-accent">
              View silo →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commercialServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>

          <h2 className="mt-16 text-2xl font-bold text-foreground">Retail</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {retailServices.map((s) => (
              <ServiceCard key={s.slug} service={s} showCapacity={false} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
