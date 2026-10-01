import Link from 'next/link';
import Image from 'next/image';

export default function LargeFormatBand() {
  return (
    <section className="relative min-h-[70vh] w-full">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-print.png"
          alt="Large format UV printing for building and fleet graphics"
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-[#1c2118]/62" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-end px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-ink-inverse">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-bright">Large format</p>
          <h2 className="font-display mt-3 text-3xl font-bold md:text-4xl">
            3.2-metre UV hybrid — flatbed and roll-to-roll
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#dce2d4] sm:text-lg">
            Fleet skins, building banners, Chromadek, Correx, Perspex lightbox faces, and architectural vinyl — printed
            and finished so install crews are not trimming white edges on site.
          </p>
          <Link
            href="/services/commercial/large-format-printing"
            className="mt-8 inline-flex rounded-md bg-accent-bright px-6 py-3 text-sm font-semibold text-[#1c2118] hover:bg-[#7fbf45]"
          >
            Large format capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
