'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const commonProblems = [
  {
    problem: 'Tiny Image, Massive Print',
    description: 'Customer sends a 500x500px logo and wants it printed 3 meters wide',
    whyItFails: 'Image becomes pixelated, blurry, and unprofessional',
    solution: 'Need 300 DPI at final print size. A 3m print needs 35,433 pixels wide!',
    image: '/images/tutorial/print/tiny-image-large-print.png',
    visual: 'comparison',
  },
  {
    problem: 'Wrong File Format',
    description: 'Sending JPG screenshots, Word documents, or low-res web images',
    whyItFails: 'JPG compression creates artifacts. Word docs aren\'t print-ready. Web images are 72 DPI.',
    solution: 'Use PDF (vector), AI, EPS, or high-res PNG/TIFF (300 DPI minimum)',
    image: '/images/tutorial/print/wrong-file-format.png',
    visual: 'comparison',
  },
  {
    problem: 'Wrong Aspect Ratio',
    description: 'Design created for Instagram (1:1) but needs to fit a 16:9 banner',
    whyItFails: 'Content gets cropped, stretched, or distorted',
    solution: 'Design in the correct aspect ratio from the start, or create separate versions',
    image: '/images/tutorial/print/wrong-aspect-ratio.png',
    visual: 'comparison',
  },
  {
    problem: 'Unrealistic Lead Times',
    description: '"I need this tomorrow" for a 1000-unit print job',
    whyItFails: 'Printing, cutting, finishing, and quality control all take time',
    solution: 'Understand the process: design (1-2 days) + print (2-5 days) + finishing (1-2 days) = realistic timeline',
    image: '/images/tutorial/print/lead-time-process.png',
    visual: 'timeline',
  },
];

const resolutionGuide = [
  {
    printSize: 'Business Card (90mm x 50mm)',
    minResolution: '1063 x 591 pixels',
    dpi: '300 DPI',
    fileSize: '~2-3 MB',
    example: 'Logo should be at least 1000px wide',
  },
  {
    printSize: 'A4 Poster (297mm x 210mm)',
    minResolution: '3508 x 2480 pixels',
    dpi: '300 DPI',
    fileSize: '~25-30 MB',
    example: 'Full page design at high quality',
  },
  {
    printSize: 'A1 Poster (841mm x 594mm)',
    minResolution: '9933 x 7016 pixels',
    dpi: '300 DPI',
    fileSize: '~200-250 MB',
    example: 'Large format poster or banner',
  },
  {
    printSize: 'Vehicle Wrap Panel (2m x 1.5m)',
    minResolution: '23,622 x 17,717 pixels',
    dpi: '300 DPI',
    fileSize: '~1.2-1.5 GB',
    example: 'Full vehicle side panel',
  },
  {
    printSize: 'Building Wrap (10m x 5m)',
    minResolution: '118,110 x 59,055 pixels',
    dpi: '300 DPI',
    fileSize: '~20-25 GB',
    example: 'Massive outdoor signage',
  },
];

const fileFormats = [
  {
    format: 'PDF (Vector)',
    bestFor: 'Logos, text, scalable graphics',
    pros: ['Infinitely scalable', 'Small file size', 'Print-ready', 'Professional standard'],
    cons: ['Not for photos'],
    whenToUse: 'Always preferred for logos and text-based designs',
    icon: '📄',
  },
  {
    format: 'AI / EPS (Vector)',
    bestFor: 'Original design files, logos',
    pros: ['Editable', 'Scalable', 'Professional'],
    cons: ['Requires design software'],
    whenToUse: 'When you have the original design file',
    icon: '🎨',
  },
  {
    format: 'PNG (High-Res)',
    bestFor: 'Photos, complex images with transparency',
    pros: ['Lossless compression', 'Supports transparency', 'Good quality'],
    cons: ['Large file sizes', 'Not scalable'],
    whenToUse: 'Photos at 300 DPI minimum',
    icon: '🖼️',
  },
  {
    format: 'TIFF',
    bestFor: 'Professional photography, archival quality',
    pros: ['Highest quality', 'No compression', 'Professional standard'],
    cons: ['Very large files'],
    whenToUse: 'When maximum quality is required',
    icon: '📷',
  },
  {
    format: 'JPG (High-Res)',
    bestFor: 'Photos only, when file size matters',
    pros: ['Smaller file size', 'Universal support'],
    cons: ['Lossy compression', 'Not for logos/text', 'Quality loss'],
    whenToUse: 'Photos at 300 DPI, never for logos',
    icon: '📸',
  },
  {
    format: '❌ Word / PowerPoint',
    bestFor: 'Nothing - not print-ready',
    pros: [],
    cons: ['Low resolution', 'Not designed for print', 'Font issues', 'Color problems'],
    whenToUse: 'Never - convert to PDF first',
    icon: '🚫',
  },
];

