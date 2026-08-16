'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navigation = [
    { name: 'CNC & Laser', href: '/services/commercial/cnc-laser-cutting' },
    { name: 'Imagine', href: '/imagine' },
    {
      name: 'Commercial',
      href: '/services/commercial',
      submenu: [
        { name: 'CNC & Laser Cutting', href: '/services/commercial/cnc-laser-cutting' },
        { name: 'ABS & Plastics Routing', href: '/services/commercial/abs-plastics-routing' },
        { name: 'MDF & Wood Routing', href: '/services/commercial/mdf-wood-routing' },
        { name: 'Litho Printing', href: '/services/commercial/litho-printing' },
        { name: 'Large Format', href: '/services/commercial/large-format-printing' },
        { name: 'Rigid & Flatbed', href: '/services/commercial/rigid-substrates' },
        { name: 'Fleet Branding', href: '/services/commercial/vehicle-fleet-branding' },
        { name: 'Dimensional Signage', href: '/services/commercial/dimensional-signage' },
        { name: 'Installation', href: '/services/commercial/installation' },
        { name: 'Design', href: '/services/commercial/graphic-design' },
      ],
    },
    {
      name: 'Retail',
      href: '/services/retail',
      submenu: [
        { name: 'Walk-in Printing', href: '/services/retail/walk-in-printing' },
        { name: 'Cards & Flyers', href: '/services/retail/business-cards-flyers' },
      ],
    },
    { name: 'Locations', href: '/locations' },
    { name: 'Work', href: '/work' },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#050505]"
    >
      <nav className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Top">
        <Link href="/" className="relative shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <Image src="/images/Logows.png" alt="Xsphere" width={150} height={50} className="h-9 w-auto object-contain" priority />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setOpenMenu(item.name)}
              onMouseLeave={() => item.submenu && setOpenMenu(null)}
            >
              <Link href={item.href} className="text-sm font-semibold text-neutral-200 transition-colors hover:text-cyan-300">
                {item.name}
              </Link>
              <AnimatePresence>
                {item.submenu && openMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    className="absolute left-0 top-full z-50 mt-3 w-72 overflow-hidden rounded-md border border-white/10 bg-neutral-900 py-2 shadow-lg"
                  >
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-4 py-2.5 text-sm text-neutral-300 hover:bg-white/5 hover:text-white"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-cyan-400/50 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-neutral-950"
          >
            Initiate a project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-neutral-200 lg:hidden"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          {mobileMenuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-neutral-900 lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-2 py-3 text-base font-semibold text-neutral-100"
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="mb-2 ml-3 space-y-1 border-l border-white/10 pl-3">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block py-2 text-sm text-neutral-400"
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
                className="mt-2 block rounded-full bg-cyan-400 px-4 py-3 text-center text-base font-semibold text-neutral-950"
              >
                Initiate a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
