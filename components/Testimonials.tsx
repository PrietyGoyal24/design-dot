'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/constants';

export default function Testimonials() {
  return (
    <section className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading & Subheading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-4 text-xs font-display font-semibold tracking-widest text-[#f27820] shrink-0">
              <span>05.</span>
              <div className="w-12 h-[1px] bg-[#f27820]/40" />
            </div>
            
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#f27820]">
                what our clients say
              </span>
              <a
                href="https://dd.mocup.in/testimonial"
                target="_blank"
                className="inline-flex items-center gap-2 text-[10px] font-display font-bold tracking-widest text-slate-900 hover:text-[#f27820] transition-colors py-0.5 border-b border-slate-950 hover:border-[#f27820]"
              >
                <span>EXPLORE</span>
              </a>
            </div>

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
