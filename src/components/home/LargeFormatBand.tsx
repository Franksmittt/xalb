import Link from 'next/link';
import Image from 'next/image';

export default function LargeFormatBand() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center py-24">
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/images/hero-print.png" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#050505]/55" />
      </div>
      <div className="relative z-10 mx-4 w-full max-w-4xl rounded-3xl border border-white/10 bg-neutral-950/50 p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Large format</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-white md:text-4xl">Scale the vision to the environment</h2>
        <p className="mt-2 text-neutral-300">3.2-metre UV hybrid. Flatbed rigid and roll-to-roll.</p>
        <p className="mt-5 text-neutral-400">
          Fleet skins, building banners, Chromadek, Correx, Perspex lightbox faces, and architectural vinyl — printed
          and finished so install crews are not trimming white edges on site.
        </p>
        <Link
          href="/services/commercial/large-format-printing"
          className="mt-8 inline-flex rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-neutral-950"
        >
          Consult on large format
        </Link>
      </div>
    </section>
  );
}
