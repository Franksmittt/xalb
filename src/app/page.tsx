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

const applications = [
  {
    title: 'Dimensional signage',
    copy: 'Letters, logos, and wall systems cut and finished so a reception, showroom, or campus actually feels owned.',
  },
  {
    title: 'Retail & venue builds',
    copy: 'Acrylic, timber, and layered displays that hold up to foot traffic — not temporary print stuck to a wall.',
  },
  {
    title: 'Awards & campaign pieces',
    copy: 'Engraved recognition, launch gifts, and novelty runs produced at commercial volumes with consistent detail.',
  },
  {
    title: 'Wayfinding & brand detail',
    copy: 'Door plaques, directories, counters, and small-format pieces that keep a large rollout looking intentional.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Brief the idea',
    copy: 'Share sketches, brand files, or a rough concept. We translate it into cut-ready paths.',
  },
  {
    step: '02',
    title: 'Material & CAD',
    copy: 'We specify acrylic, timber, laminate, or sheet goods, then nest parts for clean production.',
  },
  {
    step: '03',
    title: 'CNC & laser',
    copy: 'Routing and engraving on the floor — precise edges, crisp fills, repeatable batches.',
  },
  {
    step: '04',
    title: 'Finish & install',
    copy: 'Polish, paint, assemble, and optionally install across Gauteng so the piece lands ready.',
  },
];

const materials = [
  'Acrylic & perspex',
  'Timber & MDF',
  'Laminates',
  'Anodized aluminium sheet',
  'Card & board',
  'Composites for signs',
];

const otherServices = [
  { name: 'Large format print', href: '/solutions/large-format-printing' },
  { name: 'Fleet branding', href: '/solutions/fleet-branding' },
  { name: 'Design & identity', href: '/solutions/design' },
  { name: 'Installation', href: '/solutions/installation' },
  { name: 'Litho printing', href: '/litho-printing' },
];

export default function Home() {
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData).replace(/</g, '\\u003c'),
        }}
      />

      {/* Hero — one composition, brand-first, full-bleed image */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <Image
          src="/images/fabrication-lab.png"
          alt="Xsphere CNC and laser workshop"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(16,20,12,0.82) 0%, rgba(16,20,12,0.55) 48%, rgba(16,20,12,0.28) 100%)',
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-content flex-col justify-end px-4 pb-16 pt-24 sm:px-6 lg:justify-center lg:px-8 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <p className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Xsphere
            </p>
            <h1 className="font-display mt-5 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              CNC &amp; laser that turn ideas into objects brands can touch.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              Dimensional signage, engraved detail, and fabricated pieces for commercial clients — not a copy
              centre, a workshop that brings concepts to life.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton href="/contact" variant="primary" size="md">
                Brief a commercial project
              </AnimatedButton>
              <AnimatedButton href="/solutions/fabrication" variant="outline" size="md">
                Explore CNC &amp; laser
              </AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we make for large clients */}
      <section className="border-b border-[var(--line)] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="section-eyebrow">Built for serious briefs</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
              What large clients ask us to cut and engrave
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              We focus on novelty, signage, and branded environments — acrylic, timber, and sheet work that makes
              a space feel finished. Heavy industrial steelwork is not our lane.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
            {applications.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <h3 className="font-display text-xl font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 max-w-md text-ink-muted leading-relaxed">{item.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-muted/60 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <p className="section-eyebrow">How it moves</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
              From sketch to finished piece
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              One workshop owns the path — so procurement gets a clear timeline and the piece looks like the
              render.
            </p>
          </div>

          <ol className="mt-14 grid gap-8 md:grid-cols-4">
            {processSteps.map((item, index) => (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative"
              >
                <span className="font-display text-sm font-bold text-accent">{item.step}</span>
                <h3 className="font-display mt-3 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.copy}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Materials / capacity — commercial buyers */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">Workshop capacity</p>
            <h2 className="font-display mt-3 text-3xl font-bold text-ink md:text-4xl">
              Materials and machines for brand-scale work
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-muted">
              Laser bays and CNC routing for signage and novelty fabrication — with finishing in-house so batches
              stay consistent when you need fifty plaques or five hundred campaign pieces.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {materials.map((material) => (
                <li key={material} className="text-sm font-semibold text-ink">
                  <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                  {material}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <AnimatedButton href="/solutions/fabrication" variant="primary">
                See CNC &amp; laser capabilities
              </AnimatedButton>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <Image
              src="/images/fabrication-lab.png"
              alt="Precision CNC and laser fabrication"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </section>

      {/* Secondary services — don't scare people away */}
      <section className="border-y border-[var(--line)] bg-surface px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Full workshop</p>
            <h2 className="font-display mt-3 text-2xl font-bold text-ink md:text-3xl">
              Need print, fleet, or install as well?
            </h2>
            <p className="mt-3 text-ink-muted">
              CNC and laser are the core. The rest of the workshop is still here when a rollout needs more than
              cut parts.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {otherServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="text-sm font-semibold text-ink underline decoration-[var(--line)] underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-ink md:text-4xl">
              Have a commercial idea that needs to become physical?
            </h2>
            <p className="mt-4 text-lg text-ink-muted">
              Tell us the volume, the material, and the deadline. We&apos;ll come back with a clear path from file
              to finished piece.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnimatedButton href="/contact" variant="primary" size="lg">
                Start the brief
              </AnimatedButton>
              <a
                href="tel:+27118699169"
                className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-ink transition-colors hover:text-accent"
              >
                +27 11 869 9169
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
