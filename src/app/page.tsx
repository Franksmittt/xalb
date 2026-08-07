'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedButton from '@/components/AnimatedButton';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xsphere.co.za';

const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Xsphere Marketing and Design',
  url: baseUrl,
  logo: `${baseUrl}/images/logo.png`,
  description:
    'CNC routing and laser engraving for dimensional signage, branded environments, and campaign pieces across Gauteng.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '99 Second Avenue, Florentia',
    addressLocality: 'Alberton',
    addressRegion: 'Gauteng',
    postalCode: '1449',
    addressCountry: 'ZA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+27-11-869-9169',
    contactType: 'Customer Service',
    email: 'info@xsphere.co.za',
    areaServed: 'ZA',
    availableLanguage: ['en'],
  },
};

const capabilityCards = [
  {
    title: 'CNC & Laser',
    subtitle: 'Core focus',
    copy: 'Cut, engrave, and finish dimensional pieces for brands that need more than flat print.',
    href: '/solutions/fabrication',
    image: '/images/fabrication-lab.png',
    tone: 'green' as const,
  },
  {
    title: 'Imagine',
    subtitle: 'Possibilities',
    copy: 'See what laser cutters, engravers, and CNC can actually make — before you brief us.',
    href: '/imagine',
    image: '/images/design-studio.png',
    tone: 'warm' as const,
  },
  {
    title: 'Dimensional signs',
    subtitle: 'For spaces',
    copy: 'Letters, logos, and wall systems that make receptions and campuses feel owned.',
    href: '/solutions/fabrication',
    image: '/images/install-team.png',
    tone: 'green' as const,
  },
  {
    title: 'Large format',
    subtitle: 'Also available',
    copy: 'UV print, POS, and exhibition graphics when the rollout needs walls and floors too.',
    href: '/solutions/large-format-printing',
    image: '/images/hero-print.png',
    tone: 'neutral' as const,
  },
  {
    title: 'Fleet branding',
    subtitle: 'Also available',
    copy: 'Wraps and magnets so the vehicles match the spaces we fabricate.',
    href: '/solutions/fleet-branding',
    image: '/images/fleet-lineup.png',
    tone: 'neutral' as const,
  },
  {
    title: 'Installation',
    subtitle: 'Also available',
    copy: 'Certified crews across Gauteng — from plaques to facade identity.',
    href: '/solutions/installation',
    image: '/images/services/installation/Gemini_Generated_Image_nvcg3fnvcg3fnvcg.png',
    tone: 'neutral' as const,
  },
];

const applicationCards = [
  {
    title: 'Dimensional signage',
    copy: 'Letters, logos, and layered wall systems for showrooms and campuses.',
    image: '/images/fabrication-lab.png',
    href: '/imagine',
  },
  {
    title: 'Retail & venue builds',
    copy: 'MDF and plexi displays built for foot traffic, not temporary stickers.',
    image: '/images/services/large_format/Gemini_Generated_Image_m4v1gsm4v1gsm4v1.png',
    href: '/imagine',
  },
  {
    title: 'Awards & campaign pieces',
    copy: 'Engraved recognition and novelty runs at commercial volume.',
    image: '/images/design-studio.png',
    href: '/imagine',
  },
  {
    title: 'Wayfinding detail',
    copy: 'Door plaques, directories, and small-format pieces for multi-site rollouts.',
    image: '/images/services/installation/Gemini_Generated_Image_3vealc3vealc3vea.png',
    href: '/imagine',
  },
];

const processSteps = [
  { step: '01', title: 'Brief the idea', copy: 'Sketches, brand files, or a rough concept — we turn it into cut-ready paths.' },
  { step: '02', title: 'Material & CAD', copy: 'MDF, plexi, Rowmark, or ABS nested for clean laser and CNC production.' },
  { step: '03', title: 'CNC & laser', copy: 'Routing and engraving on the floor — precise edges, crisp fills, repeatable batches.' },
  { step: '04', title: 'Finish & install', copy: 'Polish, paint, assemble, and optionally install across Gauteng.' },
];

const toneBar: Record<'green' | 'warm' | 'neutral', string> = {
  green: 'bg-accent',
  warm: 'bg-warm',
  neutral: 'bg-ink/70',
};

