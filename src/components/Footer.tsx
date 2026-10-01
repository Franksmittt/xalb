import Link from 'next/link';
import Image from 'next/image';
import { commercialServices, retailServices, servicePath } from '@/data/catalog';

export default function Footer() {
  return (
    <footer className="bg-[#121612] text-ink-inverse">
      <div className="mx-auto max-w-wide px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 border-b border-white/10 pb-14 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="section-eyebrow !text-accent-bright">Alberton production floor</p>
            <h2 className="font-display mt-4 max-w-xl text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight text-ink-inverse">
              From brief to installed asset — one accountable partner.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#b7bfb0]">
              Drop CAD, share print specs, or walk in. CNC, litho, and 3.2 m UV for Alrode, Germiston, East Rand, and
              Johannesburg South.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[2px] bg-accent-bright px-6 py-3.5 text-sm font-semibold text-[#121612] transition-colors hover:bg-[#9bd24a]"
              >
                Request a quote
              </Link>
              <a href="tel:+27118699169" className="btn-ghost-light">
                Call +27 11 869 9169
              </a>
            </div>
          </div>

          <div className="grid content-end gap-8 sm:grid-cols-2">
            <div>
              <p className="spec-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#7d8676]">Facility</p>
              <p className="mt-3 text-sm leading-relaxed text-[#b7bfb0]">
                99 Second Avenue
                <br />
                Florentia, Alberton
                <br />
                Gauteng, South Africa
              </p>
            </div>
            <div>
              <p className="spec-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#7d8676]">Hours</p>
              <p className="mt-3 text-sm leading-relaxed text-[#b7bfb0]">
                Mon–Fri 08:00–17:00
                <br />
                <a href="mailto:info@xsphere.co.za" className="hover:text-ink-inverse">
                  info@xsphere.co.za
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-4">
          <div>
            <Image src="/images/Logows.png" alt="Xsphere" width={150} height={50} className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#7d8676]">
              Design, commercial print, CNC fabrication, and installation — 17 years on the Alberton floor.
            </p>
          </div>
          <div>
            <p className="spec-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#7d8676]">Commercial</p>
            <ul className="mt-3 space-y-2 text-sm text-[#b7bfb0]">
              {commercialServices.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s)} className="hover:text-ink-inverse">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="spec-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#7d8676]">Retail & places</p>
            <ul className="mt-3 space-y-2 text-sm text-[#b7bfb0]">
              {retailServices.map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s)} className="hover:text-ink-inverse">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="hover:text-ink-inverse">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-ink-inverse">
                  Work
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="spec-mono text-[0.7rem] uppercase tracking-[0.16em] text-[#7d8676]">Contact</p>
            <p className="mt-3 text-sm text-[#b7bfb0]">
              <a href="tel:+27118699169" className="hover:text-ink-inverse">
                +27 11 869 9169
              </a>
              <br />
              <a href="mailto:info@xsphere.co.za" className="hover:text-ink-inverse">
                info@xsphere.co.za
              </a>
            </p>
          </div>
        </div>

        <p className="mt-12 spec-mono text-[0.7rem] tracking-wide text-[#5f665a]">
          © {new Date().getFullYear()} Xsphere Marketing and Design · Alberton
        </p>
      </div>
    </footer>
  );
}
