const metrics = [
  {
    value: '25+',
    unit: 'years',
    label: 'Established 2001',
    body: 'Print, brand, and display experience — now with CNC and litho on the same Alberton floor.',
  },
  {
    value: '1',
    unit: 'vendor',
    label: 'End-to-end management',
    body: 'Design, produce, gift, display, and install under one accountable timeline.',
  },
  {
    value: 'ZA',
    unit: 'wide',
    label: 'National installations',
    body: 'Gauteng base with rollout support for multi-site retail and exhibition programmes.',
  },
  {
    value: 'In',
    unit: 'house',
    label: 'Design + production',
    body: 'Artwork, UV, litho, CNC, display kits, and gifting — not three WhatsApp groups.',
  },
];

export default function AuthorityGrid() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-wide px-[var(--space-gutter)] pb-8 pt-[var(--space-section)]">
        <p className="section-eyebrow">Why procurement chooses Xsphere</p>
        <h2 className="mt-3 max-w-2xl text-balance">Facts you can put in a vendor pack.</h2>
      </div>
      <div className="grid w-full grid-cols-1 items-stretch gap-px border-y border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex h-full flex-col bg-surface px-6 py-8 sm:px-8">
            <p className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {m.value}
              <span className="ml-2 text-xl font-semibold text-accent sm:text-2xl">{m.unit}</span>
            </p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted">{m.label}</p>
            <p className="mt-3 max-w-xs flex-1 text-sm leading-relaxed text-muted">{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
