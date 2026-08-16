export type ServiceSilo = 'commercial' | 'retail';

export type CatalogFaq = { question: string; answer: string };

export type CatalogService = {
  slug: string;
  silo: ServiceSilo;
  title: string;
  navLabel: string;
  tagline: string;
  summary: string;
  heroImage: string;
  leadTime: string;
  capacity: string;
  qa: string;
  materials: string[];
  highlights: { label: string; value: string }[];
  bullets: string[];
  offerings: string[];
  problem: string;
  solution: string;
  faqs: CatalogFaq[];
  related: string[];
};

export const commercialServices: CatalogService[] = [
  {
    slug: 'cnc-laser-cutting',
    silo: 'commercial',
    title: 'CNC Routing & Laser Cutting',
    navLabel: 'CNC & Laser',
    tagline: 'In-house routing and engraving for MDF, ABS, acrylic, and industrial plastics — Alrode / Alberton.',
    summary:
      'Xsphere operates dedicated CNC routing and CO₂ laser cutting in Alberton for commercial volumes. Laser bed 1200 × 900 mm. CNC bed 3 m × 2 m. Work is nested, cut, finished, and packed on the same floor so shopfitters and brand teams are not waiting on a third machine shop for wood and plastic.',
    heroImage: '/images/fabrication-lab.png',
    leadTime: '5–7 days typical',
    capacity: 'Laser 1200×900 mm · CNC 3×2 m',
    qa: 'Proof + first-article check on every run',
    materials: ['MDF', 'MR MDF', 'Plywood', 'ABS', 'Acrylic / Perspex', 'Rowmark', 'PVC foam', 'PETG', 'HDPE', 'Xanita'],
    highlights: [
      { label: 'Laser bed', value: '1200 × 900 mm' },
      { label: 'CNC bed', value: '3 m × 2 m' },
      { label: 'Focus', value: 'Wood & plastics' },
    ],
    bullets: [
      'High-volume nested routing for shopfitting, POS, and architectural panels',
      'Laser cut and engrave for signs, awards, overlays, and campaign pieces',
      'Edge finishing, paint, and assembly for install-ready parts',
      'CAD from client DXF, AI, or sketches — we build cut-ready paths',
    ],
    offerings: [
      'Dimensional letters and logos',
      'Reception and feature walls',
      'Display units and standees',
      'Jigs, templates, and short-run prototypes',
      'Engraved plaques, gifts, and campaign runs',
    ],
    problem:
      'Industrial buyers and shopfitters lose days when wood and plastic cutting is sent out of house, then comes back for print, paint, and install.',
    solution:
      'Xsphere keeps CNC routing and laser cutting for MDF, ABS, and commercial plastics on the Alberton floor, then finishes and (when required) installs across Gauteng from the same brief.',
    faqs: [
      {
        question: 'Does Xsphere have in-house CNC routing capacity in Johannesburg South?',
        answer:
          'Yes. Xsphere Marketing and Design runs CNC routing on a 3 m × 2 m bed and laser cutting/engraving on a 1200 × 900 mm bed in Alberton, serving Alrode, Germiston, and the East Rand. Production focuses on MDF, ABS, acrylic, and industrial plastics.',
      },
      {
        question: 'What materials do you CNC and laser in-house?',
        answer:
          'Wood and plastic: MDF, plywood, ABS, acrylic/Perspex, Rowmark engraving laminates, PVC foam, PETG, HDPE, and display boards such as Xanita. Large metal plate cutting is not the in-house speciality.',
      },
    ],
    related: ['abs-plastics-routing', 'mdf-wood-routing', 'dimensional-signage'],
  },
  {
    slug: 'abs-plastics-routing',
    silo: 'commercial',
    title: 'ABS & Industrial Plastics Routing',
    navLabel: 'ABS & Plastics',
    tagline: 'High-tolerance routing of ABS, acrylic, HDPE, and engineering plastics for enclosures, guards, and displays.',
    summary:
      'ABS and commercial plastics are a core in-house routing stream. We pocket, profile, and finish sheets for machine guards, POS, hygiene screens, and branded housings without sending plastic work to a metal fabricator.',
    heroImage: '/images/fabrication-lab.png',
    leadTime: '5–8 days typical',
    capacity: 'CNC up to 3 m × 2 m sheets',
    qa: 'Fit check against drawings',
    materials: ['ABS', 'Acrylic', 'PETG', 'Polycarbonate (selected)', 'HDPE', 'PVC foam', 'HIPS'],
    highlights: [
      { label: 'Primary', value: 'ABS · acrylic · HDPE' },
      { label: 'Bed', value: '3 m × 2 m' },
      { label: 'Finish', value: 'Edge polish / flame / paint' },
    ],
    bullets: [
      'Pocket routing and 2.5D profiles in ABS and acrylic',
      'Machine guards, sneeze screens, and literature holders',
      'Strip-bending and edge polish for Perspex assemblies',
      'Repeatable batches for retail and industrial programmes',
    ],
    offerings: [
      'ABS enclosures and panels',
      'Acrylic holders and menu systems',
      'Safety screens',
      'Illuminated letter faces (acrylic)',
    ],
    problem: 'Plastic parts quoted at a metal shop sit in a queue behind plate work and arrive with the wrong edge finish.',
    solution:
      'Xsphere routes ABS and commercial plastics in-house on the same CNC cell used for MDF, with plastic-specific feeds, polish, and assembly.',
    faqs: [
      {
        question: 'Can you route bulk ABS in Alberton?',
        answer:
          'Yes. ABS sheet routing is an in-house commercial process at Xsphere in Alberton, nested on a 3 m × 2 m CNC bed for East Rand and Johannesburg South contracts.',
      },
    ],
    related: ['cnc-laser-cutting', 'dimensional-signage', 'rigid-substrates'],
  },
  {
    slug: 'mdf-wood-routing',
    silo: 'commercial',
    title: 'MDF & Wood Routing',
    navLabel: 'MDF Routing',
    tagline: 'Bulk MDF, plywood, and timber routing for shopfitting, letters, and painted dimensional work.',
    summary:
      'MDF is the workhorse substrate for painted letters, slat walls, and retail fixtures. We nest high-yield sheets on the 3 m × 2 m CNC, then paint, laminate, or wrap for install.',
    heroImage: '/images/install-team.png',
    leadTime: '5–10 days including paint',
    capacity: '3 m × 2 m nested sheets',
    qa: 'Paint batch consistency',
    materials: ['Standard MDF', 'Moisture-resistant MDF', 'Plywood', 'Solid timber (selected)', 'Xanita'],
    highlights: [
      { label: 'Sheets', value: 'Nested 3 × 2 m' },
      { label: 'Finish', value: 'Paint · laminate · wrap' },
      { label: 'Use', value: 'Shopfit · letters · fixtures' },
    ],
    bullets: [
      'High-yield nested cutting for shopfitters',
      'Built-up letters and logo walls in MDF',
      'Display plinths, counters, and FSDU carcasses',
      'Moisture-resistant grades for selected interiors',
    ],
    offerings: ['Painted dimensional logos', 'Retail fixtures', 'Exhibition carcasses', 'Interior feature walls'],
    problem: 'Joinery shops treat one-off brand letters as a nuisance job; print shops cannot cut thick MDF cleanly.',
    solution:
      'Xsphere is set up for both: nested MDF routing at commercial volume, then finishing that matches the brand colour, not a cabinet default.',
    faqs: [
      {
        question: 'Do you CNC MDF for shopfitters in Alrode?',
        answer:
          'Yes. Bulk MDF and plywood routing is an in-house commercial service from the Alberton workshop, serving Alrode, Germiston, and East Rand shopfitting programmes.',
      },
    ],
    related: ['cnc-laser-cutting', 'dimensional-signage', 'installation'],
  },
  {
    slug: 'litho-printing',
    silo: 'commercial',
    title: 'Commercial Litho Printing',
    navLabel: 'Litho Printing',
    tagline: 'High-volume offset for catalogues, packaging, NCR, and corporate collateral — colour-managed commercial runs.',
    summary:
      'Litho is the volume path for catalogues, annual reports, packaging, and long-run flyers. Xsphere specifies, colour-manages, and delivers commercial offset programmes for Johannesburg South and the East Rand, with digital short-run as the on-ramp when quantities are still climbing.',
    heroImage: '/images/hero-print.png',
    leadTime: '7–12 days typical',
    capacity: 'Commercial sheet-fed runs',
    qa: 'Colour-managed proofs before press',
    materials: ['Coated art', 'Uncoated / bond', 'Boards 300–400 gsm', 'NCR', 'Packaging boards'],
    highlights: [
      { label: 'Best for', value: '1,000+ impressions' },
      { label: 'Colour', value: 'CMYK + specials' },
      { label: 'Bindery', value: 'Fold · stitch · perfect bind' },
    ],
    bullets: [
      'Catalogues, brochures, and annual reports',
      'NCR invoice and delivery books',
      'Presentation folders and packaging sleeves',
      'Proofed colour before the long run starts',
    ],
    offerings: [
      'High-volume flyers',
      'Saddle-stitched booklets',
      'Perfect-bound catalogues',
      'NCR books',
      'Corporate stationery at scale',
    ],
    problem: 'Agencies split short-run digital and long-run offset across two vendors and lose colour match.',
    solution:
      'One brief covers digital prototypes and litho volume, with the same prepress rules so East Rand brand colours do not drift between the sample and the pallet.',
    faqs: [
      {
        question: 'Does Xsphere handle high-volume litho for Johannesburg South?',
        answer:
          'Yes. Commercial litho printing is a core offering for catalogues, packaging, and corporate runs serving Alberton, Germiston, and Johannesburg South, with colour-managed proofs before press.',
      },
    ],
    related: ['large-format-printing', 'graphic-design', 'walk-in-printing'],
  },
  {
    slug: 'large-format-printing',
    silo: 'commercial',
    title: 'Large Format Printing & Signage',
    navLabel: 'Large Format',
    tagline: 'UV and roll-to-roll output to 3.2 m — banners, SAV, Chromadek, Correx, wall graphics, and exhibition media.',
    summary:
      'Wide-format UV hybrid printing for rigid boards and roll media. Outdoor durability for Alberton weather, indoor colour for retail, and finishing (weld, eyelet, contour cut, laminate) so panels leave ready to hang or wrap.',
    heroImage: '/images/hero-print.png',
    leadTime: '3–5 days typical',
    capacity: 'Up to 3.2 m UV width',
    qa: 'Colour proof + laminate spec',
    materials: [
      'PVC banner / mesh',
      'SAV (mono / polymeric / cast)',
      'Correx',
      'Foam / PVC foam',
      'Acrylic',
      'ACM / DiBond',
      'Chromadek',
      'Canvas',
      'Backlit film',
    ],
    highlights: [
      { label: 'Width', value: '3.2 m UV' },
      { label: 'Rigid + roll', value: 'Hybrid output' },
      { label: 'Outdoor', value: 'Laminated UV inks' },
    ],
    bullets: [
      'PVC, mesh, blockout, and pull-up banners',
      'Self-adhesive vinyl including contra-vision',
      'Rigid: Correx, foam, acrylic, ACM, Chromadek',
      'Exhibition walls, floor graphics, and hoardings',
    ],
    offerings: [
      'Building and site banners',
      'Shop-front vinyl',
      'Estate and contractor boards',
      'Wallpaper and wall murals',
      'Backlit lightbox faces',
    ],
    problem: 'Signage that is printed in one place and fabricated in another never matches on the wall.',
    solution:
      'Xsphere prints large format and fabricates dimensional pieces from the same artwork, then installs across Gauteng when the brief needs crews.',
    faqs: [
      {
        question: 'What is the maximum large-format print width?',
        answer:
          'Commercial UV hybrid output is specified up to 3.2 m wide for roll and rigid work, serving Alberton, Meyersdal, Brackenhurst, and East Rand retail and industrial sites.',
      },
    ],
    related: ['rigid-substrates', 'vehicle-fleet-branding', 'installation'],
  },
  {
    slug: 'rigid-substrates',
    silo: 'commercial',
    title: 'Rigid Substrate & Flatbed Printing',
    navLabel: 'Rigid & Flatbed',
    tagline: 'Direct print to Correx, foam, acrylic, ACM, Chromadek, and display boards — cut and finished for site.',
    summary:
      'Flatbed and hybrid UV onto rigid sheets used every day in South African signage: Correx, Chromadek, DiBond/ACM, Perspex, foam board, and Xanita. Contour cut and CNC-trimmed so the print and the edge are one job.',
    heroImage: '/images/services/large_format/Gemini_Generated_Image_m4v1gsm4v1gsm4v1.png',
    leadTime: '3–6 days',
    capacity: 'Sheet sizes to CNC / flatbed bed',
    qa: 'White ink / adhesion checks',
    materials: ['Correx', 'Foam board', 'PVC foam', 'Acrylic', 'ACM', 'Chromadek', 'Xanita', 'ABS'],
    highlights: [
      { label: 'White ink', value: 'Dark & clear stocks' },
      { label: 'Cut', value: 'Contour + CNC trim' },
      { label: 'Outdoor', value: 'Chromadek · ACM' },
    ],
    bullets: [
      'Estate, site, and safety boards',
      'POS, FSDU, and standees',
      'Fascia and totem faces',
      'Double-sided rigid where specified',
    ],
    offerings: ['Correx campaigns', 'Chromadek outdoor', 'Acrylic printed panels', 'ACM fascia faces'],
    problem: 'Boards printed then hand-trimmed show white edges and mis-registered cuts.',
    solution: 'Print and cut are planned as one nested job on rigid media used in Gauteng outdoor and retail.',
    faqs: [
      {
        question: 'Do you print directly onto Chromadek and Correx?',
        answer:
          'Yes. Rigid UV print onto Correx, Chromadek, ACM, acrylic, and foam boards is a standard commercial service, finished for Alberton and East Rand outdoor and retail use.',
      },
    ],
    related: ['large-format-printing', 'cnc-laser-cutting', 'dimensional-signage'],
  },
  {
    slug: 'vehicle-fleet-branding',
    silo: 'commercial',
    title: 'Vehicle Branding & Fleet Wraps',
    navLabel: 'Fleet Branding',
    tagline: 'Partial and full wraps, magnets, and fleet numbering — cast vinyl, laminated, installed in Gauteng.',
    summary:
      'Mobile branding from a single bakkie to a scheduled fleet. Cast films for compound curves, polymeric for simpler panels, magnets for temporary programmes, and photo QA after install.',
    heroImage: '/images/fleet-lineup.png',
    leadTime: '1–3 days per vehicle',
    capacity: 'Scheduled fleet slots',
    qa: 'Post-install photo log',
    materials: ['Cast wrap vinyl', 'Polymeric SAV', 'Laminates', 'Magnetic sheeting'],
    highlights: [
      { label: 'Films', value: 'Cast · polymeric' },
      { label: 'Install', value: 'Bay + mobile' },
      { label: 'Fleet', value: 'Gauteng scheduling' },
    ],
    bullets: [
      'Full and partial wraps with protective laminate',
      'Fleet kits with consistent templates',
      'Magnets for rapid on/off branding',
      'De-brand and make-good',
    ],
    offerings: ['One-off wraps', 'Fleet programmes', 'Compliance numbering', 'Boat / trailer graphics'],
    problem: 'Inconsistent templates across a fleet make the brand look like three different suppliers.',
    solution: 'One template set, one vinyl spec, one install standard — then a photo log per vehicle.',
    faqs: [
      {
        question: 'Do you wrap vehicles in Alberton?',
        answer:
          'Yes. Vehicle wrapping and fleet branding is offered from the Alberton operation with install scheduling across Gauteng.',
      },
    ],
    related: ['large-format-printing', 'graphic-design', 'installation'],
  },
  {
    slug: 'dimensional-signage',
    silo: 'commercial',
    title: 'Dimensional Signage & Lightboxes',
    navLabel: 'Dimensional Signs',
    tagline: 'Cut letters, built-up logos, acrylic faces, and lightboxes — fabricated in wood and plastics, installed on site.',
    summary:
      'The commercial product of CNC plus print: flat-cut and built-up letters, reception logos, blade signs, and lightboxes in acrylic, MDF, and ACM trays. Illumination specified where the site allows.',
    heroImage: '/images/install-team.png',
    leadTime: '7–14 days typical',
    capacity: 'Letters to CNC bed limits',
    qa: 'Dry-fit before site',
    materials: ['Acrylic', 'MDF', 'ACM trays', 'LED modules', 'Rowmark'],
    highlights: [
      { label: 'Letters', value: 'Flat-cut & built-up' },
      { label: 'Lit', value: 'Face / halo / lightbox' },
      { label: 'Install', value: 'Gauteng crews' },
    ],
    bullets: [
      'Acrylic and MDF letters',
      'Push-through and tray signs',
      'Fabric and acrylic lightboxes',
      'Wayfinding suites for campuses',
    ],
    offerings: ['Reception logos', 'Shop fascia', 'Totem faces', 'Interior directories'],
    problem: 'A printed board on a wall is not a brand presence; procurement still needs something that reads at 20 metres.',
    solution: 'Dimensional fabrication in the materials we actually machine — acrylic, MDF, ABS — with print and install attached.',
    faqs: [
      {
        question: 'Do you fabricate 3D letters in-house?',
        answer:
          'Yes. Flat-cut and built-up letters in acrylic, MDF, and related plastics are fabricated in-house, with optional LED and Gauteng installation.',
      },
    ],
    related: ['cnc-laser-cutting', 'installation', 'large-format-printing'],
  },
  {
    slug: 'installation',
    silo: 'commercial',
    title: 'Installation & Site Logistics',
    navLabel: 'Installation',
    tagline: 'Gauteng install crews for signage, interiors, facades, and fleet — method statements and photo close-out.',
    summary:
      'Making the piece is half the job. Certified crews install interior identity, shop-fronts, and selected elevated work across Gauteng, with landlord coordination and a punchlist.',
    heroImage: '/images/services/installation/Gemini_Generated_Image_nvcg3fnvcg3fnvcg.png',
    leadTime: 'Same-week slots when scheduled',
    capacity: 'Gauteng + partner network',
    qa: 'Photo + checklist handover',
    materials: [],
    highlights: [
      { label: 'Coverage', value: 'Gauteng' },
      { label: 'Access', value: 'Working-at-height where specified' },
      { label: 'Close-out', value: 'Photo QA' },
    ],
    bullets: [
      'Interior dimensional and vinyl',
      'Fascia and board installs',
      'Fleet application windows',
      'After-hours mall slots when booked',
    ],
    offerings: ['Site survey', 'Method statements', 'De-install / make-good', 'Maintenance visits'],
    problem: 'A perfect panel that nobody can legally hang still fails the campaign date.',
    solution: 'Survey, fabricate, and install are one programme — not three WhatsApp groups.',
    faqs: [
      {
        question: 'Do you install signage in Germiston and Johannesburg South?',
        answer:
          'Yes. Installation crews cover Gauteng including Germiston, Alberton, Alrode, and Johannesburg South, with partner coverage arranged outside the metro when required.',
      },
    ],
    related: ['dimensional-signage', 'large-format-printing', 'vehicle-fleet-branding'],
  },
  {
    slug: 'graphic-design',
    silo: 'commercial',
    title: 'Graphic Design for Manufacture',
    navLabel: 'Design',
    tagline: 'Artwork built for CNC paths, vinyl plots, and press — not just a screen mock.',
    summary:
      'Design that already knows the bed size, the fold, and the wrap template. Identity, campaigns, and production files so the factory is not reverse-engineering a JPEG.',
    heroImage: '/images/design-studio.png',
    leadTime: '48–96 hours for concepts',
    capacity: 'Production-ready AI / CAD',
    qa: 'Internal fab review before client proof',
    materials: [],
    highlights: [
      { label: 'Output', value: 'Cut-ready + print-ready' },
      { label: '3D', value: 'Wrap & letter mockups' },
      { label: 'Handover', value: 'Brand + production kit' },
    ],
    bullets: [
      'Identity and stationery systems',
      'Signage and wayfinding artwork',
      'Vehicle templates',
      'Prepress repair of client files',
    ],
    offerings: ['Brand kits', 'Campaign suites', 'CNC pathing', 'Large-format adaptations'],
    problem: 'Beautiful files that cannot be nested, weeded, or held in register.',
    solution: 'Designers sit next to CNC and print — the proof is a physical constraint check, not a PDF flatten.',
    faqs: [
      {
        question: 'Can you design and manufacture from a rough sketch?',
        answer:
          'Yes. Xsphere turns sketches and brand files into cut-ready and print-ready artwork, then manufactures in Alberton.',
      },
    ],
    related: ['cnc-laser-cutting', 'litho-printing', 'vehicle-fleet-branding'],
  },
];

