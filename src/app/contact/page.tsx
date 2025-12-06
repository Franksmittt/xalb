"use client";

import Link from "next/link";

const contactChannels = [
  {
    title: "Call Us",
    value: "+27 11 869 9169",
    description: "Mon–Fri, 08:00–17:00 GMT+2",
  },
  {
    title: "Email",
    value: "info@xsphere.co.za",
    description: "We reply within one business day",
  },
  {
    title: "Visit",
    value: "99 Second Avenue, Florentia, Alberton",
    description: "Showroom + install hub in Gauteng",
  },
];

const officeSlots = [
  { label: "Strategy Call", detail: "30 min video or phone to map scope" },
  { label: "Site Survey", detail: "On-site measurement + technical prep" },
  { label: "Sample Review", detail: "View materials, color proofs, prototypes" },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-10 py-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,245,255,0.12)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#03050d]/60 to-[#03050d]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-[#AEDD33]">Contact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Let’s build your next launch—design, production, and installation in one message.
          </h1>
          <p className="text-lg text-slate-200">
            Drop a line and we’ll schedule a strategy call. Prefer WhatsApp, Teams, or an in-person workshop? We’ll meet
            you where you are.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-10 pb-24">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,0.7fr)]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="name" className="block text-sm text-slate-200">
                  Name <span className="text-[#FF1744]">*</span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#02050d] px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#AEDD33] focus:border-[#AEDD33] transition-all"
                    placeholder="Your name"
                  />
                </label>
                <label htmlFor="company" className="block text-sm text-slate-200">
                  Company
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#02050d] px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#AEDD33] focus:border-[#AEDD33] transition-all"
                    placeholder="Organization"
                  />
                </label>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <label htmlFor="email" className="block text-sm text-slate-200">
                  Email <span className="text-[#FF1744]">*</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#02050d] px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#AEDD33] focus:border-[#AEDD33] transition-all"
                    placeholder="you@example.com"
                  />
                </label>
                <label htmlFor="phone" className="block text-sm text-slate-200">
                  Phone / WhatsApp
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-[#02050d] px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#AEDD33] focus:border-[#AEDD33] transition-all"
                    placeholder="+27 ..."
                  />
                </label>
              </div>
              <label htmlFor="description" className="block text-sm text-slate-200">
                Project description <span className="text-[#FF1744]">*</span>
                <textarea
                  id="description"
                  name="description"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#02050d] px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#AEDD33] focus:border-[#AEDD33] transition-all resize-y"
                  rows={4}
                  placeholder="Tell us about timelines, outputs, or challenges."
                />
              </label>
              <label htmlFor="assets" className="block text-sm text-slate-200">
                Asset links (optional)
                <input
                  id="assets"
                  name="assets"
                  type="url"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-[#02050d] px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#AEDD33] focus:border-[#AEDD33] transition-all"
                  placeholder="Share Drive / Dropbox / Wetransfer"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-[#AEDD33] to-[#1E8F40] px-6 py-3 text-sm font-semibold text-[#010308] shadow-[0_15px_35px_rgba(174,221,51,0.4)] hover:shadow-[0_20px_45px_rgba(174,221,51,0.5)] hover:from-[#B2D942] hover:to-[#2E9346] transition-all"
              >
                Send Inquiry
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#02040c]/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] space-y-6">
              {contactChannels.map((channel) => (
                <div key={channel.title}>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{channel.title}</p>
                  {channel.title === 'Call Us' ? (
                    <a href="tel:+27118699169" className="text-xl font-semibold mt-2 block hover:text-[#00F5FF] transition-colors">
                      {channel.value}
                    </a>
                  ) : channel.title === 'Email' ? (
                    <a href="mailto:info@xsphere.co.za" className="text-xl font-semibold mt-2 block hover:text-[#00F5FF] transition-colors">
                      {channel.value}
                    </a>
                  ) : (
                    <p className="text-xl font-semibold mt-2">{channel.value}</p>
                  )}
                  <p className="text-sm text-slate-300">{channel.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#AEDD33]">Book a slot</p>
              <ul className="space-y-3 text-slate-200">
                {officeSlots.map((slot) => (
                  <li key={slot.label}>
                    <p className="font-semibold">{slot.label}</p>
                    <p className="text-sm text-slate-300">{slot.detail}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact#survey"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white/60 transition-all"
              >
                Request Survey
              </Link>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#01030a] p-6 space-y-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Gauteng hub</p>
              <p className="text-2xl font-bold">Installation-ready, every day</p>
              <p className="text-sm text-slate-300">
                Branded fleet, climate-controlled wrap bays, fabrication floor, design studio, and QC lab on-site.
              </p>
              <div className="rounded-2xl border border-white/10 bg-cover bg-center h-48 opacity-80" style={{ backgroundImage: "url('/images/install-team.png')" }} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


