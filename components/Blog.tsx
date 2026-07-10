'use client';

import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';

export default function Blog() {
  return (
    <section className="relative py-24 bg-white text-slate-900 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col z-10 relative">

        {/* Row 1: Index --- Heading */}
        <div className="flex items-center mb-[40px] lg:mb-[60px] w-full justify-between">
          <div className="flex items-center flex-1">
            {/* Hanging Prefix Column */}
            <div className="w-[120px] lg:w-[160px] flex items-center shrink-0">
              <span className="text-[24px] lg:text-[28px] font-bold leading-none tracking-tight text-[#F58331]" style={{ fontFamily: "'SocialGothic', sans-serif" }}>07.</span>
              <div className="flex-grow h-[1px] bg-[#111111]/30 mx-[15px] mr-[15px]" />
            </div>

            {/* Content Column Start */}
            <div className="flex items-baseline">
              <h2 className="font-bold text-[20px] lg:text-[24px] leading-none capitalize tracking-tight text-black" style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}>
                Blog<span className="inline-block w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] bg-black rounded-full ml-[4px]"></span>
              </h2>
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

          <div className="flex flex-col text-left mb-[30px] lg:mb-[40px]">
            <p className="text-[16px] lg:text-[18px] leading-[1.8] text-black" style={{ fontFamily: "'GT-Walsheim-Pro-Regular', sans-serif" }}>
              <strong className="tracking-wide font-bold" style={{ fontFamily: "'GT-Walsheim-Pro-Bold', sans-serif" }}>
                Ideas <span className="inline-block w-[6px] h-[6px] bg-black rounded-full mb-[1px]"></span> Innovation <span className="inline-block w-[6px] h-[6px] bg-black rounded-full mb-[1px]"></span> Influence <span className="inline-block w-[6px] h-[6px] bg-black rounded-full mb-[1px]"></span>
              </strong>
              <br className="hidden sm:block" />
              A redefinition of the global
            </p>
          </div>

          {/* Blog Posts Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] lg:gap-[40px]">
            {BLOG_POSTS.slice(0, 3).map((post, index) => {
              const [day, ...restDate] = post.date.split(' ');
              const monthYear = restDate.join(' ');
              return (
                <a
                  key={post.title}
                  href={post.href}
                  target="_blank"
                  className="group relative flex flex-col justify-between w-full aspect-[5/6] lg:aspect-[4/5] overflow-hidden cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    src={post.img}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110"
                    style={{ transition: 'all 0.8s ease-in-out' }}
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80 transition-colors duration-300" />

                  {/* Top Content (Date) */}
                  <div className="relative z-10 p-6 lg:p-8">
                    <div className="text-[32px] lg:text-[40px] leading-none text-white/80" style={{ fontFamily: "'GT-Walsheim-Pro-Regular', sans-serif" }}>
                      {day}
                    </div>
                    <div className="text-[12px] lg:text-[14px] text-white/60 tracking-wide mt-2" style={{ fontFamily: "'GT-Walsheim-Pro-Regular', sans-serif" }}>
                      {monthYear}
                    </div>
                  </div>

                  {/* Bottom Content (Title & Arrow) */}
                  <div className="relative z-10 p-6 lg:p-8 flex flex-col gap-4">
                    <h3 className="text-[18px] lg:text-[20px] leading-[1.4] text-white/90" style={{ fontFamily: "'GT-Walsheim-Pro-Regular', sans-serif" }}>
                      {post.title}
                    </h3>
                    <div className="text-white">
                      <span className="text-[24px] lg:text-[28px] font-bold group-hover:translate-x-2 transition-transform duration-300 inline-block">&#8594;</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
