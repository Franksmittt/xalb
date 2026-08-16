'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedButton from '@/components/AnimatedButton';

type Vibe = 'all' | 'novelty' | 'corporate' | 'signs' | 'maker';

const filters: { id: Vibe; label: string }[] = [
  { id: 'all', label: 'Everything' },
  { id: 'novelty', label: 'Novelty & gifts' },
  { id: 'corporate', label: 'Corporate & brand' },
  { id: 'signs', label: 'Signs & spaces' },
  { id: 'maker', label: 'Maker ideas' },
];

const sparks = [
  {
    who: 'The business owner',
    line: '“Can you make our logo sit off the wall so the boardroom finally feels like us?”',
  },
  {
    who: 'The events person',
    line: '“We need 200 identical gifts that don’t look like promo junk.”',
  },
  {
    who: 'The young maker',
    line: '“I’ve got a sketch in my notes app — can we actually cut this?”',
  },
  {
    who: 'Arts & crafts',
    line: '“I want something personal, detailed, and real — not printed on paper.”',
  },
];

const materials = [
  {
    name: 'MDF',
    vibe: 'The blank canvas',
    copy: 'Paint it, laminate it, stack it, route it. Perfect for dimensional letters, wall art, prototypes, and novelty pieces that need body.',
  },
  {
    name: 'Plexiglass',
    vibe: 'Clear · coloured · frosted',
    copy: 'Crisp edges, layered logos, light-catching awards, modern signage, and display pieces that feel premium.',
  },
  {
    name: 'Rowmark',
    vibe: 'Engraving plastic',
    copy: 'Two-tone engraving that pops — nameplates, directories, control panels, badges, and detail work that stays sharp.',
  },
  {
    name: 'ABS',
    vibe: 'Tough plastic',
    copy: 'Durable cut and engraved parts for functional pieces, housings, tags, and builds that need to take a knock.',
  },
];

