'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const tutorials = [
  {
    title: 'Print-Ready File Preparation Guide',
    description: 'Avoid costly mistakes! Learn resolution requirements, file formats, aspect ratios, and realistic lead times. Perfect for customers who send tiny images or wrong formats.',
    category: 'Design & Production',
    difficulty: 'Beginner',
    readTime: '12 min read',
    href: '/tutorials/print-ready-file-preparation',
    image: '/images/fabrication-lab.png',
    featured: true,
  },
  {
    title: 'How to Apply Vinyl to Vehicles: Professional Guide',
    description: 'Master the art of vehicle wrapping with our comprehensive guide. Learn why quality vinyl matters, proper application techniques, and avoid costly mistakes.',
    category: 'Vehicle Wrapping',
    difficulty: 'Intermediate',
    readTime: '15 min read',
    href: '/tutorials/vinyl-vehicle-application',
    image: '/images/fleet-lineup.png',
    featured: false,
  },
  {
    title: 'Choosing the Right Vinyl: Cast vs Calendered',
    description: 'Understand the difference between cast and calendered vinyl, when to use each type, and why quality matters for long-lasting results.',
    category: 'Materials',
    difficulty: 'Beginner',
    readTime: '10 min read',
    href: '/tutorials/vinyl-types',
    image: '/images/hero-print.png',
    featured: false,
  },
  {
    title: 'Signage Installation Best Practices',
    description: 'Professional techniques for installing outdoor signage, including surface preparation, adhesive application, and weatherproofing.',
    category: 'Installation',
    difficulty: 'Advanced',
    readTime: '12 min read',
    href: '/tutorials/signage-installation',
    image: '/images/install-team.png',
    featured: false,
  },
];

export default function TutorialsPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#03050d] via-[#080d1c] to-[#140621] text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_1px,_transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#AEDD33]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF1744]/10 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-[#AEDD33] mb-4">Expert Guides</p>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="block text-white">Tutorials & How-To Guides</span>
              <span className="block bg-gradient-to-r from-[#AEDD33] via-[#4CAF50] to-[#1E8F40] bg-clip-text text-transparent">
                Learn from the Professionals
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Master professional techniques for vehicle wrapping, vinyl application, and signage installation. 
              Learn why quality materials and proper techniques make all the difference.
            </p>
          </div>

          {/* Featured Tutorial */}
          {tutorials[0] && tutorials[0].featured && (
            <div className="mb-16">
              <p className="text-xs uppercase tracking-[0.3em] text-[#AEDD33] mb-4">Featured Tutorial</p>
              <Link href={tutorials[0].href}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#AEDD33]/10 to-[#1E8F40]/10 p-8 md:p-12 shadow-[0_25px_70px_rgba(0,245,255,0.2)]"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#AEDD33]/20 text-[#00F5FF] mb-4">
                        {tutorials[0].category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{tutorials[0].title}</h2>
                      <p className="text-slate-200 text-lg mb-6">{tutorials[0].description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-300">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
                          {tutorials[0].difficulty}
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#67E8F9]" />
                          {tutorials[0].readTime}
                        </span>
                      </div>
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${tutorials[0].image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </div>
          )}

          {/* All Tutorials Grid */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">All Tutorials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <Link key={tutorial.href} href={tutorial.href}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#01030B]/95 backdrop-blur-xl hover:border-[#00F5FF]/50 transition-all duration-300"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url('${tutorial.image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[#AEDD33]/20 text-[#00F5FF]">
                          {tutorial.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00F5FF] transition-colors">
                        {tutorial.title}
                      </h3>
                      <p className="text-slate-300 text-sm mb-4 line-clamp-2">{tutorial.description}</p>
                      <div className="flex items-center gap-4 text-xs text-slate-400">
                        <span>{tutorial.difficulty}</span>
                        <span>•</span>
                        <span>{tutorial.readTime}</span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 rounded-3xl border border-[#00F5FF]/30 bg-gradient-to-br from-[#AEDD33]/5 to-[#1E8F40]/5 p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Professional Help?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              While these guides teach you the basics, professional installation ensures longevity and quality. 
              Our certified installers use premium materials and proven techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#AEDD33] px-8 py-4 text-base font-semibold text-[#010308] shadow-[0_15px_35px_rgba(174,221,51,0.4)]"
              >
                Get Professional Installation
              </Link>
              <Link
                href="/solutions/fleet-branding"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-base font-semibold text-white hover:border-white/60 transition-all"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

