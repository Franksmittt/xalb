import Link from 'next/link';
import { serviceCatalog } from '@/data/services';

export default function SolutionsPage() {
  return (
    <main className="page-shell">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Workshop services</p>
            <h1 className="font-display mt-3 text-4xl font-bold text-ink md:text-5xl">
              CNC &amp; laser first. Full workshop when you need it.
            </h1>
            <p className="mt-5 text-lg text-ink-muted">
              Xsphere specialises in CNC routing and laser engraving for dimensional signage and branded pieces.
              Print, fleet, design, and installation stay available for complete rollouts.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {serviceCatalog.map((service, index) => {
              const featured = service.slug === 'fabrication';
              return (
                <Link
                  key={service.slug}
                  href={`/solutions/${service.slug}`}
                  className={`group overflow-hidden border border-[var(--line)] bg-surface transition-colors hover:border-accent ${
                    featured ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className={`grid ${featured ? 'lg:grid-cols-2' : ''}`}>
                    <div
                      className={`relative bg-cover bg-center ${featured ? 'min-h-[280px]' : 'aspect-[16/10]'}`}
                      style={{ backgroundImage: `url('${service.heroImage}')` }}
                    />
                    <div className="flex flex-col justify-center p-6 sm:p-8">
                      {featured && (
                        <span className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                          Core focus
                        </span>
                      )}
                      <h2 className="font-display text-2xl font-bold text-ink md:text-3xl">{service.title}</h2>
                      <p className="mt-3 text-ink-muted leading-relaxed">{service.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-ink-muted">
                        <span>{service.leadTime}</span>
                        <span aria-hidden>·</span>
                        <span>{service.capacity}</span>
                      </div>
                      <span className="mt-6 inline-flex text-sm font-semibold text-accent group-hover:underline">
                        {featured ? 'Explore CNC & laser' : 'View service'} →
                      </span>
                      {index === 0 && featured ? null : null}
                    </div>
                  </div>
                </Link>
              );
            })}

            <Link
              href="/litho-printing"
              className="group overflow-hidden border border-[var(--line)] bg-surface transition-colors hover:border-accent"
            >
              <div className="aspect-[16/10] bg-accent-soft" />
              <div className="p-6 sm:p-8">
                <h2 className="font-display text-2xl font-bold text-ink">Lithographic Printing</h2>
                <p className="mt-3 text-ink-muted leading-relaxed">
                  High-volume offset for brochures, catalogues, and corporate collateral when the brief needs ink
                  on paper at scale.
                </p>
                <span className="mt-6 inline-flex text-sm font-semibold text-accent group-hover:underline">
                  View service →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
