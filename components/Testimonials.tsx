'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading & Subheading */}
        <div className="flex items-center flex-wrap md:flex-nowrap text-left mb-10 w-full">
          <p className="font-sans font-bold text-[24px] leading-[30px] text-[#f27820]">05.</p>
          <div className="w-[130px] h-[2px] bg-[#727272] mx-[15px] shrink-0" />
          <h2 className="text-[24px] leading-[30px] font-bold font-sans text-[#111111] tracking-[1px] flex items-center flex-wrap capitalize">
            What Are Client Says<span className="w-[8px] h-[8px] rounded-full bg-black inline-block ml-[2px] shrink-0" />
          </h2>
          <div className="hidden md:flex flex-1 items-center gap-[15px] justify-end">
            <div className="w-[96px] h-[2px] bg-[#727272]" />
            <a
              href="https://dd.mocup.in/testimonial"
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
    </section>
  );
}
