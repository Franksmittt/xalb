'use client';

import Link from 'next/link';

export default function DualPath() {
  return (
    <section className="flex min-h-[600px] w-full flex-col overflow-hidden bg-[#050505] md:h-[70vh] md:flex-row">
      <Link
        href="/contact"
        className="group relative flex flex-1 flex-col justify-center overflow-hidden border-neutral-800 p-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[1.8] md:border-r md:p-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/80 to-transparent" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] text-red-400">B2B manufacturing</p>
          <h2 className="font-display mt-3 text-4xl font-bold text-white">Scale operations</h2>
          <p className="mt-4 max-w-md text-neutral-400">
            CNC programmes, litho volume, fleet wraps, and multi-site signage with account-managed timelines for East
            Rand and Johannesburg South procurement.
          </p>
          <span className="mt-8 inline-flex rounded-full bg-red-500 px-6 py-3 text-sm font-bold text-white">
            Access enterprise quote
          </span>
        </div>
      </Link>
      <Link
        href="/services/retail/walk-in-printing"
        className="group relative flex flex-1 flex-col justify-center overflow-hidden p-8 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-[1.8] md:p-16"
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 to-transparent" />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">Bespoke & walk-in</p>
          <h2 className="font-display mt-3 text-4xl font-bold text-white">Realize ideas</h2>
          <p className="mt-4 max-w-md text-neutral-400">
            Walk-in print, cards, plans, and one-off CNC or laser pieces — expert guidance from sketch to finished
            object in Alberton.
          </p>
          <span className="mt-8 inline-flex rounded-full border border-cyan-400 px-6 py-3 text-sm font-bold text-cyan-300">
            Start a custom project
          </span>
        </div>
      </Link>
    </section>
  );
}
