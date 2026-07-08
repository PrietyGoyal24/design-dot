'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { WHAT_GOOD_PROJECTS } from '@/constants';

export default function Portfolio() {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    // Cycles forward: on desktop we show 2, so max index is length - 2. On mobile we show 1, max is length - 1.
    // Let's support cycling item by item:
    setStartIndex((prev) => (prev + 1) % WHAT_GOOD_PROJECTS.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + WHAT_GOOD_PROJECTS.length) % WHAT_GOOD_PROJECTS.length);
  };

  // Get items to display based on index
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 2; i++) {
      const idx = (startIndex + i) % WHAT_GOOD_PROJECTS.length;
      items.push(WHAT_GOOD_PROJECTS[idx]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="relative py-24 bg-[#131126] text-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading & Controls */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6">
          {/* Index and title */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-left"
          >
            <div className="flex items-center gap-4 text-xs font-display font-semibold tracking-widest text-[var(--accent)] shrink-0">
              <span>04.</span>
              <div className="w-12 h-[1px] bg-[var(--accent)]/40" />
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold tracking-tight font-display text-white uppercase">
              What's Good<span className="text-[var(--accent)]">.</span>
            </h2>
          </motion.div>

          {/* Slider Arrow Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[var(--accent)] hover:text-[var(--accent)] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-[var(--accent)] hover:text-[var(--accent)] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* We render visible items using Framer Motion layout to animate switches */}
          <AnimatePresence mode="popLayout">
            {visibleItems.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95, x: -20 }}
                transition={{ duration: 0.5 }}
                // Hide second item on mobile, only show 1
                className={`flex-col justify-between p-6 bg-white/5 border border-slate-800 rounded-[20px] shadow-2xl relative overflow-hidden group hover:border-[var(--accent)] transition-all duration-300 min-h-[480px] ${
                  index === 1 ? 'hidden md:flex' : 'flex'
                }`}
              >
                {/* Image Cover */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-slate-900 border border-slate-800">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white text-[#131126] rounded-full flex items-center justify-center shadow-lg">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Footer text content of card */}
                <div className="space-y-4 text-left">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="text-xl md:text-2xl font-extrabold font-display text-white tracking-wide">
                      {project.title}
                    </h3>
                    <a
                      href={project.href}
                      target="_blank"
                      className="text-xs font-bold font-display tracking-widest text-[var(--accent)] hover:text-white transition-colors flex items-center gap-1.5 shrink-0"
                    >
                      <span className="w-6 h-[1.5px] bg-[var(--accent)]" />
                      <span>CASE STUDY</span>
                    </a>
                  </div>
                  <p className="text-xs text-slate-400 font-medium tracking-wide uppercase leading-relaxed font-sans line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
