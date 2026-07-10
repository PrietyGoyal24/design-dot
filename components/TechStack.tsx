'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GRID_TECH_DATA } from '@/constants';

const MENU_ITEMS = [
  {
    id: "frontend",
    label: "Frontend Programming Languages",
    icon: "fas fa-laptop-code",
    iconNode: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path fillRule="evenodd" clipRule="evenodd" d="M21 3H3a2 2 0 00-2 2v11a2 2 0 002 2h6.5l-1.2 2.5H6v1.5h12v-1.5h-2.3l-1.2-2.5H21a2 2 0 002-2V5a2 2 0 00-2-2zm-12 9.5H7.8l-2.8-3.5 2.8-3.5H9L6.2 9 9 12.5zm4 0l-2-7h1.5l2 7H13zm2.2-7h1.2l2.8 3.5-2.8 3.5h-1.2L17.8 9l-2.6-3.5z" />
      </svg>
    )
  },
  {
    id: "backend",
    label: "Backend Programming Languages",
    icon: "fas fa-dharmachakra",
    iconNode: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path d="M19.5 4v5h-5V7h2.8A7.9 7.9 0 004 12H2a9.9 9.9 0 0116-7.8V4h1.5zM4.5 20v-5h5v2H6.7A7.9 7.9 0 0020 12h2a9.9 9.9 0 01-16 7.8V20h-1.5z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M12 8a4 4 0 100 8 4 4 0 000-8zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        <path d="M13.5 7.2v1l1 .4.7-.7.7.7-.7.7.4 1h1v1h-1l-.4 1 .7.7-.7.7-.7-.7-.9.4v1h-1v-1l-1-.4-.7.7-.7-.7.7-.7-.4-1h-1v-1h1l.4-1-.7-.7.7-.7.7.7.9-.4v-1h1z" />
      </svg>
    )
  },
  {
    id: "mobile",
    label: "Mobile App Development",
    icon: "fas fa-mobile-alt",
    iconNode: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 2h6a3 3 0 013 3v6.2A4 4 0 0012.8 14H12v8H8a3 3 0 01-3-3V5a3 3 0 013-3zm2 2h2v1h-2V4zm1 16a1 1 0 100-2 1 1 0 000 2z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 12h5a2 2 0 012 2v6a2 2 0 01-2 2h-5a2 2 0 01-2-2v-6a2 2 0 012-2zm1.2 5.5L14.7 15l1.5-2.5 1 .7-1 1.8 1 1.8-1 .7zm3.6 0L21.3 15l-1.5-2.5-1 .7 1 1.8-1 1.8 1 .7z" />
      </svg>
    )
  },
  {
    id: "bigdata",
    label: "Big Data",
    icon: "fas fa-database",
    iconNode: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C7 2 3 3.3 3 5s4 3 9 3 9-1.3 9-3-4-3-9-3zm0 2c-3.3 0-6 .7-6 1s2.7 1 6 1 6-.7 6-1-2.7-1-6-1z" />
        <path d="M3 9.5v3.5C3 14.7 7 16 12 16s9-1.3 9-3v-3.5C21 10.7 17 12 12 12S3 10.7 3 9.5z" />
        <path d="M3 17.5v3C3 22.2 7 23.5 12 23.5s9-1.3 9-3v-3C21 18.7 17 20 12 20s-9-1.3-9-2.5z" />
      </svg>
    )
  },
  {
    id: "database",
    label: "Databases / Data Storages",
    icon: "fas fa-server",
    iconNode: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 3C5 3 1 4.5 1 6.5s4 3.5 9 3.5 9-1.5 9-3.5S15 3 10 3zm0 2c-3.5 0-6.5.9-6.5 1.5S6.5 8 10 8s6.5-.9 6.5-1.5S13.5 5 10 5z" />
        <path d="M1 11v3.5C1 16.5 5 18 10 18c.6 0 1.2 0 1.8-.1A7.5 7.5 0 0111 14.5c0-2 1.3-3.7 3.1-4.4C12.9 10.5 11.5 11 10 11 5 11 1 9.5 1 11z" />
        <path fillRule="evenodd" clipRule="evenodd" d="M17 11a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm-1 4L13.5 17.5 16 20l1-1-1.5-1.5L17 16l-1-1zm2 0l2.5 2.5L18 20l-1-1 1.5-1.5L17 16l1-1z" />
      </svg>
    )
  },
  {
    id: "clouddb",
    label: "Cloud DB, Warehouses And Storage",
    icon: "fas fa-cloud",
    iconNode: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path fillRule="evenodd" clipRule="evenodd" d="M10 3C5 3 1 4.5 1 6.5s4 3.5 9 3.5 9-1.5 9-3.5S15 3 10 3zm0 2c-3.5 0-6.5.9-6.5 1.5S6.5 8 10 8s6.5-.9 6.5-1.5S13.5 5 10 5z" />
        <path d="M1 11v3.5C1 16.5 5 18 10 18c.5 0 1 0 1.4-.1a6.3 6.3 0 01-.1-4.7C12.4 11.5 14.1 10.5 16 10.5c.3 0 .6 0 .9.1-1-1.1-3.6-2.1-6.9-2.1-5 0-9 1.5-9 2.5z" />
        <path d="M22.5 18c0-1.5-.9-2.7-2.2-3a3.6 3.6 0 00-3.4-2.5c-2 0-3.6 1.6-3.6 3.6 0 .2 0 .5.1.7-1 .3-1.8 1.1-1.8 2.2 0 1.4 1.1 2.5 2.5 2.5h8c1.3 0 2.4-1.1 2.4-2.5z" />
      </svg>
    )
  },
  {
    id: "devops",
    label: "DevOps",
    icon: "fas fa-infinity",
    iconNode: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-3.5 13.5c1.4 0 2.8-1 3.5-2.2.7 1.2 2.1 2.2 3.5 2.2 2.2 0 4-1.8 4-4s-1.8-4-4-4c-1.4 0-2.8 1-3.5 2.2C11.3 8.5 9.9 7.5 8.5 7.5c-2.2 0-4 1.8-4 4s1.8 4 4 4zm0-5c.9 0 1.8.8 2.2 1.5-.4.7-1.3 1.5-2.2 1.5-1.1 0-2-.9-2-2s.9-2 2-2zm7 0c-.9 0-1.8.8-2.2 1.5.4.7 1.3 1.5 2.2 1.5 1.1 0 2-.9 2-2s-.9-2-2-2z" />
      </svg>
    )
  },
  {
    id: "architecturedesigns",
    label: "Architecture Designs And Patterns",
    icon: "fas fa-project-diagram",
    iconNode: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <rect x="2" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="9.5" width="7" height="5" rx="1" />
        <rect x="2" y="16" width="7" height="5" rx="1" />
        <path d="M10 5.5h2a2 2 0 012 2v9a2 2 0 01-2 2h-2M14 12h-2" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M14 10l2 2-2 2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    id: "artificialintelligence",
    label: "Artificial Intelligence",
    icon: "fas fa-microchip",
    iconNode: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
        <path fillRule="evenodd" clipRule="evenodd" d="M7 2h2v2h2V2h2v2h2V2h2v2h1a2 2 0 012 2v1h2v2h-2v2h2v2h-2v2h2v2h-2v1a2 2 0 01-2 2h-1v2h-2v-2h-2v2h-2v-2h-2v2H7v-2H6a2 2 0 01-2-2v-1H2v-2h2v-2H2v-2h2V9H2V7h2V6a2 2 0 012-2h1V2zm11 16V6H6v12h12zm-8-8.5l-2.5 6H8l.6-1.5h2.8l.6 1.5h1.5l-2.5-6h-2zM10 13l1-2.5 1 2.5h-2zm4.5-3.5h2v6h-2v-6z" />
      </svg>
    )
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string>("frontend");
  const [mobileActiveCategory, setMobileActiveCategory] = useState<string | null>("frontend");

  const toggleAccordion = (id: string) => {
    setMobileActiveCategory(mobileActiveCategory === id ? null : id);
  };

  return (
    <section className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 12px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          margin-top: 10px;
          margin-bottom: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #6a63a5;
          border-radius: 10px;
          border: 3px solid #363266;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #7b75b8;
        }
      `}</style>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col z-10 relative">

        {/* Row 1: Heading with Hanging Indent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center mb-[50px] w-full"
        >
          {/* Hanging Prefix Column */}
          <div className="w-[120px] lg:w-[160px] flex items-center shrink-0">
            <span
              className="font-black text-[20px] lg:text-[24px] leading-none tracking-tight text-[#111111]"
              style={{ fontFamily: 'GTWalsheimPro-Bold' }}
            >
              03.
            </span>
            <div className="flex-grow h-[1px] bg-[#111111]/40 ml-[15px] mr-[15px]" />
          </div>

          {/* Content Column Start */}
          <div className="flex items-baseline">
            <h2
              className="font-bold text-[20px] lg:text-[24px] leading-none capitalize tracking-tight text-[#111111]"
              style={{ fontFamily: 'GTWalsheimPro-Bold' }}
            >
              Our Range Of Frameworks And Cutting-Edge Technology Expertise
            </h2>
            <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] bg-[#111111] rounded-full ml-[6px]" />
          </div>
        </motion.div>

        {/* Indented Content Block */}
        <div className="w-full pl-0 md:pl-[120px] lg:pl-[160px]">

          {/* Desktop Layout */}
          <div className="hidden lg:flex h-[515px] w-full overflow-hidden rounded-[25px]">
            {/* Left Vertical Menu */}
            <div className="w-1/2 shrink-0 bg-[#363266] pt-[20px] pb-[15px] pl-[20px] pr-[15px] flex flex-col relative h-full rounded-l-[25px]">
              <div data-lenis-prevent="true" className="flex flex-col relative h-full overflow-y-auto scroll-smooth custom-scrollbar pr-[10px]">
                {MENU_ITEMS.map((item) => {
                  const isActive = activeCategory === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveCategory(item.id)}
                      className={`flex justify-between items-center px-[20px] py-[24px] mb-[10px] mr-[10px] rounded-[10px] text-[18px] font-bold tracking-wide transition-all duration-200 cursor-pointer relative group ${isActive
                        ? 'bg-white/20 text-white'
                        : 'text-white hover:bg-white/10'
                        }`}
                      style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                    >
                      <div className="flex items-center gap-[20px]">
                        <div className="w-[24px] h-[24px] flex justify-center items-center opacity-90 text-white">
                          {item.iconNode ? item.iconNode : <i className={`${item.icon} text-[20px]`} />}
                        </div>
                        <span>{item.label}</span>
                      </div>
                      {isActive && (
                        <i className="fas fa-arrow-right text-white text-[18px] opacity-90" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Content Panel */}
            <div className="w-1/2 bg-[#E8E8E8] p-[30px] flex flex-col justify-start rounded-r-[25px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-[20px] text-left"
                >
                  {GRID_TECH_DATA[activeCategory as keyof typeof GRID_TECH_DATA]?.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-[32px] bg-[#f8f9fa] px-[20px] py-[16px] rounded-[10px] shadow-sm hover:shadow-md transition-all min-h-[65px]"
                    >
                      <div className="w-[65px] h-[35px] flex items-center justify-center shrink-0">
                        <img src={tech.img} alt={tech.name} className="w-[65px] max-h-[35px] object-contain" loading="lazy" />
                      </div>
                      <span
                        className="text-[14px] md:text-[16px] font-bold text-[#111111] tracking-wider uppercase leading-[20px]"
                        style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                      >
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
              const isOpen = mobileActiveCategory === item.id;
              return (
                <div key={item.id} className="border border-slate-100 rounded-xl overflow-hidden bg-[#f8f9fc]">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex justify-between items-center px-4 py-4 bg-white text-[15px] font-bold tracking-wide text-slate-800 cursor-pointer"
                    style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-[20px] h-[20px] flex items-center justify-center text-[#f27820]">
                        {item.iconNode ? item.iconNode : <i className={`${item.icon} text-[18px]`} />}
                      </div>
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
                          <span
                            className="text-[14px] font-bold text-slate-800"
                            style={{ fontFamily: 'GTWalsheimPro-Bold' }}
                          >
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
      </div>
    </section>
  );
}
