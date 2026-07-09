'use client';

import { motion } from 'framer-motion';
import { Send, Cpu, Settings, BrainCircuit, Eye, Cloud, Database, BarChart3, ArrowRight } from 'lucide-react';
import { INDUSTRY_ITEMS } from '@/constants';

const ICON_MAP: Record<string, any> = {
  robot: Cpu,
  cogs: Settings,
  brain: BrainCircuit,
  eye: Eye,
  cloud: Cloud,
  language: Database,
  chart: BarChart3,
};

export default function Solutions() {
  return (
    <section className="relative py-24 bg-[#131126] text-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column - Pinned/Sticky */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 self-start space-y-8 text-left">
            {/* Heading */}
            <div className="flex items-center flex-wrap md:flex-nowrap select-none mb-[60px] text-left">
              <p className="font-sans font-bold text-[24px] leading-[30px] text-[#f27820]">02.</p>
              <div className="w-[130px] h-[2px] bg-[#727272] mx-[15px] shrink-0" />
              <h2 className="text-[24px] leading-[30px] font-bold font-sans text-white tracking-[1px] flex items-center flex-wrap capitalize">
                We Build Smarter, Faster Solutions<span className="w-[8px] h-[8px] rounded-full bg-white inline-block ml-[2px] shrink-0" />
              </h2>
            </div>

            {/* Left Card */}
            <div className="bg-[#18181c] border border-white/5 p-[30px] rounded-[16px] max-w-md shadow-2xl flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                <div className="text-white flex items-center justify-start shrink-0">
                  <Send size={28} className="-rotate-45" />
                </div>
                <div>
                  <h5 className="text-[24px] leading-[30px] font-bold font-sans text-white mb-1">
                    Fuel Your Digital-First Idea
                  </h5>
                  <p className="text-[#a1a1aa] text-[16px] leading-[24px] tracking-wider uppercase font-sans font-light">
                    With 1600+ Transformation Experts
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-[#f58331] hover:bg-white text-white hover:text-black px-6 py-2.5 rounded-full text-[13px] font-bold font-sans tracking-widest transition-colors cursor-pointer uppercase"
                >
                  Innovate With Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Scrollable list */}
          <div className="lg:col-span-6 space-y-1 text-left lg:pt-16">
            {INDUSTRY_ITEMS.map((item, index) => {
              const IconComponent = ICON_MAP[item.icon] || Cpu;
              return (
                <div
                  key={item.title}
                  className="group relative border-b border-slate-800/80 last:border-b-0 py-5 transition-all duration-300 cursor-pointer"
                >
                  {/* Hover background highlight effect */}
                  <div className="absolute inset-0 bg-[#1b1a32] border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -mx-4 -my-1 -z-10 shadow-lg" />

                  <div className="flex gap-4 items-center px-2">
                    {/* Left Icon */}
                    <div className="text-[var(--accent)] shrink-0 flex items-center justify-center w-8 h-8">
                      <IconComponent size={20} className="text-white group-hover:text-[#f58331] transition-colors duration-300" />
                    </div>

                    {/* Middle Info */}
                    <div className="flex-1 space-y-1 pr-4">
                      <h5 className="text-[24px] leading-[30px] font-bold font-sans text-white group-hover:text-[#f58331] transition-colors duration-300 uppercase tracking-wider">
                        {item.title}
                      </h5>
                      <p className="text-slate-400 text-[16px] leading-[24px] font-sans font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Right Arrow */}
                    <div className="shrink-0 text-slate-500 group-hover:text-[#f58331] transition-colors duration-300">
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
