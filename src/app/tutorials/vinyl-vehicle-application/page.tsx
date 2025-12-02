'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const sections = [
  {
    title: 'Why Quality Vinyl Matters',
    content: [
      {
        type: 'paragraph',
        text: "The difference between a professional vehicle wrap that lasts 5+ years and a cheap wrap that peels off in days comes down to one thing: the vinyl quality. Many DIY enthusiasts and budget-conscious customers make the critical mistake of choosing the cheapest vinyl available, only to discover it's peeling, fading, or bubbling within weeks.",
      },
      {
        type: 'warning',
        text: "Cheap vinyl isn't just a waste of money—it can damage your vehicle's paint when it fails, leaving behind adhesive residue and requiring expensive paint correction.",
      },
    ],
  },
  {
    title: 'Understanding Vinyl Types: Cast vs Calendered',
    content: [
      {
        type: 'paragraph',
        text: 'There are two main types of vinyl used for vehicle wrapping: cast and calendered. Understanding the difference is crucial.',
      },
      {
        type: 'comparison',
        title: 'Cast Vinyl (Premium)',
        points: [
          'Manufactured using a casting process for superior quality',
          'Conforms to complex curves and recesses without heat',
          'Maintains color and adhesive integrity for 5-7 years',
          'Resistant to shrinking, fading, and edge lifting',
          'Professional-grade adhesive that releases cleanly',
          'Higher initial cost but better long-term value',
        ],
        highlight: true,
      },
      {
        type: 'comparison',
        title: 'Calendered Vinyl (Budget)',
        points: [
          'Manufactured using a calendering process (less expensive)',
          'Requires heat to conform to curves',
          'Prone to shrinking, fading, and edge lifting',
          'Adhesive can fail in extreme temperatures',
          'May leave residue when removed',
          'Lower cost but often fails within 1-2 years',
        ],
        highlight: false,
      },
    ],
  },
  {
    title: 'The Real Cost of Cheap Vinyl',
    content: [
      {
        type: 'paragraph',
        text: "When you see a 'bargain' vinyl wrap that's significantly cheaper than professional quotes, here's what you're really paying for:",
      },
      {
        type: 'list',
        items: [
          'Replacement costs when it fails prematurely',
          'Paint damage from adhesive failure',
          'Labor costs for removal and reapplication',
          'Lost time and business downtime',
          'Potential warranty voiding if paint is damaged',
        ],
      },
      {
        type: 'paragraph',
        text: 'Professional-grade cast vinyl may cost 2-3x more initially, but it lasts 3-5x longer and protects your investment.',
      },
    ],
  },
];

const steps = [
  {
    number: '01',
    title: 'Surface Preparation',
    description: 'The foundation of a successful wrap. Every surface must be immaculately clean.',
    details: [
      'Wash vehicle with automotive soap (never household detergents)',
      'Use isopropyl alcohol (70% or higher) to remove all wax, grease, and contaminants',
      'Clay bar the surface to remove embedded particles',
      'Ensure surface is completely dry before proceeding',
      'Work in a dust-free, temperature-controlled environment (18-24°C ideal)',
    ],
    image: '/images/tutorial/vinyl/Tutotialvinyl01.png',
    warning: 'Skipping proper surface prep is the #1 cause of wrap failure.',
  },
  {
    number: '02',
    title: 'Measuring and Cutting',
    description: 'Precision is everything. Measure twice, cut once.',
    details: [
      'Measure each panel carefully, adding 2-3 inches of overlap',
      'Use a sharp blade and replace frequently (dull blades cause tearing)',
      'Cut on a clean, flat surface to avoid contamination',
      'For complex shapes, create a template first',
      'Always cut with the grain direction in mind',
    ],
    image: '/images/tutorial/vinyl/Tutotialvinyl02.png',
  },
  {
    number: '03',
    title: 'Application Technique',
    description: 'The moment of truth. Proper technique prevents bubbles, wrinkles, and failures.',
    details: [
      'Start from the center and work outward (hinge method)',
      'Use a squeegee with felt edge to avoid scratching',
      'Apply firm, even pressure in overlapping strokes',
      'Work out air bubbles immediately—they become permanent if left',
      'For curves, use heat gun (350-400°F) sparingly and evenly',
      'Stretch vinyl gently—overstretching causes premature failure',
    ],
    image: '/images/tutorial/vinyl/Tutotialvinyl03.png',
    tip: 'Professional installers use the "hinge method": apply the center first, then work outward in sections.',
  },
  {
    number: '04',
    title: 'Post-Application Care',
    description: 'The wrap needs time to cure and bond properly.',
    details: [
      'Allow 24-48 hours before washing',
      'Avoid high-pressure car washes for first week',
      'Use only recommended cleaning products (no harsh chemicals)',
      'Park in shade when possible to reduce UV exposure',
      'Inspect edges weekly for the first month',
      'Address any lifting edges immediately with heat and pressure',
    ],
    image: '/images/tutorial/vinyl/Tutotialvinyl04.png',
  },
];

const commonMistakes = [
  {
    mistake: 'Using household cleaners or soap',
    consequence: 'Leaves residue that prevents proper adhesion',
    solution: 'Use only isopropyl alcohol and automotive-specific cleaners',
  },
  {
    mistake: 'Applying in direct sunlight or extreme temperatures',
    consequence: 'Vinyl becomes too pliable or too rigid, causing application issues',
    solution: 'Work in controlled environment between 18-24°C',
  },
  {
    mistake: 'Not removing air bubbles immediately',
    consequence: 'Bubbles become permanent and can lead to edge lifting',
    solution: 'Work methodically, removing bubbles as you go with squeegee',
  },
  {
    mistake: 'Overstretching vinyl on curves',
    consequence: 'Causes premature failure and edge lifting',
    solution: 'Use heat gun to make vinyl pliable, but stretch minimally',
  },
  {
    mistake: 'Cutting too close to edges',
    consequence: 'Leaves no margin for error, increases failure risk',
    solution: 'Always leave 2-3 inches overlap, trim after application',
  },
];

