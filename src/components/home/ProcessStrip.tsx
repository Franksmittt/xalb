'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Design',
    body: 'Production-aware creative — files built for the bed, the press, and the install crew from day one.',
  },
  {
    num: '02',
    title: 'Produce',
    body: 'Litho volume, 3.2 m UV, CNC routing, and laser cutting nested on the Alberton floor — not outsourced.',
  },
  {
    num: '03',
    title: 'Install',
    body: 'Site-ready finishing and install so procurement gets one accountable timeline, not three vendors.',
  },
];

export default function ProcessStrip() {
  return (
    <section className="section-pad bg-background">
      <div className="mx-auto max-w-wide">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Integrated advantage</p>
          <h2 className="font-display mt-3 text-balance">One partner. Zero handoff friction.</h2>
          <p className="section-lede">
            Most buyers juggle an agency, a print house, and a fabricator. Xsphere owns the full chain — so colour,
            tolerance, and deadline stay under one roof.
          </p>
        </div>

        <div className="mt-14 grid gap-0 border border-line bg-surface md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="border-line p-8 md:border-r md:p-10 md:last:border-r-0"
            >
              <p className="spec-mono text-accent">{step.num}</p>
              <h3 className="font-display mt-4 text-2xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">{step.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
