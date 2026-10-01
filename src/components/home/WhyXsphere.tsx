const reasons = [
  { title: 'Over 25 years experience', body: 'Established 2001 — decades of combined industry delivery.' },
  { title: 'National installations', body: 'Gauteng crews plus rollout support beyond the East Rand.' },
  { title: 'End-to-end project management', body: 'One accountable path from brief to installed asset.' },
  { title: 'In-house design support', body: 'Artwork built for print, vinyl, CNC, and display hardware.' },
  { title: 'Fast turnaround', body: 'Production planned for campaign dates — not vague lead times.' },
  { title: 'Premium print quality', body: 'Colour-managed UV, litho, and specialised media.' },
  { title: 'Reliable service', body: 'Direct contacts. Clear replies. No disappearing vendors.' },
  { title: 'Experienced production team', body: 'Print, brand, display, CNC, and install on one floor.' },
];

export default function WhyXsphere() {
  return (
    <section className="section-pad border-t border-line bg-background">
      <div className="mx-auto max-w-wide">
        <p className="section-eyebrow">Why Xsphere</p>
        <h2 className="font-display mt-3 max-w-2xl text-balance">What the company profile promises — in practice.</h2>
        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article key={reason.title} className="bg-surface p-6">
              <h3 className="font-display text-lg font-bold text-foreground">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{reason.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
