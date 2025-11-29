import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Production UV Protection Ratings',
  description: 'Material durability charts and fade-resistance data for long-term outdoor signage performance. Compare UV protection ratings across different materials.',
  alternates: {
    canonical: '/resources/uv-protection',
  },
};

export default function UVProtectionPage() {
  const materials = [
    {
      name: 'Cast Vinyl with UV Laminate',
      rating: 'Excellent',
      lifespan: '7-10 years',
      fadeResistance: '95%',
      description: 'Premium cast vinyl with protective UV laminate provides maximum protection against sun damage.',
      bestFor: ['Vehicle wraps', 'Long-term outdoor signage', 'Building facades'],
    },
    {
      name: 'Calendered Vinyl',
      rating: 'Good',
      lifespan: '3-5 years',
      fadeResistance: '75%',
      description: 'Standard calendered vinyl offers good UV protection for medium-term applications.',
      bestFor: ['Flat signage', 'Short to medium campaigns', 'Indoor/outdoor displays'],
    },
    {
      name: 'PVC Rigid with UV Coating',
      rating: 'Excellent',
      lifespan: '10+ years',
      fadeResistance: '98%',
      description: 'Rigid PVC with factory-applied UV coating provides exceptional durability.',
      bestFor: ['Permanent signage', 'Architectural elements', 'High-traffic areas'],
    },
    {
      name: 'Acrylic',
      rating: 'Excellent',
      lifespan: '15+ years',
      fadeResistance: '99%',
      description: 'Premium acrylic material is naturally UV stable with exceptional fade resistance.',
      bestFor: ['Premium signage', 'Corporate identity', 'Light boxes'],
    },
    {
      name: 'Aluminum Composite',
      rating: 'Excellent',
      lifespan: '20+ years',
      fadeResistance: '97%',
      description: 'Aluminum composite with UV-resistant finish offers long-term protection.',
      bestFor: ['Architectural signage', 'Large format displays', 'Building facades'],
    },
    {
      name: 'Fabric (Banner Material)',
      rating: 'Moderate',
      lifespan: '2-5 years',
      fadeResistance: '60%',
      description: 'Fabric materials require UV-resistant inks and protective coatings for outdoor use.',
      bestFor: ['Temporary banners', 'Event displays', 'Short-term campaigns'],
    },
  ];

  const factors = [
    'Direct sun exposure (north-facing gets most UV)',
    'Altitude (higher = more UV intensity)',
    'Climate (hot, dry climates accelerate fading)',
    'Material quality and UV protection level',
    'Installation quality (proper adhesion prevents edge lift)',
    'Maintenance (regular cleaning extends lifespan)',
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF1744]/10 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Link href="/resources" className="inline-flex items-center text-sm text-[#67E8F9] hover:text-[#00F5FF] mb-6 transition-colors">
              ← Back to Resources
            </Link>
            <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9] mb-4">Production Guide</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="block text-white">UV Protection Ratings</span>
              <span className="block bg-gradient-to-r from-[#00F5FF] via-[#2D9CFF] to-[#FF1744] bg-clip-text text-transparent">
                Material Durability & Fade Resistance
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              Material durability charts and fade-resistance data for long-term outdoor signage performance in South African conditions.
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {materials.map((material) => (
              <div
                key={material.name}
                className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-8"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">{material.name}</h2>
                    <p className="text-slate-300 mb-4">{material.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                      material.rating === 'Excellent' ? 'bg-[#00F5FF]/10 text-[#00F5FF]' :
                      material.rating === 'Good' ? 'bg-[#FF6B00]/10 text-[#FF6B00]' :
                      'bg-[#FF1744]/10 text-[#FF1744]'
                    }`}>
                      {material.rating}
                    </span>
                    <span className="text-xs text-slate-400 text-center">{material.fadeResistance} fade resistance</span>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">Lifespan</h3>
                    <p className="text-2xl font-bold text-white">{material.lifespan}</p>
                    <p className="text-sm text-slate-400 mt-1">Typical outdoor lifespan in SA conditions</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">Best For</h3>
                    <ul className="space-y-2">
                      {material.bestFor.map((use) => (
                        <li key={use} className="flex items-start gap-2 text-slate-300">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF]" />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-8 mb-12">
            <h2 className="text-xl font-bold text-white mb-6">Factors Affecting UV Performance</h2>
            <ul className="grid md:grid-cols-2 gap-3">
              {factors.map((factor, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                  <span className="text-slate-300">{factor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#00F5FF]/5 to-[#FF1744]/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Need Material Recommendations?</h3>
            <p className="text-slate-300 mb-6">
              Our production team can help you select materials with the right UV protection for your specific application and location.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#00F5FF] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(0,245,255,0.4)]"
            >
              Consult Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

