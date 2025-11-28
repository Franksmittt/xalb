import Link from 'next/link';

export default function VehicleBrandingLawsPage() {
  const regulations = [
    {
      category: 'General Requirements',
      items: [
        'Vehicle wraps must not obstruct driver visibility (windscreen, side windows, mirrors)',
        'All branding must be securely attached and not create road hazards',
        'Vehicle registration number must remain clearly visible',
        'No reflective materials that could blind other drivers',
        'Branding cannot alter vehicle color for registration purposes',
      ],
    },
    {
      category: 'Fleet Numbering',
      items: [
        'Fleet numbers must be clearly visible and legible',
        'Minimum height: 75mm for numbers',
        'Contrasting colors required for visibility',
        'Numbers must match vehicle registration documents',
        'Compliance with National Road Traffic Act required',
      ],
    },
    {
      category: 'Content Restrictions',
      items: [
        'No offensive, discriminatory, or illegal content',
        'Alcohol/tobacco advertising: Restricted (check specific regulations)',
        'Political advertising: Allowed but subject to election period rules',
        'Medical claims: Must comply with Health Products Act',
        'All claims must be truthful and verifiable',
      ],
    },
    {
      category: 'Safety Standards',
      items: [
        'Materials must be weather-resistant and durable',
        'No loose or flapping materials',
        'Installation must not compromise vehicle safety features',
        'Regular inspection required (every 6 months recommended)',
        'Damaged wraps must be repaired or removed immediately',
      ],
    },
    {
      category: 'Insurance & Liability',
      items: [
        'Notify insurance company of vehicle modifications',
        'Some insurers require professional installation certificate',
        'Public liability insurance recommended for commercial vehicles',
        'Keep installation documentation for insurance claims',
        'Professional installer certification may be required',
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
            <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9] mb-4">Fleet Guide</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="block text-white">Vehicle Branding Laws</span>
              <span className="block bg-gradient-to-r from-[#00F5FF] via-[#2D9CFF] to-[#FF1744] bg-clip-text text-transparent">
                South African Road Traffic Regulations
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              Complete guide to South African road traffic regulations for vehicle wraps, fleet numbering, and mobile advertising compliance.
            </p>
          </div>

          <div className="mb-8 rounded-2xl border border-[#FF6B00]/30 bg-[#FF6B00]/5 p-6">
            <p className="text-slate-200">
              <strong className="text-white">Legal Note:</strong> This guide provides general information based on the National Road Traffic Act. Always consult with legal counsel and verify current regulations with relevant authorities. Regulations may vary by province and municipality.
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
            <h3 className="text-2xl font-bold text-white mb-3">Need Fleet Branding Support?</h3>
            <p className="text-slate-300 mb-6">
              Our certified installers ensure all vehicle wraps and fleet branding meet South African regulations. We handle compliance documentation and provide installation certificates.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#00F5FF] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(0,245,255,0.4)]"
            >
              Get Fleet Branding Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

