import Link from 'next/link';

const cards = [
  {
    title: 'Beds & nesting',
    body: 'Laser 1200 × 900 mm. CNC 3 m × 2 m. Nested cutting for yield on MDF and plastic sheets — prototypes through programme volume.',
  },
  {
    title: 'Substrate focus',
    body: 'MDF, ABS, acrylic/Perspex, Rowmark, HDPE, PETG, PVC foam. Plastic-specific feeds, polish, and paint — not a metal job shop.',
  },
  {
    title: 'What leaves the floor',
    body: 'Dimensional letters, POS, guards, awards, and architectural panels for the Alrode industrial sector and Gauteng retail.',
  },
];

export default function PrecisionDeepDive() {
  return (
    <section className="bg-[#050505] px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row">
        <div className="h-fit lg:sticky lg:top-28 lg:w-2/5">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">Precision manufacturing</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">
            Engineered for wood and plastics. Scaled for commercial runs.
          </h2>
          <p className="mt-5 text-neutral-400">
            Multi-tool CNC routing and CO₂ laser on the Alberton floor. Capacity is planned as nested sheet work, not a
            single-spindle hobby cell. CAD in — finished parts out.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full border border-cyan-400/50 bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-300 hover:bg-cyan-400 hover:text-neutral-950"
          >
            Submit CAD for review
          </Link>
        </div>
        <div className="flex flex-col gap-8 lg:w-3/5">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-10 shadow-2xl transition-transform duration-500 hover:-translate-y-1 hover:border-cyan-500/30"
            >
              <h3 className="font-display text-xl font-bold text-white">{card.title}</h3>
              <p className="mt-4 text-neutral-400">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
