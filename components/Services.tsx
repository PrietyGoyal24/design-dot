'use client';

import { motion } from 'framer-motion';
import { Smartphone, Code2, Lightbulb, Compass, UserCheck, RefreshCw, Cloud, ArrowRight } from 'lucide-react';
import { SERVICE_CARDS } from '@/constants';

const ICON_MAP: Record<string, any> = {
  mobile: Smartphone,
  code: Code2,
  lightbulb: Lightbulb,
  compass: Compass,
  user: UserCheck,
  sync: RefreshCw,
  cloud: Cloud,
};

export default function Services() {
  return (
    <section className="relative py-24 bg-[#f8f9fc] text-slate-900 overflow-hidden select-none">
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
            <span>01.</span>
            <div className="w-12 h-[1px] bg-[#f27820]/40" />
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold tracking-tight font-display text-slate-900 uppercase">
            Navigate The Digital Frontier With Our Engineering Excellence<span className="text-[#f27820]">.</span>
          </h2>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICE_CARDS.map((card, index) => {
            const IconComponent = ICON_MAP[card.icon] || Code2;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#363266] rounded-[20px] p-8 min-h-[460px] flex flex-col justify-between text-left hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#363266]/20 transition-all duration-300 group"
              >
                {/* Icon wrapper */}
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-[#131126] transition-colors duration-300">
                  <IconComponent size={24} />
                </div>

                {/* Content */}
                <div className="space-y-4 mt-auto">
                  <h3 className="text-xl font-bold font-display text-white leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* 8th CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="relative rounded-[20px] p-8 min-h-[460px] flex flex-col justify-between text-left overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-700/20 transition-all duration-300 group cursor-pointer"
          >
            {/* Tech line/circuit pattern decoration */}
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-indigo-200 to-transparent" />
            <div className="absolute -right-16 -bottom-16 w-48 h-48 border border-white/10 rounded-full group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute -right-24 -bottom-24 w-64 h-64 border border-white/5 rounded-full group-hover:scale-125 transition-transform duration-500" />

            <div className="space-y-2 z-10">
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-200">
                Explore All
              </span>
              <h3 className="text-2xl font-extrabold font-display text-white leading-tight">
                Empowering businesses with custom apps.
              </h3>
            </div>

            <div className="z-10 mt-auto">
              <a
                href="https://designdot.quicsy.com/services"
                target="_blank"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-[#131126] px-6 py-3 rounded-full text-xs font-bold font-display tracking-widest transition-colors w-full sm:w-auto justify-center"
              >
                <span>OUR SERVICES</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
