'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedButton from '@/components/AnimatedButton';
import AnimatedCard from '@/components/AnimatedCard';
import ServiceSlider from '@/components/ServiceSlider';
import IntegratedPillars from '@/components/IntegratedPillars';
import ServicesMatrix from '@/components/ServicesMatrix';
import ShowcaseReel from '@/components/ShowcaseReel';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xsphere.co.za';

// Structured data for Organization
const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Xsphere Marketing and Design',
  url: baseUrl,
  logo: `${baseUrl}/images/logo.png`,
  description: 'Integrated Design, Production, and Installation Services. 17 years of expertise in large format printing, laser cutting, vehicle branding, and signage installation across Gauteng.',
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
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
      timeZone: 'Africa/Johannesburg',
    },
  },
  sameAs: [
    // Add social media URLs when available
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '127',
    bestRating: '5',
    worstRating: '1',
  },
};

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };

  const experienceMetrics = [
    {
      label: 'Avg. Turnaround',
      value: '3–5 Days',
      detail: 'Pixel-to-pavement speed',
      gradient: 'from-[#AEDD33] to-[#4CAF50]',
    },
    {
      label: 'NPS',
      value: '+72',
      detail: 'Customer delight index',
      gradient: 'from-[#4CAF50] to-[#1E8F40]',
    },
    {
      label: 'Projects Delivered',
      value: '12k+',
      detail: 'Retail, industrial & fleet',
      gradient: 'from-[#FF6B00] to-[#FFD166]',
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-slate-100">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData).replace(/</g, '\\u003c'),
        }}
      />
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(174,221,51,0.2), transparent 45%), radial-gradient(circle at 80% 0%, rgba(30,143,64,0.2), transparent 35%), radial-gradient(circle at 50% 50%, rgba(0,245,255,0.15), transparent 40%)',
          }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,107,0,0.08)_1px,_transparent_1px)] [background-size:60px_60px]"
          animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative lg:h-[calc(100vh-56px-160px)] min-h-[420px] max-h-[540px] flex items-center overflow-hidden px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-6">
        {/* Video-ready overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
          <motion.div
            animate={floatingAnimation}
            className="absolute top-16 left-8 w-[22rem] h-[22rem] bg-[#AEDD33]/25 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, duration: 6, delay: 1.2 },
            }}
            className="absolute bottom-10 right-8 w-[26rem] h-[26rem] bg-[#1E8F40]/20 rounded-full blur-[140px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5"
          >
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-[1.8rem] md:text-[2.5rem] font-extrabold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="block text-white/90">
                  Visual Authority for
                </span>
                <span className="block bg-gradient-to-r from-[#AEDD33] via-[#4CAF50] to-[#1E8F40] bg-clip-text text-transparent">
                  B2B Fabrication Powerhouses
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[0.85rem] md:text-[0.95rem] text-slate-200/85 max-w-2xl leading-relaxed"
            >
              We choreograph Design → Production → Installation in one kinetic pipeline. Drop in a looping facility reel for instant proof of control, speed, and precision.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3"
            >
              <AnimatedButton href="/contact" variant="primary" size="md" className="w-full sm:w-auto text-sm px-5 py-2.5">
                Launch a Project
              </AnimatedButton>
              <AnimatedButton href="/work" variant="outline" size="md" className="w-full sm:w-auto border-white/30 text-white hover:text-white text-sm px-5 py-2.5">
                Tour the Facility
              </AnimatedButton>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-2 sm:gap-3 max-w-sm"
            >
              {[
                { label: 'Turnaround', value: '3-5 Days' },
                { label: 'Capacity', value: '12k+ jobs' },
                { label: 'Experience', value: '17 Years' },
                { label: 'NPS', value: '+72' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 sm:px-4 sm:py-2.5">
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-wide text-slate-300">{stat.label}</p>
                  <p className="text-sm sm:text-base font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <ServiceSlider />
        </div>
      </section>

      {/* Service Icons Section */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-10 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          >
            {[
              {
                name: 'Laser Cutting',
                href: '/solutions/fabrication',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="4" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M9 8H15M9 11H15M9 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="18" r="1.5" fill="currentColor" opacity="0.6"/>
                    <path d="M12 2V4M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                gradient: 'from-white/10 to-white/5',
              },
              {
                name: 'Large Format',
                href: '/solutions/large-format-printing',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <rect x="5" y="6" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M7 9H17M7 11.5H17M7 14H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                gradient: 'from-white/10 to-white/5',
              },
              {
                name: 'Fleet Branding',
                href: '/solutions/fleet-branding',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9H20C20.5523 9 21 9.44772 21 10V15C21 15.5523 20.5523 16 20 16H4C3.44772 16 3 15.5523 3 15V10C3 9.44772 3.44772 9 4 9Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <rect x="5" y="11" width="14" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <circle cx="8" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <circle cx="16" cy="19" r="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M6 7L12 4L18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                gradient: 'from-white/10 to-white/5',
              },
              {
                name: 'Design',
                href: '/solutions/design',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L4 8V16L12 21L20 16V8L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M12 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M4 8L12 13L20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 16L12 21L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" opacity="0.6"/>
                  </svg>
                ),
                gradient: 'from-white/10 to-white/5',
              },
              {
                name: 'Installation',
                href: '/solutions/installation',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <rect x="7" y="7" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M10 10H14M10 12.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="21" r="1.5" fill="currentColor" opacity="0.6"/>
                    <path d="M8 4L12 2L16 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                gradient: 'from-white/10 to-white/5',
              },
              {
                name: 'Litho Printing',
                href: '/litho-printing',
                icon: (
                  <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="5" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <rect x="6" y="7" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M8 10H16M8 12.5H16M8 15H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="18" cy="7" r="1" fill="currentColor" opacity="0.6"/>
                  </svg>
                ),
                gradient: 'from-white/10 to-white/5',
              },
            ].map((service, index) => (
              <Link key={service.name} href={service.href}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="flex flex-col items-center justify-center group cursor-pointer"
                >
                  <div className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 sm:p-4 flex items-center justify-center mb-3 shadow-md shadow-black/20 group-hover:shadow-lg group-hover:shadow-white/10 transition-all duration-300 border border-white/20 group-hover:border-white/40`}>
                    <div className="text-white/90 relative z-10">
                      {service.icon}
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white/90 text-center group-hover:text-[#AEDD33] transition-colors">
                    {service.name}
                  </p>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Design Intelligence',
                description: 'Scalable brand systems engineered to print flawlessly at every size.',
                details: ['Brand guardianship & CAD-ready art', 'Color-managed proofing in 24h'],
                color: 'from-[#AEDD33] to-[#4CAF50]',
                accent: '#AEDD33',
                icon: '🧠',
              },
              {
                title: 'Production Muscle',
                description: 'Large-format print, fabrication, and finishing under one roof.',
                details: ['3.2m UV print • CNC • laser', 'Live dashboards on every run'],
                color: 'from-[#4CAF50] to-[#1E8F40]',
                accent: '#4CAF50',
                icon: '⚡',
              },
              {
                title: 'Installation Mastery',
                description: 'Certified crews deploying across Gauteng with military timing.',
                details: ['Branded fleet + certified riggers', 'QC reports before you even ask'],
                color: 'from-[#FF6B00] to-[#FFD166]',
                accent: '#FF6B00',
                icon: '🚚',
              },
            ].map((step, index) => (
              <motion.div key={step.title} variants={itemVariants}>
                {/* Service Pillars Cards - Background must stay DARK (bg-black) */}
                <AnimatedCard
                  delay={index * 0.1}
                  className="text-left group cursor-pointer bg-black text-white border border-white/25 px-6 py-7 shadow-[0_40px_80px_rgba(0,0,0,0.75)]"
                >
                  <motion.div
                    className={`w-12 h-12 mb-4 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]`}
                    whileHover={{ rotate: 360, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">{step.description}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-slate-200/95">
                    {step.details.map((line) => (
                      <li key={line} className="flex items-center gap-2">
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: step.accent }}
                        />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </AnimatedCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <IntegratedPillars />
      <ServicesMatrix />
      <ShowcaseReel />

      {/* Customer Experience Metrics */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.3em] text-[#AEDD33]"
          >
            Customer Experience Engine
          </motion.div>
          <p className="text-2xl text-slate-200 max-w-3xl mx-auto">
            Every touchpoint is choreographed—design, fabrication, logistics, and installation snap together in a neon pipeline optimized for speed, clarity, and wow-factor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experienceMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl bg-[#050912]/80 border border-white/10 p-6 backdrop-blur-xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-10`} />
                <div className="relative">
                  <p className="text-sm uppercase tracking-wide text-slate-400">{metric.label}</p>
                  <p className="text-4xl font-bold mt-2 text-white">{metric.value}</p>
                  <p className="text-sm text-slate-300 mt-1">{metric.detail}</p>
                  <motion.div
                    className={`mt-4 h-[2px] bg-gradient-to-r ${metric.gradient}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

