'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Process', href: '/process' },
    {
      name: 'Solutions',
      href: '/solutions',
      submenu: [
        { name: 'Large Format Printing', href: '/solutions/large-format-printing' },
        { name: 'Fabrication & Laser Cutting', href: '/solutions/fabrication' },
        { name: 'Fleet Branding', href: '/solutions/fleet-branding' },
        { name: 'Design & Identity', href: '/solutions/design' },
        { name: 'Installation & Logistics', href: '/solutions/installation' },
        { name: 'Lithographic Printing', href: '/litho-printing' },
      ],
    },
    { name: 'The Work', href: '/work' },
    { name: 'Resources', href: '/resources' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.15,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50"
    >
      <div className="relative bg-gradient-to-r from-[#03050d]/95 via-[#080d1c]/95 to-[#12061f]/95 backdrop-blur-2xl border-b border-white/10 shadow-[0_0_40px_rgba(0,245,255,0.15)]">
        <motion.div
          className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#00f5ff] via-[#ff3cac] to-[#ff1744] blur-sm opacity-80"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <motion.div
          className="absolute -bottom-px inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#00f5ff66] to-transparent"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      <nav className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center"
          >
            <Link href="/" className="relative group">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-2xl font-bold bg-gradient-to-r from-[#00F5FF] via-[#38bdf8] to-[#FF1744] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,245,255,0.35)]"
              >
                Xsphere
              </motion.span>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#00F5FF] to-[#FF1744] shadow-[0_0_8px_rgba(255,23,68,0.8)]"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={navVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex lg:items-center lg:space-x-8"
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                variants={itemVariants}
                className="relative group"
                onMouseEnter={() => item.submenu && setSolutionsOpen(true)}
                onMouseLeave={() => item.submenu && setSolutionsOpen(false)}
              >
                <Link href={item.href}>
                  <motion.span
                    whileHover={{ y: -2 }}
                    className="relative text-sm font-semibold tracking-wide text-slate-100 group-hover:text-[#00F5FF] transition-colors cursor-pointer"
                  >
                    {item.name}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#00F5FF] via-[#FF3CAC] to-[#FF1744]"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                </Link>
                
                {/* Dropdown Menu for Solutions */}
                <AnimatePresence>
                  {item.submenu && solutionsOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute left-0 mt-2 w-64 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.45)] bg-[#050912]/95 ring-1 ring-[#00f5ff33] overflow-hidden border border-white/5"
                    >
                      <div className="py-2" role="menu">
                        {item.submenu.map((subItem) => (
                          <motion.div
                            key={subItem.name}
                            variants={itemVariants}
                          >
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2.5 text-sm text-slate-100 hover:text-[#00F5FF] hover:bg-gradient-to-r hover:from-[#00f5ff0d] hover:via-[#ff3cac0f] hover:to-[#ff17440d] transition-all duration-200"
                              role="menuitem"
                            >
                              <motion.span
                                whileHover={{ x: 5 }}
                                className="flex items-center"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#00F5FF] to-[#FF1744] mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                {subItem.name}
                              </motion.span>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex lg:items-center"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 45px rgba(0, 245, 255, 0.35)',
                }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-semibold tracking-wide rounded-full text-white bg-gradient-to-r from-[#00F5FF] via-[#2D9CFF] to-[#FF1744] overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#00c3ff] via-transparent to-[#ff3cac]"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center">
                  Get a Quote
                  <motion.svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="lg:hidden"
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              className="inline-flex items-center justify-center p-2 text-slate-100 hover:text-[#00F5FF] hover:bg-white/5 rounded-md transition-colors border border-white/10"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.svg
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="lg:hidden overflow-hidden"
              id="mobile-menu"
            >
              <div className="px-3 pt-3 pb-4 space-y-2 bg-[#050912]/95 border-t border-white/10">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 text-base font-semibold text-slate-100 hover:text-[#00F5FF] hover:bg-gradient-to-r hover:from-[#00f5ff0d] hover:via-[#ff3cac12] hover:to-[#ff17440d] rounded-lg transition-all border border-transparent hover:border-white/10"
                      onClick={() => {
                        if (!item.submenu) setMobileMenuOpen(false);
                      }}
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="flex items-center"
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                    {item.submenu && (
                      <div className="pl-4 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-slate-300 hover:text-[#00F5FF] hover:bg-gradient-to-r hover:from-[#00f5ff0d] hover:to-[#ff17440d] rounded-md transition-all"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <motion.span
                              whileHover={{ x: 5 }}
                              className="flex items-center"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-3" />
                              {subItem.name}
                            </motion.span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  variants={itemVariants}
                  className="pt-4"
                >
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="block w-full text-center px-4 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-gradient-to-r from-[#00F5FF] via-[#2D9CFF] to-[#FF1744] shadow-[0_10px_30px_rgba(0,245,255,0.25)]"
                    >
                      Get a Quote
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      </div>
    </motion.header>
  );
}
