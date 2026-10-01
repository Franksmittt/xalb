'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const navigation = [
  {
    name: 'Capabilities',
    href: '/services',
    submenu: [
      { name: 'CNC & Laser', href: '/services/commercial/cnc-laser-cutting' },
      { name: 'Large Format', href: '/services/commercial/large-format-printing' },
      { name: 'Display Branding', href: '/services/commercial/display-branding' },
      { name: 'Fleet Branding', href: '/services/commercial/vehicle-fleet-branding' },
      { name: 'Corporate Gifting', href: '/services/commercial/corporate-gifting' },
      { name: 'Litho Printing', href: '/services/commercial/litho-printing' },
      { name: 'Dimensional Signage', href: '/services/commercial/dimensional-signage' },
      { name: 'Installation', href: '/services/commercial/installation' },
      { name: 'Design', href: '/services/commercial/graphic-design' },
    ],
  },
  { name: 'Imagine', href: '/imagine' },
  { name: 'Work', href: '/work' },
  { name: 'Retail', href: '/services/retail' },
  { name: 'Locations', href: '/locations' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <div className="mx-auto flex h-[4.25rem] max-w-wide items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/images/LogoDark.png"
            alt="Xsphere Marketing & Design"
            width={160}
            height={48}
            className="h-8 w-auto object-contain sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setOpenMenu(item.name)}
              onMouseLeave={() => item.submenu && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="text-[0.95rem] font-medium text-foreground transition-colors hover:text-accent"
              >
                {item.name}
              </Link>
              <AnimatePresence>
                {item.submenu && openMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute left-0 top-full z-50 mt-3 w-64 border border-line bg-surface py-2 shadow-sm"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+27118699169" className="spec-mono text-xs text-muted hover:text-foreground">
            +27 11 869 9169
          </a>
          <Link href="/contact" className="btn-primary !py-2.5 !text-sm">
            Request a quote
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center border border-line p-2 text-foreground lg:hidden"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-surface lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block py-3 text-base font-semibold text-foreground"
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="mb-2 ml-3 space-y-1 border-l border-line pl-3">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-2 text-sm text-muted"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary mt-3 w-full"
              >
                Request a quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
