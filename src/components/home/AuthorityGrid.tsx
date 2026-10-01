const metrics = [
  {
    value: '17 yrs',
    label: 'Alberton workshop',
    body: 'Same manufacturing address in Florentia — commercial floor and retail counter.',
  },
  {
    value: '3×2 m',
    label: 'CNC bed',
    body: 'Nested routing for MDF, ABS, and commercial plastics.',
  },
  {
    value: '1200×900',
    label: 'Laser bed',
    body: 'Cut and engrave for signs, overlays, gifts, and short runs.',
  },
  {
    value: '3.2 m',
    label: 'UV width',
    body: 'Hybrid large format for rigid and roll media used across Gauteng.',
  },
];

export default function AuthorityGrid() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="section-eyebrow">Facility facts</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-foreground">
          Specified for procurement, not slogans
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="bg-surface p-8">
              <p className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{m.value}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{m.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
