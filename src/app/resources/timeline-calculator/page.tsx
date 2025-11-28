'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TimelineCalculatorPage() {
  const [projectType, setProjectType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [complexity, setComplexity] = useState('');
  const [material, setMaterial] = useState('');
  const [siteAccess, setSiteAccess] = useState('');

  const calculateTimeline = () => {
    if (!projectType || !quantity || !complexity) return null;

    let baseDays = 0;

    // Base timeline by project type
    if (projectType === 'signage') baseDays = 5;
    else if (projectType === 'vehicle') baseDays = 3;
    else if (projectType === 'fabrication') baseDays = 7;
    else if (projectType === 'large-format') baseDays = 4;

    // Adjust for quantity
    const qty = parseInt(quantity) || 1;
    if (qty > 50) baseDays += 3;
    else if (qty > 20) baseDays += 2;
    else if (qty > 10) baseDays += 1;

    // Adjust for complexity
    if (complexity === 'high') baseDays += 3;
    else if (complexity === 'medium') baseDays += 1;

    // Adjust for material availability
    if (material === 'special-order') baseDays += 5;
    else if (material === 'standard') baseDays += 0;

    // Adjust for site access
    if (siteAccess === 'difficult') baseDays += 2;
    else if (siteAccess === 'elevated') baseDays += 3;

    return baseDays;
  };

  const timeline = calculateTimeline();

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF1744]/10 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Link href="/resources" className="inline-flex items-center text-sm text-[#67E8F9] hover:text-[#00F5FF] mb-6 transition-colors">
              ← Back to Resources
            </Link>
            <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9] mb-4">Planning Tool</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="block text-white">Installation Timeline Calculator</span>
              <span className="block bg-gradient-to-r from-[#00F5FF] via-[#2D9CFF] to-[#FF1744] bg-clip-text text-transparent">
                Estimate Your Project Timeline
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              Estimate project timelines based on scope, material availability, and site access requirements. This is a guide—actual timelines may vary.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-8">
                <h2 className="text-xl font-bold text-white mb-6">Project Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Project Type</label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00F5FF] focus:outline-none"
                    >
                      <option value="">Select type</option>
                      <option value="signage">Signage</option>
                      <option value="vehicle">Vehicle Wrap</option>
                      <option value="fabrication">Fabrication</option>
                      <option value="large-format">Large Format Print</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Quantity</label>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g., 10"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-[#00F5FF] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Complexity</label>
                    <select
                      value={complexity}
                      onChange={(e) => setComplexity(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00F5FF] focus:outline-none"
                    >
                      <option value="">Select complexity</option>
                      <option value="low">Low (Standard design)</option>
                      <option value="medium">Medium (Custom elements)</option>
                      <option value="high">High (Complex design/fabrication)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Material Availability</label>
                    <select
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00F5FF] focus:outline-none"
                    >
                      <option value="">Select availability</option>
                      <option value="standard">Standard (In stock)</option>
                      <option value="special-order">Special Order (5+ days)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">Site Access</label>
                    <select
                      value={siteAccess}
                      onChange={(e) => setSiteAccess(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-[#00F5FF] focus:outline-none"
                    >
                      <option value="">Select access</option>
                      <option value="easy">Easy (Ground level)</option>
                      <option value="difficult">Difficult (Limited access)</option>
                      <option value="elevated">Elevated (Scaffolding/crane)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#00F5FF]/5 to-[#FF1744]/5 p-8 sticky top-8">
                <h2 className="text-xl font-bold text-white mb-6">Estimated Timeline</h2>
                {timeline ? (
                  <div>
                    <div className="text-6xl font-extrabold text-white mb-2">{timeline}</div>
                    <div className="text-xl text-slate-300 mb-6">Business Days</div>
                    <div className="space-y-3 text-sm text-slate-300">
                      <p>This estimate includes:</p>
                      <ul className="space-y-2 ml-4">
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF]" />
                          <span>Design approval (if needed)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF]" />
                          <span>Material procurement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF]" />
                          <span>Production time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00F5FF]" />
                          <span>Installation scheduling</span>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <p className="text-xs text-slate-400 mb-4">
                        *Timeline is an estimate. Actual delivery may vary based on current workload, permit requirements, and site conditions.
                      </p>
                      <Link
                        href="/contact"
                        className="block w-full text-center rounded-full bg-[#00F5FF] px-6 py-3 text-sm font-semibold text-[#010308] shadow-[0_15px_35px_rgba(0,245,255,0.4)]"
                      >
                        Get Accurate Quote
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-400">Fill in the project details to see your estimated timeline.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

