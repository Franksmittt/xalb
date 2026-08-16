import Link from 'next/link';
import Image from 'next/image';
import { commercialServices, retailServices, servicePath } from '@/data/catalog';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Ready to manufacture?</h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
              Drop CAD, print specs, or walk in. Alberton production floor — Alrode to Johannesburg South.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-red-500 px-6 py-3 text-sm font-bold text-white"
            >
              Request a quote
            </Link>
            <a
              href="tel:+27118699169"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-bold text-white"
            >
              +27 11 869 9169
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/images/Logows.png" alt="Xsphere" width={150} height={50} className="h-8 w-auto" />
            <p className="mt-4 font-mono text-sm leading-relaxed text-neutral-500">
              99 Second Avenue, Florentia
              <br />
              Alberton, Gauteng
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
        <p className="mt-10 text-xs uppercase tracking-widest text-neutral-600">
          © {new Date().getFullYear()} Xsphere Marketing and Design · Alberton
        </p>
      </div>
    </footer>
  );
}
