export type ServiceEntry = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  heroImage: string;
  gallery: string[];
  leadTime: string;
  capacity: string;
  qa: string;
  bullets: string[];
  highlights: { label: string; value: string }[];
  deliverables: string[];
  specialties: string[];
  valueAdds: string[];
};

export const serviceCatalog: ServiceEntry[] = [
  {
    slug: "large-format-printing",
    title: "Large Format Printing & Signage",
    tagline: "Mega-format UV print, safety systems, POS suites, and exhibition environments.",
    summary:
      "High-capacity UV print lines, industrial-grade finishing, and campaign logistics for clients who need every asset to ship on the same truck.",
    heroImage: "/images/hero-print.png",
    gallery: [
      "/images/services/large_format/Gemini_Generated_Image_m4v1gsm4v1gsm4v1.png",
      "/images/services/large_format/Gemini_Generated_Image_w5o6l4w5o6l4w5o6.png",
      "/images/services/large_format/Gemini_Generated_Image_rhxz54rhxz54rhxz.png",
      "/images/services/large_format/Gemini_Generated_Image_y6btqdy6btqdy6bt.png",
      "/images/services/large_format/Gemini_Generated_Image_34pvqm34pvqm34pv.png",
      "/images/services/large_format/Gemini_Generated_Image_7qmkiz7qmkiz7qmk.png",
    ],
    leadTime: "3–5 days average",
    capacity: "1,200 m² per day",
    qa: "Color-calibrated + proofed within 24h",
    bullets: [
      "Large-format runs for building wraps and skyline signage",
      "Industrial & safety signage, labels, and wayfinding packs",
      "Retail displays and point-of-sale ecosystems",
      "Events & exhibitions: modular walls, hanging banners, floor graphics",
    ],
    highlights: [
      { label: "Max Width", value: "3.2 m UV" },
      { label: "Material Library", value: "30+ substrates" },
      { label: "Uptime", value: "99.4%" },
    ],
    deliverables: [
      "Color-managed proofs",
      "Installation-ready panels",
      "Logistics manifest + tracking",
    ],
    specialties: [
      "Genuine OEM inks + UV lamination for weather immunity",
      "High-resolution artwork QA; we reproof low-res files",
      "ICC-calibrated workflows for perfect brand color transfer",
    ],
    valueAdds: [
      "On-site survey + measurement prior to print",
      "Design support to adapt assets for mega-scale",
      "Archival of print files for future refreshes",
    ],
  },
  {
    slug: "fabrication",
    title: "Precision Fabrication & Laser Cutting",
    tagline: "State-of-the-art laser bays and fabrication decks built for custom one-offs and scaled rollouts.",
    summary:
      "From acrylic sculptures to aluminum enclosures, our fabrication floor processes plastics, metals, textiles, and composites with micrometer accuracy.",
    heroImage: "/images/fabrication-lab.png",
    gallery: [
      "/images/gallery/fabrication-1.png",
      "/images/gallery/fabrication-2.png",
      "/images/gallery/fabrication-3.png",
      "/images/gallery/fabrication-4.png",
      "/images/gallery/fabrication-5.png",
      "/images/gallery/fabrication-6.png",
    ],
    leadTime: "5–7 days average",
    capacity: "4 laser bays + CNC routing",
    qa: "Tolerance reports on every batch",
    bullets: [
      "Laser cutting for graphics, signage, and labels",
      "CNC routing + finishing for custom fixtures",
      "Material processing: plastic, wood, metal, textiles, card stock",
      "Bespoke fabrication for industrial + retail prototypes",
    ],
    highlights: [
      { label: "Precision", value: "±0.2 mm" },
      { label: "Formats", value: "2.5 × 1.3 m beds" },
      { label: "Tool Heads", value: "8 active" },
    ],
    deliverables: [
      "Cut files & QC documentation",
      "Assembled/flat-pack kits",
      "Material certificates on request",
    ],
    specialties: [
      "Mixed-material fabrication marrying acrylic, steel, timber, textiles",
      "In-house finishing booth for paint, powder coat, and protective layers",
      "Rapid prototyping pipeline for experiential builds",
    ],
    valueAdds: [
      "Material consulting + sourcing",
      "Joint engineering with client teams",
      "Kitting + labeling for on-site assembly",
    ],
  },
  {
    slug: "fleet-branding",
    title: "Vehicle Branding & Fleet Solutions",
    tagline: "Mobile branding programs—from single wraps to national fleets—with logistics baked in.",
    summary:
      "Dedicated wrap bays, clean rooms, and magnet programs mean your fleet stays in motion while we refresh the brand skin.",
    heroImage: "/images/fleet-lineup.png",
    gallery: [
      "/images/gallery/fleet-1.png",
      "/images/gallery/fleet-2.png",
      "/images/gallery/fleet-3.png",
      "/images/gallery/fleet-4.png",
      "/images/gallery/fleet-5.png",
      "/images/gallery/fleet-6.png",
    ],
    leadTime: "1–3 days per vehicle",
    capacity: "25+ installs weekly",
    qa: "Post-install QA + photo log",
    bullets: [
      "Full + partial vehicle wraps with protective laminates",
      "Fleet branding and compliance-ready numbering",
      "Magnet programs for temporary activations",
      "Logistics dashboards to coordinate install windows",
    ],
    highlights: [
      { label: "Wrap Warranty", value: "Up to 5 years" },
      { label: "Install Crews", value: "6 mobile teams" },
      { label: "Fleet Reach", value: "Gauteng-wide" },
    ],
    deliverables: [
      "Pre-flight design mockups",
      "Fleet schedule + handover docs",
      "Maintenance + care guides",
    ],
    specialties: [
      "Dust-free wrap bays with climate control",
      "3M & Avery Dennison-certified installers",
      "In-field repair kits and hotline",
    ],
    valueAdds: [
      "Fleet audit + branding compliance checks",
      "Telematics-friendly install scheduling",
      "Aftercare inspections at 30/90 days",
    ],
  },
  {
    slug: "design",
    title: "Graphic Design & Identity",
    tagline: "The digital-to-physical handshake that keeps brands consistent across every medium.",
    summary:
      "Creative directors, industrial designers, and CAD specialists collaborate so every pixel is engineered for its eventual substrate.",
    heroImage: "/images/design-studio.png",
    gallery: [
      "/images/gallery/design-1.png",
      "/images/gallery/design-2.png",
      "/images/gallery/design-3.png",
      "/images/gallery/design-4.png",
      "/images/gallery/design-5.png",
      "/images/gallery/design-6.png",
    ],
    leadTime: "48h concept drops",
    capacity: "6 multidisciplinary squads",
    qa: "Proof routes with stakeholder sign-off",
    bullets: [
      "Corporate identity kits, business cards, sales collateral",
      "Graphic design tuned for physical output from day one",
      "Digital wireframing + prototyping for stakeholder buy-in",
      "Campaign creative bridging print, signage, experiential touchpoints",
    ],
    highlights: [
      { label: "Concept Cycles", value: "2–3 per sprint" },
      { label: "File Formats", value: "AI / CAD / 3D" },
      { label: "Brand Systems", value: "50+ shipped" },
    ],
    deliverables: [
      "Brand playbooks + asset kits",
      "Production-ready files",
      "On-call art direction",
    ],
    specialties: [
      "Design review with fabrication and installation teams",
      "3D visualization + motion boards for stakeholder buy-in",
      "Digital-to-physical translation guides for client teams",
    ],
    valueAdds: [
      "File hygiene + naming conventions for enterprise DAMs",
      "Localized adaptations for regional campaigns",
      "Embedded art director during major rollouts",
    ],
  },
  {
    slug: "installation",
    title: "Installation & Logistics",
    tagline: "Certified installers, branded fleet, and QA specialists deploy across Gauteng with military precision.",
    summary:
      "From high-rise signage to nationwide retail swaps, our crews, riggers, and fleet ensure projects hit the ground exactly as designed.",
    heroImage: "/images/install-team.png",
    gallery: [
      "/images/services/installation/Gemini_Generated_Image_3vealc3vealc3vea.png",
      "/images/services/installation/Gemini_Generated_Image_94nxa994nxa994nx.png",
      "/images/services/installation/Gemini_Generated_Image_luiboiluiboiluib.png",
      "/images/services/installation/Gemini_Generated_Image_nvcg3fnvcg3fnvcg.png",
      "/images/services/installation/Gemini_Generated_Image_ojk0alojk0alojk0.png",
      "/images/services/installation/Gemini_Generated_Image_z0cbqfz0cbqfz0cb.png",
    ],
    leadTime: "Same-week slots",
    capacity: "25+ sites weekly",
    qa: "Photo + checklist reports",
    bullets: [
      "On-site installation for signage, interiors, and retail rollouts",
      "Building facade branding + elevated access solutions",
      "Vehicle/fleet deployment with post-install QA reports",
      "Corporate gift kitting + delivery for campaign launches",
    ],
    highlights: [
      { label: "Crew Coverage", value: "Gauteng + surrounds" },
      { label: "Fleet Vehicles", value: "12 branded units" },
      { label: "Access", value: "Working-at-height certified" },
    ],
    deliverables: [
      "Method statements + safety files",
      "On-site supervisor contact",
      "Aftercare + maintenance plan",
    ],
    specialties: [
      "Working-at-height teams with rope-access certification",
      "Night-shift installs to avoid disruption",
      "National partner network for outside Gauteng",
    ],
    valueAdds: [
      "Permit + landlord coordination",
      "Live WhatsApp progress boards",
      "Post-install polish + defect punchlist",
    ],
  },
];

export const serviceMap = Object.fromEntries(serviceCatalog.map((service) => [service.slug, service]));


