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
          className="flex items-center flex-wrap md:flex-nowrap text-left mb-[60px]"
        >
          <p className="font-sans font-bold text-[24px] leading-[30px] text-[#f27820]">03.</p>
          <div className="w-[130px] h-[2px] bg-[#727272] mx-[15px] shrink-0" />
          <h2 className="text-[24px] leading-[30px] font-bold font-sans text-[#111111] tracking-[1px] flex items-center flex-wrap capitalize">
            Our Range Of Frameworks And Cutting-Edge Technology Expertise<span className="w-[8px] h-[8px] rounded-full bg-black inline-block ml-[2px] shrink-0" />
          </h2>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex min-h-[500px]">
          {/* Left Vertical Menu */}
          <div className="w-[450px] shrink-0 bg-[#2f2b54] py-10 flex flex-col relative">
            {MENU_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeCategory === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveCategory(item.id)}
                  className={`flex justify-between items-center px-10 py-5 text-[15px] font-bold font-sans tracking-wide transition-all duration-200 cursor-pointer relative ${isActive
                    ? 'text-white'
                    : 'text-white hover:text-white'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon size={20} className={isActive ? 'text-white' : 'text-white'} />
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-[#675f99]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Content Panel */}
          <div className="flex-1 bg-[#eaeaea] py-10 px-12 flex flex-col justify-start">
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
                    className="flex items-center gap-6 bg-[#f4f4f4] px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 flex items-center justify-center shrink-0">
                      <img src={tech.img} alt={tech.name} className="max-w-full max-h-full object-contain" loading="lazy" />
                    </div>
                    <span className="text-[15px] font-bold text-[#111111] tracking-wide font-sans">
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
                  className="w-full flex justify-between items-center px-4 py-4 bg-white text-[15px] font-bold font-sans tracking-wide text-slate-800 cursor-pointer"
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
                        <span className="text-[14px] font-bold text-slate-800 font-sans">
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
