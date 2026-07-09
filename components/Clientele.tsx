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
        <div className="flex items-center mb-[80px] lg:mb-[100px] w-full justify-between">
          <div className="flex items-center flex-1">
            {/* Hanging Prefix Column */}
            <div className="w-[120px] lg:w-[160px] flex items-center shrink-0">
              <span className="font-sans font-black text-[20px] lg:text-[24px] leading-none tracking-tight text-[#F58331]">06.</span>
              <div className="flex-grow h-[1px] bg-[#111111]/30 mx-[15px] mr-[15px]" />
            </div>
            
            {/* Content Column Start */}
            <div className="flex items-baseline">
              <h2 className="font-bold text-[20px] lg:text-[24px] leading-none font-sans capitalize tracking-tight text-black">
                Clientele
              </h2>
              <div className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] bg-black rounded-full ml-[6px]" />
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 text-left">
            <h2 className="text-[24px] leading-[30px] font-bold font-sans text-black mb-[20px]">
              Inspired design, bold solutions & bottom line results
            </h2>
          </div>

          <div className="lg:col-span-7 text-left">
            <p className="text-[16px] leading-[1.5] font-sans font-light text-black max-w-2xl">
              We turn information into experiences people care about. Combining <strong className="text-black font-bold">Strategic Thinking and Compelling Design</strong> to deliver bottom line results for companies globally.
            </p>
          </div>
        </div>

        {/* Infinitely scrolling logos lists */}
        <div className="space-y-6 pt-6 overflow-hidden relative">
          {/* Faders overlay gradient left and right */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Row 1 Marquee (slides left) */}
          <div className="flex w-full overflow-hidden py-2">
            <div className="animate-marquee flex gap-8 items-center">
              {row1Doubled.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="w-32 sm:w-40 h-16 sm:h-20 bg-slate-50 border border-slate-100 flex items-center justify-center p-4 rounded-xl shadow-sm hover:scale-105 hover:bg-white transition-all duration-300 group shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 Marquee (slides right / reverse animation) */}
          <div className="flex w-full overflow-hidden py-2">
            <div className="animate-marquee flex gap-8 items-center [animation-direction:reverse]">
              {row2Doubled.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="w-32 sm:w-40 h-16 sm:h-20 bg-slate-50 border border-slate-100 flex items-center justify-center p-4 rounded-xl shadow-sm hover:scale-105 hover:bg-white transition-all duration-300 group shrink-0"
                >
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
