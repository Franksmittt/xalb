import Link from 'next/link';
import Image from 'next/image';
import StructuredData from '@/components/StructuredData';
import { CatalogService, catalogMap, servicePath } from '@/data/catalog';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xsphere.co.za';

export default function ServiceDetail({ service }: { service: CatalogService }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    provider: { '@id': `${baseUrl}/#organization` },
    areaServed: 'Alberton, Alrode, Germiston, East Rand, Johannesburg South',
    serviceType: service.title,
  };

  return (
    <main className="page-shell">
      <StructuredData data={jsonLd} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.heroImage} alt="" fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#050505]/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            {service.silo === 'commercial' ? 'Commercial manufacturing' : 'Retail & walk-in'}
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{service.tagline}</p>
          <p className="mt-4 max-w-2xl text-white/70">{service.summary}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/60">
            <span>{service.leadTime}</span>
            <span aria-hidden>·</span>
            <span>{service.capacity}</span>
            <span aria-hidden>·</span>
            <span>{service.qa}</span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-cyan-400/50 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-neutral-950"
            >
              Initiate a project
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              All services
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-6 sm:grid-cols-3">
          {service.highlights.map((h) => (
            <div key={h.label} className="border-l-2 border-accent pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">{h.label}</p>
              <p className="font-display mt-2 text-2xl font-bold text-ink">{h.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">In-house manufacturing infrastructure</h2>
            <ul className="mt-5 space-y-3 text-ink-muted">
              {service.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {b}
                </li>
              ))}
            </ul>
            {service.materials.length > 0 && (
              <div className="mt-8">
                <p className="section-eyebrow">Materials</p>
                <p className="mt-3 text-sm text-ink-muted">{service.materials.join(' · ')}</p>
              </div>
            )}
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">What we produce</h2>
            <ul className="mt-5 space-y-3 text-ink-muted">
              {service.offerings.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#121212] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-400">The challenge</p>
            <p className="mt-4 text-lg text-neutral-300">{service.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">The Xsphere solution</p>
            <p className="mt-4 text-lg text-neutral-300">{service.solution}</p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <h2 className="font-display text-2xl font-bold text-ink">Questions procurement actually asks</h2>
          <dl className="mt-8 space-y-6">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="border-t border-[var(--line)] pt-5">
                <dt className="font-semibold text-ink">{faq.question}</dt>
                <dd className="mt-2 text-ink-muted">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {service.related.length > 0 && (
        <section className="border-t border-[var(--line)] px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-content">
            <p className="section-eyebrow">Related</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {service.related.map((slug) => {
                const rel = catalogMap[slug];
                if (!rel) return null;
                return (
                  <Link
                    key={slug}
                    href={servicePath(rel)}
                    className="border border-[var(--line)] bg-surface p-5 transition-colors hover:border-accent"
                  >
                    <p className="text-xs uppercase tracking-widest text-ink-muted">{rel.silo}</p>
                    <h3 className="font-display mt-2 text-lg font-bold text-ink">{rel.navLabel}</h3>
                    <p className="mt-2 text-sm text-ink-muted">{rel.tagline}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-content flex-col gap-6 border border-[var(--line)] bg-surface p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-2xl font-bold text-ink">Submit files or walk in with the idea</h2>
            <p className="mt-2 text-ink-muted">Alberton production floor · {service.leadTime}</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-white"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </main>
  );
}
