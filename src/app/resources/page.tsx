import Link from 'next/link';

export default function ResourcesPage() {
  const resources = [
    {
      title: 'Material Guide',
      description: 'Complete guide to vinyl types, substrates, and finishes for outdoor durability and indoor applications.',
      category: 'Production',
      href: '/resources/material-guide',
      icon: '📋',
    },
    {
      title: 'Print-Ready Checklist',
      description: 'File preparation standards, color profiles, and resolution requirements for flawless production runs.',
      category: 'Design',
      href: '/resources/print-ready-checklist',
      icon: '✅',
    },
    {
      title: 'Signage Bylaws: Gauteng',
      description: 'Local regulations, permit requirements, and compliance guidelines for signage installation.',
      category: 'Installation',
      href: '/resources/signage-bylaws',
      icon: '📜',
    },
    {
      title: 'Vehicle Branding Laws',
      description: 'South African road traffic regulations for vehicle wraps, fleet numbering, and mobile advertising.',
      category: 'Fleet',
      href: '/resources/vehicle-branding-laws',
      icon: '🚗',
    },
    {
      title: 'UV Protection Ratings',
      description: 'Material durability charts and fade-resistance data for long-term outdoor signage performance.',
      category: 'Production',
      href: '/resources/uv-protection',
      icon: '☀️',
    },
    {
      title: 'Installation Timeline Calculator',
      description: 'Estimate project timelines based on scope, material availability, and site access requirements.',
      category: 'Planning',
      href: '/resources/timeline-calculator',
      icon: '⏱️',
    },
  ];

  const guides = [
    {
      title: 'How Long Does Outdoor Signage Last?',
      description: 'Material science breakdown: cast vs. calendered vinyl, substrate choices, and maintenance protocols.',
      readTime: '8 min read',
    },
    {
      title: 'Laser Cutting vs. CNC Routing',
      description: 'When to use each fabrication method, material compatibility, and finish quality comparisons.',
      readTime: '6 min read',
    },
    {
      title: 'Fleet Branding ROI Calculator',
      description: 'Measure mobile advertising impact, brand visibility metrics, and cost-per-impression analysis.',
      readTime: '5 min read',
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF1744]/10 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9] mb-4">Knowledge Base</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="block text-white">Resources</span>
              <span className="block bg-gradient-to-r from-[#00F5FF] via-[#2D9CFF] to-[#FF1744] bg-clip-text text-transparent">
                Everything You Need to Know
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Guides, checklists, and technical resources to help you plan, specify, and deploy your next project.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Reference</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-6 hover:border-[#00F5FF]/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{resource.icon}</div>
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md bg-[#00F5FF]/10 text-[#00F5FF] mb-3">
                    {resource.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F5FF] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{resource.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Video Tutorials & How-To Guides</h2>
              <Link
                href="/tutorials"
                className="text-sm text-[#00F5FF] hover:text-[#67E8F9] transition-colors"
              >
                View All Tutorials →
              </Link>
            </div>
            <div className="rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#00F5FF]/10 to-[#FF1744]/10 p-8 mb-8">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Learn Professional Techniques</h3>
                  <p className="text-slate-300 mb-4">
                    Step-by-step tutorials on vehicle wrapping, vinyl application, and signage installation. 
                    Learn why quality materials matter and avoid costly mistakes.
                  </p>
                  <Link
                    href="/tutorials/vinyl-vehicle-application"
                    className="inline-flex items-center text-[#00F5FF] hover:text-[#67E8F9] font-semibold transition-colors"
                  >
                    Start with Vehicle Wrapping Guide →
                  </Link>
                </div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('/images/fleet-lineup.png')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">In-Depth Guides</h2>
            <div className="space-y-4">
              {guides.map((guide) => (
                <div
                  key={guide.title}
                  className="rounded-2xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-6 hover:border-white/20 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{guide.title}</h3>
                      <p className="text-slate-300 text-sm">{guide.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-slate-400">{guide.readTime}</span>
                      <Link
                        href="/resources"
                        className="inline-flex items-center text-sm font-semibold text-[#00F5FF] hover:text-[#67E8F9] transition-colors"
                      >
                        View All Resources →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#00F5FF]/5 to-[#FF1744]/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Need Expert Advice?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Our team can help you choose the right materials, plan your timeline, and navigate compliance requirements.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#00F5FF] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(0,245,255,0.4)]"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

