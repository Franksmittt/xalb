import Link from 'next/link';
import { serviceCatalog } from '@/data/services';

export default function SolutionsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#AEDD33]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF1744]/10 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-[#AEDD33] mb-4">Full-Stack Capabilities</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="block text-white">Solutions</span>
              <span className="block bg-gradient-to-r from-[#AEDD33] via-[#4CAF50] to-[#1E8F40] bg-clip-text text-transparent">
                Design → Production → Installation
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Xsphere owns the entire communications value chain. From the first sketch to the last rivet, we control
              quality, speed, and delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {serviceCatalog.map((service) => (
              <Link
                key={service.slug}
                href={`/solutions/${service.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl hover:border-[#AEDD33]/50 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.heroImage}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-300 line-clamp-2">{service.tagline}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-2">{service.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-400 border border-white/5">
                      {service.leadTime}
                    </span>
                    <span className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-400 border border-white/5">
                      {service.capacity}
                    </span>
                  </div>
                  <span className="inline-flex items-center text-sm font-semibold text-[#AEDD33] group-hover:text-[#B2D942] transition-colors">
                    Explore Service →
                  </span>
                </div>
              </Link>
            ))}
            
            {/* Litho Printing Card */}
            <Link
              href="/litho-printing"
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl hover:border-[#AEDD33]/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-[#AEDD33]/20 via-[#4CAF50]/20 to-[#1E8F40]/20">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Lithographic Printing</h3>
                  <p className="text-sm text-slate-300 line-clamp-2">High-volume offset printing for brochures, catalogs, and corporate materials.</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-2">
                  Traditional offset printing delivering superior quality, color accuracy, and cost-effectiveness for large print runs.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-400 border border-white/5">
                    10 days
                  </span>
                  <span className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-400 border border-white/5">
                    1000+ units
                  </span>
                </div>
                <span className="inline-flex items-center text-sm font-semibold text-[#AEDD33] group-hover:text-[#B2D942] transition-colors">
                  Explore Service →
                </span>
              </div>
            </Link>
          </div>

          <div className="rounded-3xl border border-[#AEDD33]/30 bg-gradient-to-br from-[#AEDD33]/5 to-[#1E8F40]/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Book a production slot, request a quote, or schedule a facility tour to see our integrated workflow in
              action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#AEDD33] to-[#1E8F40] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(174,221,51,0.4)]"
              >
                Get a Quote
              </Link>
              <Link
                href="/process"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 transition-all"
              >
                See Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