export default function Home() {
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData).replace(/</g, '\\u003c'),
        }}
      />

      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
        >
          <Image
            src="/images/fabrication-lab.png"
            alt="Xsphere CNC and laser workshop"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(115deg, rgba(16,20,12,0.88) 0%, rgba(16,20,12,0.62) 42%, rgba(47,107,58,0.28) 72%, rgba(217,101,43,0.22) 100%)',
          }}
        />

        <motion.div
          aria-hidden
          className="absolute left-0 top-0 h-full w-1.5 bg-accent-bright sm:w-2"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          style={{ transformOrigin: 'top' }}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-content flex-col justify-end px-4 pb-14 pt-28 sm:px-6 lg:justify-center lg:px-8 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.15 }}
            className="max-w-4xl"
          >
            <p className="font-display text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Xsphere
            </p>
            <h1 className="font-display mt-6 max-w-3xl text-3xl font-semibold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              CNC &amp; laser that turn ideas into{' '}
              <span className="text-accent-bright">objects brands can touch</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/88 sm:text-lg">
              Dimensional signage, engraved detail, and fabricated pieces for commercial clients — a workshop
              that brings concepts to life, not a copy centre.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <AnimatedButton href="/contact" variant="primary" size="lg">
                Brief a commercial project
              </AnimatedButton>
              <AnimatedButton href="/imagine" variant="outline" size="lg">
                Imagine what&apos;s possible
              </AnimatedButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/20 pt-6 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 sm:mt-16"
          >
            <span>Laser cut</span>
            <span className="text-accent-bright">·</span>
            <span>Laser engrave</span>
            <span className="text-warm">·</span>
            <span>CNC route</span>
            <span className="text-accent-bright">·</span>
            <span>Finish &amp; install</span>
          </motion.div>
        </div>
      </section>

      {/* Image / service cards */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="section-eyebrow">Workshop at a glance</p>
              <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
                Pick a path into the work
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                CNC and laser lead. Everything else is still here when a rollout needs the full stack.
              </p>
            </div>
            <Link
              href="/imagine"
              className="text-sm font-semibold text-warm underline decoration-warm/30 underline-offset-4 transition-colors hover:decoration-warm"
            >
              Browse Imagine gallery →
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilityCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
              >
                <Link
                  href={card.href}
                  className="group flex h-full flex-col overflow-hidden border border-[var(--line)] bg-surface transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className={`absolute left-0 top-0 h-full w-1 ${toneBar[card.tone]}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                      {card.subtitle}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-xl font-bold text-ink group-hover:text-accent">
                      {card.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">{card.copy}</p>
                    <span className="mt-4 text-sm font-semibold text-accent">Open →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application image cards */}
      <section className="bg-[#1c2118] px-4 py-20 text-[#e8ebe2] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">
              Built for serious briefs
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
              What large clients ask us to cut and engrave
            </h2>
            <p className="mt-4 text-lg text-[#c4cbb8]">
              Novelty, signage, and branded environments — MDF, plexiglass, Rowmark, and ABS. Wood and plastic
              ideas into objects that look intentional at scale.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {applicationCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <Link
                  href={item.href}
                  className="group grid overflow-hidden border border-white/10 bg-[#252b20] transition-colors hover:border-accent-bright/50 sm:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="relative min-h-[180px] sm:min-h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 40vw"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6">
                    <h3 className="font-display text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#c4cbb8]">{item.copy}</p>
                    <span className="mt-4 text-sm font-semibold text-accent-bright">See examples →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-warm-soft/40 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <p className="section-eyebrow">How it moves</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
              From sketch to finished piece
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              One workshop owns the path — clear timelines, pieces that match the proof.
            </p>
          </div>

          <ol className="mt-14 grid gap-6 md:grid-cols-4">
            {processSteps.map((item, index) => (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="border-t-2 border-accent pt-5"
              >
                <span className="font-display text-sm font-bold text-warm">{item.step}</span>
                <h3 className="font-display mt-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.copy}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content overflow-hidden border border-[var(--line)] bg-surface">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-8 sm:p-12">
              <p className="section-eyebrow">Next step</p>
              <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
                Have an idea that needs to become physical?
              </h2>
              <p className="mt-4 max-w-xl text-lg text-ink-muted">
                Tell us the volume, the material, and the deadline — or start in Imagine if you&apos;re still
                exploring what&apos;s possible.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AnimatedButton href="/contact" variant="primary" size="lg">
                  Start the brief
                </AnimatedButton>
                <AnimatedButton href="/imagine" variant="secondary" size="lg">
                  Open Imagine
                </AnimatedButton>
              </div>
            </div>
            <div className="relative min-h-[240px]">
              <Image
                src="/images/fabrication-lab.png"
                alt="Laser and CNC workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-warm/25 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
