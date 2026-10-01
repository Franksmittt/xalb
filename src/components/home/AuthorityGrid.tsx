const metrics = [
  {
    value: '17',
    unit: 'years',
    label: 'Same Alberton address',
    body: 'Commercial floor and retail counter in Florentia — continuity procurement can verify.',
  },
  {
    value: '1',
    unit: 'vendor',
    label: 'Design to install',
    body: 'Creative, press, CNC, and install under one account-managed timeline.',
  },
  {
    value: 'East',
    unit: 'Rand',
    label: 'Local logistics',
    body: 'Alrode, Germiston, Johannesburg South — short haul from the production floor.',
  },
  {
    value: 'CAD',
    unit: 'ready',
    label: 'Technical intake',
    body: 'Drop drawings and print specs. Nested capacity planning, not a black-box quote.',
  },
];

export default function AuthorityGrid() {
  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-wide px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <p className="section-eyebrow">Why procurement chooses Xsphere</p>
        <h2 className="font-display mt-3 max-w-2xl text-balance">Facts you can put in a vendor pack.</h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-px border-y border-line bg-line sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="bg-surface px-6 py-10 sm:px-8">
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
