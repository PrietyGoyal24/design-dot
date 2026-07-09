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
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col z-10 relative">
        
        {/* Row 1: Heading & Controls */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-6 mb-[80px] lg:mb-[100px] w-full">
          {/* Index and title with Hanging Indent */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center w-full"
          >
            {/* Hanging Prefix Column */}
            <div className="w-[120px] lg:w-[160px] flex items-center shrink-0">
              <span className="font-sans font-black text-[20px] lg:text-[24px] leading-none tracking-tight text-[#F58331]">04.</span>
              <div className="flex-grow h-[1px] bg-[#727272] mx-[15px] mr-[15px]" />
            </div>
            
            {/* Content Column Start */}
            <div className="flex items-baseline">
              <h2 className="font-bold text-[20px] lg:text-[24px] leading-none font-sans capitalize tracking-tight text-white">
                What's Good
              </h2>
              <div className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] bg-white rounded-full ml-[6px]" />
            </div>
          </motion.div>

          {/* Slider Arrow Buttons */}
          <div className="flex gap-4 shrink-0">
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

        {/* Indented Content Block */}
        <div className="w-full pl-0 md:pl-[120px] lg:pl-[160px]">
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
                className={`flex-col justify-between p-6 bg-white/5 border border-slate-800 rounded-[20px] shadow-2xl relative overflow-hidden group hover:border-[var(--accent)] transition-all duration-300 min-h-[480px] ${index === 1 ? 'hidden md:flex' : 'flex'
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
                  <div className="flex justify-between items-baseline gap-4 mb-[25px]">
                    <h3 className="text-[32px] leading-[48px] font-bold font-sans text-white tracking-wide">
                      {project.title}
                    </h3>
                    <a
                      href={project.href}
                      target="_blank"
                      className="text-[14px] font-bold font-sans tracking-[2px] uppercase text-[#f27820] hover:text-white transition-colors flex items-center gap-[10px] shrink-0"
                    >
                      <span className="w-[15px] h-[2px] bg-[#f27820]" />
                      <span>CASE STUDY</span>
                    </a>
                  </div>
                  <p className="text-[16px] text-white/90 font-light font-sans leading-[1.5] line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  );
}
