'use client';

import { motion } from 'framer-motion';
import { CLIENTELE_LOGOS } from '@/constants';

export default function Clientele() {
  const [row1, row2] = CLIENTELE_LOGOS;

  // Double the rows for infinite scroll wrapping effect
  const row1Doubled = [...row1, ...row1];
  const row2Doubled = [...row2, ...row2];

  return (
    <section className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col z-10 relative">
        
        {/* Row 1: Index --- Heading */}
        <div className="flex items-center mb-[40px] lg:mb-[60px] w-full justify-between">
          <div className="flex items-center flex-1">
            {/* Hanging Prefix Column */}
            <div className="w-[120px] lg:w-[160px] flex items-center shrink-0">
              <span className="text-[24px] lg:text-[28px] font-bold leading-none tracking-tight text-[#F58331]" style={{ fontFamily: "'SocialGothic', sans-serif" }}>06.</span>
              <div className="flex-grow h-[1px] bg-[#111111]/30 mx-[15px] mr-[15px]" />
            </div>
            
            {/* Content Column Start */}
            <div className="flex items-baseline">
              <h2 className="font-bold text-[20px] lg:text-[24px] leading-none capitalize tracking-tight text-black" style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}>
                Clientele<span className="inline-block w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] bg-black rounded-full ml-[4px]"></span>
              </h2>
            </div>
          </div>
          
          {/* Explore Button */}
          <div className="hidden md:flex items-center gap-[24px] shrink-0">
            <div className="w-[60px] lg:w-[100px] h-[1px] bg-[#1A1A1A]/40" />
            <a href="https://dd.mocup.in/clientele" className="bg-[#F58331] text-[#1A1A1A] px-[14px] py-[6px] rounded-sm text-[10px] font-bold font-sans tracking-[2px] uppercase transition-colors">
              EXPLORE
            </a>
          </div>
        </div>

        {/* Indented Content Block */}
        <div className="w-full pl-0 md:pl-[120px] lg:pl-[160px]">

        <div className="flex flex-col text-left mb-[60px] lg:mb-[100px]">
          <p className="text-[16px] lg:text-[18px] leading-[1.8] text-black" style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}>
            <strong className="font-black" style={{ fontFamily: "'GT-Walsheim-Pro-Black', sans-serif" }}>
              Inspired design, bold solutions & bottom<br className="hidden sm:block" />
              line results
            </strong>
            {' '}We turn information into<br className="hidden sm:block" />
            experiences people care about{' '}
            <strong className="font-black" style={{ fontFamily: "'GT-Walsheim-Pro-Black', sans-serif" }}>
              Strategic<br className="hidden sm:block" />
              Thinking Compelling Design
            </strong>
          </p>
        </div>

        {/* Static Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 border-t border-l border-[#b3b3b3] border-dotted w-full">
          {CLIENTELE_LOGOS.flat().map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="border-r border-b border-[#b3b3b3] border-dotted flex items-center justify-center aspect-square transition-all duration-300"
            >
              <img
                src={logo.url}
                alt={logo.name}
                className="w-[85%] h-[85%] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
