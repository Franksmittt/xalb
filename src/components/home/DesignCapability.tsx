import Link from 'next/link';
import Image from 'next/image';

const outputs = [
  'Cut-ready CNC paths',
  'Print-ready prepress',
  'Vehicle wrap templates',
  'Wayfinding artwork',
  'Brand + production kits',
];

export default function DesignCapability() {
  return (
    <section className="section-pad border-t border-line bg-background">
      <div className="mx-auto grid max-w-wide gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
        <div className="flex flex-col">
          <p className="section-eyebrow">Graphic design for manufacture</p>
          <h2 className="mt-3 text-balance">Artwork that already knows the bed size.</h2>
          <p className="section-lede">
            Designers sit next to CNC and print — so identity, campaigns, and production files survive nesting, weeding,
            and register. Not a JPEG reverse-engineered on press day.
          </p>
          <ul className="section-stack flex flex-wrap gap-2">
            {outputs.map((item) => (
              <li
                key={item}
                className="border border-line bg-surface px-3 py-2 text-sm font-medium text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          <Link href="/services/commercial/graphic-design" className="btn-primary mt-8 self-start">
            Design for manufacture
          </Link>
        </div>
        <div className="relative min-h-[18rem] overflow-hidden border border-line">
          <Image
            src="/images/design-studio.png"
            alt="Production-aware graphic design at Xsphere"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
