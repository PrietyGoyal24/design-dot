'use client';

import { motion } from 'framer-motion';

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-[#ffffff] text-[#1A1A1A] select-none w-full overflow-x-hidden pt-[100px] pb-[100px]">

      {/* Desktop Absolute White Box (anchored to right edge, precise aspect ratio) */}
      <div className="absolute right-0 top-[40px] lg:top-[60px] h-[calc(100%-80px)] lg:h-[calc(100%-120px)] aspect-[645/778] flex items-center justify-center overflow-hidden hidden md:flex z-20">
        <img 
          src="https://designdot.co.in/assets/web/images/d-logo-2.jpg" 
          alt="DesignDot Logo" 
          className="w-full h-full object-cover" 
        />
      </div>

      {/* Main Content Container (Standard Centered Width for text alignment) */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 relative z-10 flex items-center min-h-[450px]">

        {/* Left Column Content - Pixel-perfect alignment and spacing */}
        <div className="w-full md:w-[60%] flex flex-col justify-center text-left py-16 md:py-0 relative">

          {/* Row 1: 00. --- Why Us. */}
          <div className="flex items-center mb-[40px] lg:mb-[60px]">
            {/* Hanging Prefix Column */}
            <div className="w-[120px] lg:w-[140px] flex items-center shrink-0">
              <span className="font-sans font-bold text-[20px] lg:text-[24px] tracking-tight text-[#1A1A1A] leading-none">00.</span>
              <div className="flex-grow h-[1px] bg-[#1A1A1A]/30 mx-[16px] lg:mx-[20px]" />
            </div>

            {/* Content Column Start */}
            <div className="flex items-baseline">
              <h3 className="font-sans font-bold text-[20px] lg:text-[24px] tracking-wide text-[#1A1A1A] capitalize leading-none">
                Why Us
              </h3>
              <div className="w-[8px] h-[8px] lg:w-[10px] lg:h-[10px] bg-[#1A1A1A] rounded-full ml-[6px]" />
            </div>
          </div>

          {/* Row 2: Heading */}
          <div className="pl-[120px] lg:pl-[140px] mb-[24px] flex items-baseline">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] font-bold tracking-wide font-sans text-[#1A1A1A] leading-none uppercase flex items-baseline whitespace-nowrap">
              A CREATIVE DIGITAL AGENCY
            </h2>
            <div className="w-[10px] h-[10px] lg:w-[14px] lg:h-[14px] bg-[#1A1A1A] rounded-full ml-[8px]" />
          </div>

          {/* Row 3: Line Below Heading */}
          <div className="pl-[120px] lg:pl-[140px] mb-[40px] lg:mb-[50px]">
            <div className="w-[140px] lg:w-[180px] h-[1px] bg-[#1A1A1A]/40" />
          </div>

          {/* Row 4: Description Paragraph */}
          <div className="pl-[120px] lg:pl-[140px] mb-[60px] lg:mb-[80px] pr-4 lg:pr-10">
            <p className="text-[#1A1A1A] text-[15px] lg:text-[17px] leading-[30px] lg:leading-[34px] w-full max-w-[500px] lg:max-w-[540px] font-medium tracking-wide">
              DesignDot is a Global creative agency. We <strong className="font-bold text-[#1A1A1A]">Design & Build Brands, UI / UX, Interface & Application Development, Campaigns & Digital Projects, Signage & Advertising, Visualisation & Interior, Exhibition & Event</strong> {'{'}360 Services, support and solutions{'}'} provider for businesses provider for businesses Small, Medium, Large Enterprises across the world. We are at our best in the following areas...
            </p>
          </div>

          {/* Row 5: EXPLORE button block */}
          <div className="pl-[120px] lg:pl-[140px] flex items-center">
            <div className="w-[100px] lg:w-[140px] h-[1px] bg-[#1A1A1A]/30 mr-[20px] lg:mr-[24px]" />
            <a
              href="https://dd.mocup.in/about-us"
              className="bg-[#F58331] text-[#1A1A1A] px-[12px] py-[4px] lg:px-[16px] lg:py-[6px] rounded-sm text-[10px] lg:text-[11px] font-medium font-sans tracking-[2px] uppercase transition-opacity hover:opacity-90"
            >
              EXPLORE
            </a>
          </div>

        </div>
      </div>

      {/* Mobile-only Layout for Right Column Graphics */}
      <div className="w-full flex md:hidden flex-col items-center justify-center py-12 mt-10 relative z-10 px-6">
        <div className="w-full max-w-[320px] aspect-[645/778] flex items-center justify-center overflow-hidden">
          <img 
            src="https://designdot.co.in/assets/web/images/d-logo-2.jpg" 
            alt="DesignDot Logo" 
            className="w-full h-full object-cover" 
          />
        </div>
      </div>

    </section>
  );
}
