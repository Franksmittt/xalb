import Link from 'next/link';
import Image from 'next/image';
import { commercialServices, retailServices, servicePath, suburbs } from '@/data/catalog';

const companyLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Imagine', href: '/imagine' },
  { name: 'Process', href: '/process' },
  { name: 'Locations', href: '/locations' },
  { name: 'Resources', href: '/resources' },
  { name: 'Tutorials', href: '/tutorials' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#0e120f] text-ink-inverse">
      {/* Facility strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-wide gap-0 lg:grid-cols-[1.1fr_1fr_1fr]">
          <div className="border-white/10 px-4 py-10 sm:px-6 lg:border-r lg:px-8 lg:py-12">
            <Image src="/images/Logows.png" alt="Xsphere" width={160} height={48} className="h-9 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#9aa392]">
              Xsphere Marketing and Design — commercial print, CNC fabrication, fleet branding, and installation from
              one Alberton production floor.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex bg-accent-bright px-4 py-2.5 text-sm font-semibold text-[#0e120f] transition-colors hover:bg-[#9bd24a]"
              >
                Request a quote
              </Link>
              <a
                href="tel:+27118699169"
                className="inline-flex border border-white/25 px-4 py-2.5 text-sm font-semibold text-ink-inverse hover:border-white/60"
              >
                +27 11 869 9169
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 px-4 py-10 sm:px-6 lg:border-t-0 lg:border-r lg:px-8 lg:py-12">
            <p className="spec-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#6f7868]">Facility</p>
            <p className="mt-4 font-display text-xl font-bold text-ink-inverse">99 Second Avenue</p>
            <p className="mt-2 text-sm leading-relaxed text-[#9aa392]">
              Florentia, Alberton
              <br />
              Gauteng, South Africa
            </p>
            <p className="spec-mono mt-5 text-[0.72rem] text-[#6f7868]">
              S 26.267° · E 28.122°
            </p>
          </div>

          <div className="border-t border-white/10 px-4 py-10 sm:px-6 lg:border-t-0 lg:px-8 lg:py-12">
            <p className="spec-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#6f7868]">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-[#c5cdb8]">
              <li>
                <span className="block text-[#6f7868]">Email</span>
                <a href="mailto:info@xsphere.co.za" className="hover:text-ink-inverse">
                  info@xsphere.co.za
                </a>
              </li>
              <li>
                <span className="block text-[#6f7868]">Phone</span>
                <a href="tel:+27118699169" className="hover:text-ink-inverse">
                  +27 11 869 9169
                </a>
              </li>
              <li>
                <span className="block text-[#6f7868]">Hours</span>
                Mon–Fri 08:00–17:00
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-wide px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="spec-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#6f7868]">Commercial</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#b7bfb0]">
              {commercialServices.map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s)} className="transition-colors hover:text-ink-inverse">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="spec-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#6f7868]">Retail</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#b7bfb0]">
              {retailServices.map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s)} className="transition-colors hover:text-ink-inverse">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/services/retail" className="text-accent-bright hover:text-[#9bd24a]">
                  Retail overview →
                </Link>
              </li>
            </ul>

            <p className="spec-mono mt-10 text-[0.68rem] uppercase tracking-[0.16em] text-[#6f7868]">Company</p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#b7bfb0]">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-ink-inverse">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2 lg:col-span-2">
            <p className="spec-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#6f7868]">Service areas</p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {suburbs.map((suburb) => (
                <Link
                  key={suburb.slug}
                  href={`/locations/${suburb.slug}/cnc-routing`}
                  className="border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-[#b7bfb0] transition-colors hover:border-white/25 hover:text-ink-inverse"
                >
                  {suburb.name}
                </Link>
              ))}
            </div>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#6f7868]">
              CNC · litho · 3.2 m UV · rigid flatbed · fleet wraps · dimensional signage · installation · walk-in print
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="spec-mono text-[0.68rem] tracking-wide text-[#555e50]">
            © {new Date().getFullYear()} Xsphere Marketing and Design · Alberton, Gauteng
          </p>
          <p className="spec-mono text-[0.68rem] tracking-wide text-[#555e50]">
            Design · Produce · Install
          </p>
        </div>
      </div>
    </footer>
  );
}
