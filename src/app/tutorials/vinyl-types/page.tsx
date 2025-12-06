'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const comparison = {
  cast: {
    title: 'Cast Vinyl (Premium)',
    description: 'The professional standard for long-lasting vehicle wraps and outdoor signage.',
    manufacturing: 'Manufactured using a casting process where liquid vinyl is poured onto a release liner and cured',
    characteristics: [
      'Conforms to complex curves without heat',
      'Maintains color and adhesive integrity for 5-7 years',
      'Resistant to shrinking, fading, and edge lifting',
      'Professional-grade adhesive that releases cleanly',
      'Superior conformability to recesses and curves',
      'Better UV resistance and color stability',
    ],
    cost: '2-3x more expensive initially',
    lifespan: '5-7 years (often longer)',
    bestFor: [
      'Vehicle wraps (full and partial)',
      'Long-term outdoor signage',
      'Complex curved surfaces',
      'Premium brand applications',
      'Fleet branding programs',
    ],
    brands: '3M, Avery Dennison, Oracal (premium lines)',
    icon: '⭐',
  },
  calendered: {
    title: 'Calendered Vinyl (Budget)',
    description: 'Lower-cost option suitable for short-term applications and flat surfaces.',
    manufacturing: 'Manufactured by pressing heated vinyl through rollers (calendering process)',
    characteristics: [
      'Requires heat to conform to curves',
      'More prone to shrinking over time',
      'Adhesive can fail in extreme temperatures',
      'May leave residue when removed',
      'Less conformable to complex shapes',
      'Lower UV resistance - fades faster',
    ],
    cost: 'Lower initial cost',
    lifespan: '1-3 years (often less)',
    bestFor: [
      'Short-term promotional signage',
      'Flat surfaces only',
      'Indoor applications',
      'Temporary displays',
      'Budget-conscious projects',
    ],
    brands: 'Generic brands, economy lines',
    icon: '💰',
  },
};

const costAnalysis = [
  {
    scenario: 'Vehicle Wrap (Full)',
    castCost: 'R15,000 - R25,000',
    calenderedCost: 'R8,000 - R12,000',
    castLifespan: '5-7 years',
    calenderedLifespan: '1-2 years',
    winner: 'cast',
    note: 'Cast vinyl pays for itself after 2-3 years',
  },
  {
    scenario: 'Outdoor Signage (2m x 1m)',
    castCost: 'R3,500 - R5,000',
    calenderedCost: 'R1,500 - R2,500',
    castLifespan: '5-7 years',
    calenderedLifespan: '1-2 years',
    winner: 'cast',
    note: 'Replacement costs make calendered more expensive long-term',
  },
  {
    scenario: 'Temporary Promo (3 months)',
    castCost: 'R2,000',
    calenderedCost: 'R800',
    castLifespan: '5-7 years (overkill)',
    calenderedLifespan: '3-6 months',
    winner: 'calendered',
    note: 'For truly temporary applications, calendered makes sense',
  },
];

const whenToUse = [
  {
    situation: 'Vehicle Wrap',
    recommendation: 'Always use cast vinyl',
    reason: 'Vehicles have complex curves, exposure to elements, and need long-term durability',
    image: '/images/fleet-lineup.png',
  },
  {
    situation: 'Outdoor Signage (Permanent)',
    recommendation: 'Cast vinyl recommended',
    reason: 'UV exposure, weather, and long-term performance require premium materials',
    image: '/images/hero-print.png',
  },
  {
    situation: 'Indoor Signage (Flat)',
    recommendation: 'Calendered acceptable',
    reason: 'No UV exposure, flat surfaces, and controlled environment allow for budget option',
    image: '/images/fabrication-lab.png',
  },
  {
    situation: 'Temporary Promotions',
    recommendation: 'Calendered suitable',
    reason: 'Short lifespan and budget constraints make calendered the practical choice',
    image: '/images/install-team.png',
  },
];

