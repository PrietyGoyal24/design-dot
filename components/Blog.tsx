'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';

export default function Blog() {
  return (
    <section className="relative py-24 bg-[#f8f9fc] text-slate-900 overflow-hidden select-none border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {/* Section Heading */}
        <div className="flex items-center w-full whitespace-nowrap mb-10">
          <span className="text-[15px] font-extrabold tracking-widest text-[#f27820] mr-6">
            07.
          </span>
          <div className="w-[80px] h-[1.5px] bg-[#f27820] mr-6" />
          <span className="text-[22px] font-extrabold tracking-wide text-slate-900">
            Blog .
          </span>
          <div className="flex-1" />
          <div className="w-[60px] h-[1px] bg-slate-900 mr-6 hidden sm:block" />
          <a
            href="https://blog.deesigndot.com/"
            target="_blank"
            className="bg-[#f27820] text-slate-950 hover:bg-black hover:text-white transition-colors px-[14px] py-[6px] text-[11px] font-bold tracking-widest uppercase"
          >
            EXPLORE
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 text-left">

            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
              Ideas. Innovation. Influence.<span className="text-[#f27820]">.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-10 text-left">
            <p className="text-slate-500 font-sans text-sm md:text-base leading-relaxed font-medium max-w-2xl">
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
                    <h3 className="text-base font-extrabold font-display text-slate-900 group-hover:text-[#f27820] transition-colors leading-snug line-clamp-3">
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
