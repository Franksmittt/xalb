'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const navigation = [
    { name: 'CNC & Laser', href: '/solutions/fabrication' },
    { name: 'Imagine', href: '/imagine' },
    {
      name: 'Solutions',
      href: '/solutions',
      submenu: [
        { name: 'CNC & Laser Engraving', href: '/solutions/fabrication' },
        { name: 'Large Format Printing', href: '/solutions/large-format-printing' },
        { name: 'Fleet Branding', href: '/solutions/fleet-branding' },
        { name: 'Design & Identity', href: '/solutions/design' },
        { name: 'Installation & Logistics', href: '/solutions/installation' },
        { name: 'Lithographic Printing', href: '/litho-printing' },
      ],
    },
    { name: 'Process', href: '/process' },
    { name: 'Work', href: '/work' },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#1c2118]"
    >
      <nav
        className="mx-auto flex h-16 max-w-content items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Top"
      >
        <Link href="/" className="relative shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/images/Logows.png"
            alt="Xsphere"
            width={150}
            height={50}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenu && setSolutionsOpen(true)}
              onMouseLeave={() => item.submenu && setSolutionsOpen(false)}
            >
              <Link
                href={item.href}
                className="text-sm font-semibold text-[#e8ebe2] transition-colors hover:text-accent-bright"
              >
                {item.name}
              </Link>

              <AnimatePresence>
                {item.submenu && solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-full z-50 mt-3 w-64 overflow-hidden rounded-md border border-white/10 bg-[#252b20] py-2 shadow-lg"
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-[#c4cbb8] transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {subItem.name}
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
            className="inline-flex items-center rounded-md bg-accent-bright px-5 py-2.5 text-sm font-semibold text-[#1c2118] transition-colors hover:bg-[#8bc24a]"
          >
            Brief a project
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-[#e8ebe2] lg:hidden"
          aria-controls="mobile-menu"
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
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-[#252b20] lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-2 py-3 text-base font-semibold text-[#e8ebe2]"
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="mb-2 ml-3 space-y-1 border-l border-white/10 pl-3">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 text-sm text-[#c4cbb8]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 block rounded-md bg-accent-bright px-4 py-3 text-center text-base font-semibold text-[#1c2118]"
              >
                Brief a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
