'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';

export default function Blog() {
  return (
    <section className="relative py-24 bg-[#f8f9fc] text-slate-900 overflow-hidden select-none border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col z-10 relative">
        
        {/* Row 1: Index --- Heading */}
        <div className="flex items-center mb-[80px] lg:mb-[100px] w-full justify-between">
          <div className="flex items-center flex-1">
            {/* Hanging Prefix Column */}
            <div className="w-[120px] lg:w-[160px] flex items-center shrink-0">
              <span className="font-sans font-black text-[20px] lg:text-[24px] leading-none tracking-tight text-[#F58331]">07.</span>
              <div className="flex-grow h-[1px] bg-[#111111]/30 mx-[15px] mr-[15px]" />
            </div>
            
            {/* Content Column Start */}
            <div className="flex items-baseline">
              <h2 className="font-bold text-[20px] lg:text-[24px] leading-none font-sans capitalize tracking-tight text-black">
                Blog
              </h2>
              <div className="w-[10px] h-[10px] lg:w-[12px] lg:h-[12px] bg-black rounded-full ml-[6px]" />
            </div>
          </div>
          
          {/* Explore Button */}
          <div className="hidden md:flex items-center gap-[24px] shrink-0">
            <div className="w-[60px] lg:w-[100px] h-[1px] bg-[#1A1A1A]/40" />
            <a href="https://blog.deesigndot.com/" className="bg-[#F58331] text-[#1A1A1A] px-[14px] py-[6px] rounded-sm text-[10px] font-bold font-sans tracking-[2px] uppercase transition-colors">
              EXPLORE
            </a>
          </div>
        </div>

        {/* Indented Content Block */}
        <div className="w-full pl-0 md:pl-[120px] lg:pl-[160px]">

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
      </div>
    </section>
  );
}
