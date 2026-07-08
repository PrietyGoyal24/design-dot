'use client';

import { motion } from 'framer-motion';
import { Send, Cpu, Settings, BrainCircuit, Eye, Cloud, Database, BarChart3, ArrowUpRight } from 'lucide-react';
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
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-xs font-display font-semibold tracking-widest text-[var(--accent)]">
                <span>02.</span>
                <div className="w-12 h-[1px] bg-[var(--accent)]/40" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-white leading-tight uppercase">
                We Build Smarter, Faster Solutions<span className="text-[var(--accent)]">.</span>
              </h2>
            </div>

            {/* Left Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-slate-700/40 p-8 rounded-[20px] max-w-md shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 bg-[var(--accent)] text-[#131126] rounded-xl flex items-center justify-center">
                  <Send size={20} className="-rotate-45" />
                </div>
                <div>
                  <h5 className="text-xl font-bold font-display text-white mb-2">
                    Fuel Your Digital-First Idea
                  </h5>
                  <p className="text-slate-400 text-xs tracking-wider uppercase font-medium">
                    With 1600+ Transformation Experts
                  </p>
                </div>
              </div>
              
              <div className="pt-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center bg-[var(--accent)] hover:bg-white text-[#131126] hover:text-[#131126] px-6 py-3 rounded-full text-xs font-bold font-display tracking-widest transition-colors cursor-pointer"
                >
                  Innovate With Us
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Scrollable list */}
          <div className="lg:col-span-6 space-y-6 text-left lg:pt-16">
            {INDUSTRY_ITEMS.map((item, index) => {
              const IconComponent = ICON_MAP[item.icon] || Cpu;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white/5 border border-slate-800 hover:border-[var(--accent)] p-6 rounded-[20px] transition-all duration-300 hover:bg-white/10"
                >
                  <div className="flex gap-4 items-center">
                    {/* Left Icon */}
                    <div className="w-12 h-12 bg-white/5 text-[var(--accent)] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[var(--accent)] group-hover:text-[#131126] transition-colors duration-300">
                      <IconComponent size={22} />
                    </div>

                    {/* Middle Info */}
                    <div className="flex-1 space-y-1 pr-4">
                      <h5 className="text-base font-bold font-display text-white group-hover:text-[var(--accent)] transition-colors">
                        {item.title}
                      </h5>
                      <p className="text-slate-400 text-xs leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>

                    {/* Right Arrow */}
                    <div className="shrink-0 text-slate-500 group-hover:text-[var(--accent)] transition-colors duration-300">
                      <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