const leadTimeBreakdown = [
  {
    stage: 'File Review & Preparation',
    duration: '1-2 days',
    whatHappens: [
      'Review file quality and format',
      'Check resolution and color profiles',
      'Fix any issues or request corrections',
      'Prepare files for production',
    ],
    whyItTakesTime: 'Ensuring quality prevents costly reprints',
  },
  {
    stage: 'Design Adjustments (if needed)',
    duration: '1-3 days',
    whatHappens: [
      'Resize or reformat designs',
      'Fix resolution issues',
      'Adjust colors for print',
      'Create print-ready files',
    ],
    whyItTakesTime: 'Rushing design fixes leads to errors',
  },
  {
    stage: 'Printing',
    duration: '2-5 days',
    whatHappens: [
      'Color calibration and proofing',
      'Actual printing process',
      'Quality checks during print',
      'Curing/drying time',
    ],
    whyItTakesTime: 'Large format prints need time to dry and cure properly',
  },
  {
    stage: 'Finishing & Production',
    duration: '1-3 days',
    whatHappens: [
      'Cutting and trimming',
      'Laminating (if required)',
      'Mounting or framing',
      'Final quality inspection',
    ],
    whyItTakesTime: 'Each step requires precision and quality control',
  },
  {
    stage: 'Packaging & Dispatch',
    duration: '1 day',
    whatHappens: [
      'Careful packaging',
      'Labeling and documentation',
      'Dispatch preparation',
    ],
    whyItTakesTime: 'Proper packaging prevents damage in transit',
  },
];

