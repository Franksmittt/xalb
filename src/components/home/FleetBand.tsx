import Link from 'next/link';
import Image from 'next/image';

const points = [
  { label: 'Films', value: 'Cast & polymeric wrap vinyl' },
  { label: 'Scope', value: 'Partial, full wrap, magnets' },
  { label: 'QA', value: 'Photo log per vehicle' },
];

export default function FleetBand() {
  return (
    <section className="section-pad border-t border-line bg-background">
      <div className="mx-auto grid max-w-wide gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="relative aspect-[5/4] overflow-hidden border border-line lg:aspect-auto lg:min-h-[480px]">
          <Image
            src="/images/fleet-lineup.png"
            alt="Fleet vehicle branding by Xsphere"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="section-eyebrow">Fleet branding</p>
          <h2 className="font-display mt-3 text-balance">One template. One vinyl spec. A whole fleet that matches.</h2>
          <p className="section-lede">
            Partial and full wraps, magnets, and compliance numbering — designed for manufacture, laminated, and
            installed on a Gauteng schedule.
          </p>
          <dl className="mt-8 space-y-0 border border-line bg-surface">
            {points.map((point, i) => (
              <div
                key={point.label}
                className={`grid grid-cols-[6.5rem_1fr] gap-4 px-5 py-4 sm:grid-cols-[8rem_1fr] ${
                  i !== points.length - 1 ? 'border-b border-line' : ''
                }`}
              >
                <dt className="spec-mono text-sm text-accent">{point.label}</dt>
                <dd className="text-sm text-muted">{point.value}</dd>
              </div>
            ))}
          </dl>
          <Link href="/services/commercial/vehicle-fleet-branding" className="btn-primary mt-8">
            Fleet branding details
          </Link>
        </div>
      </div>
    </section>
  );
}
