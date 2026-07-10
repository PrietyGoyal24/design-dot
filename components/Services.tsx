'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SERVICE_CARDS } from '@/constants';

const ICON_MAP: Record<string, string> = {
  mobile: "fas fa-mobile-alt",
  code: "fas fa-code",
  lightbulb: "far fa-lightbulb",
  compass: "fas fa-drafting-compass",
  user: "fas fa-user-tie",
  sync: "fas fa-sync-alt",
  cloud: "fas fa-cloud",
};

export default function Services() {
  return (
    <section className="relative pt-[50px] md:pt-[70px] lg:pt-[85px] pb-[96px] bg-[#ffffff] text-slate-900 overflow-hidden select-none">
      <div className="w-full max-w-[1920px] mx-auto relative z-10 flex flex-col">

        {/* Row 1: Heading with Hanging Indent */}
        <div className="flex items-center pb-[50px] lg:pl-[65px] px-6 md:px-12 lg:px-0 w-full">
          {/* Hanging Prefix Column */}
          <div className="w-[120px] lg:w-[140px] flex items-center shrink-0">
            <span className="font-sans font-bold text-[20px] lg:text-[24px] leading-none tracking-tight text-[#1A1A1A]">01.</span>
            <div className="flex-grow h-[1px] bg-[#1A1A1A]/30 mx-[16px] lg:mx-[20px]" />
          </div>

          {/* Content Column Start */}
          <div className="flex items-baseline">
            <h2 className="font-bold text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] leading-none font-sans capitalize tracking-tight text-[#1A1A1A] flex items-baseline">
              Navigate The Digital Frontier With Our Engineering Excellence
            </h2>
            <div className="w-[8px] h-[8px] lg:w-[10px] lg:h-[10px] bg-[#1A1A1A] rounded-full ml-[8px]" />
          </div>
        </div>

        {/* Card Grid */}
        <div className="good-container w-full px-6 md:px-12 lg:px-0 lg:pl-[256px] lg:pr-[78px]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {SERVICE_CARDS.map((card, index) => {
              const iconClass = ICON_MAP[card.icon] || "fas fa-code";
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#363266] rounded-[24px] p-[30px] min-h-[500px] flex flex-col justify-start text-left hover:-translate-y-[5px] transition-transform duration-300 group shadow-xl"
                >
                  {/* Icon wrapper - Exact FontAwesome icon */}
                  <div className="text-white mb-[24px] opacity-90 group-hover:opacity-100 transition-opacity">
                    <i className={`${iconClass} text-[30px] font-normal`} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-[24px] font-sans font-bold text-white leading-[32.5px] mb-[28px]">
                      {card.title}
                    </h3>
                    <p className="text-white/90 text-[14px] leading-[26px] font-normal font-sans flex-grow">
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
              className="relative rounded-[24px] p-8 min-h-[500px] flex flex-col justify-center items-center overflow-hidden bg-[#1f75ff] hover:-translate-y-[5px] hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 group cursor-pointer"
            >
              {/* Authentic Circuit Board Pattern Overlay */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='304' height='304' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12h-2v-10h-12v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v2h-50v-98h12.1zm25.8-12a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V162h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-81a5 5 0 1 1 0 2H259.9a5 5 0 1 1 0-2H284zm-64-76.1a5 5 0 1 1 0-2H240v58h-2v-56h-18.1zM146 226v24.1a5 5 0 1 1-2 0V224h-18.1a5 5 0 1 1 0-2H146v4z' fill='%23ffffff' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                  backgroundSize: '152px 152px',
                  backgroundPosition: 'center center'
                }}
              />

              <div className="z-10 w-full flex justify-center">
                <a
                  href="https://designdot.quicsy.com/services"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#111] px-8 py-4 rounded-[40px] text-[15px] font-bold font-sans tracking-wide transition-colors"
                >
                  <span className="pt-[2px]">OUR SERVICES</span>
                  <ArrowRight size={18} strokeWidth={3} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