export const retailServices: CatalogService[] = [
  {
    slug: 'walk-in-printing',
    silo: 'retail',
    title: 'Walk-In Printing & Copy Centre',
    navLabel: 'Walk-in Print',
    tagline: 'Alberton counter service: documents, plans, scanning, binding, laminating, and same-day digital.',
    summary:
      'A dedicated retail path for short runs and walk-ins — without putting a 40,000 litho job in the same queue as a thesis. Plans, copies, binding, and laminating for Alberton, Brackenhurst, and Meyersdal customers who need it today.',
    heroImage: '/images/hero-print.png',
    leadTime: 'While-you-wait to same day',
    capacity: 'A4–A0 plans and digital short run',
    qa: 'Counter check before you leave',
    materials: ['Bond', 'Photo papers', 'Plan bond', 'Pouches', 'Wiro / comb'],
    highlights: [
      { label: 'Hours', value: 'Mon–Fri 08:00–17:00' },
      { label: 'Plans', value: 'A2–A0' },
      { label: 'Bind', value: 'Comb · wiro · thermal' },
    ],
    bullets: [
      'B/W and colour copy and print',
      'Architectural plan print and fold',
      'Scan to PDF (desk and large format)',
      'Binding, laminating, guillotine',
    ],
    offerings: ['Theses', 'Tender packs', 'ID photos', 'Stamps', 'Short-run flyers'],
    problem: 'Industrial plants often refuse walk-ins; copy shops cannot escalate you when the job becomes a shopfront.',
    solution:
      'Xsphere keeps a retail counter for Alberton walk-ins and a commercial floor for the moment the same client needs CNC or fleet work.',
    faqs: [
      {
        question: 'Can I walk in for printing in Alberton?',
        answer:
          'Yes. Xsphere maintains a walk-in print and copy offering in Alberton for documents, plans, binding, and short-run digital, alongside the commercial manufacturing floor.',
      },
    ],
    related: ['business-cards-flyers', 'litho-printing', 'graphic-design'],
  },
  {
    slug: 'business-cards-flyers',
    silo: 'retail',
    title: 'Business Cards, Flyers & Stationery',
    navLabel: 'Cards & Flyers',
    tagline: 'Short-run digital cards, flyers, letterheads, and NCR pads — design help at the counter if you need it.',
    summary:
      'The local B2C and micro-business stack: cards, flyers, compliment slips, and small NCR books. When the reprint becomes 10,000 flyers, the same artwork moves to litho without a redesign.',
    heroImage: '/images/design-studio.png',
    leadTime: 'Same day–48 hours digital',
    capacity: 'Short run digital; litho when volume jumps',
    qa: 'Paper and finish proof',
    materials: ['300–400 gsm boards', '115–170 gsm flyers', 'Bond letterheads', 'NCR'],
    highlights: [
      { label: 'Cards', value: 'Standard & thick' },
      { label: 'Flyers', value: 'A6–A4 digital' },
      { label: 'Upgrade', value: 'Litho at volume' },
    ],
    bullets: [
      'Business cards including thick board',
      'Flyers and DL leaflets',
      'Letterheads and compliment slips',
      'Small NCR invoice books',
    ],
    offerings: ['Starter identity packs', 'Menus', 'Postcards', 'Certificates'],
    problem: 'Online card printers cannot help when you also need the shop-front sign next month.',
    solution: 'Retail stationery that lives in the same company as CNC, vinyl, and install.',
    faqs: [
      {
        question: 'Do you print business cards in Alberton?',
        answer:
          'Yes. Short-run digital business cards, flyers, and stationery are available for Alberton, Meyersdal, and Brackenhurst walk-in and collection customers.',
      },
    ],
    related: ['walk-in-printing', 'litho-printing', 'graphic-design'],
  },
];

