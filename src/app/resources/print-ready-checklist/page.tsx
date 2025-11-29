import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Print-Ready Checklist',
  description: 'File preparation standards, color profiles, and resolution requirements for flawless production runs. Ensure your artwork is print-ready before submission.',
  alternates: {
    canonical: '/resources/print-ready-checklist',
  },
};

export default function PrintReadyChecklistPage() {
  const checklist = [
    {
      category: 'File Format',
      items: [
        { requirement: 'Vector files: AI, EPS, PDF (outlined fonts)', status: 'critical' },
        { requirement: 'Raster files: TIFF, PSD (300 DPI minimum)', status: 'critical' },
        { requirement: 'CMYK color mode (not RGB)', status: 'critical' },
        { requirement: 'No embedded RGB profiles', status: 'important' },
      ],
    },
    {
      category: 'Resolution & Size',
      items: [
        { requirement: '300 DPI for print at final size', status: 'critical' },
        { requirement: '150 DPI minimum for large format (viewed from distance)', status: 'important' },
        { requirement: 'Actual dimensions specified in file', status: 'critical' },
        { requirement: 'Bleed: 3mm minimum on all sides', status: 'critical' },
      ],
    },
    {
      category: 'Color & Profiles',
      items: [
        { requirement: 'ICC profile: ISO Coated v2 or FOGRA39', status: 'important' },
        { requirement: 'Spot colors converted to CMYK or specified as Pantone', status: 'important' },
        { requirement: 'No pure black (use rich black: C60 M40 Y40 K100)', status: 'important' },
        { requirement: 'Color proof provided for approval', status: 'recommended' },
      ],
    },
    {
      category: 'Typography',
      items: [
        { requirement: 'All fonts outlined or embedded', status: 'critical' },
        { requirement: 'Minimum font size: 6pt for body text', status: 'important' },
        { requirement: 'No system fonts (use licensed fonts)', status: 'important' },
        { requirement: 'Text converted to paths for large format', status: 'recommended' },
      ],
    },
    {
      category: 'Images & Graphics',
      items: [
        { requirement: 'All images linked (not embedded) or embedded at full resolution', status: 'critical' },
        { requirement: 'No low-resolution images upscaled', status: 'critical' },
        { requirement: 'Transparent backgrounds: PNG or EPS with transparency', status: 'important' },
        { requirement: 'Image compression: None or Lossless', status: 'important' },
      ],
    },
    {
      category: 'Final Checks',
      items: [
        { requirement: 'Spell check completed', status: 'critical' },
        { requirement: 'All text proofread and approved', status: 'critical' },
        { requirement: 'Bleed and trim marks included', status: 'critical' },
        { requirement: 'File named clearly (e.g., "ClientName_Poster_Final.pdf")', status: 'recommended' },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00F5FF]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF1744]/10 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Link href="/resources" className="inline-flex items-center text-sm text-[#67E8F9] hover:text-[#00F5FF] mb-6 transition-colors">
              ← Back to Resources
            </Link>
            <p className="text-xs uppercase tracking-[0.4em] text-[#67E8F9] mb-4">Design Guide</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="block text-white">Print-Ready Checklist</span>
              <span className="block bg-gradient-to-r from-[#00F5FF] via-[#2D9CFF] to-[#FF1744] bg-clip-text text-transparent">
                File Preparation Standards
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl">
              Follow this checklist to ensure your files are production-ready. Meeting these standards guarantees flawless print runs and avoids costly reprints.
            </p>
          </div>

          <div className="space-y-6">
            {checklist.map((section) => (
              <div
                key={section.category}
                className="rounded-3xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl p-8"
              >
                <h2 className="text-xl font-bold text-white mb-6">{section.category}</h2>
                <div className="space-y-3">
                  {section.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`mt-1 flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center ${
                        item.status === 'critical' ? 'bg-[#FF1744]/20 border border-[#FF1744]' :
                        item.status === 'important' ? 'bg-[#FF6B00]/20 border border-[#FF6B00]' :
                        'bg-[#00F5FF]/20 border border-[#00F5FF]'
                      }`}>
                        <span className={`text-xs ${
                          item.status === 'critical' ? 'text-[#FF1744]' :
                          item.status === 'important' ? 'text-[#FF6B00]' :
                          'text-[#00F5FF]'
                        }`}>✓</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-slate-300">{item.requirement}</p>
                        <span className={`inline-block mt-1 px-2 py-0.5 text-xs rounded ${
                          item.status === 'critical' ? 'bg-[#FF1744]/10 text-[#FF1744]' :
                          item.status === 'important' ? 'bg-[#FF6B00]/10 text-[#FF6B00]' :
                          'bg-[#00F5FF]/10 text-[#00F5FF]'
                        }`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#00F5FF]/5 to-[#FF1744]/5 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Need File Preparation Help?</h3>
            <p className="text-slate-300 mb-6">
              Our design team can review your files before production or help prepare them to our standards.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#00F5FF] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(0,245,255,0.4)]"
            >
              Request File Review
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

