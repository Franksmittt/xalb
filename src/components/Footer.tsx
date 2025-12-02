import { motion } from 'framer-motion';
import Link from 'next/link';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Our Process', href: '/process' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'The Work', href: '/work' },
  { label: 'Tutorials', href: '/tutorials' },
  { label: 'Resources', href: '/resources' },
];

const services = [
  { label: 'Large Format Printing', href: '/solutions/large-format-printing' },
  { label: 'Signage & Safety Systems', href: '/solutions/large-format-printing' },
  { label: 'Laser Cutting & Fabrication', href: '/solutions/fabrication' },
  { label: 'Vehicle + Fleet Branding', href: '/solutions/fleet-branding' },
  { label: 'Corporate Identity & Design', href: '/solutions/design' },
  { label: 'Lithographic Printing', href: '/litho-printing' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#010308] text-slate-200">
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute -top-20 left-10 w-[28rem] h-[28rem] bg-[#00F5FF]/10 blur-[140px]" />
        <div className="absolute -bottom-32 right-4 w-[32rem] h-[32rem] bg-[#FF1744]/10 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9]">Ready to deploy</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              17 years in the fabrication trenches.
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl">
              Tell us what’s on your factory floor, exhibition schedule, or fleet roadmap—we’ll build the integrated plan:
              design, production, and installation in one command center.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-[#00F5FF] px-6 py-3 text-sm font-semibold text-[#010308] shadow-[0_15px_35px_rgba(0,245,255,0.4)]">
              Launch a Project
            </Link>
            <a href="tel:+27118699169" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:border-white/60 hover:bg-white/5 transition-all">
              +27 11 869 9169
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white">Xsphere</div>
            <p className="text-sm text-slate-300">
              99 Second Avenue, Florentia<br />
              Alberton, Gauteng
            </p>
            <p className="text-sm text-slate-400">
              <a href="mailto:info@xsphere.co.za" className="hover:text-[#00F5FF] transition-colors">info@xsphere.co.za</a><br />
              B-BBEE Level Pending • PTY LTD
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Services</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Follow</p>
            <div className="mt-3 flex gap-3">
              {[
                { name: 'LinkedIn', href: 'https://www.linkedin.com/company/xsphere', icon: 'LI' },
                { name: 'Instagram', href: 'https://www.instagram.com/xsphere', icon: 'IG' },
                { name: 'YouTube', href: 'https://www.youtube.com/@xsphere', icon: 'YT' },
              ].map((network) => (
                <a
                  key={network.name}
                  href={network.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-sm text-white hover:border-white/50 hover:bg-white/5 transition-all"
                  aria-label={`Visit our ${network.name} page`}
                >
                  {network.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-xs uppercase tracking-[0.3em] text-slate-500 flex flex-wrap gap-4 justify-between">
          <span>© {new Date().getFullYear()} Xsphere Marketing and Design. All rights reserved.</span>
          <span>InfoSec Ready • ISO Process Inspired • Made in Gauteng</span>
        </div>
      </div>
    </footer>
  );
}