export const allCatalogServices = [...commercialServices, ...retailServices];

export const catalogMap = Object.fromEntries(allCatalogServices.map((s) => [s.slug, s])) as Record<
  string,
  CatalogService
>;

export function servicePath(service: CatalogService | string) {
  const slug = typeof service === 'string' ? service : service.slug;
  const entry = typeof service === 'string' ? catalogMap[slug] : service;
  if (!entry) return '/services';
  return `/services/${entry.silo}/${entry.slug}`;
}

export const oldSolutionRedirects: Record<string, string> = {
  fabrication: '/services/commercial/cnc-laser-cutting',
  'large-format-printing': '/services/commercial/large-format-printing',
  'fleet-branding': '/services/commercial/vehicle-fleet-branding',
  design: '/services/commercial/graphic-design',
  installation: '/services/commercial/installation',
};

export type Suburb = {
  slug: string;
  name: string;
  context: string;
  emphasis: 'industrial' | 'retail';
};

export const suburbs: Suburb[] = [
  {
    slug: 'alberton',
    name: 'Alberton',
    emphasis: 'retail',
    context:
      'The workshop sits in Florentia, Alberton — walk-in print and commercial manufacturing share the same address for local collection and Gauteng dispatch.',
  },
  {
    slug: 'alrode',
    name: 'Alrode',
    emphasis: 'industrial',
    context:
      'Alrode is the heavy-industry neighbour. Nested MDF and ABS routing plus large-format boards move on short hops into the Alrode industrial node.',
  },
  {
    slug: 'brackenhurst',
    name: 'Brackenhurst',
    emphasis: 'retail',
    context:
      'Brackenhurst businesses use the Alberton counter for cards, flyers, and short-run print, with the factory floor available when signage or CNC is required.',
  },
  {
    slug: 'meyersdal',
    name: 'Meyersdal',
    emphasis: 'retail',
    context:
      'Meyersdal corporate and retail clients are a short run from the Alberton plant for large-format campaigns, vinyl, and reception identity.',
  },
  {
    slug: 'germiston',
    name: 'Germiston',
    emphasis: 'industrial',
    context:
      'From Alberton we feed Germiston industry via N3/N12 logistics — litho pallets, CNC packs, and rigid signage without a Johannesburg CBD detour.',
  },
  {
    slug: 'east-rand',
    name: 'East Rand',
    emphasis: 'industrial',
    context:
      'East Rand programmes (multi-site retail and industrial) are scheduled from Alberton with one set of artwork, one material spec, and Gauteng install.',
  },
  {
    slug: 'johannesburg-south',
    name: 'Johannesburg South',
    emphasis: 'industrial',
    context:
      'Johannesburg South procurement reaches a manufacturing floor in Alberton rather than a city copy shop — CNC, litho, and 3.2 m UV under one programme.',
  },
];

export const locationServiceSlugs = [
  'cnc-routing',
  'litho-printing',
  'large-format-printing',
] as const;

export type LocationServiceSlug = (typeof locationServiceSlugs)[number];

export const locationServiceMeta: Record<
  LocationServiceSlug,
  { title: string; catalogSlug: string; blurb: string }
> = {
  'cnc-routing': {
    title: 'CNC Routing & Laser Cutting',
    catalogSlug: 'cnc-laser-cutting',
    blurb:
      'In-house CNC (3 m × 2 m) and laser (1200 × 900 mm) for MDF, ABS, acrylic, and commercial plastics.',
  },
  'litho-printing': {
    title: 'Commercial Litho Printing',
    catalogSlug: 'litho-printing',
    blurb: 'High-volume offset programmes with colour-managed proofs and bindery.',
  },
  'large-format-printing': {
    title: 'Large Format Printing',
    catalogSlug: 'large-format-printing',
    blurb: 'UV hybrid output to 3.2 m — banners, SAV, Correx, Chromadek, and exhibition media.',
  },
};

export function suburbBySlug(slug: string) {
  return suburbs.find((s) => s.slug === slug);
}
