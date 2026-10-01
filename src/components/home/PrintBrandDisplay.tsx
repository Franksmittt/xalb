'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Print',
    body: 'Large format, specialised media, and commercial litho — colour-managed for retail and industrial rollouts.',
    href: '/services/commercial/large-format-printing',
  },
  {
    title: 'Brand',
    body: 'Vehicle wraps, corporate identity, dimensional presence, and gifts that keep the brand in hand.',
    href: '/services/commercial/vehicle-fleet-branding',
  },
  {
    title: 'Display',
    body: 'Exhibition and activation systems — pull-ups, gazebos, banner walls — from concept to installed stand.',
    href: '/services/commercial/display-branding',
  },
];

export default function PrintBrandDisplay() {
  return (
    <section className="section-pad border-t border-line bg-surface">
      <div className="mx-auto max-w-wide">
        <p className="section-eyebrow">About Xsphere</p>
        <p className="font-display mt-4 text-[clamp(2.4rem,6vw,4.5rem)] font-extrabold leading-[0.95] tracking-tight text-foreground">
          Print. Brand. Display.
        </p>
        <p className="mt-3 text-lg font-medium text-accent">Because image is everything.</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted">
            <p>
              Established in 2001, Xsphere has built its reputation on exceptional large-format printing, branding
              solutions, and professional installations — now backed by in-house CNC and commercial litho on the same
              Alberton floor.
            </p>
            <p>
              Whether it is a national rollout, retail branding campaign, or a once-off exhibition stand, our team
              manages every project from concept through to installation across South Africa.
            </p>
          </div>
          <p className="spec-mono text-sm uppercase tracking-[0.12em] text-steel lg:pt-2">
            Est. 2001 · 25+ years
            <br />
            Alberton · National install
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link href={pillar.href} className="group block h-full bg-surface p-7 transition-colors hover:bg-background sm:p-8">
                <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-accent">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{pillar.body}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-accent">Explore →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