const ideas = [
  {
    id: 'layered-mdf-logo',
    vibe: 'corporate' as Vibe,
    process: 'CNC + finish',
    material: 'MDF',
    title: 'Layered reception logos',
    wow: 'Your brand, thick enough to cast a shadow.',
    copy: 'Stacked MDF (or MDF + plexi) logos that turn a blank wall into a brand moment.',
    image: '/images/fabrication-lab.png',
    span: 'lg:col-span-2',
  },
  {
    id: 'rowmark-nameplates',
    vibe: 'corporate' as Vibe,
    process: 'Laser engrave',
    material: 'Rowmark',
    title: 'Desk & door nameplates',
    wow: 'Small piece. Instantly professional.',
    copy: 'Two-tone Rowmark engraving for desks, doors, and directories — one name or a whole floor.',
    image: '/images/design-studio.png',
    span: '',
  },
  {
    id: 'wedding-novelty',
    vibe: 'novelty' as Vibe,
    process: 'Laser cut + engrave',
    material: 'MDF · plexi',
    title: 'Wedding & celebration pieces',
    wow: 'Guest books, cake toppers, table maps — made, not ordered from a template farm.',
    copy: 'Custom cut shapes and engraved details for days people actually remember.',
    image: '/images/services/large_format/Gemini_Generated_Image_y6btqdy6btqdy6bt.png',
    span: '',
  },
  {
    id: 'campaign-gifts',
    vibe: 'novelty' as Vibe,
    process: 'Laser engrave',
    material: 'Plexi · ABS · Rowmark',
    title: 'Campaign gifts that feel expensive',
    wow: '200 units. Same detail. Zero “cheap promo” energy.',
    copy: 'Launch gifts, client thank-yous, and novelty drops produced as a real batch.',
    image: '/images/services/large_format/Gemini_Generated_Image_m4v1gsm4v1gsm4v1.png',
    span: '',
  },
  {
    id: 'giant-letters',
    vibe: 'signs' as Vibe,
    process: 'CNC route',
    material: 'MDF',
    title: 'Giant dimensional letters',
    wow: 'Up to a 3 m × 2 m CNC bed — go big.',
    copy: 'Shopfront letters, event words, photo-backdrop type. Painted, wrapped, or raw workshop chic.',
    image: '/images/install-team.png',
    span: 'lg:col-span-2',
  },
  {
    id: 'wayfinding-set',
    vibe: 'signs' as Vibe,
    process: 'Laser engrave / cut',
    material: 'Rowmark · plexi',
    title: 'Wayfinding kits',
    wow: 'A whole building that finally makes sense.',
    copy: 'Room IDs, arrows, directories, and plaques cut as a matching system.',
    image: '/images/services/installation/Gemini_Generated_Image_3vealc3vealc3vea.png',
    span: '',
  },
  {
    id: 'maker-prototype',
    vibe: 'maker' as Vibe,
    process: 'CNC / laser',
    material: 'MDF · ABS · plexi',
    title: 'Prototype the thing in your head',
    wow: 'Sketch → cut file → physical part.',
    copy: 'For the young maker with an idea: housings, jigs, product shells, display mocks, first editions.',
    image: '/images/services/large_format/Gemini_Generated_Image_w5o6l4w5o6l4w5o6.png',
    span: '',
  },
  {
    id: 'wall-art',
    vibe: 'maker' as Vibe,
    process: 'Laser cut',
    material: 'MDF · plexi',
    title: 'Wall art & pattern panels',
    wow: 'Mandala, map, skyline, custom illustration — cut into material.',
    copy: 'Arts-and-crafts energy with workshop precision. Personal pieces or retail-ready runs.',
    image: '/images/services/large_format/Gemini_Generated_Image_rhxz54rhxz54rhxz.png',
    span: '',
  },
  {
    id: 'awards',
    vibe: 'corporate' as Vibe,
    process: 'Laser engrave',
    material: 'Plexiglass',
    title: 'Awards & recognition',
    wow: 'Light catches the engrave. People keep these.',
    copy: 'Clear or coloured plexi awards with crisp laser detail — one-offs or annual programmes.',
    image: '/images/design-studio.png',
    span: '',
  },
  {
    id: 'pos-risers',
    vibe: 'signs' as Vibe,
    process: 'Laser cut / CNC',
    material: 'MDF · plexi · ABS',
    title: 'POS risers & display kits',
    wow: 'The product finally has a stage.',
    copy: 'Counter displays, brochure holders, branded trays — cut to fit the campaign.',
    image: '/images/hero-print.png',
    span: '',
  },
  {
    id: 'personalised-gifts',
    vibe: 'novelty' as Vibe,
    process: 'Laser engrave',
    material: 'Rowmark · plexi · MDF',
    title: 'Personalised gifts & keepsakes',
    wow: 'Names, dates, maps, inside jokes — burned into something real.',
    copy: 'Coasters, key tags, frames, ornaments, memory pieces. Small, special, addictive.',
    image: '/images/services/installation/Gemini_Generated_Image_ojk0alojk0alojk0.png',
    span: 'lg:col-span-2',
  },
  {
    id: 'control-panels',
    vibe: 'maker' as Vibe,
    process: 'Laser engrave',
    material: 'Rowmark · ABS',
    title: 'Labels, bezels & control panels',
    wow: 'Functional detail that looks designed.',
    copy: 'Machine labels, switch plates, instrument panels — clean engraving on plastic that lasts.',
    image: '/images/services/installation/Gemini_Generated_Image_94nxa994nxa994nx.png',
    span: '',
  },
];

const bedSpecs = [
  {
    label: 'Laser',
    value: '1200 × 900 mm',
    detail: 'Cut & engrave wood and plastic with fine detail',
  },
  {
    label: 'CNC',
    value: '3 m × 2 m',
    detail: 'Route larger dimensional letters, panels, and builds',
  },
  {
    label: 'Materials',
    value: 'MDF · Plexi · Rowmark · ABS',
    detail: 'Wood and plastic — painted, layered, or left crisp',
  },
];

