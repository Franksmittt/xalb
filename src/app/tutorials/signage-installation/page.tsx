'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const installationSteps = [
  {
    number: '01',
    title: 'Surface Assessment & Preparation',
    description: 'The foundation of a successful installation. Every surface must be properly evaluated and prepared.',
    details: [
      'Inspect surface condition (clean, dry, smooth)',
      'Check for cracks, peeling paint, or damage',
      'Test surface compatibility with adhesive',
      'Clean thoroughly with appropriate cleaner',
      'Remove all dirt, grease, oil, and contaminants',
      'Allow surface to dry completely',
      'Check temperature (ideal: 15-30°C)',
    ],
    image: '/images/install-team.png',
    warning: 'Skipping surface prep is the #1 cause of signage failure and premature detachment.',
  },
  {
    number: '02',
    title: 'Adhesive Selection',
    description: 'Choosing the right adhesive is critical for long-term performance.',
    details: [
      'Permanent adhesive for long-term installations',
      'Removable adhesive for temporary signage',
      'VHB tape for heavy-duty applications',
      'Consider surface material (concrete, metal, glass, etc.)',
      'Factor in weather exposure and temperature ranges',
      'Account for surface texture and porosity',
    ],
    image: '/images/fabrication-lab.png',
    tip: 'Professional installers test adhesive compatibility on a small area first.',
  },
  {
    number: '03',
    title: 'Measuring & Positioning',
    description: 'Precision placement ensures professional results.',
    details: [
      'Measure installation area accurately',
      'Mark center points and alignment guides',
      'Use level and plumb bob for vertical alignment',
      'Account for expansion joints and building movement',
      'Plan for access and visibility requirements',
      'Check local regulations and height restrictions',
    ],
    image: '/images/hero-print.png',
  },
  {
    number: '04',
    title: 'Application Technique',
    description: 'Proper application ensures adhesion and prevents air bubbles.',
    details: [
      'Apply adhesive evenly across entire surface',
      'Use proper tools (squeegee, roller) for pressure',
      'Work from center outward to remove air',
      'Apply firm, consistent pressure',
      'Check for bubbles and smooth immediately',
      'Use heat gun for curved surfaces if needed',
    ],
    image: '/images/fleet-lineup.png',
  },
  {
    number: '05',
    title: 'Weatherproofing & Edge Sealing',
    description: 'Protect your investment from the elements.',
    details: [
      'Seal all edges with appropriate sealant',
      'Use UV-resistant edge tape for outdoor signage',
      'Protect corners and vulnerable areas',
      'Apply protective laminate if required',
      'Check drainage to prevent water pooling',
      'Inspect for gaps that could allow moisture',
    ],
    image: '/images/install-team.png',
  },
  {
    number: '06',
    title: 'Post-Installation Inspection',
    description: 'Quality control ensures long-term success.',
    details: [
      'Inspect for bubbles, wrinkles, or lifting edges',
      'Check alignment and positioning',
      'Verify all edges are properly sealed',
      'Test adhesion at corners and edges',
      'Document installation with photos',
      'Provide maintenance instructions to client',
    ],
    image: '/images/fabrication-lab.png',
  },
];

const commonMistakes = [
  {
    mistake: 'Installing on dirty or wet surfaces',
    consequence: 'Adhesive fails to bond properly, leading to premature failure',
    solution: 'Always clean and dry surfaces completely before installation',
  },
  {
    mistake: 'Using wrong adhesive type',
    consequence: 'Signage falls off in extreme weather or doesn\'t stick at all',
    solution: 'Match adhesive to surface material and environmental conditions',
  },
  {
    mistake: 'Skipping edge sealing',
    consequence: 'Water penetrates, causing delamination and failure',
    solution: 'Always seal edges, especially for outdoor installations',
  },
  {
    mistake: 'Installing in extreme temperatures',
    consequence: 'Adhesive doesn\'t cure properly or becomes too rigid',
    solution: 'Install in ideal temperature range (15-30°C)',
  },
  {
    mistake: 'Not accounting for building movement',
    consequence: 'Signage cracks or detaches as building expands/contracts',
    solution: 'Plan for expansion joints and use flexible materials where needed',
  },
];

const surfaceTypes = [
  {
    surface: 'Concrete / Brick',
    preparation: 'Clean with degreaser, remove loose material, ensure dry',
    adhesive: 'Heavy-duty VHB tape or construction adhesive',
    special: 'May require primer for porous surfaces',
  },
  {
    surface: 'Metal',
    preparation: 'Remove rust, clean with alcohol, ensure smooth surface',
    adhesive: 'VHB tape or permanent adhesive',
    special: 'Check for galvanized coating compatibility',
  },
  {
    surface: 'Glass',
    preparation: 'Clean with glass cleaner, remove all streaks',
    adhesive: 'Removable or permanent adhesive depending on application',
    special: 'Consider visibility requirements and regulations',
  },
  {
    surface: 'Wood',
    preparation: 'Sand smooth, remove paint if needed, seal if porous',
    adhesive: 'VHB tape or construction adhesive',
    special: 'Wood expands/contracts - account for movement',
  },
  {
    surface: 'Plastic / Composite',
    preparation: 'Clean with alcohol, check for UV degradation',
    adhesive: 'Permanent adhesive rated for plastic',
    special: 'Test compatibility - some plastics reject adhesives',
  },
];

