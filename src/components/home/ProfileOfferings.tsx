import Link from 'next/link';

const columns = [
  {
    title: 'Print solutions',
    href: '/services/commercial/large-format-printing',
    items: [
      'PVC banners',
      'Fabric prints',
      'Wallpaper',
      'Magnetic media',
      'Window graphics',
      'Floor graphics',
      'Canvas prints',
      'Backlit film',
      'Self-adhesive vinyl',
      'Vehicle branding',
    ],
  },
  {
    title: 'Display solutions',
    href: '/services/commercial/display-branding',
    blurb: 'High-impact systems that make your brand hard to miss at events and exhibitions.',
    items: [
      'Pull-up banners',
      'Gazebos',
      'Table cloths',
      'Shark fin banners',
      'Telescopic banners',
      'Slimline banners',
      'Banner walls',
      'A-frame banners',
    ],
  },
  {
    title: 'Promo gifting',
    href: '/services/commercial/corporate-gifting',
    blurb: 'Promotional products that keep your brand top of mind — supplied and branded in volume.',
    items: [
      'Drinkware',
      'Writing instruments',
      'Technology',
      'Stationery',
      'Apparel',
      'Headwear',
      'Desk drops',
      'Event giveaways',
    ],
  },
];

export default function ProfileOfferings() {
  return (
    <section className="section-pad border-t border-line bg-surface">
      <div className="mx-auto max-w-wide">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Product lines</p>
            <h2 className="font-display mt-3 text-balance">Print media, display systems, and branded merch.</h2>
            <p className="section-lede">
              Straight from the company profile — every line we sell and produce, not just the machinery headline.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title} className="border border-line bg-background p-7 sm:p-8">
              <h3 className="font-display text-2xl font-bold text-foreground">{col.title}</h3>
              {col.blurb && <p className="mt-3 text-sm leading-relaxed text-muted">{col.blurb}</p>}
              <ul className="mt-6 space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="spec-mono text-[0.78rem] uppercase tracking-[0.08em] text-foreground">
                    {item}
                  </li>
                ))}
              </ul>
              <Link href={col.href} className="mt-8 inline-flex text-sm font-semibold text-accent hover:underline">
                View service →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
