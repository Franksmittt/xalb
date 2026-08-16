'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const tiles = [
  {
    href: '/services/commercial/cnc-laser-cutting',
    span: 'md:col-span-8 md:row-span-2',
    kicker: 'Core manufacturing',
    title: 'Precision CNC routing & laser fabrication',
    body: '3 m × 2 m CNC and 1200 × 900 mm laser. MDF, ABS, acrylic, Rowmark, and industrial plastics — nested, cut, and finished in Alberton.',
  },
  {
    href: '/services/commercial/litho-printing',
    span: 'md:col-span-4',
    kicker: 'Volume print',
    title: 'Commercial litho',
    body: 'Catalogues, NCR, packaging, and long-run collateral with colour-managed proofs.',
  },
  {
    href: '/services/commercial/large-format-printing',
    span: 'md:col-span-4',
    kicker: 'Wide format',
    title: '3.2 m UV hybrid',
    body: 'Rigid boards and roll-to-roll — Chromadek, Correx, SAV, banners, and exhibition media.',
  },
];

const marquee =
  'MDF  //  ABS  //  ACRYLIC  //  ROWMARK  //  HDPE  //  PETG  //  CORREX  //  CHROMADEK  //  ACM  //  XANITA  //  PVC FOAM  //  CAST VINYL  ';

export default function CapabilitiesBento() {
  return (
    <section className="bg-[#050505] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">Sovereign production capacity</p>
        <h2 className="font-display mt-3 max-w-4xl text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Zero compromise. Three disciplines.
        </h2>
        <p className="mt-4 max-w-2xl text-neutral-400">
          CNC, commercial print, and large format — executed from the Alberton floor for Alrode, Germiston, and Johannesburg
          South.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
          {tiles.map((tile, i) => (
            <motion.div
              key={tile.href}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={tile.span}
            >
              <Link
                href={tile.href}
                className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-8 transition-all duration-500 hover:border-cyan-500/50"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-400/80">{tile.kicker}</p>
                <h3 className="font-display mt-3 text-2xl font-bold text-white md:text-3xl">{tile.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300">
                  {tile.body}
                </p>
              </Link>
            </motion.div>
          ))}
          <div className="overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 py-5 md:col-span-12">
            <div className="flex whitespace-nowrap font-mono text-sm tracking-[0.35em] text-neutral-500">
              <span className="animate-[marquee_32s_linear_infinite]">{marquee.repeat(4)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