const failureExamples = [
  {
    problem: 'Calendered Vinyl on Vehicle',
    whatHappens: 'Shrinks, peels at edges, fades quickly, adhesive fails in heat',
    timeline: 'Failure within 6-12 months',
    cost: 'R8,000 wasted + removal costs + new wrap needed',
  },
  {
    problem: 'Cast Vinyl on Temporary Sign',
    whatHappens: 'Works perfectly but overkill - wasted money on premium material',
    timeline: 'Sign removed after 3 months',
    cost: 'R2,000 spent when R800 would have sufficed',
  },
  {
    problem: 'Calendered Vinyl Outdoors',
    whatHappens: 'Fades, shrinks, edges lift, becomes brittle',
    timeline: 'Failure within 1-2 years',
    cost: 'Replacement needed, total cost exceeds cast vinyl',
  },
];

export default function VinylTypesTutorial() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#AEDD33]/10 rounded-full blur-[120px]" />
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
            <span className="text-slate-300">Choosing the Right Vinyl</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#AEDD33]/20 text-[#00F5FF] mb-4">
              Materials
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Choosing the Right Vinyl: Cast vs Calendered
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Understand the critical difference between cast and calendered vinyl, when to use each type, 
              and why choosing the wrong one leads to costly failures.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/10">
                ⏱️ 10 min read
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/10">
                🎯 Beginner
              </span>
            </div>
          </div>

          {/* Introduction */}
          <div className="rounded-3xl border border-[#FF1744]/30 bg-gradient-to-br from-[#FF1744]/10 to-[#FF6B00]/10 p-6 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">💡</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">The Most Important Decision</h3>
                <p className="text-slate-200">
                  Choosing between cast and calendered vinyl is the single most important decision for your project. 
                  Get it wrong, and you&apos;ll watch your investment fail within months. Get it right, and your signage 
                  or wrap will last for years. This guide shows you exactly which to choose and why.
                </p>
              </div>
            </div>
          </div>

          {/* Side-by-Side Comparison */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Cast vs Calendered: The Complete Comparison</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Cast Vinyl */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-[#AEDD33]/30 bg-gradient-to-br from-[#AEDD33]/10 to-[#2D9CFF]/10 p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{comparison.cast.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{comparison.cast.title}</h3>
                </div>
                <p className="text-slate-200 mb-6">{comparison.cast.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#00F5FF] mb-2">How It&apos;s Made:</h4>
                  <p className="text-slate-300 text-sm">{comparison.cast.manufacturing}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Characteristics:</h4>
                  <ul className="space-y-2">
                    {comparison.cast.characteristics.map((char, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-200 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#AEDD33] flex-shrink-0" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <p className="text-slate-400 mb-1">Cost:</p>
                    <p className="text-white font-semibold">{comparison.cast.cost}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1">Lifespan:</p>
                    <p className="text-white font-semibold">{comparison.cast.lifespan}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Best For:</h4>
                  <ul className="space-y-1">
                    {comparison.cast.bestFor.map((use, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-[#AEDD33] flex-shrink-0" />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-slate-400"><strong>Premium Brands:</strong> {comparison.cast.brands}</p>
              </motion.div>

              {/* Calendered Vinyl */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{comparison.calendered.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{comparison.calendered.title}</h3>
                </div>
                <p className="text-slate-200 mb-6">{comparison.calendered.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-300 mb-2">How It&apos;s Made:</h4>
                  <p className="text-slate-300 text-sm">{comparison.calendered.manufacturing}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Characteristics:</h4>
                  <ul className="space-y-2">
                    {comparison.calendered.characteristics.map((char, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-200 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <p className="text-slate-400 mb-1">Cost:</p>
                    <p className="text-white font-semibold">{comparison.calendered.cost}</p>
                  </div>
                  <div>
                    <p className="text-slate-400 mb-1">Lifespan:</p>
                    <p className="text-white font-semibold">{comparison.calendered.lifespan}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Best For:</h4>
                  <ul className="space-y-1">
                    {comparison.calendered.bestFor.map((use, i) => (
                      <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                        <span className="mt-1 h-1 w-1 rounded-full bg-slate-400 flex-shrink-0" />
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-slate-400"><strong>Common Brands:</strong> {comparison.calendered.brands}</p>
              </motion.div>
            </div>
          </div>

          {/* Cost Analysis */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Real Cost Analysis: Initial vs Long-Term</h2>
            <p className="text-slate-300 mb-8 text-lg">
              The initial price difference is misleading. Here&apos;s what you actually pay over time:
            </p>
            
            <div className="space-y-4">
              {costAnalysis.map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-[#01030B]/95 p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{scenario.scenario}</h3>
                  <div className="grid sm:grid-cols-2 gap-6 mb-4">
                    <div className={`rounded-xl p-4 ${scenario.winner === 'cast' ? 'border border-[#AEDD33]/30 bg-[#AEDD33]/10' : 'border border-white/10 bg-white/5'}`}>
                      <h4 className="text-sm font-semibold text-[#00F5FF] mb-2">Cast Vinyl</h4>
                      <p className="text-white font-bold mb-1">{scenario.castCost}</p>
                      <p className="text-slate-300 text-sm">Lifespan: {scenario.castLifespan}</p>
                    </div>
                    <div className={`rounded-xl p-4 ${scenario.winner === 'calendered' ? 'border border-[#FF6B00]/30 bg-[#FF6B00]/10' : 'border border-white/10 bg-white/5'}`}>
                      <h4 className="text-sm font-semibold text-slate-300 mb-2">Calendered Vinyl</h4>
                      <p className="text-white font-bold mb-1">{scenario.calenderedCost}</p>
                      <p className="text-slate-300 text-sm">Lifespan: {scenario.calenderedLifespan}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300"><strong>💡 Insight:</strong> {scenario.note}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* When to Use Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">When to Use Each Type</h2>
            <div className="space-y-6">
              {whenToUse.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex gap-6">
                    {item.image && (
                      <div className="hidden sm:block flex-shrink-0 w-32 h-32 rounded-xl overflow-hidden border border-white/10">
                        <div
                          className="w-full h-full bg-cover bg-center"
                          style={{ backgroundImage: `url('${item.image}')` }}
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{item.situation}</h3>
                      <p className="text-[#00F5FF] font-semibold mb-2">{item.recommendation}</p>
                      <p className="text-slate-300 text-sm">{item.reason}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Failure Examples */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Real-World Failure Examples</h2>
            <div className="space-y-4">
              {failureExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-[#FF1744]/30 bg-[#FF1744]/10 p-6"
                >
                  <h4 className="text-lg font-bold text-white mb-2">{example.problem}</h4>
                  <p className="text-slate-200 mb-2"><strong>What Happens:</strong> {example.whatHappens}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="text-slate-300"><strong>Timeline:</strong> {example.timeline}</span>
                    <span className="text-[#FF1744]"><strong>Cost:</strong> {example.cost}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl border border-[#AEDD33]/30 bg-gradient-to-br from-[#AEDD33]/10 to-[#1E8F40]/10 p-8 md:p-12 text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Help Choosing?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg">
              Our team can help you choose the right vinyl for your specific application, budget, and timeline. 
              We&apos;ll recommend the best option to ensure your project succeeds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#AEDD33] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(174,221,51,0.4)]"
              >
                Get Expert Advice
              </Link>
              <Link
                href="/solutions/fleet-branding"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-8 border-t border-white/10">
            <Link
              href="/tutorials"
              className="text-[#00F5FF] hover:text-[#AEDD33] transition-colors flex items-center gap-2"
            >
              ← Back to All Tutorials
            </Link>
            <Link
              href="/tutorials/vinyl-vehicle-application"
              className="text-[#00F5FF] hover:text-[#AEDD33] transition-colors flex items-center gap-2"
            >
              Next: Vehicle Wrapping Guide →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

