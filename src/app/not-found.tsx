import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-xl text-center">
        <p className="font-display text-6xl font-bold text-accent md:text-7xl">404</p>
        <h1 className="font-display mt-4 text-3xl font-bold text-ink">Page not found</h1>
        <p className="mt-4 text-ink-muted">
          That URL doesn&apos;t exist. Head home or jump into CNC &amp; laser.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink-inverse"
          >
            Homepage
          </Link>
          <Link
            href="/solutions/fabrication"
            className="inline-flex items-center justify-center rounded-md border border-[var(--line)] px-6 py-3 text-sm font-semibold text-ink"
          >
            CNC &amp; laser
          </Link>
        </div>
      </div>
    </main>
  );
}
