import Link from 'next/link';
import Image from 'next/image';

const materials = [
  { name: 'MDF', use: 'Dimensional letters, POS, prototypes' },
  { name: 'ABS', use: 'Durable housings, tags, functional parts' },
  { name: 'Acrylic', use: 'Awards, lightbox faces, layered logos' },
  { name: 'Rowmark', use: 'Nameplates, directories, control overlays' },
  { name: 'HDPE / PETG', use: 'Industrial plastics, guards, panels' },
  { name: 'PVC foam', use: 'Lightweight signage and display' },
];

export default function PrecisionDeepDive() {
  return (
    <section className="section-pad border-t border-line bg-background">
      <div className="mx-auto grid max-w-wide gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div className="relative aspect-[4/3] overflow-hidden border border-line lg:aspect-auto lg:min-h-[520px]">
          <Image
            src="/images/fabrication-lab.png"
            alt="Precision CNC nesting and laser cutting"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>

        <div>
          <p className="section-eyebrow">Material science</p>
          <h2 className="font-display mt-3 text-balance">Built for wood and plastics — not a metal job shop.</h2>
          <p className="section-lede">
            Feeds, finishes, and nesting strategies tuned for sheet goods. CAD in. Finished parts out — for Alrode
            industry and Gauteng retail alike.
          </p>

          <div className="mt-10 border border-line bg-surface">
            {materials.map((m, i) => (
              <div
                key={m.name}
                className={`grid grid-cols-[7rem_1fr] gap-4 px-5 py-4 sm:grid-cols-[9rem_1fr] sm:px-6 ${
                  i !== materials.length - 1 ? 'border-b border-line' : ''
                }`}
              >
                <p className="spec-mono text-sm font-medium text-foreground">{m.name}</p>
                <p className="text-sm text-muted">{m.use}</p>
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn-primary mt-8">
            Submit CAD for review
          </Link>
        </div>
      </div>
    </section>
  );
}
