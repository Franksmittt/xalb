import Link from 'next/link';

const serviceGroups = [
  {
    title: 'Large Format Printing & Signage',
    description:
      'High-capacity UV print, safety systems, POS suites, and exhibition environments built for industrial timelines.',
    services: [
      'Large-format runs for building wraps & mega signage',
      'Industrial + safety signage, labels, and wayfinding',
      'Retail displays and point-of-sale ecosystems',
      'Events & exhibitions: modular walls, hanging banners, floor graphics',
    ],
    image: '/images/hero-print.png',
    href: '/solutions/large-format-printing',
  },
  {
    title: 'Precision Fabrication & Laser Cutting',
    description:
      'State-of-the-art laser bays and fabrication decks that process acrylics, metals, composites, textiles, and more.',
    services: [
      'Laser cutting for graphics, signage, and labels',
      'CNC routing + finishing for custom fixtures',
      'Material processing: plastic, wood, metal, textiles, card stock',
      'Bespoke fabrication for industrial + retail prototypes',
    ],
    image: '/images/fabrication-lab.png',
    href: '/solutions/fabrication',
  },
  {
    title: 'Vehicle Branding & Fleet Solutions',
    description:
      'Mobile branding programs—from single wraps to entire fleets—plus magnets for rapid deployment.',
    services: [
      'Full + partial vehicle wraps with protective laminates',
      'Fleet branding and compliance-ready numbering',
      'Magnet programs for temporary activations',
      'Logistics dashboards to coordinate install windows',
    ],
    image: '/images/fleet-lineup.png',
    href: '/solutions/fleet-branding',
  },
  {
    title: 'Graphic Design & Identity',
    description:
      'Creative teams craft the digital-to-physical handshake: corporate identity, business systems, and campaign art.',
    services: [
      'Corporate identity kits, business cards, sales collateral',
      'Graphic design tuned for physical output from day one',
      'Digital wireframing + prototyping for stakeholder buy-in',
      'Campaign creative bridging print, signage, and experiential',
    ],
    image: '/images/design-studio.png',
    href: '/solutions/design',
  },
  {
    title: 'Installation & Logistics',
    description:
      'Certified installers, branded fleet, and QA specialists deploy across Gauteng with military precision.',
    services: [
      'On-site installation for signage, interiors, and retail rollouts',
      'Building facade branding + elevated access solutions',
      'Vehicle/Fleet deployment with post-install QA reports',
      'Corporate gift kitting + delivery for campaign launches',
    ],
    image: '/images/install-team.png',
    href: '/solutions/installation',
  },
];

export default function ServicesMatrix() {
  return (
    <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-[#AEDD33]">Offer Catalogue</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">Full-Stack Capabilities</h2>
          <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
            Xsphere owns the entire communications value chain—from the first sketch to the last rivet. Below is the
            service-to-outcome map you can remix for each client journey.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {serviceGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-6 rounded-3xl border border-white/15 bg-[#01030B]/95 p-6 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] shadow-[0_25px_70px_rgba(0,0,0,0.6)]"
            >
              <Link
                href={group.href}
                className="rounded-2xl border border-white/10 bg-[#02040E] p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5FF]"
              >
                <div
                  className="aspect-[4/3] rounded-2xl bg-cover bg-center bg-no-repeat shadow-[0_20px_50px_rgba(0,0,0,0.45)]"
                  style={{ backgroundImage: `url('${group.image}')` }}
                  aria-label={`View ${group.title}`}
                />
              </Link>

              <div>
                <Link href={group.href} className="hover:text-[#AEDD33] transition-colors">
                  <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                </Link>
                <p className="mt-2 text-slate-200 leading-relaxed">{group.description}</p>
                <ul className="mt-4 grid gap-3 text-sm text-slate-100/90">
                  {group.services.map((service) => (
                    <li key={service} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/90" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

