import Link from 'next/link';
import { serviceCatalog } from '@/data/services';

export default function WorkPage() {
  const caseStudies = [
    {
      title: 'Retail Chain Rollout',
      client: 'Major Retailer',
      category: 'Large Format & POS',
      description: 'Nationwide rollout of 200+ storefronts with coordinated signage, POS displays, and wayfinding systems.',
      image: '/images/hero-print.png',
      href: '/solutions/large-format-printing',
      metrics: ['200+ locations', '3-week timeline', '100% on-time delivery'],
    },
    {
      title: 'Fleet Branding Program',
      client: 'Logistics Company',
      category: 'Vehicle & Fleet',
      description: 'Complete fleet wrap program for 50+ vehicles with compliance-ready numbering and protective laminates.',
      image: '/images/fleet-lineup.png',
      href: '/solutions/fleet-branding',
      metrics: ['50+ vehicles', '2-week production', 'Full compliance'],
    },
    {
      title: 'Industrial Safety Systems',
      client: 'Manufacturing Plant',
      category: 'Fabrication & Signage',
      description: 'Custom laser-cut safety signage, wayfinding, and branded facility elements for industrial environment.',
      image: '/images/fabrication-lab.png',
      href: '/solutions/fabrication',
      metrics: ['500+ signs', 'Custom materials', 'Durability tested'],
    },
    {
      title: 'Corporate Identity Launch',
      client: 'Tech Startup',
      category: 'Design & Identity',
      description: 'Complete brand system from logo to physical collateral, business cards, and office signage.',
      image: '/images/design-studio.png',
      href: '/solutions/design',
      metrics: ['Full brand kit', 'Multi-format', 'Print-ready'],
    },
    {
      title: 'High-Rise Installation',
      client: 'Property Developer',
      category: 'Installation & Logistics',
      description: 'Elevated access installation of building facade branding with certified riggers and full QA documentation.',
      image: '/images/install-team.png',
      href: '/solutions/installation',
      metrics: ['15-story height', 'Certified crew', 'Photo reports'],
    },
    {
      title: 'Exhibition Stand System',
      client: 'Trade Show Organizer',
      category: 'Large Format & Events',
      description: 'Modular exhibition walls, hanging banners, and floor graphics for major industry trade show.',
      image: '/images/hero-print.png',
      href: '/solutions/large-format-printing',
      metrics: ['Modular system', 'Quick setup', 'Reusable'],
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#AEDD33]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF1744]/10 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-[#AEDD33] mb-4">Portfolio</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="block text-white">The Work</span>
              <span className="block bg-gradient-to-r from-[#AEDD33] via-[#4CAF50] to-[#1E8F40] bg-clip-text text-transparent">
                Real Projects, Real Results
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              17 years of integrated design, production, and installation across retail, industrial, fleet, and corporate sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {caseStudies.map((project, index) => (
              <Link
                key={project.title}
                href={project.href}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl hover:border-[#00F5FF]/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#AEDD33]/20 text-[#AEDD33] mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-sm text-slate-300">{project.client}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-400 border border-white/5"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#AEDD33] to-[#1E8F40] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(174,221,51,0.4)] hover:shadow-[0_20px_45px_rgba(174,221,51,0.5)] transition-all"
              >
                Start Your Project
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 transition-all"
              >
                See Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

