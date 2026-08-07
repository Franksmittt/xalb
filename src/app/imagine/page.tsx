'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedButton from '@/components/AnimatedButton';

type Category = 'all' | 'laser-cut' | 'laser-engrave' | 'cnc';

const filters: { id: Category; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'laser-cut', label: 'Laser cut' },
  { id: 'laser-engrave', label: 'Laser engraved' },
  { id: 'cnc', label: 'CNC routed' },
];

const possibilities = [
  {
    id: 'layered-logos',
    category: 'laser-cut' as Category,
    title: 'Layered brand logos',
    material: 'Acrylic + timber',
    copy: 'Multi-depth logos for reception walls — cut clean, stacked, finished to brand colour.',
    image: '/images/fabrication-lab.png',
    span: 'lg:col-span-2',
  },
  {
    id: 'desktop-awards',
    category: 'laser-engrave' as Category,
    title: 'Awards & recognition',
    material: 'Acrylic / anodized sheet',
    copy: 'Engraved detail that stays crisp across fifty or five hundred identical pieces.',
    image: '/images/design-studio.png',
    span: '',
  },
  {
    id: 'dimensional-letters',
    category: 'cnc' as Category,
    title: 'Dimensional lettering',
    material: 'MDF · foam · timber',
    copy: 'CNC-routed letters for storefronts and interiors — painted, laminated, or left raw.',
    image: '/images/install-team.png',
    span: '',
  },
  {
    id: 'retail-fixtures',
    category: 'cnc' as Category,
    title: 'Retail fixtures',
    material: 'Timber · laminate',
    copy: 'Counters, trays, and display architecture that survive real foot traffic.',
    image: '/images/services/large_format/Gemini_Generated_Image_w5o6l4w5o6l4w5o6.png',
    span: '',
  },
  {
    id: 'wayfinding',
    category: 'laser-engrave' as Category,
    title: 'Wayfinding & directories',
    material: 'Perspex · aluminium sheet',
    copy: 'Door plaques, directories, and room IDs for multi-site campuses and offices.',
    image: '/images/services/installation/Gemini_Generated_Image_3vealc3vealc3vea.png',
    span: '',
  },
  {
    id: 'pattern-screens',
    category: 'laser-cut' as Category,
    title: 'Pattern screens & panels',
    material: 'Acrylic · board',
    copy: 'Decorative cut patterns for venues, exhibitions, and branded environments.',
    image: '/images/services/large_format/Gemini_Generated_Image_rhxz54rhxz54rhxz.png',
    span: 'lg:col-span-2',
  },
  {
    id: 'campaign-gifts',
    category: 'laser-engrave' as Category,
    title: 'Campaign gifts & novelty',
    material: 'Mixed substrates',
    copy: 'Launch pieces and novelty runs — same file, same finish, every unit.',
    image: '/images/services/large_format/Gemini_Generated_Image_y6btqdy6btqdy6bt.png',
    span: '',
  },
  {
    id: 'facade-identity',
    category: 'cnc' as Category,
    title: 'Facade identity pieces',
    material: 'Weather-ready builds',
    copy: 'Larger dimensional marks fabricated in-house and installed on site.',
    image: '/images/services/installation/Gemini_Generated_Image_nvcg3fnvcg3fnvcg.png',
    span: '',
  },
  {
    id: 'pos-structures',
    category: 'laser-cut' as Category,
    title: 'POS structures',
    material: 'Acrylic · card · board',
    copy: 'Precision-cut point-of-sale builds that sit beside large-format print when needed.',
    image: '/images/hero-print.png',
    span: '',
  },
];

export default function ImaginePage() {
  const [active, setActive] = useState<Category>('all');

  const visible =
    active === 'all' ? possibilities : possibilities.filter((item) => item.category === active);

  return (
    <main className="page-shell">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/fabrication-lab.png"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(120deg, rgba(16,20,12,0.9) 0%, rgba(16,20,12,0.7) 45%, rgba(217,101,43,0.35) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">Imagine</p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
              What&apos;s possible with laser &amp; CNC
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">
              This is where we help you see it — cut, engraved, and routed pieces for signs, novelty, retail,
              and branded spaces. Browse ideas, then brief the workshop.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton href="/contact" variant="primary" size="md">
                Brief a project from an idea
              </AnimatedButton>
              <AnimatedButton href="/solutions/fabrication" variant="outline" size="md">
                CNC &amp; laser capabilities
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters + gallery */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col gap-6 border-b border-[var(--line)] pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="section-eyebrow">Possibility gallery</p>
              <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
                Filter by how it&apos;s made
              </h2>
            </div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Process filters">
              {filters.map((filter) => {
                const selected = active === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(filter.id)}
                    className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                      selected
                        ? 'bg-accent text-ink-inverse'
                        : 'bg-surface-muted text-ink hover:bg-accent-soft'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {visible.map((item, index) => (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, delay: index * 0.03 }}
                  className={`group overflow-hidden border border-[var(--line)] bg-surface ${item.span}`}
                >
                  <div className={`relative overflow-hidden ${item.span ? 'aspect-[21/9] sm:aspect-[2/1]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-bright">
                        {item.material}
                      </p>
                      <h3 className="font-display mt-1 text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm leading-relaxed text-ink-muted">{item.copy}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-warm">
                      {item.category === 'laser-cut' && 'Laser cut'}
                      {item.category === 'laser-engrave' && 'Laser engraved'}
                      {item.category === 'cnc' && 'CNC routed'}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* How to use this page */}
      <section className="border-y border-[var(--line)] bg-accent-soft/35 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-10 md:grid-cols-3">
          {[
            {
              title: 'Spot a direction',
              copy: 'Use the gallery to show stakeholders what “laser” or “CNC” actually looks like in the real world.',
            },
            {
              title: 'Talk materials',
              copy: 'Acrylic, timber, MDF, laminates, aluminium sheet — we’ll help you pick what fits the brief and the budget.',
            },
            {
              title: 'Brief the workshop',
              copy: 'Send volumes, deadlines, and references. We’ll reply with a clear production path.',
            },
          ].map((step, index) => (
            <div key={step.title}>
              <span className="font-display text-sm font-bold text-warm">0{index + 1}</span>
              <h3 className="font-display mt-2 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Seen something close to your idea?
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Tell us what you want cut or engraved. Commercial volumes welcome — we&apos;ll map materials,
              lead time, and finish.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton href="/contact" variant="primary" size="lg">
                Brief the workshop
              </AnimatedButton>
              <Link
                href="/solutions/fabrication"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-ink transition-colors hover:text-accent"
              >
                Full CNC &amp; laser details →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
