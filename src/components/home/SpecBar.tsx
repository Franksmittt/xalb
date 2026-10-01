const specs = [
  { value: '17 yrs', label: 'Florentia workshop' },
  { value: '3 × 2 m', label: 'CNC bed' },
  { value: '1200 × 900', label: 'Laser bed' },
  { value: '3.2 m', label: 'UV hybrid width' },
  { value: 'In-house', label: 'Design → install' },
];

export default function SpecBar() {
  return (
    <section className="border-y border-line bg-surface" aria-label="Facility specifications">
      <div className="mx-auto grid max-w-wide grid-cols-2 divide-y divide-line sm:grid-cols-3 lg:grid-cols-5 lg:divide-x lg:divide-y-0">
        {specs.map((spec) => (
          <div key={spec.label} className="px-4 py-6 sm:px-6 sm:py-7">
            <p className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">{spec.value}</p>
            <p className="spec-mono mt-2 text-[0.68rem] uppercase tracking-[0.14em] text-muted">{spec.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
