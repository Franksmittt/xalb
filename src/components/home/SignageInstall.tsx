import Link from 'next/link';
import Image from 'next/image';

export default function SignageInstall() {
  return (
    <section className="section-pad border-t border-line bg-surface">
      <div className="mx-auto max-w-wide">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Signage & site</p>
          <h2 className="mt-3 text-balance">Dimensional presence, fabricated then hung properly.</h2>
          <p className="section-lede">
            Letters, lightboxes, and wayfinding from the CNC cell. Gauteng install crews close the loop with surveys,
            method statements, and photo handover.
          </p>
        </div>

        <div className="section-stack grid items-stretch gap-5 lg:grid-cols-2">
          <Link
            href="/services/commercial/dimensional-signage"
            className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden border border-line lg:min-h-[24rem]"
          >
            <Image
              src="/images/services/installation/Gemini_Generated_Image_ojk0alojk0alojk0.png"
              alt="Dimensional signage fabrication"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121612] via-[#121612]/55 to-transparent" />
            <div className="relative z-10 p-7 text-ink-inverse sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-bright">Dimensional</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Letters, logos & lightboxes</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#d5dccb]">
                Flat-cut and built-up acrylic/MDF letters, tray signs, and illuminated faces, dry-fit before site.
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-accent-bright">Dimensional signage →</span>
            </div>
          </Link>

          <Link
            href="/services/commercial/installation"
            className="group relative flex min-h-[22rem] flex-col justify-end overflow-hidden border border-line lg:min-h-[24rem]"
          >
            <Image
              src="/images/services/installation/Gemini_Generated_Image_nvcg3fnvcg3fnvcg.png"
              alt="On-site signage installation"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121612] via-[#121612]/55 to-transparent" />
            <div className="relative z-10 p-7 text-ink-inverse sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-bright">Installation</p>
              <h3 className="mt-2 text-2xl font-bold sm:text-3xl">Gauteng crews & close-out</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#d5dccb]">
                Interiors, fascias, and fleet windows: landlord coordination and punchlist, not a vanishing contractor.
              </p>
              <span className="mt-5 inline-block text-sm font-semibold text-accent-bright">Installation services →</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
