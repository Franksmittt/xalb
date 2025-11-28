import Link from 'next/link';

export default function SignageBylawsPage() {
  const regulations = [
    {
      category: 'Permit Requirements',
      items: [
        'Temporary signage (under 30 days): Usually exempt, but check local municipality',
        'Permanent signage: Building permit required from local council',
        'Illuminated signage: Additional electrical permit needed',
        'Signage over 2m²: Planning approval required',
        'Heritage areas: Special approval from heritage council',
      ],
    },
    {
      category: 'Size & Placement',
      items: [
        'Maximum height: 6m above ground level (residential), 12m (commercial)',
        'Setback from property line: Minimum 1.5m',
        'No signage within 5m of road intersection',
        'Signage cannot obstruct pedestrian walkways',
        'Building-mounted signage: Must not exceed 25% of building facade',
      ],
    },
    {
      category: 'Content Restrictions',
      items: [
        'No offensive or discriminatory content',
        'Political signage: Special regulations during election periods',
        'Alcohol/tobacco advertising: Restricted near schools and places of worship',
        'Business name must match registered company name',
        'Contact details must be accurate and current',
      ],
    },
    {
      category: 'Safety & Maintenance',
      items: [
        'All signage must be structurally sound and weather-resistant',
        'Regular maintenance required (inspection every 2 years)',
        'Damaged or unsafe signage must be removed immediately',
        'Electrical signage: Annual safety inspection required',
        'Insurance: Public liability insurance recommended',
      ],
    },
    {
      category: 'Municipal Areas',
      items: [
        'City of Johannesburg: Additional height restrictions in CBD',
        'City of Tshwane: Heritage overlay zones require special approval',
        'Ekurhuleni: Stricter regulations for industrial signage',
        'West Rand: Rural zoning has different requirements',
        'Always check with local municipality before installation',
      ],
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
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Link href="/resources" className="inline-flex items-center text-sm text-[#67E8F9] hover:text-[#00F5FF] mb-6 transition-colors">
              ← Back to Resources
            </Link>
            <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9] mb-4">Installation Guide</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="block text-white">Signage Bylaws: Gauteng</span>
              <span className="block bg-gradient-to-r from-[#00F5FF] via-[#2D9CFF] to-[#FF1744] bg-clip-text text-transparent">
                Local Regulations & Compliance
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              Essential guide to local regulations, permit requirements, and compliance guidelines for signage installation across Gauteng municipalities.
            </p>
          </div>

          <div className="mb-8 rounded-2xl border border-[#FF6B00]/30 bg-[#FF6B00]/5 p-6">
            <p className="text-slate-200">
              <strong className="text-white">Important:</strong> Regulations vary by municipality. Always verify current requirements with your local council before installation. This guide provides general guidelines and should not replace official legal advice.
            </p>
          </div>

          <div className="space-y-6">
            {regulations.map((section) => (
              <div
                key={section.category}
                className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-8"
              >
                <h2 className="text-xl font-bold text-white mb-6">{section.category}</h2>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#00F5FF]/5 to-[#FF1744]/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Need Compliance Assistance?</h3>
            <p className="text-slate-300 mb-6">
              Our installation team handles permit applications and ensures all signage meets local regulations. We work with municipalities across Gauteng.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#00F5FF] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(0,245,255,0.4)]"
            >
              Get Compliance Support
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

