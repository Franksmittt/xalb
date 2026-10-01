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
      <div className="mx-auto max-w-wide px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <p className="section-eyebrow">Why procurement chooses Xsphere</p>
        <h2 className="font-display mt-3 max-w-2xl text-balance">Facts you can put in a vendor pack.</h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-px border-y border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-surface px-6 py-8 sm:px-8">
            <p className="font-display text-5xl font-bold tracking-tight text-foreground">
              {m.value}
              <span className="ml-2 text-2xl font-semibold text-accent">{m.unit}</span>
            </p>
            <p className="spec-mono mt-4 text-[0.7rem] uppercase tracking-[0.14em] text-muted">{m.label}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
