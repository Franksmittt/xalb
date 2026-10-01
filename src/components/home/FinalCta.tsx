import Link from 'next/link';
import Image from 'next/image';

export default function FinalCta() {
  return (
    <section className="section-pad border-t border-line bg-background">
      <div className="mx-auto max-w-wide">
        <div className="relative overflow-hidden border border-line bg-[#121612]">
          <div className="absolute inset-0">
            <Image
              src="/images/install-team.png"
              alt="Xsphere install and production team"
              fill
              className="object-cover opacity-35"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,#121612_18%,rgba(18,22,18,0.82)_55%,rgba(18,22,18,0.55)_100%)]" />
          </div>

          <div className="relative z-10 grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.3fr_0.7fr] lg:items-stretch lg:gap-12 lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-bright">
                Ready when your brief is
              </p>
              <h2 className="mt-3 max-w-xl text-[clamp(1.75rem,3.5vw,2.75rem)] font-bold tracking-tight text-ink-inverse">
                Send the files. Get a production plan.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#c8d0be]">
                CAD, print-ready artwork, or a walk-in sketch. Same Alberton floor for CNC, litho, 3.2 m UV, fleet, and
                install across the East Rand.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent-bright px-6 py-3.5 text-sm font-semibold text-[#121612] transition-colors hover:bg-[#9bd24a]"
                >
                  Request a quote
                </Link>
                <a href="tel:+27118699169" className="btn-ghost-light">
                  Call +27 11 869 9169
                </a>
              </div>
            </div>

            <div className="grid content-stretch gap-px border border-white/10 bg-white/10">
              <div className="bg-[#121612]/85 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#8a927c]">What to send</p>
                <ul className="mt-3 space-y-2 text-sm text-[#d5dccb]">
                  <li>DXF / AI / PDF / STEP where available</li>
                  <li>Quantity, material, finish</li>
                  <li>Install suburb or collection</li>
                </ul>
              </div>
              <div className="bg-[#121612]/85 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#8a927c]">Typical reply</p>
                <p className="mt-3 text-sm leading-relaxed text-[#d5dccb]">
                  Same-day to 24h on complete briefs, Mon–Fri 08:00–17:00.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
