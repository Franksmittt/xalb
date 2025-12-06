import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Production Material Guide',
  description: 'Complete guide to vinyl types, substrates, and finishes for outdoor durability and indoor applications. Learn about cast vinyl, calendered vinyl, PVC rigid, aluminum composite, and more.',
  alternates: {
    canonical: '/resources/material-guide',
  },
};

export default function MaterialGuidePage() {
  const materials = [
    {
      name: 'Cast Vinyl',
      description: 'Premium-grade vinyl with superior conformability and long-term durability.',
      durability: '7-10 years outdoor',
      applications: ['Vehicle wraps', 'Building facades', 'Long-term signage'],
      advantages: ['Excellent conformability', 'UV resistant', 'Weatherproof', 'Removable without residue'],
    },
    {
      name: 'Calendered Vinyl',
      description: 'Cost-effective option for flat surfaces and short to medium-term applications.',
      durability: '3-5 years outdoor',
      applications: ['Flat signage', 'Indoor displays', 'Short-term campaigns'],
      advantages: ['Budget-friendly', 'Good print quality', 'Easy application', 'Wide color range'],
    },
    {
      name: 'PVC Rigid',
      description: 'Durable rigid substrate for permanent signage and displays.',
      durability: '10+ years outdoor',
      applications: ['Permanent signage', 'Point of sale displays', 'Exhibition stands'],
      advantages: ['Rigid structure', 'Weather resistant', 'Fire retardant options', 'Custom thickness'],
    },
    {
      name: 'Acrylic',
      description: 'Premium material for high-end signage with exceptional clarity and durability.',
      durability: '15+ years outdoor',
      applications: ['Premium signage', 'Light boxes', 'Corporate identity'],
      advantages: ['Crystal clear', 'UV stable', 'Scratch resistant', 'Professional finish'],
    },
    {
      name: 'Aluminum Composite',
      description: 'Lightweight yet strong material for large format and architectural signage.',
      durability: '20+ years outdoor',
      applications: ['Architectural signage', 'Large format displays', 'Building facades'],
      advantages: ['Lightweight', 'Weatherproof', 'Non-corrosive', 'Easy fabrication'],
    },
    {
      name: 'Fabric',
      description: 'Versatile material for banners, backdrops, and tension fabric displays.',
      durability: '2-5 years outdoor',
      applications: ['Banners', 'Event displays', 'Tension fabric systems'],
      advantages: ['Lightweight', 'Washable', 'Wrinkle-resistant', 'Quick installation'],
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
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Link href="/resources" className="inline-flex items-center text-sm text-[#AEDD33] hover:text-[#00F5FF] mb-6 transition-colors">
              ← Back to Resources
            </Link>
            <p className="text-xs uppercase tracking-[0.4em] text-[#AEDD33] mb-4">Production Guide</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="block text-white">Material Guide</span>
              <span className="block bg-gradient-to-r from-[#AEDD33] via-[#4CAF50] to-[#1E8F40] bg-clip-text text-transparent">
                Substrates & Finishes
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              Complete reference for vinyl types, substrates, and finishes. Choose the right material for outdoor durability, indoor applications, and budget requirements.
            </p>
          </div>

          <div className="space-y-8">
            {materials.map((material) => (
              <div
                key={material.name}
                className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-8 hover:border-white/20 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{material.name}</h2>
                    <p className="text-slate-300 mb-3">{material.description}</p>
                    <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[#AEDD33]/10 text-[#00F5FF]">
                      {material.durability}
                    </span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">Applications</h3>
                    <ul className="space-y-2">
                      {material.applications.map((app) => (
                        <li key={app} className="flex items-start gap-2 text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#AEDD33]" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">Advantages</h3>
                    <ul className="space-y-2">
                      {material.advantages.map((adv) => (
                        <li key={adv} className="flex items-start gap-2 text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744]" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[#AEDD33]/30 bg-gradient-to-br from-[#AEDD33]/5 to-[#1E8F40]/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Need Material Recommendations?</h3>
            <p className="text-slate-300 mb-6">
              Our production team can help you select the perfect substrate for your project&apos;s requirements, budget, and timeline.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#AEDD33] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(174,221,51,0.4)]"
            >
              Consult Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

