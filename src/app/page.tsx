'use client';

import { motion } from 'framer-motion';
import AnimatedButton from '@/components/AnimatedButton';
import AnimatedCard from '@/components/AnimatedCard';
import ServiceSlider from '@/components/ServiceSlider';
import IntegratedPillars from '@/components/IntegratedPillars';
import ServicesMatrix from '@/components/ServicesMatrix';
import ShowcaseReel from '@/components/ShowcaseReel';

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
      gradient: 'from-[#00F5FF] to-[#2D9CFF]',
    },
    {
      label: 'NPS',
      value: '+72',
      detail: 'Customer delight index',
      gradient: 'from-[#FF3CAC] to-[#FF1744]',
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
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(0,245,255,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,23,68,0.25), transparent 35%)',
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
      <section className="relative lg:h-[calc(100vh-80px)] min-h-[640px] max-h-[860px] flex items-center overflow-hidden px-4 sm:px-6 lg:px-10 py-12">
        {/* Video-ready overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/80" />
          <motion.div
            animate={floatingAnimation}
            className="absolute top-16 left-8 w-[22rem] h-[22rem] bg-[#00F5FF]/25 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              ...floatingAnimation,
              transition: { ...floatingAnimation.transition, duration: 6, delay: 1.2 },
            }}
            className="absolute bottom-10 right-8 w-[26rem] h-[26rem] bg-[#FF1744]/20 rounded-full blur-[140px]"
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
                className="text-[2.15rem] md:text-[3.2rem] font-extrabold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span className="block text-white/90">
                  Visual Authority for
                </span>
                <span className="block bg-gradient-to-r from-[#00F5FF] via-[#2D9CFF] to-[#FF1744] bg-clip-text text-transparent">
                  B2B Fabrication Powerhouses
                </span>
              </motion.h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[0.95rem] md:text-[1.05rem] text-slate-200/85 max-w-2xl leading-relaxed"
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
              className="grid grid-cols-2 gap-3 max-w-sm"
            >
              {[
                { label: 'Turnaround', value: '3-5 Days' },
                { label: 'Capacity', value: '12k+ jobs' },
                { label: 'Experience', value: '17 Years' },
                { label: 'NPS', value: '+72' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-white/10 bg-white/5 px-3.5 py-2.5">
                  <p className="text-[10px] uppercase tracking-wide text-slate-300">{stat.label}</p>
                  <p className="text-base font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <ServiceSlider />
        </div>
      </section>

      {/* Service Pillars */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pt-12 pb-20">
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
                color: 'from-[#00F5FF] to-[#2D9CFF]',
                accent: '#00F5FF',
                icon: '🧠',
              },
              {
                title: 'Production Muscle',
                description: 'Large-format print, fabrication, and finishing under one roof.',
                details: ['3.2m UV print • CNC • laser', 'Live dashboards on every run'],
                color: 'from-[#FF3CAC] to-[#FF1744]',
                accent: '#FF3CAC',
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
                <AnimatedCard
                  delay={index * 0.1}
                  className="text-left group cursor-pointer bg-[#000207] text-white border border-white/25 px-6 py-7 shadow-[0_40px_80px_rgba(0,0,0,0.75)]"
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
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.3em] text-[#00F5FF]"
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
