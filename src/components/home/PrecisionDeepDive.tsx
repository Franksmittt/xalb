import Link from 'next/link';
import Image from 'next/image';

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
    <section className="border-t border-line bg-background px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-24">
          <div className="relative mb-8 aspect-[4/3] overflow-hidden border border-line">
            <Image
              src="/images/fabrication-lab.png"
              alt="Precision CNC routing and laser work at Xsphere"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
            />
          </div>
          <p className="section-eyebrow">Precision manufacturing</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-foreground md:text-4xl">
            Engineered for wood and plastics. Scaled for commercial runs.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Multi-tool CNC routing and CO₂ laser on the Alberton floor. Capacity is planned as nested sheet work, not a
            single-spindle hobby cell. CAD in — finished parts out.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink-inverse hover:bg-[#255a30]"
          >
            Submit CAD for review
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          {cards.map((card) => (
            <article key={card.title} className="border border-line bg-surface p-8">
              <h3 className="font-display text-xl font-bold text-foreground">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