export default function PrintReadyFilePreparation() {
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
            <span className="text-slate-300">Print-Ready File Preparation</span>
          </nav>

          {/* Header */}
          <div className="mb-12">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#AEDD33]/20 text-[#00F5FF] mb-4">
              Design & Production
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Print-Ready File Preparation Guide
            </h1>
            <p className="text-xl text-slate-300 mb-6">
              Avoid costly mistakes and delays. Learn how to prepare files correctly, understand resolution requirements, 
              and set realistic expectations for lead times.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/10">
                ⏱️ 12 min read
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 text-slate-300 border border-white/10">
                🎯 Beginner
              </span>
            </div>
          </div>

          {/* Introduction */}
          <div className="rounded-3xl border border-[#AEDD33]/30 bg-gradient-to-br from-[#AEDD33]/10 to-[#1E8F40]/10 p-6 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 text-3xl">💡</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Why This Matters</h3>
                <p className="text-slate-200">
                  Most printing delays and quality issues come from incorrect file preparation. A tiny logo stretched to 
                  billboard size, wrong file formats, or unrealistic timelines all lead to disappointment and extra costs. 
                  This guide shows you exactly what we need and why.
                </p>
              </div>
            </div>
          </div>

          {/* Common Problems Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">The 4 Most Common Problems (And How to Fix Them)</h2>
            <div className="space-y-8">
              {commonProblems.map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-[#01030B]/95 p-6 sm:p-8"
                >
                  <div className="flex gap-4 mb-4">
                    <div className="flex-shrink-0 text-3xl">⚠️</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{issue.problem}</h3>
                      <p className="text-slate-300 text-lg mb-4">{issue.description}</p>
                    </div>
                  </div>

                  {issue.image && (
                    <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-white/10">
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${issue.image}')` }}
                      />
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl border border-[#FF1744]/30 bg-[#FF1744]/10 p-4">
                      <h4 className="text-lg font-bold text-white mb-2">Why It Fails</h4>
                      <p className="text-slate-200">{issue.whyItFails}</p>
                    </div>
                    <div className="rounded-xl border border-[#AEDD33]/30 bg-[#AEDD33]/10 p-4">
                      <h4 className="text-lg font-bold text-white mb-2">The Solution</h4>
                      <p className="text-slate-200">{issue.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Resolution Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Resolution Requirements by Print Size</h2>
            <p className="text-slate-300 mb-8 text-lg">
              The golden rule: <strong className="text-white">300 DPI (dots per inch) at final print size</strong>. 
              This means a 1-meter wide print needs 11,811 pixels wide. Here&apos;s a quick reference:
            </p>
            
            <div className="rounded-3xl border border-white/10 bg-[#01030B]/95 p-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-4 pr-6 text-sm font-semibold text-slate-300 uppercase">Print Size</th>
                    <th className="pb-4 pr-6 text-sm font-semibold text-slate-300 uppercase">Min Resolution</th>
                    <th className="pb-4 pr-6 text-sm font-semibold text-slate-300 uppercase">DPI</th>
                    <th className="pb-4 text-sm font-semibold text-slate-300 uppercase">Example</th>
                  </tr>
                </thead>
                <tbody>
                  {resolutionGuide.map((item, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="py-4 pr-6 text-white font-medium">{item.printSize}</td>
                      <td className="py-4 pr-6 text-[#00F5FF] font-mono text-sm">{item.minResolution}</td>
                      <td className="py-4 pr-6 text-slate-300">{item.dpi}</td>
                      <td className="py-4 text-slate-400 text-sm">{item.example}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 rounded-2xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 p-6">
              <h4 className="text-lg font-bold text-white mb-2">💡 Quick Calculation</h4>
              <p className="text-slate-200 mb-2">
                <strong>Formula:</strong> Print width (inches) × 300 = Required pixels
              </p>
              <p className="text-slate-300 text-sm">
                Example: 3 meters = 118 inches × 300 = 35,400 pixels wide minimum
              </p>
            </div>
          </div>

          {/* File Formats Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">File Formats: What to Use (And What to Avoid)</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {fileFormats.map((format, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`rounded-2xl border p-6 ${
                    format.format.includes('❌')
                      ? 'border-[#FF1744]/30 bg-[#FF1744]/10'
                      : 'border-white/10 bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{format.icon}</span>
                    <h3 className="text-xl font-bold text-white">{format.format}</h3>
                  </div>
                  <p className="text-slate-300 mb-4"><strong>Best for:</strong> {format.bestFor}</p>
                  
                  {format.pros.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-[#00F5FF] mb-2">✅ Pros:</p>
                      <ul className="space-y-1 text-sm text-slate-300">
                        {format.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#AEDD33] flex-shrink-0" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {format.cons.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-[#FF1744] mb-2">❌ Cons:</p>
                      <ul className="space-y-1 text-sm text-slate-300">
                        {format.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF1744] flex-shrink-0" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="text-sm text-slate-400"><strong>When to use:</strong> {format.whenToUse}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Lead Times Breakdown */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Understanding Lead Times: Why Printing Takes Time</h2>
            <p className="text-slate-300 mb-8 text-lg">
              &quot;Can you print this today?&quot; We hear this daily. Here&apos;s why professional printing takes time—and why 
              rushing leads to mistakes and poor quality.
            </p>

            <div className="space-y-6">
              {leadTimeBreakdown.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-3xl border border-white/10 bg-[#01030B]/95 p-6 sm:p-8"
                >
                  <div className="flex gap-6 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-[#AEDD33] to-[#1E8F40] flex items-center justify-center text-xl font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                        <h3 className="text-2xl font-bold text-white">{stage.stage}</h3>
                        <span className="px-4 py-2 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] border border-[#FF6B00]/30 text-sm font-semibold">
                          {stage.duration}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">{stage.whyItTakesTime}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 ml-18">
                    {stage.whatHappens.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-200">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#AEDD33] flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-3xl border border-[#AEDD33]/30 bg-gradient-to-br from-[#AEDD33]/10 to-[#1E8F40]/10 p-6">
              <h4 className="text-xl font-bold text-white mb-3">📊 Typical Timeline Example</h4>
              <div className="space-y-2 text-slate-200">
                <p><strong>Rush Job (if possible):</strong> 3-5 days total</p>
                <p><strong>Standard Job:</strong> 5-10 days total</p>
                <p><strong>Complex/Large Job:</strong> 10-15 days total</p>
              </div>
              <p className="mt-4 text-slate-300 text-sm">
                <strong>Note:</strong> These timelines assume correct files from the start. File corrections add 1-3 days.
              </p>
            </div>
          </div>

          {/* Quick Checklist */}
          <div className="mb-16 rounded-3xl border border-[#AEDD33]/30 bg-gradient-to-br from-[#AEDD33]/10 to-[#1E8F40]/10 p-8">
            <h2 className="text-3xl font-bold text-white mb-6">✅ Print-Ready Checklist</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                '300 DPI at final print size',
                'Correct aspect ratio',
                'PDF, AI, EPS, or high-res PNG/TIFF',
                'CMYK color mode (not RGB)',
                'Bleed added if needed (3-5mm)',
                'All fonts outlined or embedded',
                'Images embedded, not linked',
                'No low-res images stretched',
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-slate-200">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#AEDD33]/20 border border-[#AEDD33] flex items-center justify-center text-sm">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl border border-[#AEDD33]/30 bg-gradient-to-br from-[#AEDD33]/10 to-[#1E8F40]/10 p-8 md:p-12 text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Still Not Sure? We&apos;re Here to Help
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto text-lg">
              If you&apos;re unsure about your files, send them to us for a free review. We&apos;ll check resolution, 
              format, and provide recommendations—no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#AEDD33] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(174,221,51,0.4)]"
              >
                Get Free File Review
              </Link>
              <Link
                href="/resources/print-ready-checklist"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 transition-all"
              >
                Download Checklist
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

