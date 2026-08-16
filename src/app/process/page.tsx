"use client";

import Link from "next/link";

const processSteps = [
  {
    step: "01",
    title: "Brief & discovery",
    description:
      "Share the idea, volumes, and where the piece will live. We clarify materials, tolerances, and whether CNC, laser, print, or install is in scope.",
    cues: [
      "30–45 min kickoff",
      "Documented scope and timeline",
      "Shared folder for artwork or measurements",
    ],
  },
  {
    step: "02",
    title: "Design to cut file",
    description:
      "We turn sketches and brand files into production-ready paths — nesting for CNC and laser, with proofs you can approve before anything hits the bed.",
    cues: [
      "CAD / cut-path preparation",
      "Material recommendation for signs and novelty",
      "Prototype option for large commercial runs",
    ],
  },
  {
    step: "03",
    title: "CNC, laser & finish",
    description:
      "Routing, engraving, cutting, and finishing happen in one workshop so edges, fills, and batches stay consistent across sites.",
    cues: [
      "Laser engraving and cutting",
      "CNC routing for dimensional pieces",
      "Paint, polish, and assembly as needed",
    ],
  },
  {
    step: "04",
    title: "Install or dispatch",
    description:
      "We kit for multi-site rollouts or install across Gauteng — so the finished piece lands the way it looked in the proof.",
    cues: [
      "Kitting and labeling for rollouts",
      "Optional on-site installation",
      "Photo confirmation on request",
    ],
  },
  {
    step: "05",
    title: "Support & repeats",
    description:
      "Files stay archived for reorders. Need print, fleet wraps, or the next campaign piece? The same workshop handles it.",
    cues: [
      "Reorder-ready file retention",
      "Refresh planning for brand environments",
      "Full workshop available when needed",
    ],
  },
];

export default function ProcessPage() {
  return (
    <main className="page-shell">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Our process</p>
            <h1 className="font-display mt-3 text-4xl font-bold text-ink md:text-5xl">
              From idea to cut file to finished piece
            </h1>
            <p className="mt-5 text-lg text-ink-muted">
              Built around CNC and laser production for commercial clients — with print, fleet, and install when
              the brief needs more than fabrication.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink-inverse"
              >
                Start a project
              </Link>
              <Link
                href="/services/commercial/cnc-laser-cutting"
                className="inline-flex items-center justify-center rounded-md border border-[var(--line)] px-6 py-3 text-sm font-semibold text-ink"
              >
                Explore CNC &amp; laser
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content space-y-8">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="grid gap-6 border-t border-[var(--line)] pt-8 lg:grid-cols-[7rem_1fr]"
            >
              <div>
                <span className="font-display text-sm font-bold text-accent">Step</span>
                <p className="font-display text-4xl font-bold text-ink">{step.step}</p>
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-ink">{step.title}</h2>
                <p className="mt-3 max-w-2xl text-ink-muted leading-relaxed">{step.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink-muted">
                  {step.cues.map((cue) => (
                    <li key={cue} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{cue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
