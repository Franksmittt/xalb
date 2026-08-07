import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { label: 'CNC & Laser', href: '/solutions/fabrication' },
  { label: 'Imagine', href: '/imagine' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Process', href: '/process' },
  { label: 'Work', href: '/work' },
  { label: 'Contact', href: '/contact' },
];

const services = [
  { label: 'CNC & Laser Engraving', href: '/solutions/fabrication' },
  { label: 'Dimensional Signage', href: '/solutions/fabrication' },
  { label: 'Large Format Printing', href: '/solutions/large-format-printing' },
  { label: 'Vehicle + Fleet Branding', href: '/solutions/fleet-branding' },
  { label: 'Design & Identity', href: '/solutions/design' },
  { label: 'Installation', href: '/solutions/installation' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#1c2118] text-[#e8ebe2]">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">
              Ready when the idea is
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              Bring the brief. We&apos;ll cut it into the world.
            </h2>
            <p className="mt-3 text-[#c4cbb8]">
              CNC, laser, and finishing for commercial signage and branded pieces — with print, fleet, and
              install when the job needs the full workshop.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-accent-bright px-6 py-3 text-sm font-semibold text-[#1c2118] transition-colors hover:bg-[#8bc24a]"
            >
              Brief a project
            </Link>
            <a
              href="tel:+27118699169"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              +27 11 869 9169
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-12 md:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/images/Logows.png"
              alt="Xsphere"
              width={150}
              height={50}
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm text-[#c4cbb8]">
              99 Second Avenue, Florentia
              <br />
              Alberton, Gauteng
            </p>
            <p className="text-sm text-[#9aa38c]">
              <a href="mailto:info@xsphere.co.za" className="transition-colors hover:text-white">
                info@xsphere.co.za
              </a>
              <br />
              Est. workshop · 17 years
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9aa38c]">Navigate</p>
            <ul className="mt-3 space-y-2 text-sm text-[#c4cbb8]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9aa38c]">Workshop</p>
            <ul className="mt-3 space-y-2 text-sm text-[#c4cbb8]">
              {services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9aa38c]">Focus</p>
            <p className="mt-3 text-sm leading-relaxed text-[#c4cbb8]">
              We specialise in CNC routing and laser engraving for signs, novelty builds, and branded
              environments — helping large clients turn ideas into finished pieces at scale.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.16em] text-[#7d8670]">
          <span>© {new Date().getFullYear()} Xsphere Marketing and Design</span>
          <span>Alberton · Gauteng</span>
        </div>
      </div>
    </footer>
  );
}
