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
            <h2 className="mt-3 text-balance">Proof lives on the floor — and on site.</h2>
            <p className="section-lede">
              Real production photography from the Alberton facility and Gauteng installs. No stock smiling teams.
            </p>
          </div>
          <Link href="/work" className="btn-secondary self-start md:self-auto">
            View work
          </Link>
        </div>

        <div className="section-stack grid auto-rows-fr items-stretch gap-5 md:grid-cols-3">
          {pieces.map((piece, i) => (
            <motion.div
              key={piece.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
              className="h-full min-h-0"
            >
              <Link
                href={piece.href}
                className="group flex h-full flex-col border border-line bg-surface"
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden">
                  <Image
                    src={piece.image}
                    alt={piece.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width:768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent">{piece.label}</p>
                  <h3 className="mt-2 flex-1 text-lg font-bold leading-snug text-foreground sm:min-h-[3.5rem] sm:text-xl">
                    {piece.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
