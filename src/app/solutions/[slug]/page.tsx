import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { serviceCatalog, serviceMap } from "@/data/services";
import StructuredData from "@/components/StructuredData";

type Props = {
  params: { slug: string };
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://xsphere.co.za';

export function generateStaticParams() {
  return serviceCatalog.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceMap[params.slug];

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.title,
    description: `${service.tagline}. ${service.summary}`,
    alternates: {
      canonical: `${baseUrl}/solutions/${params.slug}`,
    },
    openGraph: {
      title: service.title,
      description: service.tagline,
      type: 'website',
      url: `${baseUrl}/solutions/${params.slug}`,
      images: [
        {
          url: service.heroImage.startsWith('http') ? service.heroImage : `${baseUrl}${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export default function ServicePage({ params }: Props) {
  const service = serviceMap[params.slug];

  if (!service) {
    notFound();
  }

  // Structured data for service page
  const serviceStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    provider: {
      '@type': 'Organization',
      name: 'Xsphere Marketing and Design',
      url: baseUrl,
      telephone: '+27-11-869-9169',
      email: 'info@xsphere.co.za',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '99 Second Avenue, Florentia',
        addressLocality: 'Alberton',
        addressRegion: 'Gauteng',
        addressCountry: 'ZA',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'Gauteng',
      containedIn: {
        '@type': 'Country',
        name: 'South Africa',
      },
    },
    serviceType: 'Printing and Signage Services',
    offers: {
      '@type': 'Offer',
      description: `Lead Time: ${service.leadTime}, Capacity: ${service.capacity}`,
    },
  };

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <StructuredData data={serviceStructuredData} />
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-10 py-20">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: `url('${service.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#03050d] via-[#040611]/95 to-[#0b0f22]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-10 items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9]">Solutions</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">{service.title}</h1>
            <p className="text-lg text-slate-200">{service.tagline}</p>
            <p className="text-slate-300">{service.summary}</p>
            <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.3em] text-slate-400">
              <span>Lead Time: {service.leadTime}</span>
              <span>Capacity: {service.capacity}</span>
              <span>QA: {service.qa}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#00F5FF] px-6 py-3 text-sm font-semibold text-[#010308] shadow-[0_15px_35px_rgba(0,245,255,0.4)]"
              >
                Book Production Slot
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/60"
              >
                See Related Work
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {service.highlights.map((highlight) => (
              <div
                key={highlight.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">{highlight.label}</p>
                <p className="text-xl sm:text-2xl font-bold text-white mt-2">{highlight.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 py-16">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">What we deliver</p>
            <ul className="space-y-3 text-slate-200">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#00F5FF]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Deliverables</p>
            <ul className="space-y-3 text-slate-200">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pb-16">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#67E8F9]">Specialties</p>
            <ul className="mt-4 space-y-3 text-slate-200">
              {service.specialties.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#67E8F9]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#FF6B00]">Value Added</p>
            <ul className="mt-4 space-y-3 text-slate-200">
              {service.valueAdds.map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#FF6B00]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pb-16">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9]">Gallery</p>
              <h3 className="text-2xl font-bold text-white">Recent Deployments</h3>
            </div>
            <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Swap with your best six shots
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {service.gallery.map((image, index) => (
              <div
                key={`${service.slug}-gallery-${index}`}
                className="aspect-[4/3] rounded-2xl sm:rounded-3xl border border-white/10 bg-cover bg-center shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden"
                style={{ backgroundImage: `linear-gradient(200deg, rgba(3,5,13,0) 20%, rgba(3,5,13,0.8) 100%), url('${image}')` }}
              >
                <img 
                  src={image} 
                  alt={`${service.title} gallery image ${index + 1}`}
                  className="w-full h-full object-cover opacity-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pb-20">
        <div className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-[#030614] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9]">Lead Time Blueprint</p>
              <h3 className="mt-2 text-2xl font-bold">
                {service.leadTime} · Integrated with production and install calendars
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#00F5FF] px-6 py-3 text-sm font-semibold text-[#010308]"
            >
              Reserve a Slot
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4 text-sm text-slate-300">
            {[
              { label: "Brief & Design Sync", value: "Day 0–1" },
              { label: "Production / Fabrication", value: "Day 1–3" },
              { label: "QA + Prep", value: "Day 3–4" },
              { label: "Install / Dispatch", value: "Day 4+" },
            ].map((stage) => (
              <div key={stage.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{stage.label}</p>
                <p className="mt-2 text-lg font-semibold text-white">{stage.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}


