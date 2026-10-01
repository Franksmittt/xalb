'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function DualPath() {
  return (
    <section className="border-t border-line bg-background">
      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
        <Link
          href="/contact"
          className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden border border-line"
        >
          <Image
            src="/images/fleet-lineup.png"
            alt="Enterprise manufacturing and fleet branding"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width:768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c2118] via-[#1c2118]/70 to-[#1c2118]/20" />
          <div className="relative z-10 p-8 text-ink-inverse sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">B2B manufacturing</p>
            <h2 className="font-display mt-3 text-3xl font-bold">Scale operations</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#dce2d4] sm:text-base">
              CNC programmes, litho volume, fleet wraps, and multi-site signage with account-managed timelines for East
              Rand and Johannesburg South procurement.
            </p>
            <span className="mt-8 inline-flex rounded-md bg-accent-bright px-5 py-3 text-sm font-semibold text-[#1c2118]">
              Request enterprise quote
            </span>
          </div>
        </Link>

        <Link
          href="/services/retail/walk-in-printing"
          className="group relative flex min-h-[420px] flex-col justify-end overflow-hidden border border-line"
        >
          <Image
            src="/images/install-team.png"
            alt="Walk-in print and custom fabrication"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width:768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1c2118] via-[#1c2118]/70 to-[#1c2118]/20" />
          <div className="relative z-10 p-8 text-ink-inverse sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">Walk-in & bespoke</p>
            <h2 className="font-display mt-3 text-3xl font-bold">Realize ideas</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#dce2d4] sm:text-base">
              Walk-in print, cards, plans, and one-off CNC or laser pieces — expert guidance from sketch to finished
              object in Alberton.
            </p>
            <span className="mt-8 inline-flex rounded-md border border-ink-inverse/70 px-5 py-3 text-sm font-semibold text-ink-inverse">
              Start a custom project
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
