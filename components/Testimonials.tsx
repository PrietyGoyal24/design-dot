'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col z-10 relative">
        
        {/* Row 1: Index --- Heading */}
        <div className="flex items-center mb-[80px] lg:mb-[100px] w-full justify-between">
          <div className="flex items-center flex-1">
            {/* Hanging Prefix Column */}
            <div className="w-[120px] lg:w-[160px] flex items-center shrink-0">
              <span className="font-sans font-black text-[20px] lg:text-[24px] leading-none tracking-tight text-[#F58331]">05.</span>
              <div className="flex-grow h-[1px] bg-[#111111]/30 mx-[15px] mr-[15px]" />
            </div>
            
            {/* Content Column Start */}
            <div className="flex items-baseline">
              <h2 className="font-bold text-[20px] lg:text-[24px] leading-none font-sans capitalize tracking-tight text-black">
                What Are Client Says
              </h2>
              <div className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] bg-black rounded-full ml-[6px]" />
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 text-left">
            <h2 className="text-[24px] leading-[30px] font-bold font-sans text-black mb-[20px]">
              Over 1500+ Happy Clients, we turn Ideas into reality for a living
            </h2>
          </div>

          <div className="lg:col-span-7 text-left">
            <p className="text-[16px] leading-[1.5] font-sans font-light text-black max-w-2xl">
              We are in the business of digital transformation. We help our clients see what they cannot, unlocking new opportunities and engineering beautiful products.
            </p>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TESTIMONIALS.map((testi, index) => (
            <motion.div
              key={testi.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#f8f9fc] border border-slate-100 p-6 rounded-[20px] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-left h-full"
            >
              {/* Header profile info */}
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-[14px] font-bold font-sans text-black uppercase">
                    {testi.name}
                  </h6>
                  <span className="text-[12px] text-slate-500 font-sans font-light leading-snug">
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
              <p className="text-[14px] leading-[22px] font-sans font-light text-[#555] flex-1">
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
