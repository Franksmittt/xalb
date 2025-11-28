import { motion } from 'framer-motion';

const showcase = [
  {
    label: 'Retail / POS',
    description: 'Immersive bento grid to drop photos of flagship installs.',
    gradient: 'from-[#00F5FF]/30 to-transparent',
  },
  {
    label: 'Fleet Branding',
    description: 'Looped reel placeholder for wraps, magnets, and logistics shots.',
    gradient: 'from-[#FF3CAC]/30 to-transparent',
  },
  {
    label: 'Industrial Signage',
    description: 'Before/after safety signage transformations.',
    gradient: 'from-[#FF6B00]/30 to-transparent',
  },
];

export default function ShowcaseReel() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9]">Showcase</p>
            <h2 className="mt-3 text-3xl font-bold text-white">Drag-n-drop your hero work</h2>
            <p className="mt-2 text-slate-300 max-w-2xl">
              These slots are wired for looping video or stills. Replace the gradient shells with actual footage to
              broadcast recent wins, installations, or data overlays.
            </p>
          </div>
          <div className="text-right text-xs uppercase tracking-[0.3em] text-slate-400">
            2025 Experiential Layer
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {showcase.map((item) => (
            <div key={item.label} className="relative overflow-hidden rounded-3xl border border-white/10">
              <div
                className="aspect-[4/5] w-full bg-slate-900/60 p-5 flex flex-col justify-between"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${item.gradient})`,
                }}
              >
                <div className="text-xs uppercase tracking-[0.3em] text-white/70">{item.label}</div>
                <div>
                  <p className="text-slate-200 text-sm">{item.description}</p>
                  <div className="mt-4 text-xs text-white/60">Video/Carousel Placeholder</div>
                </div>
              </div>
              <motion.div
                className="absolute inset-0 border border-white/5 pointer-events-none"
                animate={{ opacity: [0.4, 0.9, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


