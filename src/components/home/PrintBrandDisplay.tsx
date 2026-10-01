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
        <p className="mt-3 text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-tight tracking-tight text-foreground">
          Print. Brand. Display.
        </p>
        <p className="mt-2 text-lg font-medium text-accent">Because image is everything.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-10">
          <div className="max-w-2xl space-y-3 text-base leading-relaxed text-muted">
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
          <p className="text-sm font-semibold uppercase tracking-wide text-steel lg:pt-1">
            Est. 2001 · 25+ years
            <br />
            Alberton · National install
          </p>
        </div>

        <div className="section-stack grid items-stretch gap-px border border-line bg-line md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="h-full"
            >
              <Link href={pillar.href} className="group flex h-full flex-col bg-surface p-6 transition-colors hover:bg-background sm:p-7">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent">{pillar.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{pillar.body}</p>
                <span className="mt-5 inline-block text-sm font-semibold text-accent">Explore →</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
