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
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <div className="flex flex-col justify-center">
            <p className="section-eyebrow">Commercial print</p>
            <h2 className="mt-3 text-balance">Colour-managed volume for East Rand contracts.</h2>
            <p className="section-lede">
              One prepress language from sample to pallet — litho when it counts, digital while the run is still climbing.
            </p>
            <Link href="/services/commercial/litho-printing" className="btn-primary mt-8 self-start">
              Litho capabilities
            </Link>
          </div>
          <div className="relative min-h-[18rem] overflow-hidden border border-line">
            <Image
              src="/images/design-studio.png"
              alt="Commercial print production at Xsphere"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="section-stack grid items-stretch gap-px border border-line bg-line md:grid-cols-3">
          {points.map((point) => (
            <article key={point.title} className="flex h-full flex-col bg-surface p-6 sm:p-7">
              <h3 className="text-xl font-bold text-foreground">{point.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{point.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