export default function VinylApplicationTutorial() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF1744]/10 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-slate-400">
            <Link href="/tutorials" className="hover:text-[#00F5FF] transition-colors">
              Tutorials
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">Vinyl Vehicle Application</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#00F5FF]/20 text-[#00F5FF] mb-4">
              Vehicle Wrapping
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              How to Apply Vinyl to Vehicles: Professional Guide
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Master the art of vehicle wrapping with our comprehensive guide. Learn why quality vinyl matters, 
              proper application techniques, and avoid costly mistakes that lead to premature failure.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/10">
                ⏱️ 15 min read
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/10">
                🎯 Intermediate
              </span>
            </div>
          </div>

          {/* Introduction Warning */}
          <div className="rounded-3xl border border-[#FF1744]/30 bg-gradient-to-br from-[#FF1744]/10 to-[#FF6B00]/10 p-6 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">⚠️</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Why This Guide Matters</h3>
                <p className="text-slate-200">
                  We see it every week: customers who tried to save money with cheap vinyl, only to watch it peel, 
                  bubble, and fail within days or weeks. This guide teaches you not just <em>how</em> to apply vinyl, 
                  but <strong>why</strong> using quality materials and proper techniques saves money in the long run.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Sections */}
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-6">{section.title}</h2>
              {section.content.map((item, itemIndex) => (
                <div key={itemIndex} className="mb-6">
                  {item.type === 'paragraph' && (
                    <p className="text-slate-200 text-lg leading-relaxed">{item.text}</p>
                  )}
                  {item.type === 'warning' && (
                    <div className="rounded-2xl border border-[#FF1744]/30 bg-[#FF1744]/10 p-6 my-6">
                      <p className="text-slate-200">{item.text}</p>
                    </div>
                  )}
                  {item.type === 'comparison' && 'title' in item && 'points' in item && item.points && (
                    <div className={`rounded-2xl border p-6 mb-4 ${item.highlight ? 'border-[#00F5FF]/30 bg-[#00F5FF]/10' : 'border-white/10 bg-white/5'}`}>
                      <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.points.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-3 text-slate-200">
                            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${item.highlight ? 'bg-[#00F5FF]' : 'bg-slate-400'}`} />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.type === 'list' && 'items' in item && item.items && (
                    <ul className="space-y-2 ml-6">
                      {item.items.map((listItem, listIndex) => (
                        <li key={listIndex} className="text-slate-200 flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF6B00] flex-shrink-0" />
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </motion.div>
          ))}

          {/* Step-by-Step Guide */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Step-by-Step Application Guide</h2>
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-[#01030B]/95 p-6 sm:p-8"
                >
                  <div className="flex gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#FF1744] flex items-center justify-center text-2xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-300 text-lg">{step.description}</p>
                    </div>
                  </div>
                  
                  {step.image && (
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-white/10">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${step.image}')` }}
                      />
                    </div>
                  )}

                  <ul className="space-y-3 mb-4">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start gap-3 text-slate-200">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  {step.warning && (
                    <div className="rounded-xl border border-[#FF1744]/30 bg-[#FF1744]/10 p-4 mt-4">
                      <p className="text-slate-200 font-semibold">⚠️ {step.warning}</p>
                    </div>
                  )}

                  {step.tip && (
                    <div className="rounded-xl border border-[#00F5FF]/30 bg-[#00F5FF]/10 p-4 mt-4">
                      <p className="text-slate-200"><strong>💡 Pro Tip:</strong> {step.tip}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Common Mistakes That Lead to Failure</h2>
            <div className="space-y-4">
              {commonMistakes.map((mistake, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 text-2xl">❌</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2">{mistake.mistake}</h4>
                      <p className="text-slate-300 mb-2"><strong>Consequence:</strong> {mistake.consequence}</p>
                      <p className="text-[#00F5FF]"><strong>Solution:</strong> {mistake.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Services CTA */}
          <div className="rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#00F5FF]/10 to-[#FF1744]/10 p-8 md:p-12 text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Professional Installation Matters
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg">
              While this guide teaches you the fundamentals, professional installation ensures:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8 text-left max-w-3xl mx-auto">
              <li className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                <span>Premium cast vinyl with 5-7 year warranty</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                <span>Certified installers with years of experience</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                <span>Climate-controlled installation facility</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00F5FF] flex-shrink-0" />
                <span>Post-installation warranty and support</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#00F5FF] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(0,245,255,0.4)]"
              >
                Get a Professional Quote
              </Link>
              <Link
                href="/solutions/fleet-branding"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 transition-all"
              >
                View Fleet Branding Services
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-white/10">
            <Link
              href="/tutorials"
              className="text-[#00F5FF] hover:text-[#67E8F9] transition-colors flex items-center gap-2"
            >
              ← Back to All Tutorials
            </Link>
            <Link
              href="/tutorials/vinyl-types"
              className="text-[#00F5FF] hover:text-[#67E8F9] transition-colors flex items-center gap-2"
            >
              Next: Choosing the Right Vinyl →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

