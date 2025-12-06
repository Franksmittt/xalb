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
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white flex items-center justify-center px-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#AEDD33]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1E8F40]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 bg-gradient-to-r from-[#AEDD33] via-[#4CAF50] to-[#1E8F40] bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
          Page Not Found
        </h2>
        <p className="text-lg text-slate-300 mb-8">
          The page you are looking for could not be found. It may have been moved, deleted, or the URL may be incorrect.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#AEDD33] to-[#1E8F40] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(174,221,51,0.4)] hover:from-[#B2D942] hover:to-[#2E9346] transition-colors"
          >
            Go to Homepage
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 transition-all"
          >
            View Solutions
          </Link>
        </div>
      </div>
    </main>
  );
}

