import Link from 'next/link';
import Image from 'next/image';

export default function LargeFormatBand() {
  return (
    <section className="relative min-h-[78vh] w-full">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-print.png"
          alt="Large format UV printing for building and fleet graphics"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(18,22,18,0.88)_0%,rgba(18,22,18,0.55)_48%,rgba(18,22,18,0.25)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-wide items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-xl text-ink-inverse">
          <p className="spec-mono text-[0.72rem] uppercase tracking-[0.14em] text-accent-bright">Large format</p>
          <h2 className="font-display mt-4 text-[clamp(2rem,4vw,3.25rem)] font-bold tracking-tight">
            Scale the graphic to the environment.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#d5dccb] sm:text-lg">
            3.2-metre UV hybrid — flatbed rigid and roll-to-roll. Fleet skins, building banners, Chromadek, Correx, and
            lightbox faces finished so install crews are not trimming white edges on site.
          </p>
          <Link
            href="/services/commercial/large-format-printing"
            className="mt-8 inline-flex items-center justify-center rounded-[2px] bg-accent-bright px-6 py-3.5 text-sm font-semibold text-[#121612] transition-colors hover:bg-[#9bd24a]"
          >
            Large format capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
