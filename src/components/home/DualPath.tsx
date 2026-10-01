import Link from 'next/link';
import Image from 'next/image';

export default function DualPath() {
  return (
    <section className="section-pad border-t border-line bg-background">
      <div className="mx-auto max-w-wide">
        <div className="max-w-2xl">
          <p className="section-eyebrow">How we work with you</p>
          <h2 className="mt-3 text-balance">Enterprise programmes or walk-in jobs.</h2>
          <p className="section-lede">Two clear doors. Same production floor. Same quality standard.</p>
        </div>

        <div className="section-stack grid items-stretch gap-5 lg:grid-cols-2">
          <Link
            href="/contact"
            className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden border border-line lg:min-h-[24rem]"
          >
            <Image
              src="/images/fleet-lineup.png"
              alt="Enterprise manufacturing and fleet programmes"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121612] via-[#121612]/65 to-transparent" />
            <div className="relative z-10 p-7 text-ink-inverse sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-bright">B2B</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Scale operations</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#d5dccb]">
                CNC programmes, litho volume, fleet wraps, and multi-site signage with account-managed timelines.
              </p>
              <span className="mt-5 inline-flex bg-accent-bright px-5 py-3 text-sm font-semibold text-[#121612]">
                Request enterprise quote
              </span>
            </div>
          </Link>

          <Link
            href="/services/retail/walk-in-printing"
            className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden border border-line lg:min-h-[24rem]"
          >
            <Image
              src="/images/install-team.png"
              alt="Walk-in print and custom fabrication"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121612] via-[#121612]/65 to-transparent" />
            <div className="relative z-10 p-7 text-ink-inverse sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-bright">Retail</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Walk in with an idea</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#d5dccb]">
                Cards, plans, short-run print, and one-off CNC or laser pieces — guided from sketch to finished object.
              </p>
              <span className="mt-5 inline-flex border border-ink-inverse/70 px-5 py-3 text-sm font-semibold text-ink-inverse">
                Start a custom project
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
