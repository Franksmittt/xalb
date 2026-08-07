"use client";

import Link from "next/link";

const contactChannels = [
  {
    title: "Call",
    value: "+27 11 869 9169",
    description: "Mon–Fri, 08:00–17:00",
    href: "tel:+27118699169",
  },
  {
    title: "Email",
    value: "info@xsphere.co.za",
    description: "We reply within one business day",
    href: "mailto:info@xsphere.co.za",
  },
  {
    title: "Visit",
    value: "99 Second Avenue, Florentia, Alberton",
    description: "Workshop + showroom in Gauteng",
    href: undefined,
  },
];

const officeSlots = [
  { label: "Project brief", detail: "30 min to map scope, materials, and timeline" },
  { label: "Site survey", detail: "On-site measurement for signage installs" },
  { label: "Sample review", detail: "See materials, engraving samples, and finishes" },
];

const inputClass =
  "mt-2 w-full rounded-md border border-[var(--line)] bg-surface px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-accent";

export default function ContactPage() {
  return (
    <main className="page-shell">
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-content">
          <div className="max-w-3xl">
            <p className="section-eyebrow">Contact</p>
            <h1 className="font-display mt-3 text-4xl font-bold text-ink md:text-5xl">
              Brief a CNC, laser, or full workshop project
            </h1>
            <p className="mt-5 text-lg text-ink-muted">
              Tell us what you need cut, engraved, printed, or installed. Commercial volumes welcome — we&apos;ll
              come back with a clear path.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-content gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]">
          <div className="border border-[var(--line)] bg-surface p-6 sm:p-8">
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="name" className="block text-sm font-medium text-ink">
                  Name <span className="text-accent">*</span>
                  <input id="name" name="name" type="text" required className={inputClass} placeholder="Your name" />
                </label>
                <label htmlFor="company" className="block text-sm font-medium text-ink">
                  Company
                  <input id="company" name="company" type="text" className={inputClass} placeholder="Organization" />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="email" className="block text-sm font-medium text-ink">
                  Email <span className="text-accent">*</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClass}
                    placeholder="you@company.com"
                  />
                </label>
                <label htmlFor="phone" className="block text-sm font-medium text-ink">
                  Phone / WhatsApp
                  <input id="phone" name="phone" type="tel" className={inputClass} placeholder="+27 ..." />
                </label>
              </div>
              <label htmlFor="description" className="block text-sm font-medium text-ink">
                Project description <span className="text-accent">*</span>
                <textarea
                  id="description"
                  name="description"
                  required
                  className={`${inputClass} resize-y`}
                  rows={4}
                  placeholder="CNC / laser / signage / print — volumes, materials, deadlines."
                />
              </label>
              <label htmlFor="assets" className="block text-sm font-medium text-ink">
                File links (optional)
                <input
                  id="assets"
                  name="assets"
                  type="url"
                  className={inputClass}
                  placeholder="Drive / Dropbox / WeTransfer"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink-inverse transition-colors hover:bg-[#255a30]"
              >
                Send inquiry
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="space-y-6 border border-[var(--line)] bg-surface p-6">
              {contactChannels.map((channel) => (
                <div key={channel.title}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                    {channel.title}
                  </p>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      className="mt-2 block text-xl font-semibold text-ink transition-colors hover:text-accent"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-xl font-semibold text-ink">{channel.value}</p>
                  )}
                  <p className="text-sm text-ink-muted">{channel.description}</p>
                </div>
              ))}
            </div>

            <div className="border border-[var(--line)] bg-accent-soft/40 p-6">
              <p className="section-eyebrow">Book a slot</p>
              <ul className="mt-4 space-y-3">
                {officeSlots.map((slot) => (
                  <li key={slot.label}>
                    <p className="font-semibold text-ink">{slot.label}</p>
                    <p className="text-sm text-ink-muted">{slot.detail}</p>
                  </li>
                ))}
              </ul>
              <Link href="/solutions/fabrication" className="mt-5 inline-flex text-sm font-semibold text-accent">
                See CNC &amp; laser capabilities →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
