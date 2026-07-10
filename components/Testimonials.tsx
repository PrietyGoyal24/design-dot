'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col z-10 relative">
        
        {/* Row 1: Index --- Heading */}
        <div className="flex items-center mb-[40px] lg:mb-[60px] w-full justify-between">
          <div className="flex items-center flex-1">
            {/* Hanging Prefix Column */}
            <div className="w-[120px] lg:w-[160px] flex items-center shrink-0">
              <span className="text-[24px] lg:text-[28px] font-bold leading-none tracking-tight text-[#F58331]" style={{ fontFamily: "'SocialGothic', sans-serif" }}>05.</span>
              <div className="flex-grow h-[1px] bg-[#111111]/30 mx-[15px] mr-[15px]" />
            </div>
            
            {/* Content Column Start */}
            <div className="flex items-baseline">
              <h2 className="font-bold text-[20px] lg:text-[24px] leading-none capitalize tracking-tight text-black" style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}>
                What Are Client Says<span className="inline-block w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] bg-black rounded-full ml-[4px]"></span>
              </h2>
            </div>
          </div>
          
          {/* Explore Button */}
          <div className="hidden md:flex items-center gap-[24px] shrink-0">
            <div className="w-[60px] lg:w-[100px] h-[1px] bg-[#1A1A1A]/40" />
            <a href="https://dd.mocup.in/testimonial" className="bg-[#F58331] text-[#1A1A1A] px-[14px] py-[6px] rounded-sm text-[10px] font-bold font-sans tracking-[2px] uppercase transition-colors">
              EXPLORE
            </a>
          </div>
        </div>

        {/* Indented Content Block */}
        <div className="w-full pl-0 md:pl-[120px] lg:pl-[160px]">

        <div className="flex flex-col text-left mb-[60px] max-w-lg">
          <p className="text-[18px] lg:text-[22px] leading-[1.6] text-black" style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}>
            <strong className="font-black" style={{ fontFamily: "'GT-Walsheim-Pro-Black', sans-serif" }}>
              Over 1500+ Happy Clients, we turn Ideas into reality for a living
            </strong>
            {' '}We are in the business of digital transformation. We help our clients see what they cannot.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={testi.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-transparent flex flex-col justify-start text-left h-full"
            >
              {/* Header profile info */}
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 overflow-hidden shrink-0">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-[13px] font-black text-black uppercase" style={{ fontFamily: "'GT-Walsheim-Pro-Black', sans-serif" }}>
                    {testi.name}
                  </h6>
                  <span className="text-[11px] text-black uppercase tracking-wide leading-snug mt-[2px]" style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}>
                    {testi.role}
                  </span>

                  {/* Rating Stars */}
                  <div className="flex gap-1 mt-1">
                    {[...Array(testi.stars)].map((_, i) => (
                      <Star key={i} size={12} className="fill-[#f27820] text-[#f27820]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review paragraph */}
              <p className="text-[14px] lg:text-[16px] leading-[1.7] font-normal text-black text-justify" style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}>
                {testi.text}
              </p>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