export default function SignageInstallationTutorial() {
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
            <span className="text-slate-300">Signage Installation</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#AEDD33]/20 text-[#00F5FF] mb-4">
              Installation
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Signage Installation Best Practices
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Professional techniques for installing outdoor signage, including surface preparation, 
              adhesive application, and weatherproofing. Learn why proper installation matters.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/10">
                ⏱️ 12 min read
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/10">
                🎯 Advanced
              </span>
            </div>
          </div>

          {/* Introduction */}
          <div className="rounded-3xl border border-[#FF1744]/30 bg-gradient-to-br from-[#FF1744]/10 to-[#FF6B00]/10 p-6 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">⚠️</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Why Professional Installation Matters</h3>
                <p className="text-slate-200">
                  We&apos;ve seen it countless times: beautiful signage that fails within weeks because of improper installation. 
                  Wrong adhesive, poor surface prep, or skipped weatherproofing all lead to costly failures. This guide shows 
                  you what professional installation involves—and why it&apos;s worth hiring experts.
                </p>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">6-Step Professional Installation Process</h2>
            <div className="space-y-8">
              {installationSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-[#01030B]/95 p-6 sm:p-8"
                >
                  <div className="flex gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#AEDD33] to-[#1E8F40] flex items-center justify-center text-2xl font-bold">
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
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#AEDD33] flex-shrink-0" />
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
                    <div className="rounded-xl border border-[#AEDD33]/30 bg-[#AEDD33]/10 p-4 mt-4">
                      <p className="text-slate-200"><strong>💡 Pro Tip:</strong> {step.tip}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Surface Types Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Surface-Specific Installation Guide</h2>
            <p className="text-slate-300 mb-8 text-lg">
              Different surfaces require different approaches. Here&apos;s what you need to know for common installation surfaces:
            </p>
            
            <div className="space-y-4">
              {surfaceTypes.map((surface, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-4">{surface.surface}</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-semibold text-[#00F5FF] mb-2">Preparation:</p>
                      <p className="text-slate-300 text-sm">{surface.preparation}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#FF6B00] mb-2">Recommended Adhesive:</p>
                      <p className="text-slate-300 text-sm">{surface.adhesive}</p>
                    </div>
                  </div>
                  {surface.special && (
                    <div className="mt-4 rounded-lg border border-[#67E8F9]/30 bg-[#67E8F9]/10 p-3">
                      <p className="text-sm text-slate-200"><strong>Special Consideration:</strong> {surface.special}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Common Installation Mistakes That Lead to Failure</h2>
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

          {/* Safety Considerations */}
          <div className="mb-16 rounded-3xl border border-[#FF1744]/30 bg-gradient-to-br from-[#FF1744]/10 to-[#FF6B00]/10 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">⚠️ Safety Considerations</h2>
            <ul className="space-y-3 text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                <span><strong>Working at Height:</strong> Requires proper safety equipment, certification, and insurance. Never attempt elevated installations without proper training.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                <span><strong>Electrical Safety:</strong> Illuminated signage requires licensed electricians. Never attempt electrical work yourself.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                <span><strong>Permits & Regulations:</strong> Many installations require permits. Check local bylaws before starting.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                <span><strong>Equipment:</strong> Professional tools and equipment are essential for safe, quality installations.</span>
              </li>
            </ul>
          </div>

          {/* Professional Services CTA */}
          <div className="rounded-3xl border border-[#AEDD33]/30 bg-gradient-to-br from-[#AEDD33]/10 to-[#1E8F40]/10 p-8 md:p-12 text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Why Professional Installation is Worth It
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg">
              Professional installers bring certified expertise, proper equipment, insurance coverage, and warranty protection. 
              A failed installation costs more than professional installation—and risks damage to your building.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8 text-left max-w-3xl mx-auto">
              <li className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#AEDD33] flex-shrink-0" />
                <span>Certified installers with proper training</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#AEDD33] flex-shrink-0" />
                <span>Professional equipment and tools</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#AEDD33] flex-shrink-0" />
                <span>Insurance and liability coverage</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#AEDD33] flex-shrink-0" />
                <span>Installation warranty and support</span>
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#AEDD33] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(174,221,51,0.4)]"
              >
                Get Professional Installation Quote
              </Link>
              <Link
                href="/solutions/installation"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 transition-all"
              >
                View Installation Services
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
              href="/tutorials/vinyl-types"
              className="text-[#00F5FF] hover:text-[#AEDD33] transition-colors flex items-center gap-2"
            >
              Next: Choosing the Right Vinyl →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

