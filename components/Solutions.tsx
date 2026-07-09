'use client';

import { motion } from 'framer-motion';
import { Send, ArrowRight } from 'lucide-react';
import { INDUSTRY_ITEMS } from '@/constants';

const ICON_MAP: Record<string, string> = {
  robot: 'fas fa-robot',
  cogs: 'fas fa-cogs',
  brain: 'fas fa-brain',
  eye: 'fas fa-eye',
  cloud: 'fas fa-cloud',
  language: 'fas fa-language',
  chart: 'fas fa-chart-line',
};

export default function Solutions() {
  return (
    <section className="relative py-24 bg-[#1A1A1A] text-white select-none">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column - Pinned/Sticky (Heading + Card) */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 self-start">
            
            {/* Row 1: Heading with Hanging Indent */}
            <div className="flex items-center mb-[60px] lg:mb-[80px] w-full whitespace-nowrap">
              {/* Hanging Prefix */}
              <div className="w-[80px] md:w-[120px] lg:w-[160px] flex items-center shrink-0">
                <span className="font-sans font-black text-[20px] lg:text-[24px] leading-none tracking-tight text-[#f58331]">02.</span>
                <div className="flex-grow h-[1px] bg-white/40 ml-[15px] mr-[15px]" />
              </div>
              {/* Content */}
              <div className="flex items-baseline">
                <h2 className="font-bold text-[20px] lg:text-[24px] leading-none font-sans capitalize tracking-tight text-white">
                  We Build Smarter, Faster Solutions
                </h2>
                <div className="w-[8px] h-[8px] lg:w-[10px] lg:h-[10px] bg-white rounded-full ml-[6px]" />
              </div>
            </div>

            {/* Left Card (Indented) */}
            <div className="w-full pl-0 md:pl-[120px] lg:pl-[160px]">
              <div className="bg-[#18181c] border border-white/5 p-[40px] rounded-[16px] max-w-md shadow-2xl flex flex-col justify-between space-y-10">
                <div className="space-y-8">
                  <div className="text-white flex items-center justify-start shrink-0">
                    <i className="fas fa-paper-plane text-[32px]" />
                  </div>
                  <div>
                    <h5 className="text-[28px] md:text-[32px] leading-[1.2] font-bold font-sans text-white mb-4">
                      Fuel Your Digital-First Idea
                    </h5>
                    <p className="text-white text-[16px] leading-[24px] font-sans font-normal">
                      With 1600+ Transformation Experts
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center bg-[#f58331] hover:bg-white text-white hover:text-black px-8 py-3.5 rounded-full text-[14px] font-bold font-sans tracking-[1px] transition-colors cursor-pointer uppercase"
                  >
                    Innovate With Us
                  </a>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Column - Scrollable list */}
          <div className="lg:col-span-6 space-y-1 text-left mt-12 lg:mt-0">
            {INDUSTRY_ITEMS.map((item, index) => {
              const iconClass = ICON_MAP[item.icon] || 'fas fa-cogs';
              return (
                <div
                  key={item.title}
                  className="group relative border-b border-white/10 last:border-b-0 py-6 transition-all duration-300 cursor-pointer"
                >
                  {/* Hover background highlight effect */}
                  <div className="absolute inset-0 bg-[#252525] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-4 -my-1 -z-10" />

                  <div className="flex gap-4 items-center px-2">
                    {/* Left Icon */}
                    <div className="text-[var(--accent)] shrink-0 flex items-center justify-center w-8 h-8">
                      <i className={`${iconClass} text-white text-[24px] transition-colors duration-300`} />
                    </div>

                    {/* Middle Info */}
                    <div className="flex-1 space-y-2 pr-4 ml-4">
                      <h5 className="text-[22px] leading-[30px] font-bold font-sans text-white transition-colors duration-300">
                        {item.title}
                      </h5>
                      <p className="text-slate-400 text-[16px] leading-[24px] font-sans font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Right Arrow */}
                    <div className="shrink-0 text-slate-500 group-hover:text-white transition-colors duration-300">
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
