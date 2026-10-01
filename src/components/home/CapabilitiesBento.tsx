'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const disciplines = [
  {
    href: '/services/commercial/cnc-laser-cutting',
    index: '01',
    kicker: 'Precision manufacturing',
    title: 'CNC routing & laser fabrication',
    body: '3 m × 2 m CNC and 1200 × 900 mm laser. Nested cutting for MDF, ABS, acrylic, Rowmark, and industrial plastics — prototypes through programme volume.',
    image: '/images/fabrication-lab.png',
    alt: 'CNC and laser fabrication at Xsphere Alberton',
    specs: ['3 × 2 m CNC', '1200 × 900 laser', 'MDF · ABS · Acrylic'],
  },
  {
    href: '/services/commercial/litho-printing',
    index: '02',
    kicker: 'Commercial print',
    title: 'High-volume litho',
    body: 'Catalogues, NCR, packaging, and long-run collateral with colour-managed proofs — when digital short-run is no longer the economical path.',
    image: '/images/design-studio.png',
    alt: 'Commercial litho and design production',
    specs: ['CMYK + specials', 'Bindery path', 'Proof before press'],
  },
  {
    href: '/services/commercial/large-format-printing',
    index: '03',
    kicker: 'Wide format',
    title: '3.2 m UV hybrid',
    body: 'Flatbed rigid and roll-to-roll for Chromadek, Correx, SAV, banners, fleet skins, and exhibition media — finished for install, not just print.',
    image: '/images/hero-print.png',
    alt: 'Large format UV printing',
    specs: ['3.2 m width', 'Rigid + roll', 'Install-ready'],
  },
];

export default function CapabilitiesBento() {
  return (
    <section className="section-pad border-t border-line bg-surface">
      <div className="mx-auto max-w-wide">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Production disciplines</p>
            <h2 className="font-display mt-3 text-balance">Three floors of capacity. One address.</h2>
            <p className="section-lede">
              Specced for procurement teams who need equipment facts — not slogans — before they issue an RFQ.
            </p>
          </div>
          <Link href="/services" className="btn-secondary self-start lg:self-auto">
            All capabilities
          </Link>
        </div>

        <div className="mt-14 space-y-6">
          {disciplines.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={item.href}
                className={`group grid overflow-hidden border border-line bg-background transition-colors hover:border-accent lg:min-h-[360px] ${
                  i % 2 === 1 ? 'lg:grid-cols-[1.05fr_0.95fr]' : 'lg:grid-cols-[0.95fr_1.05fr]'
                }`}
              >
                <div
                  className={`relative min-h-[240px] lg:min-h-full ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                  <div className="flex items-center gap-4">
                    <span className="spec-mono text-accent">{item.index}</span>
                    <span className="section-eyebrow !normal-case !tracking-[0.12em]">{item.kicker}</span>
                  </div>
                  <h3 className="font-display mt-4 text-[clamp(1.6rem,2.5vw,2.15rem)] font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-muted">{item.body}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                    {item.specs.map((spec) => (
                      <li key={spec} className="spec-mono text-[0.72rem] uppercase tracking-[0.1em] text-steel">
                        {spec}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 text-sm font-semibold text-accent">View discipline →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
