import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Design Intelligence',
    subtitle: 'Strategy + Creative + CAD',
    description:
      'Creative directors convert industrial briefs into production-ready systems—wireframes, CAD overlays, and color-managed asset kits.',
    bullets: [
      'Graphic design + corporate identity suites',
      'Digital wireframes that anticipate fabrication tolerances',
      'Brand guardianship and proofing inside 24 hours',
    ],
    accent: '#AEDD33',
  },
  {
    title: 'Production Muscle',
    subtitle: 'Print + Fabrication + Laser',
    description:
      'Large-format UV print farms, CNC routing, and precision laser bays handle everything from 3.2m signage to intricate POS components.',
    bullets: [
      'Large format printing, signage, retail + POS suites',
      'Laser cutting across acrylic, metals, textiles, composites',
      'Real-time dashboards for events, exhibitions, safety systems',
    ],
    accent: '#4CAF50',
  },
  {
    title: 'Deployment Mastery',
    subtitle: 'Installation + Logistics',
    description:
      'Certified crews, branded fleet, and QA specialists install across Gauteng—buildings, fleets, events—without losing brand integrity.',
    bullets: [
      'Vehicle wrapping, fleet branding, magnet programs',
      'On-site signage installation & safety labeling',
      'Corporate gifts + finishing delivered with QC reports',
    ],
    accent: '#FF6B00',
  },
];

const container = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function IntegratedPillars() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.4em] text-[#AEDD33]">Integrated Service Advantage</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Design → Production → Installation on a Single Rail
          </h2>
          <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
            Every job moves through one command center, so procurement teams see accurate timelines, real QA,
            and zero hand-off friction.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={item}
              className="relative rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-lg font-semibold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${pillar.accent}, rgba(255,255,255,0.1))`,
                  }}
                >
                  {pillar.title.charAt(0)}
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{pillar.subtitle}</p>
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                </div>
              </div>
              <p className="text-slate-200 text-sm leading-relaxed">{pillar.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200/90">
                {pillar.bullets.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <span
                      className="mt-1 inline-block h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: pillar.accent }}
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 text-xs uppercase tracking-[0.4em] text-white/60">
                Seamless Control
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


