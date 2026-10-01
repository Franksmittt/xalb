import Link from 'next/link';
import Image from 'next/image';
import { commercialServices, retailServices, servicePath } from '@/data/catalog';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#1c2118] text-ink-inverse">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Start your next production run
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#c4cbb8]">
              Drop CAD, share print specs, or walk in. Alberton production floor — Alrode, Germiston, East Rand,
              Johannesburg South.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-accent-bright px-6 py-3 text-sm font-semibold text-[#1c2118] hover:bg-[#7fbf45]"
              >
                Request a quote
              </Link>
              <a
                href="tel:+27118699169"
                className="inline-flex items-center justify-center rounded-md border border-[#c4cbb8]/40 px-6 py-3 text-sm font-semibold text-ink-inverse hover:border-ink-inverse"
              >
                Call +27 11 869 9169
              </a>
            </div>
          </div>
          <div className="grid gap-2 self-end text-sm text-[#c4cbb8] sm:grid-cols-2">
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-[#8a927c]">Facility</span>
              99 Second Avenue, Florentia
              <br />
              Alberton, Gauteng
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.18em] text-[#8a927c]">Hours</span>
              Mon–Fri 08:00–17:00
              <br />
              <a href="mailto:info@xsphere.co.za" className="hover:text-ink-inverse">
                info@xsphere.co.za
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-4">
          <div>
            <Image src="/images/Logows.png" alt="Xsphere" width={150} height={50} className="h-8 w-auto" />
            <p className="mt-4 text-sm leading-relaxed text-[#8a927c]">
              Xsphere Marketing and Design
              <br />
              Design, print, CNC, and installation from one Alberton floor.
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8a927c]">Commercial</p>
            <ul className="mt-3 space-y-2 text-sm text-[#c4cbb8]">
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
            <p className="text-xs uppercase tracking-[0.18em] text-[#8a927c]">Retail & places</p>
            <ul className="mt-3 space-y-2 text-sm text-[#c4cbb8]">
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
                <Link href="/imagine" className="hover:text-ink-inverse">
                  Imagine
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[#8a927c]">Contact</p>
            <p className="mt-3 text-sm text-[#c4cbb8]">
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
        <p className="mt-12 text-xs tracking-wide text-[#6d7564]">
          © {new Date().getFullYear()} Xsphere Marketing and Design · Alberton
        </p>
      </div>
    </footer>
  );
}
