'use client';

import { motion } from 'framer-motion';

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-[#ffffff] text-[#111111] overflow-hidden select-none w-full">
      {/* Right side orange column background block for desktop (Exactly 50%) */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 bg-[#f27820] hidden md:block" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[550px]">
        {/* Left Content Column */}
        <div className="flex flex-col justify-center py-16 md:py-24 px-8 md:pl-[60px] lg:pl-[120px] md:pr-[20px] lg:pr-[40px] text-left bg-white z-10">
          {/* Index and Section Name */}
          <div className="flex items-center flex-wrap md:flex-nowrap text-[#111111] mb-[60px] text-left">
            <p className="font-sans font-bold text-[24px] leading-[30px] text-[#f27820]">00.</p>
            <div className="w-[130px] h-[2px] bg-[#727272] mx-[15px] shrink-0" />
            <span className="font-bold text-[24px] leading-[30px] font-sans tracking-[1px] capitalize">Why Us.</span>
          </div>

          {/* Heading */}
          <h2 className="text-[25px] md:text-[28px] lg:text-[38px] font-black tracking-[-0.01em] font-sans text-[#111111] leading-[1.2] uppercase flex items-end gap-[6px] mb-8">
            A CREATIVE DIGITAL AGENCY<div className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] rounded-full bg-[#111111] mb-[6px] md:mb-[8px]" />
          </h2>

          {/* Separator line */}
          <div className="w-[120px] h-[1px] bg-[#111111] mb-10" />

          {/* Description Paragraph (Exact copy of the reference including the typo) */}
          <p className="text-[#111111] text-[14px] md:text-[16px] lg:text-[17px] leading-[1.8] font-medium w-full lg:w-[95%]">
            DesignDot is a Global creative agency. We <strong className="font-extrabold">Design & Build Brands, UI / UX, Interface & Application Development, Campaigns & Digital Projects, Signage & Advertising, Visualisation & Interior, Exhibition & Event</strong> {"{360 Services, support and solutions}"} provider for businesses provider for businesses Small, Medium, Large Enterprises across the world. We are at our best in the following areas...
          </p>

          {/* EXPLORE button block */}
          <div className="pt-8 flex items-center gap-6">
            <div className="w-[40px] h-[1px] bg-[#111111]" />
            <a
              href="https://dd.mocup.in/about-us"
              className="bg-[#f27820] text-[#111111] px-[12px] py-[6px] rounded-[10px] text-[12px] font-bold font-sans tracking-[1px] uppercase transition-colors"
            >
              EXPLORE
            </a>
          </div>
        </div>

        {/* Right Brand Image/Graphic Column */}
        <div className="bg-[#f27820] flex items-center justify-center py-16 md:py-0 z-10 min-h-[400px] md:min-h-0">
          <div className="w-[85%] max-w-[550px] aspect-square bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex items-center justify-center">
            {/* Recreated logo with guaranteed round dot and perfect sharpness */}
            <div className="relative flex items-center justify-center -translate-x-[15px] md:-translate-x-[20px]">
              <span className="text-[#111111] font-black leading-none tracking-tighter select-none text-[250px] md:text-[320px] lg:text-[400px]" style={{ fontFamily: 'Montserrat, "Plus Jakarta Sans", sans-serif' }}>
                d
              </span>
              <div className="w-[25px] h-[25px] md:w-[35px] md:h-[35px] lg:w-[45px] lg:h-[45px] bg-[#111111] rounded-full absolute bottom-[35px] right-[-35px] md:bottom-[45px] md:right-[-45px] lg:bottom-[55px] lg:right-[-55px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
