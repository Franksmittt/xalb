const metrics = [
  { value: '17 yrs', label: 'Alberton workshop', body: 'Same manufacturing address in Florentia — commercial floor and retail counter.' },
  { value: '3×2 m', label: 'CNC bed', body: 'Nested routing for MDF, ABS, and commercial plastics.' },
  { value: '1200×900', label: 'Laser bed', body: 'Cut and engrave for signs, overlays, gifts, and short runs.' },
  { value: '3.2 m', label: 'UV width', body: 'Hybrid large format for rigid and roll media used across Gauteng.' },
];

export default function AuthorityGrid() {
  return (
    <section className="bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-400">Facility facts</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-white">Specified for procurement, not slogans</h2>
      </div>
      <div className="grid w-full grid-cols-1 gap-px border-y border-neutral-800 bg-neutral-800 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="flex flex-col gap-4 bg-[#050505] p-10 hover:bg-neutral-900">
            <p className="font-display text-5xl font-black tracking-tighter text-white">{m.value}</p>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">{m.label}</p>
            <p className="text-sm text-neutral-400">{m.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
