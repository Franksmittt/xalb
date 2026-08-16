import Link from 'next/link';
import Image from 'next/image';
import { commercialServices, retailServices, servicePath } from '@/data/catalog';

export default function Footer() {
  return (
    <footer className="relative z-0 bg-black pt-24 text-white">
      <div className="mx-auto max-w-content px-4 pb-16 sm:px-6 lg:px-8">
        <p className="text-[10vw] font-black uppercase leading-none tracking-tighter text-transparent bg-gradient-to-b from-white to-neutral-700 bg-clip-text lg:text-8xl">
          Ready to manufacture?
        </p>
        <p className="mt-6 max-w-xl text-neutral-400">
          Drop CAD, share print specs, or walk in. Alberton production floor — Alrode, Germiston, East Rand, Johannesburg
          South.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className="inline-flex justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-bold">
            Request an enterprise quote
          </Link>
          <a href="tel:+27118699169" className="inline-flex justify-center rounded-full border border-white px-6 py-3 text-sm font-bold">
            Call +27 11 869 9169
          </a>
        </div>

        <div className="mt-20 grid gap-10 border-t border-white/10 pt-12 md:grid-cols-4">
          <div>
            <Image src="/images/Logows.png" alt="Xsphere" width={150} height={50} className="h-8 w-auto" />
            <p className="mt-4 font-mono text-sm text-neutral-500">
              Xsphere Marketing and Design
              <br />
              99 Second Avenue, Florentia
              <br />
              Alberton, Gauteng, South Africa
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">Commercial</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              {commercialServices.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s)} className="hover:text-white">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">Retail & places</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              {retailServices.map((s) => (
                <li key={s.slug}>
                  <Link href={servicePath(s)} className="hover:text-white">
                    {s.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/locations" className="hover:text-white">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/imagine" className="hover:text-white">
                  Imagine
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500">Contact</p>
            <p className="mt-3 text-sm text-neutral-400">
              <a href="mailto:info@xsphere.co.za" className="hover:text-white">
                info@xsphere.co.za
              </a>
              <br />
              Mon–Fri 08:00–17:00
            </p>
          </div>
        </div>
        <p className="mt-12 text-xs uppercase tracking-widest text-neutral-600">
          © {new Date().getFullYear()} Xsphere Marketing and Design · Alberton
        </p>
      </div>
    </footer>
  );
}
