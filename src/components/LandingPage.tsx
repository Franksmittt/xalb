'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function LandingPage() {
  const [showLogin, setShowLogin] = useState(false);

  const contactInfo = [
    {
      title: 'Phone',
      value: '+27 11 869 9169',
      href: 'tel:+27118699169',
    },
    {
      title: 'Email',
      value: 'info@xsphere.co.za',
      href: 'mailto:info@xsphere.co.za',
    },
    {
      title: 'Address',
      value: '99 Second Avenue, Florentia, Alberton, 1449',
      href: 'https://maps.google.com/?q=99+Second+Avenue+Florentia+Alberton',
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-slate-100 flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(174,221,51,0.2), transparent 45%), radial-gradient(circle at 80% 0%, rgba(30,143,64,0.2), transparent 35%)',
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,107,0,0.08)_1px,_transparent_1px)] [background-size:60px_60px]"
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Image
            src="/images/Logows.png"
            alt="Xsphere Logo"
            width={200}
            height={67}
            className="h-16 w-auto object-contain mx-auto mb-8"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="block text-white/90 mb-2">New Website</span>
            <span className="block bg-gradient-to-r from-[#AEDD33] via-[#4CAF50] to-[#1E8F40] bg-clip-text text-transparent">
              Coming in 2026
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mt-6">
            We&apos;re building something amazing. Stay tuned for our new digital experience launching in 2026.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm uppercase tracking-[0.3em] text-[#AEDD33]">
            Get in Touch
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-sm uppercase tracking-wide text-[#AEDD33] mb-2">{contact.title}</h3>
              <a
                href={contact.href}
                className="text-white/90 hover:text-[#AEDD33] transition-colors block"
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {contact.value}
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Login Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 45px rgba(174, 221, 51, 0.35)' }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center px-8 py-3 border border-transparent text-base font-semibold tracking-wide rounded-full text-white bg-gradient-to-r from-[#AEDD33] via-[#4CAF50] to-[#1E8F40] overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-[#B2D942] via-transparent to-[#2E9346]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Staff Login</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

