'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Slide = {
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string }[];
  gradient: string;
  accent: string;
};

const slides: Slide[] = [
  {
    title: 'Concept Lab',
    subtitle: 'Strategy + Design',
    description:
      'Creative directors, CAD artists, and material specialists building production-ready brand systems in days, not weeks.',
    stats: [
      { label: 'Brief-to-proof', value: '24h' },
      { label: 'Concept kits', value: '40+ / mo' },
    ],
    gradient: 'from-[#00F5FF]/25 via-[#2D9CFF]/20 to-transparent',
    accent: '#00F5FF',
  },
  {
    title: 'Fabrication Deck',
    subtitle: 'Print + Laser + Finishing',
    description:
      '3.2m UV printers, laser bays, CNC routing, and paint tunnels under one roof for immaculate, colour-true output.',
    stats: [
      { label: 'Daily capacity', value: '1.2k m²' },
      { label: 'Cut precision', value: '±0.2mm' },
    ],
    gradient: 'from-[#FF3CAC]/25 via-[#FF1744]/15 to-transparent',
    accent: '#FF3CAC',
  },
  {
    title: 'Deployment Squad',
    subtitle: 'Installation + Logistics',
    description:
      'Certified teams, branded fleet, and on-site QC ensure signage, fleets, and interiors land flawlessly anywhere in Gauteng.',
    stats: [
      { label: 'Sites / week', value: '25+' },
      { label: 'Fleet uptime', value: '99.2%' },
    ],
    gradient: 'from-[#FF6B00]/25 via-[#FFD166]/20 to-transparent',
    accent: '#FF6B00',
  },
];

export default function ServiceSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = useMemo(() => slides[index], [index]);

  return (
    <div className="relative h-full min-h-[360px] max-h-[500px] rounded-3xl border border-white/10 bg-black/40 backdrop-blur-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 pointer-events-none">
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSlide.gradient}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-6 lg:p-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-slate-300">
          <span>Integrated Services</span>
          <span>
            {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>

        <div className="flex-1 flex flex-col justify-center mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{currentSlide.subtitle}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mt-2 leading-tight">
                  {currentSlide.title}
                </h3>
              </div>
              <p className="text-slate-200 text-sm md:text-base leading-relaxed">{currentSlide.description}</p>
              <div className="grid grid-cols-2 gap-3">
                {currentSlide.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</p>
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={`${_.title}-${i}`}
                onClick={() => setIndex(i)}
                className="group"
                aria-label={`Show slide ${i + 1}`}
              >
                <motion.span
                  animate={{
                    width: i === index ? 36 : 10,
                    backgroundColor: i === index ? currentSlide.accent : 'rgba(255,255,255,0.3)',
                  }}
                  transition={{ duration: 0.3 }}
                  className="block h-1 rounded-full"
                />
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            {[ -1, 1 ].map((direction) => (
              <button
                key={direction}
                onClick={() =>
                  setIndex((prev) => (prev + direction + slides.length) % slides.length)
                }
                className="w-10 h-10 rounded-full border border-white/15 text-white hover:border-white/40 hover:text-[#00F5FF] transition-colors flex items-center justify-center"
                aria-label={direction === -1 ? 'Previous slide' : 'Next slide'}
              >
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ x: 0 }}
                  whileHover={{ x: direction === -1 ? -2 : 2 }}
                >
                  {direction === -1 ? (
                    <path d="M15 6l-6 6 6 6" />
                  ) : (
                    <path d="M9 6l6 6-6 6" />
                  )}
                </motion.svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


