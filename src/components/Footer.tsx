import Link from 'next/link';
import Image from 'next/image';
import { companyContacts, generalContact } from '@/data/contacts';

const links = [
  { name: 'Services', href: '/services' },
  { name: 'Display', href: '/services/commercial/display-branding' },
  { name: 'Gifting', href: '/services/commercial/corporate-gifting' },
  { name: 'Fleet', href: '/services/commercial/vehicle-fleet-branding' },
  { name: 'CNC', href: '/services/commercial/cnc-laser-cutting' },
  { name: 'Work', href: '/work' },
  { name: 'Locations', href: '/locations' },
  { name: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-[#0e120f] text-ink-inverse">
      <div className="mx-auto max-w-wide px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <Link href="/" className="shrink-0">
              <Image src="/images/Logows.png" alt="Xsphere" width={140} height={42} className="h-7 w-auto" />
            </Link>
            <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#b7bfb0]" aria-label="Footer">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-ink-inverse">
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 self-start bg-accent-bright px-4 py-2.5 text-sm font-semibold text-[#0e120f] transition-colors hover:bg-[#9bd24a] lg:self-auto"
          >
            Request a quote
          </Link>
        </div>

        <div className="mt-6 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2 lg:grid-cols-[1fr_1.2fr_auto] lg:items-end">
          <div>
            <p className="text-sm text-[#9aa392]">{generalContact.address}</p>
            <p className="spec-mono mt-1 text-[0.68rem] text-[#6f7868]">
              Est. {generalContact.established} · {generalContact.hours}
            </p>
          </div>
          <div className="grid gap-2 text-sm sm:grid-cols-2">
            {companyContacts.map((person) => (
              <div key={person.email}>
                <p className="font-semibold text-ink-inverse">{person.name}</p>
                <a href={person.phoneHref} className="text-[#9aa392] hover:text-ink-inverse">
                  {person.phone}
                </a>
                <span className="text-[#555e50]"> · </span>
                <a href={person.emailHref} className="text-[#9aa392] hover:text-ink-inverse">
                  {person.email}
                </a>
              </div>
            ))}
          </div>
          <p className="spec-mono text-[0.65rem] tracking-wide text-[#555e50] lg:text-right">
            © {new Date().getFullYear()} Xsphere
          </p>
        </div>
      </div>
    </footer>
  );
}
