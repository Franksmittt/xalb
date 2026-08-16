const metrics = [
  {
    value: '17 yrs',
    label: 'Alberton workshop',
    body: 'Florentia address — commercial floor and retail counter.',
  },
  {
    value: '3 × 2 m',
    label: 'CNC bed',
    body: 'Nested routing for MDF, ABS, and plastics.',
  },
  {
    value: '1.2 × 0.9 m',
    label: 'Laser bed',
    body: 'Cut and engrave signs, overlays, and short runs.',
  },
  {
    value: '3.2 m',
    label: 'UV width',
    body: 'Hybrid print for rigid boards and roll media.',
  },
];

export default function AuthorityGrid() {
  return (
    <section className="bg-[#050505] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">Facility facts</p>
        <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold text-white md:text-4xl">
          Specified for procurement, not slogans
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="min-w-0 rounded-2xl border border-neutral-800 bg-neutral-950 p-6">
              <p className="font-display text-3xl font-black leading-none tracking-tight text-white sm:text-4xl">
                {m.value}
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-400">{m.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-400">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
