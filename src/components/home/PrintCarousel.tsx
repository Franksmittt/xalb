import Link from 'next/link';
import Image from 'next/image';

const points = [
  {
    title: 'Press volume',
    body: 'Catalogues, financial print, brochures, and packaging when the run outgrows digital.',
  },
  {
    title: 'Colour discipline',
    body: 'Proofed CMYK and specials before the long run — brand colour that survives a pallet.',
  },
  {
    title: 'Bindery included',
    body: 'Fold, saddle, perfect bind, NCR books, and folders specified with the press path.',
  },
];

export default function PrintCarousel() {
  return (
    <section className="section-pad border-t border-line bg-surface">
      <div className="mx-auto max-w-wide">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-eyebrow">Commercial print</p>
            <h2 className="font-display mt-3 text-balance">Colour-managed volume for East Rand contracts.</h2>
            <p className="section-lede">
              One prepress language from sample to pallet — litho when it counts, digital while the run is still climbing.
            </p>
            <Link href="/services/commercial/litho-printing" className="btn-primary mt-8">
              Litho capabilities
            </Link>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden border border-line">
            <Image
              src="/images/design-studio.png"
              alt="Commercial print production at Xsphere"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 55vw"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
          {points.map((point) => (
            <article key={point.title} className="bg-surface p-7 sm:p-8">
              <h3 className="font-display text-xl font-bold text-foreground">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
