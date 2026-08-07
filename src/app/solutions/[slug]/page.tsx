import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { serviceCatalog, serviceMap } from "@/data/services";
import StructuredData from "@/components/StructuredData";

type Props = {
  params: { slug: string };
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://xsphere.co.za";

export function generateStaticParams() {
  return serviceCatalog.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceMap[params.slug];

  if (!service) {
    return { title: "Service Not Found" };
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
      type: "website",
      url: `${baseUrl}/solutions/${params.slug}`,
      images: [
        {
          url: service.heroImage.startsWith("http")
            ? service.heroImage
            : `${baseUrl}${service.heroImage}`,
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

  const isCore = service.slug === "fabrication";

  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: {
      "@type": "Organization",
      name: "Xsphere Marketing and Design",
      url: baseUrl,
      telephone: "+27-11-869-9169",
      email: "info@xsphere.co.za",
    },
    areaServed: {
      "@type": "State",
      name: "Gauteng",
    },
    serviceType: isCore
      ? "CNC Routing and Laser Engraving"
      : "Printing and Signage Services",
  };

  return (
    <main className="page-shell">
      <StructuredData data={serviceStructuredData} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.heroImage}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[rgba(16,20,12,0.72)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-content px-4 py-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-bright">
              {isCore ? "Core focus" : "Workshop service"}
            </p>
            <h1 className="font-display mt-4 text-4xl font-bold text-white md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg text-white/85">{service.tagline}</p>
            <p className="mt-4 max-w-2xl text-white/75">{service.summary}</p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/65">
              <span>{service.leadTime}</span>
              <span aria-hidden>·</span>
              <span>{service.capacity}</span>
              <span aria-hidden>·</span>
              <span>{service.qa}</span>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-accent-bright px-6 py-3 text-sm font-semibold text-[#1c2118]"
              >
                {isCore ? "Brief a CNC & laser project" : "Brief a project"}
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                All solutions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-6 sm:grid-cols-3">
          {service.highlights.map((highlight) => (
            <div key={highlight.label} className="border-l-2 border-accent pl-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                {highlight.label}
              </p>
              <p className="font-display mt-2 text-2xl font-bold text-ink">{highlight.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-2">
          <div>
            <p className="section-eyebrow">What we deliver</p>
            <ul className="mt-5 space-y-3 text-ink-muted">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-eyebrow">Deliverables</p>
            <ul className="mt-5 space-y-3 text-ink-muted">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-muted/50 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-12 md:grid-cols-2">
          <div>
            <p className="section-eyebrow">Specialties</p>
            <ul className="mt-5 space-y-3 text-ink-muted">
              {service.specialties.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="section-eyebrow">How we help</p>
            <ul className="mt-5 space-y-3 text-ink-muted">
              {service.valueAdds.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <p className="section-eyebrow">Gallery</p>
          <h2 className="font-display mt-3 text-2xl font-bold text-ink">From the workshop</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {service.gallery.map((image, index) => (
              <div
                key={`${service.slug}-gallery-${index}`}
                className="relative aspect-[4/3] overflow-hidden bg-surface-muted"
              >
                <Image
                  src={image}
                  alt={`${service.title} example ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-content flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="section-eyebrow">Next step</p>
            <h2 className="font-display mt-2 text-2xl font-bold text-ink md:text-3xl">
              {service.leadTime} typical · talk through your brief
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink-inverse"
          >
            Contact the workshop
          </Link>
        </div>
      </section>
    </main>
  );
}
