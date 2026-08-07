import Link from 'next/link';

export default function WorkPage() {
  const caseStudies = [
    {
      title: 'Dimensional brand environments',
      client: 'Commercial rollout',
      category: 'CNC & Laser',
      description:
        'Layered MDF and plexiglass signage systems for multi-site brand environments — cut, finished, and installed as a set.',
      image: '/images/fabrication-lab.png',
      href: '/solutions/fabrication',
      metrics: ['Multi-site', 'CNC + laser', 'Install-ready kits'],
    },
    {
      title: 'Awards & campaign pieces',
      client: 'Corporate recognition',
      category: 'Laser Engraving',
      description:
        'Engraved awards and launch pieces produced in commercial batches with consistent detail across every unit.',
      image: '/images/design-studio.png',
      href: '/solutions/fabrication',
      metrics: ['Batch consistency', 'Engraved detail', 'Gift-ready finish'],
    },
    {
      title: 'Retail fixture programme',
      client: 'Retail brand',
      category: 'CNC Routing',
      description:
        'Custom routed fixtures and dimensional letters for store refreshes that need more presence than flat print.',
      image: '/images/fabrication-lab.png',
      href: '/solutions/fabrication',
      metrics: ['MDF & plexi', 'Repeatable parts', 'Fast refresh'],
    },
    {
      title: 'Fleet branding programme',
      client: 'Logistics company',
      category: 'Vehicle & Fleet',
      description: 'Fleet wraps with compliance numbering when the same client needs the vehicles matching the spaces.',
      image: '/images/fleet-lineup.png',
      href: '/solutions/fleet-branding',
      metrics: ['50+ vehicles', 'Protected films', 'Gauteng installs'],
    },
    {
      title: 'Large format campaign',
      client: 'Retail & events',
      category: 'Print',
      description: 'Large-format print and POS when a launch needs walls, banners, and floors alongside cut pieces.',
      image: '/images/hero-print.png',
      href: '/solutions/large-format-printing',
      metrics: ['UV print', 'POS suites', 'Event-ready'],
    },
    {
      title: 'Facade installation',
      client: 'Property developer',
      category: 'Installation',
      description: 'Elevated access install for dimensional building identity — fabricated in-house, fixed on site.',
      image: '/images/install-team.png',
      href: '/solutions/installation',
      metrics: ['Working-at-height', 'QA photos', 'Brand-matched'],
    },
  ];

  return (
    <main className="page-shell">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Work</p>
            <h1 className="font-display mt-3 text-4xl font-bold text-ink md:text-5xl">
              Ideas made physical for brands and spaces
            </h1>
            <p className="mt-5 text-lg text-ink-muted">
              A sample of CNC, laser, and workshop projects — with print, fleet, and install when a rollout needs
              the full stack.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((project) => (
              <Link
                key={project.title}
                href={project.href}
                className="group overflow-hidden border border-[var(--line)] bg-surface transition-colors hover:border-accent"
              >
                <div
                  className="aspect-[4/3] bg-cover bg-center"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {project.category}
                  </p>
                  <h2 className="font-display mt-2 text-xl font-bold text-ink">{project.title}</h2>
                  <p className="mt-1 text-sm text-ink-muted">{project.client}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="text-xs font-semibold text-ink">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent px-8 py-3 text-sm font-semibold text-ink-inverse"
            >
              Brief your project
            </Link>
            <Link
              href="/solutions/fabrication"
              className="inline-flex items-center justify-center rounded-md border border-[var(--line)] px-8 py-3 text-sm font-semibold text-ink"
            >
              CNC &amp; laser capabilities
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
