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
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="flex items-center flex-wrap md:flex-nowrap text-left mb-10 w-full">
          <p className="font-sans font-bold text-[24px] leading-[30px] text-[#f27820]">06.</p>
          <div className="w-[130px] h-[2px] bg-[#727272] mx-[15px] shrink-0" />
          <h2 className="text-[24px] leading-[30px] font-bold font-sans text-[#111111] tracking-[1px] flex items-center flex-wrap capitalize">
            Clientele<span className="w-[8px] h-[8px] rounded-full bg-black inline-block ml-[2px] shrink-0" />
          </h2>
          <div className="hidden md:flex flex-1 items-center gap-[15px] justify-end">
            <div className="w-[96px] h-[2px] bg-[#727272]" />
            <a
              href="https://dd.mocup.in/clientele"
              target="_blank"
              className="bg-[#f27820] text-[#111111] px-[12px] py-[6px] rounded-[10px] text-[12px] font-bold font-sans tracking-[1px] uppercase transition-colors"
            >
              EXPLORE
            </a>
          </div>
        </div>

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
    </section>
  );
}