export default function ImaginePage() {
  const [active, setActive] = useState<Vibe>('all');

  const visible = active === 'all' ? ideas : ideas.filter((item) => item.vibe === active);

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
                'linear-gradient(118deg, rgba(16,20,12,0.92) 0%, rgba(16,20,12,0.72) 48%, rgba(217,101,43,0.38) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">Imagine</p>
            <h1 className="font-display mt-4 text-4xl font-bold leading-[1.08] text-white sm:text-5xl md:text-6xl">
              Start with a sheet of MDF.
              <span className="mt-2 block text-accent-bright">End with something people can&apos;t stop touching.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/88">
              Novelty. Gifts. Brand pieces. Weird little inventions. This is where we show what laser and CNC can
              actually make — so your brain starts going “wait… we could do that.”
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton href="/contact" variant="primary" size="md">
                Bring us an idea
              </AnimatedButton>
              <AnimatedButton href="#gallery" variant="outline" size="md">
                Scroll the possibilities
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Machine truth */}
      <section className="border-b border-[var(--line)] bg-surface px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-6 md:grid-cols-3">
          {bedSpecs.map((spec) => (
            <div key={spec.label} className="border-l-2 border-accent pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">{spec.label}</p>
              <p className="font-display mt-2 text-xl font-bold text-ink md:text-2xl">{spec.value}</p>
              <p className="mt-1 text-sm text-ink-muted">{spec.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who walks in */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Who this is for</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
              Corporate. Craft. Big business. First-time makers.
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Different people. Same spark — turning an idea into a physical thing out of wood or plastic.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {sparks.map((item, index) => (
              <motion.blockquote
                key={item.who}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border border-[var(--line)] bg-warm-soft/35 p-6"
              >
                <p className="text-base leading-relaxed text-ink">{item.line}</p>
                <footer className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-warm">
                  {item.who}
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-[#1c2118] px-4 py-16 text-[#e8ebe2] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">What we cut</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              MDF, plexiglass, Rowmark, ABS
            </h2>
            <p className="mt-4 text-lg text-[#c4cbb8]">
              Wood and plastic — the everyday materials that become signs, gifts, prototypes, and “how did you make
              that?” pieces.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((material) => (
              <div key={material.name} className="border border-white/10 bg-[#252b20] p-5">
                <h3 className="font-display text-xl font-bold text-white">{material.name}</h3>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-warm">{material.vibe}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#c4cbb8]">{material.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col gap-6 border-b border-[var(--line)] pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Possibility gallery</p>
              <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
                Oh — I didn&apos;t know you could do that
              </h2>
              <p className="mt-3 text-ink-muted">
                Browse until something clicks. Then we turn it into a real brief.
              </p>
            </div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Idea filters">
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
                  <div
                    className={`relative overflow-hidden ${
                      item.span ? 'aspect-[21/9] sm:aspect-[2/1]' : 'aspect-[4/3]'
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-bright">
                        {item.material}
                      </p>
                      <h3 className="font-display mt-1 text-2xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-display text-base font-semibold text-ink">{item.wow}</p>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.copy}</p>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-warm">
                      {item.process}
                    </p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Endless invite */}
      <section className="border-y border-[var(--line)] bg-accent-soft/40 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-3xl">
            <p className="section-eyebrow">The list never ends</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
              If you can draw it, describe it, or steal the idea from a Pinterest save — we can usually cut it.
            </h2>
            <ul className="mt-6 grid gap-3 text-ink-muted sm:grid-cols-2">
              {[
                'Cake toppers & party props',
                'Boardroom crests & seals',
                'Custom map art of your suburb',
                'Product jigs & first prototypes',
                'Staff long-service gifts',
                'Light-box letter backs',
                'Menu boards & table numbers',
                'That weird idea you haven’t told anyone yet',
              ].map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content overflow-hidden border border-[var(--line)] bg-surface">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-12">
              <p className="section-eyebrow">Your move</p>
              <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
                Got that “oh hell yes” idea?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-ink-muted">
                Send a sketch, a photo of something similar, or just describe it. We&apos;ll tell you if it wants
                laser, CNC, MDF, plexi, Rowmark, or ABS — and what it takes to make it real.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AnimatedButton href="/contact" variant="primary" size="lg">
                  Bring the idea to life
                </AnimatedButton>
                <Link
                  href="/services/commercial/cnc-laser-cutting"
                  className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-ink transition-colors hover:text-accent"
                >
                  Machine details →
                </Link>
              </div>
            </div>
            <div className="relative min-h-[260px] bg-[#1c2118] p-8 text-[#e8ebe2] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-bright">Beds</p>
              <p className="font-display mt-4 text-2xl font-bold text-white">Laser 1200 × 900 mm</p>
              <p className="font-display mt-2 text-2xl font-bold text-white">CNC 3 m × 2 m</p>
              <p className="mt-6 text-sm leading-relaxed text-[#c4cbb8]">
                Wood and plastic. Fine detail on the laser. Big dimensional work on the CNC. Same workshop.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
