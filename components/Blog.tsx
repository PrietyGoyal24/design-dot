'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';

export default function Blog() {
  return (
    <section className="relative py-24 bg-[#f8f9fc] text-slate-900 overflow-hidden select-none border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="flex items-center flex-wrap md:flex-nowrap text-left mb-10 w-full">
          <p className="font-sans font-bold text-[24px] leading-[30px] text-[#f27820]">07.</p>
          <div className="w-[130px] h-[2px] bg-[#727272] mx-[15px] shrink-0" />
          <h2 className="text-[24px] leading-[30px] font-bold font-sans text-[#111111] tracking-[1px] flex items-center flex-wrap capitalize">
            Blog<span className="w-[8px] h-[8px] rounded-full bg-black inline-block ml-[2px] shrink-0" />
          </h2>
          <div className="hidden md:flex flex-1 items-center gap-[15px] justify-end">
            <div className="w-[96px] h-[2px] bg-[#727272]" />
            <a
              href="https://blog.deesigndot.com/"
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
              Ideas. Innovation. Influence.
            </h2>
          </div>

          <div className="lg:col-span-7 text-left">
            <p className="text-[16px] leading-[1.5] font-sans font-light text-black max-w-2xl">
              A redefinition of the global. Stay updated with DesignDot insights, branding tips, ecommerce engineering trends, and software audits.
            </p>
          </div>
        </div>

        {/* Blog Posts Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => {
            const [day, ...restDate] = post.date.split(' ');
            const monthYear = restDate.join(' ');
            return (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[20px] shadow-md bg-white border border-slate-100 flex flex-col justify-between text-left min-h-[420px] hover:shadow-xl transition-shadow"
              >
                {/* Wrap layout */}
                <a href={post.href} target="_blank" className="flex flex-col h-full">
                  {/* Image wrapper with Zoom on hover */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />

                    {/* Floating Date Info block */}
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-sm text-white p-3 rounded-xl flex flex-col items-center justify-center text-center shadow-lg min-w-[70px]">
                      <span className="text-lg font-bold font-display leading-none text-[var(--accent)]">{day}</span>
                      <span className="text-[8px] tracking-wider uppercase font-semibold text-slate-300 mt-1">{monthYear}</span>
                    </div>

                    {/* Translucent overlay */}
                    <div className="absolute inset-0 bg-[#2e2e2e]/30 group-hover:bg-[#2e2e2e]/5 transition-colors duration-300" />
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h3 className="text-[20px] leading-[26px] font-bold font-sans text-slate-900 group-hover:text-[#f27820] transition-colors line-clamp-3">
                      {post.title}
                    </h3>

                    {/* Read More link arrow */}
                    <div className="flex justify-between items-center pt-6 mt-auto border-t border-slate-50">
                      <span className="text-[10px] font-bold font-display tracking-widest text-[#f27820]">
                        READ ARTICLE
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#f27820] group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
