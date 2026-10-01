'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const tiles = [
  {
    href: '/services/commercial/cnc-laser-cutting',
    span: 'md:col-span-7',
    image: '/images/fabrication-lab.png',
    imageAlt: 'CNC and laser fabrication at the Alberton facility',
    kicker: 'Precision manufacturing',
    title: 'CNC routing & laser fabrication',
    body: '3 m × 2 m CNC and 1200 × 900 mm laser. MDF, ABS, acrylic, Rowmark, and industrial plastics — nested, cut, and finished in-house.',
  },
  {
    href: '/services/commercial/litho-printing',
    span: 'md:col-span-5',
    image: '/images/design-studio.png',
    imageAlt: 'Commercial print and design production',
    kicker: 'Volume print',
    title: 'Commercial litho',
    body: 'Catalogues, NCR, packaging, and long-run collateral with colour-managed proofs.',
  },
  {
    href: '/services/commercial/large-format-printing',
    span: 'md:col-span-12',
    image: '/images/hero-print.png',
    imageAlt: 'Large format UV printing',
    kicker: 'Wide format',
    title: '3.2 m UV hybrid',
    body: 'Rigid boards and roll-to-roll — Chromadek, Correx, SAV, banners, and exhibition media for sites across Gauteng.',
    wide: true,
  },
];

const materials = [
  'MDF',
  'ABS',
  'Acrylic',
  'Rowmark',
  'HDPE',
  'PETG',
  'Correx',
  'Chromadek',
  'ACM',
  'PVC foam',
  'Cast vinyl',
];

export default function CapabilitiesBento() {
  return (
    <section className="border-t border-line bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="section-eyebrow">Production capacity</p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold text-foreground md:text-4xl">
          Three disciplines. One Alberton floor.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          CNC, commercial print, and large format — planned as nested capacity for Alrode, Germiston, and Johannesburg
          South contracts.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.href}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className={tile.span}
            >
              <Link
                href={tile.href}
                className={`group grid h-full overflow-hidden border border-line bg-background transition-colors hover:border-accent ${
                  tile.wide ? 'md:grid-cols-2' : ''
                }`}
              >
                <div className={`relative ${tile.wide ? 'min-h-[240px]' : 'aspect-[16/10]'}`}>
                  <Image
                    src={tile.image}
                    alt={tile.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes={tile.wide ? '(max-width:768px) 100vw, 50vw' : '(max-width:768px) 100vw, 40vw'}
                  />
                </div>
                <div className="flex flex-col justify-end p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{tile.kicker}</p>
                  <h3 className="font-display mt-2 text-2xl font-bold text-foreground">{tile.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">{tile.body}</p>
                  <span className="mt-5 text-sm font-semibold text-accent">Learn more →</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 border border-line bg-surface-muted px-4 py-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">Materials regularly processed</p>
          <p className="mt-3 text-sm leading-relaxed text-foreground">
            {materials.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  );
}
