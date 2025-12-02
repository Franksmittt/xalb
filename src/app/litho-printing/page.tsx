import Link from 'next/link';

export default function LithoPrintingPage() {
  const advantages = [
    {
      title: 'Superior Quality',
      description: 'Crisp, sharp text and images with exceptional color accuracy and detail.',
      icon: '✨',
    },
    {
      title: 'Cost-Effective at Scale',
      description: 'Most economical option for high-volume print runs (1000+ units).',
      icon: '💰',
    },
    {
      title: 'Versatile Materials',
      description: 'Print on paper, cardstock, coated/uncoated stocks, and specialty papers.',
      icon: '📄',
    },
    {
      title: 'Color Consistency',
      description: 'PMS spot colors and CMYK process colors maintain consistency across entire run.',
      icon: '🎨',
    },
    {
      title: 'Fast Turnaround',
      description: '10-day standard lead time for most projects, rush options available.',
      icon: '⚡',
    },
    {
      title: 'Large Format Capability',
      description: 'Handle large sheet sizes up to B1 format for posters and displays.',
      icon: '📐',
    },
  ];

  const applications = [
    {
      category: 'Marketing Materials',
      items: [
        'Brochures and catalogs',
        'Flyers and leaflets',
        'Posters and large format prints',
        'Direct mail campaigns',
        'Product sheets and spec sheets',
      ],
    },
    {
      category: 'Corporate Identity',
      items: [
        'Business cards',
        'Letterheads and envelopes',
        'Corporate stationery',
        'Presentation folders',
        'Annual reports',
      ],
    },
    {
      category: 'Packaging & Labels',
      items: [
        'Product packaging',
        'Label printing',
        'Box printing',
        'Point-of-sale displays',
        'Promotional packaging',
      ],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Design & Prepress',
      description: 'We review your files, ensure they meet litho specifications, and prepare printing plates. Color proofs available upon request.',
      duration: '1-2 days',
    },
    {
      step: '02',
      title: 'Plate Creation',
      description: 'Each color is separated and transferred onto aluminum printing plates using laser imaging technology for precision.',
      duration: '1 day',
    },
    {
      step: '03',
      title: 'Press Setup',
      description: 'Plates are mounted on the press, inks are mixed to match your color specifications, and initial test prints are run.',
      duration: '0.5 day',
    },
    {
      step: '04',
      title: 'Printing',
      description: 'High-speed printing run with continuous quality monitoring. Large-format presses handle high volumes efficiently.',
      duration: '2-3 days',
    },
    {
      step: '05',
      title: 'Finishing',
      description: 'Cutting, folding, binding, or other finishing services applied based on your project requirements.',
      duration: '2-3 days',
    },
    {
      step: '06',
      title: 'Quality Check & Delivery',
      description: 'Final inspection, quality assurance checks, and preparation for delivery or collection.',
      duration: '1 day',
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
          {/* Hero Section */}
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9] mb-4">Print Services</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="block text-white">Lithographic Printing</span>
              <span className="block bg-gradient-to-r from-[#00F5FF] via-[#2D9CFF] to-[#FF1744] bg-clip-text text-transparent">
                Offset Excellence for High-Volume Projects
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
              Professional lithographic (offset) printing for superior quality, cost-effective large runs, and consistent color reproduction.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-[#00F5FF]/10 text-[#00F5FF] border border-[#00F5FF]/30">
                Lead Time: 10 Days
              </span>
              <span className="px-4 py-2 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30">
                Minimum: 1000 Units
              </span>
              <span className="px-4 py-2 rounded-full bg-[#FF1744]/10 text-[#FF1744] border border-[#FF1744]/30">
                Up to B1 Format
              </span>
            </div>
          </div>

          {/* What is Litho Printing */}
          <div className="mb-16">
            <div className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">What is Lithographic Printing?</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Lithographic printing, also known as offset printing, is a high-quality printing method that uses aluminum printing plates to transfer ink onto paper. The process gets its name from the principle that oil (ink) and water don&apos;t mix—the image areas on the plate attract ink while the non-image areas repel it.
                </p>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  This time-tested technology produces exceptional print quality with sharp text, vibrant colors, and consistent results across high-volume runs. Unlike digital printing, litho becomes more cost-effective as quantities increase, making it ideal for large print jobs like catalogs, brochures, marketing materials, and corporate stationery.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Our state-of-the-art lithographic presses handle everything from business cards to large-format posters, with capabilities up to B1 sheet size and support for both CMYK process colors and PMS spot colors for brand-critical projects.
                </p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">How Lithographic Printing Works</h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">The Offset Process</h3>
                <ol className="space-y-4 text-slate-300">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00F5FF]/20 border border-[#00F5FF] text-[#00F5FF] flex items-center justify-center text-sm font-bold">1</span>
                    <span>Printing plates are created from your digital files—one plate per color (CMYK or spot colors).</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00F5FF]/20 border border-[#00F5FF] text-[#00F5FF] flex items-center justify-center text-sm font-bold">2</span>
                    <span>Each plate is mounted on the press cylinder and dampened with water, then inked.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00F5FF]/20 border border-[#00F5FF] text-[#00F5FF] flex items-center justify-center text-sm font-bold">3</span>
                    <span>The inked image transfers (offsets) from the plate to a rubber blanket cylinder.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00F5FF]/20 border border-[#00F5FF] text-[#00F5FF] flex items-center justify-center text-sm font-bold">4</span>
                    <span>The blanket then transfers the image onto the paper as it passes through the press.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00F5FF]/20 border border-[#00F5FF] text-[#00F5FF] flex items-center justify-center text-sm font-bold">5</span>
                    <span>Multiple colors are printed in sequence, with precise registration between color passes.</span>
                  </li>
                </ol>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Litho?</h3>
                <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                    <span><strong className="text-white">Superior Quality:</strong> Unmatched sharpness and color accuracy for professional results.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                    <span><strong className="text-white">Cost at Scale:</strong> Per-unit cost decreases significantly with higher quantities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                    <span><strong className="text-white">Color Matching:</strong> PMS spot colors and brand colors reproduced with precision.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                    <span><strong className="text-white">Material Options:</strong> Wide range of paper stocks, weights, and finishes available.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                    <span><strong className="text-white">Consistency:</strong> Every print in the run matches perfectly—no variations.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advantages Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Key Advantages</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advantages.map((advantage) => (
                <div
                  key={advantage.title}
                  className="rounded-2xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-6 hover:border-white/20 transition-all"
                >
                  <div className="text-4xl mb-4">{advantage.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{advantage.title}</h3>
                  <p className="text-slate-300 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Common Applications</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {applications.map((category) => (
                <div
                  key={category.category}
                  className="rounded-2xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-slate-300 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our 10-Day Process</h2>
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-6 md:p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#FF1744] flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-slate-300">{step.description}</p>
                      </div>
                    </div>
                    <span className="flex-shrink-0 px-4 py-2 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 text-sm font-semibold">
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="mb-16">
            <div className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-8">Technical Specifications</h2>
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Capabilities</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                      <span><strong className="text-white">Sheet Size:</strong> Up to B1 format (707mm × 1000mm)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                      <span><strong className="text-white">Paper Weight:</strong> 80gsm to 400gsm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                      <span><strong className="text-white">Color:</strong> CMYK + up to 2 PMS spot colors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                      <span><strong className="text-white">Resolution:</strong> Up to 300 line screen (lpi)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Finishing Options</h3>
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                      <span>Cutting and trimming</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                      <span>Folding (various fold types)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                      <span>Binding (stapling, perfect binding, spiral)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                      <span>Laminating and varnishing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                      <span>Embossing and foil stamping</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#00F5FF]/5 to-[#FF1744]/5 p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Litho Project?</h3>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Get a quote for your high-volume printing project. Our team will review your specifications and provide pricing within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#00F5FF] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(0,245,255,0.4)]"
              >
                Request a Quote
              </Link>
              <Link
                href="/resources/print-ready-checklist"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 transition-all"
              >
                Print-Ready Checklist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

