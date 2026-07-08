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
        <div className="flex items-center w-full whitespace-nowrap mb-10">
          <span className="text-[15px] font-extrabold tracking-widest text-[#f27820] mr-6">
            06.
          </span>
          <div className="w-[80px] h-[1.5px] bg-[#f27820] mr-6" />
          <span className="text-[22px] font-extrabold tracking-wide text-slate-900">
            Clientele.
          </span>
          <div className="flex-1" />
          <div className="w-[60px] h-[1px] bg-slate-900 mr-6 hidden sm:block" />
          <a
            href="https://dd.mocup.in/clientele"
            target="_blank"
            className="bg-[#f27820] text-slate-950 hover:bg-black hover:text-white transition-colors px-[14px] py-[6px] text-[11px] font-bold tracking-widest uppercase"
          >
            EXPLORE
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 text-left">

            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
              Inspired design, bold solutions & bottom line results<span className="text-[#f27820]">.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-10 text-left">
            <p className="text-slate-500 font-sans text-sm md:text-base leading-relaxed font-medium max-w-2xl">
              We turn information into experiences people care about. Combining <strong className="text-slate-900">Strategic Thinking and Compelling Design</strong> to deliver bottom line results for companies globally.
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
