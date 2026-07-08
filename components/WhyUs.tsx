'use client';

import { motion } from 'framer-motion';

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 bg-[#ffffff] text-slate-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 space-y-6 text-left"
        >
          {/* Index and Section Name */}
          <div className="flex items-center gap-4 text-xs font-display font-semibold tracking-widest text-[#f27820]">
            <span>00.</span>
            <div className="w-12 h-[1px] bg-[#f27820]/40" />
            <span className="uppercase">Why Us</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-slate-900 leading-tight">
            A CREATIVE DIGITAL AGENCY<span className="text-[#f27820]">.</span>
          </h2>

          {/* Decorative single line separator */}
          <div className="w-24 h-[3px] bg-[#f27820]" />

          {/* Description Paragraph */}
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            DesignDot is a Global creative agency. We <strong className="text-slate-900 font-bold">Design & Build Brands, UI / UX, Interface & Application Development, Campaigns & Digital Projects, Signage & Advertising, Visualisation & Interior, Exhibition & Event</strong> {"{360 Services, support and solutions}"} provider for businesses across the world. We are at our best in the following areas...
          </p>

          {/* EXPLORE Link button block */}
          <div className="pt-4">
            <a
              href="https://dd.mocup.in/about-us"
              className="inline-flex items-center gap-3 text-xs font-display font-bold tracking-widest text-slate-950 hover:text-[#f27820] transition-colors relative py-1 group cursor-pointer"
            >
              <span className="w-8 h-[2px] bg-slate-950 group-hover:bg-[#f27820] transition-colors" />
              <span>EXPLORE</span>
            </a>
          </div>
        </motion.div>

        {/* Right Brand Image/Graphic Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:col-span-5 flex justify-end"
        >
          <div className="relative border-4 border-[#f27820] p-1 rounded-sm overflow-hidden bg-slate-950 w-full max-w-[450px] aspect-[5/6] shadow-2xl flex items-center justify-center">
            {/* Using the original brand image url */}
            <img
              src="https://dd.mocup.in/assets/web/images/d-logo-2.jpg"
              alt="DesignDot Graphic"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
