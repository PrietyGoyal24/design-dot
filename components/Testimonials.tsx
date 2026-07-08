'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading & Subheading */}
        <div className="flex items-center w-full whitespace-nowrap mb-10">
          <span className="text-[15px] font-extrabold tracking-widest text-[#f27820] mr-6">
            05.
          </span>
          <div className="w-[80px] h-[1.5px] bg-[#f27820] mr-6" />
          <span className="text-[22px] font-extrabold tracking-wide text-slate-900">
            What Are Client Says.
          </span>
          <div className="flex-1" />
          <div className="w-[60px] h-[1px] bg-slate-900 mr-6 hidden sm:block" />
          <a
            href="https://dd.mocup.in/testimonial"
            target="_blank"
            className="bg-[#f27820] text-slate-950 hover:bg-black hover:text-white transition-colors px-[14px] py-[6px] text-[11px] font-bold tracking-widest uppercase"
          >
            EXPLORE
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 text-left">

            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
              Over 1500+ Happy Clients, we turn Ideas into reality for a living<span className="text-[#f27820]">.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-10 text-left">
            <p className="text-slate-500 font-sans text-sm md:text-base leading-relaxed font-medium max-w-2xl">
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
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-200 shrink-0">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col">
                  <h6 className="text-xs font-bold text-slate-950 font-display uppercase tracking-wide">
                    {testi.name}
                  </h6>
                  <span className="text-[10px] text-slate-500 font-semibold line-clamp-1 leading-snug">
                    {testi.role}
                  </span>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(testi.stars)].map((_, i) => (
                      <Star key={i} size={10} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Review paragraph */}
              <p className="text-slate-600 text-xs leading-relaxed font-medium flex-1">
                “{testi.text}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
