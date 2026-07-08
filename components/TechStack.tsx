'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Layout, Database, Smartphone, BarChart, HardDrive, Cloud, ShieldCheck, Layers, Cpu } from 'lucide-react';
import { GRID_TECH_DATA } from '@/constants';

const MENU_ITEMS = [
  { id: "frontend", label: "Frontend Programming Languages", icon: Layout },
  { id: "backend", label: "Backend Programming Languages", icon: Database },
  { id: "mobile", label: "Mobile App Development", icon: Smartphone },
  { id: "bigdata", label: "Big Data", icon: BarChart },
  { id: "database", label: "Databases / Data Storages", icon: HardDrive },
  { id: "clouddb", label: "Cloud DB, Warehouses And Storage", icon: Cloud },
  { id: "devops", label: "DevOps", icon: ShieldCheck },
  { id: "architecturedesigns", label: "Architecture Designs And Patterns", icon: Layers },
  { id: "artificialintelligence", label: "Artificial Intelligence", icon: Cpu },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>("frontend");

  const toggleAccordion = (id: string) => {
    setMobileActiveCategory(mobileActiveCategory === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-center gap-4 text-left"
        >
          <div className="flex items-center gap-4 text-xs font-display font-semibold tracking-widest text-[#f27820] shrink-0">
            <span>03.</span>
            <div className="w-12 h-[1px] bg-[#f27820]/40" />
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight font-display text-slate-900 uppercase">
            Our Range Of Frameworks And Cutting-Edge Technology Expertise<span className="text-[#f27820]">.</span>
          </h2>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-stretch min-h-[500px]">
          {/* Left Vertical Menu */}
          <div className="col-span-5 flex flex-col border-r border-slate-100 pr-6 gap-2">
            {MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.id)}
                  className={`flex justify-between items-center px-4 py-3.5 rounded-xl text-xs font-bold font-display tracking-wide transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#131126] text-white shadow-xl'
                      : 'hover:bg-slate-50 text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={isActive ? 'text-[var(--accent)]' : 'text-slate-400'} />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight size={14} className={isActive ? 'text-[var(--accent)] translate-x-1 transition-transform' : 'text-slate-300'} />
                </button>
              );
            })}
          </div>

          {/* Right Content Panel */}
          <div className="col-span-7 bg-[#f8f9fc] rounded-[20px] p-8 flex flex-col justify-start border border-slate-100/50">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 gap-4 text-left"
              >
                {GRID_TECH_DATA[activeCategory as keyof typeof GRID_TECH_DATA]?.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-4 bg-white border border-slate-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      <img src={tech.img} alt={tech.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 tracking-wide font-display">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Layout (Accordion) */}
        <div className="lg:hidden space-y-4">
          {MENU_ITEMS.map((item) => {
            const Icon = item.icon;
            const isOpen = mobileActiveCategory === item.id;
            return (
              <div key={item.id} className="border border-slate-100 rounded-xl overflow-hidden bg-[#f8f9fc]">
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full flex justify-between items-center px-4 py-4 bg-white text-xs font-bold font-display tracking-wide text-slate-800 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className="text-[#f27820]" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-slate-400">{isOpen ? '▼' : '►'}</span>
                </button>

                {isOpen && (
                  <div className="p-4 bg-[#f8f9fc] border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    {GRID_TECH_DATA[item.id as keyof typeof GRID_TECH_DATA]?.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-4 bg-white border border-slate-100 p-3 rounded-lg shadow-sm"
                      >
                        <div className="w-8 h-8 flex items-center justify-center shrink-0">
                          <img src={tech.img} alt={tech.name} className="max-w-full max-h-full object-contain" />
                        </div>
                        <span className="text-[11px] font-bold text-slate-800 font-display">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
