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
      <div className="mx-auto grid max-w-wide gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        <div className="relative min-h-[18rem] overflow-hidden border border-line">
          <Image
            src="/images/fabrication-lab.png"
            alt="Precision CNC nesting and laser cutting"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col">
          <p className="section-eyebrow">Material science</p>
          <h2 className="mt-3 text-balance">Built for wood and plastics, not a metal job shop.</h2>
          <p className="section-lede">
            Feeds, finishes, and nesting strategies tuned for sheet goods. CAD in. Finished parts out for Alrode
            industry and Gauteng retail alike.
          </p>

          <div className="section-stack border border-line bg-surface">
            {materials.map((m, i) => (
              <div
                key={m.name}
                className={`grid grid-cols-[7rem_1fr] gap-4 px-5 py-3.5 sm:grid-cols-[9rem_1fr] sm:px-6 ${
                  i !== materials.length - 1 ? 'border-b border-line' : ''
                }`}
              >
                <p className="text-sm font-semibold text-foreground">{m.name}</p>
                <p className="text-sm text-muted">{m.use}</p>
              </div>
            ))}
          </div>

          <Link href="/contact" className="btn-primary mt-8 self-start">
            Submit CAD for review
          </Link>
        </div>
      </div>
    </section>
  );
}
