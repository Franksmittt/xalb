import Link from 'next/link';
import Image from 'next/image';

export default function LargeFormatBand() {
  return (
    <section className="relative section-band w-full border-t border-line">
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

      <div className="relative z-10 mx-auto flex h-full min-h-[inherit] max-w-wide items-center px-[var(--space-gutter)] py-16">
        <div className="max-w-xl text-ink-inverse">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-bright">Large format</p>
          <h2 className="mt-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight">
            Scale the graphic to the environment.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#d5dccb]">
            3.2-metre UV hybrid — flatbed rigid and roll-to-roll. Fleet skins, building banners, Chromadek, Correx, and
            lightbox faces finished so install crews are not trimming white edges on site.
          </p>
          <Link
            href="/services/commercial/large-format-printing"
            className="mt-8 inline-flex items-center justify-center bg-accent-bright px-6 py-3.5 text-sm font-semibold text-[#121612] transition-colors hover:bg-[#9bd24a]"
          >
            Large format capabilities
          </Link>
        </div>
      </div>
    </section>
  );
}
