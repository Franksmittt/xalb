"use client";

import Link from "next/link";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Intake",
    description:
      "We host a quick strategy call, collect references, and request any brand assets or technical requirements. Need creative support? Our studio plugs in immediately.",
    cues: [
      "30–45 min kickoff via video or on-site",
      "Documented scope, timeline, and stakeholders",
      "Shared drive for artwork, CAD, or measurements",
    ],
  },
  {
    step: "02",
    title: "Design & Visualization",
    description:
      "Creative leads translate ideas into production-ready visuals. Expect drafts in modern formats—interactive boards, 3D mockups, and annotated proofs everyone can understand.",
    cues: [
      "High-res previews for signage, print, wraps, interiors",
      "Value engineering with fabrication + install teams",
      "Iterative feedback loop until sign-off",
    ],
  },
  {
    step: "03",
    title: "Production & Fabrication",
    description:
      "Your project moves onto the production rail. Large-format UV print lines, CNC routing, laser cutting, finishing, and packaging are all monitored via our command dashboard.",
    cues: [
      "Automated preflight + color calibration",
      "Genuine inks, certified materials, QA checkpoints",
      "Progress updates with photos + completion estimates",
    ],
  },
  {
    step: "04",
    title: "Installation & Launch",
    description:
      "Certified install crews, branded vehicles, and safety supervisors deploy across Gauteng (and beyond through partners). We prep permits, method statements, and aftercare docs.",
    cues: [
      "Night-shift or weekend installs to minimize disruption",
      "Post-install photo log + QA checklist",
      "Maintenance recommendations + service window",
    ],
  },
  {
    step: "05",
    title: "Support & Evolution",
    description:
      "Campaigns aren’t static. We archive files, maintain fleet branding, refresh signage, and roll out the next activation with everything we’ve already learned about your brand.",
    cues: [
      "File retention + version control",
      "Performance reviews and refresh planning",
      "Optional service-level agreements",
    ],
  },
];

const perks = [
  {
    title: "Single Command Center",
    description: "Design, print, fabrication, install, and logistics are coordinated by one team.",
  },
  {
    title: "Fast Lead Times",
    description: "3–5 days for print, 5–7 days for fabrication, same-week install slots.",
  },
  {
    title: "Transparent Communication",
    description: "Shared dashboards and WhatsApp groups keep stakeholders in the loop.",
  },
  {
    title: "Quality & Compliance",
    description: "OEM inks, ICC color workflows, laser tolerances, safety files, and certifications.",
  },
];

export default function ProcessPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-10 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(0,245,255,0.15)_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 inset-x-0 h-[40%] bg-gradient-to-t from-[#03050d] via-transparent" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#AEDD33]">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            From first sketch to final install, one team owns the timeline.
          </h1>
          <p className="text-lg text-slate-200">
            We keep the process human: plain language, visual updates, and handoffs you don’t have to babysit.
            Expect modern UX everywhere—interactive proofs, status dashboards, and install crews who share live updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#AEDD33] to-[#1E8F40] px-6 py-3 text-sm font-semibold text-[#010308] shadow-[0_15px_35px_rgba(174,221,51,0.4)]"
            >
              Start a Project
            </Link>
            <Link
              href="/solutions/large-format-printing"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/60"
            >
              Explore Capabilities
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pb-24">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {perks.map((perk) => (
              <div key={perk.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <h3 className="text-xl font-bold">{perk.title}</h3>
                <p className="mt-2 text-slate-200">{perk.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-12">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-white/10 bg-[#040712]/90 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.55)] grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-8"
              >
                <div className="flex flex-col items-start gap-2">
                  <span className="text-xs uppercase tracking-[0.5em] text-[#AEDD33]">Step</span>
                  <span className="text-4xl font-bold">{step.step}</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-slate-200">{step.description}</p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    {step.cues.map((cue) => (
                      <li key={cue} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                        <span>{cue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


