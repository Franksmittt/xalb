import Link from 'next/link';

const cards = [
  {
    title: 'High-volume litho',
    body: 'Catalogues, financial print, brochures, and packaging when digital short-run is no longer the economical path.',
  },
  {
    title: 'Colour control',
    body: 'Proofed CMYK and specials before the long run. Brand colour that survives a pallet, not just a laser print.',
  },
  {
    title: 'Bindery path',
    body: 'Fold, saddle, perfect bind, NCR books, and folders — specified with the press run, not as an afterthought.',
  },
];

export default function PrintCarousel() {
  return (
    <section className="bg-[#050505] py-24">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">Commercial print</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">Uncompromising colour. Unrestricted volume.</h2>
          <p className="mt-4 max-w-3xl text-neutral-400">
            Litho for East Rand and Johannesburg South contracts — plus digital when the run is still climbing. One
            prepress language from sample to pallet.
          </p>
        </div>
      </div>
      <div className="hide-scrollbar mt-12 flex gap-8 overflow-x-auto px-4 pb-4 snap-x snap-mandatory sm:px-6 md:px-24">
        {cards.map((card) => (
          <article
            key={card.title}
            className="flex aspect-video min-w-[85vw] flex-shrink-0 snap-center flex-col justify-between rounded-3xl border border-neutral-800 bg-neutral-900 p-10 md:min-w-[450px]"
          >
            <h3 className="font-display text-2xl font-bold text-white">{card.title}</h3>
            <p className="text-neutral-400">{card.body}</p>
          </article>
        ))}
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link href="/services/commercial/litho-printing" className="text-sm font-semibold text-cyan-400 hover:underline">
          Commercial litho services →
        </Link>
      </div>
    </section>
  );
}
