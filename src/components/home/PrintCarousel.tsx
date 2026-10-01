import Link from 'next/link';
import Image from 'next/image';

const cards = [
  {
    title: 'High-volume litho',
    body: 'Catalogues, financial print, brochures, and packaging when digital short-run is no longer the economical path.',
    image: '/images/design-studio.png',
    alt: 'Commercial litho print production',
  },
  {
    title: 'Colour control',
    body: 'Proofed CMYK and specials before the long run. Brand colour that survives a pallet, not just a laser print.',
    image: '/images/hero-print.png',
    alt: 'Colour-managed print proofing',
  },
  {
    title: 'Bindery path',
    body: 'Fold, saddle, perfect bind, NCR books, and folders — specified with the press run, not as an afterthought.',
    image: '/images/install-team.png',
    alt: 'Finished print and bindery work',
  },
];

export default function PrintCarousel() {
  return (
    <section className="border-t border-line bg-surface px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="section-eyebrow">Commercial print</p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold text-foreground md:text-4xl">
          Colour-managed volume for East Rand contracts
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          Litho for Johannesburg South procurement — plus digital when the run is still climbing. One prepress language
          from sample to pallet.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="flex flex-col border border-line bg-background">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image src={card.image} alt={card.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-bold text-foreground">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">{card.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/services/commercial/litho-printing"
            className="text-sm font-semibold text-accent hover:underline"
          >
            Commercial litho services →
          </Link>
        </div>
      </div>
    </section>
  );
}
