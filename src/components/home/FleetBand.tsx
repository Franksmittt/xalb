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
      <div className="mx-auto grid max-w-wide gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        <div className="relative min-h-[18rem] overflow-hidden border border-line">
          <Image
            src="/images/fleet-lineup.png"
            alt="Fleet vehicle branding by Xsphere"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col">
          <p className="section-eyebrow">Fleet branding</p>
          <h2 className="mt-3 text-balance">One template. One vinyl spec. A whole fleet that matches.</h2>
          <p className="section-lede">
            Partial and full wraps, magnets, and compliance numbering — designed for manufacture, laminated, and
            installed on a Gauteng schedule.
          </p>
          <dl className="section-stack border border-line bg-surface">
            {points.map((point, i) => (
              <div
                key={point.label}
                className={`grid grid-cols-[6.5rem_1fr] gap-4 px-5 py-3.5 sm:grid-cols-[8rem_1fr] sm:px-6 ${
                  i !== points.length - 1 ? 'border-b border-line' : ''
                }`}
              >
                <dt className="text-sm font-semibold text-accent">{point.label}</dt>
                <dd className="text-sm text-muted">{point.value}</dd>
              </div>
            ))}
          </dl>
          <Link href="/services/commercial/vehicle-fleet-branding" className="btn-primary mt-8 self-start">
            Fleet branding details
          </Link>
        </div>
      </div>
    </section>
  );
}
