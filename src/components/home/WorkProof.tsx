'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const pieces = [
  {
    href: '/work',
    image: '/images/fleet-lineup.png',
    alt: 'Fleet branding work',
    label: 'Fleet',
    title: 'Vehicle programmes that survive the road',
  },
  {
    href: '/work',
    image: '/images/install-team.png',
    alt: 'On-site installation',
    label: 'Install',
    title: 'Site-ready signage and fit-outs',
  },
  {
    href: '/imagine',
    image: '/images/fabrication-lab.png',
    alt: 'CNC fabricated pieces',
    label: 'Fabrication',
    title: 'Dimensional work from CAD',
  },
];

export default function WorkProof() {
  return (
    <section className="section-pad border-t border-line bg-background">
      <div className="mx-auto max-w-wide">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Selected output</p>
            <h2 className="font-display mt-3 text-balance">Proof lives on the floor — and on site.</h2>
            <p className="section-lede">
              Real production photography from the Alberton facility and Gauteng installs. No stock smiling teams.
            </p>
          </div>
          <Link href="/work" className="btn-secondary self-start">
            View work
          </Link>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pieces.map((piece, i) => (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
            >
              <Link href={piece.href} className="group block border border-line bg-surface">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={piece.image}
                    alt={piece.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="spec-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">{piece.label}</p>
                  <h3 className="font-display mt-2 text-xl font-bold text-foreground">{piece.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
