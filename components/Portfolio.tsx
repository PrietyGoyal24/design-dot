'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MoveLeft, MoveRight } from 'lucide-react';
import { WHAT_GOOD_PROJECTS } from '@/constants';

export default function Portfolio() {
  const sliderRef = useRef<Slider>(null);

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 600, // smooth transition speed
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section 
      className="relative bg-[#191919] text-[#FFFFFF] overflow-hidden select-none w-full"
      style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}
    >
      <div className="w-full flex flex-col z-10 relative">
        
        {/* Row 1: Heading & Controls */}
        <div className="section-heading slider-heading flex justify-between items-center w-full pt-[40px] px-[20px] lg:pt-[120px] lg:pr-[65px] lg:pb-[50px] lg:pl-[65px]">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center w-full"
          >
            {/* Hanging Prefix */}
            <div className="w-[120px] lg:w-[160px] flex items-center shrink-0">
              <div className="flex items-baseline">
                <span className="text-[24px] lg:text-[28px] font-bold leading-none tracking-tight text-[#F58331]" style={{ fontFamily: "'SocialGothic', sans-serif" }}>04</span>
                <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] bg-[#F58331] rounded-full ml-[4px]" />
              </div>
              <div className="flex-grow h-[1px] bg-[#FFFFFF]/40 mx-[15px]" />
            </div>
            
            {/* Content */}
            <div className="flex items-center">
              <div className="flex items-baseline">
                <h2 className="font-bold text-[24px] lg:text-[32px] leading-none tracking-tight text-[#FFFFFF] m-0 p-0" style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}>
                  What's Good
                </h2>
                <div className="w-[6px] h-[6px] lg:w-[8px] lg:h-[8px] bg-white rounded-full ml-[6px]" />
              </div>
            </div>
          </motion.div>

          {/* Slider Arrow Buttons */}
          <div className="flex gap-4 shrink-0 text-white/80">
            <button
              onClick={handlePrev}
              className="hover:text-white transition-colors cursor-pointer"
              aria-label="Previous Slide"
            >
              <MoveLeft size={32} strokeWidth={1} />
            </button>
            <button
              onClick={handleNext}
              className="hover:text-white transition-colors cursor-pointer"
              aria-label="Next Slide"
            >
              <MoveRight size={32} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Indented Content Block */}
        <div className="sliderContainer what-good-container w-full px-[20px] lg:px-0 lg:pl-[256px]">
          {/* Carousel Slider */}
          <div className="w-full">
            <Slider ref={sliderRef} {...settings}>
              {WHAT_GOOD_PROJECTS.map((project, index) => (
                <div key={`${project.title}-${index}`} className="focus:outline-none">
                  <div className="w-full flex-col bg-[#191919] lg:pr-[78px] flex">
                    {/* Image Cover */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[8px]">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Footer text content of card */}
                    <div 
                      className="what-good-text flex flex-col w-full text-[#FFFFFF]" 
                      style={{ margin: '0px 0px 30px', padding: '20px 20px 20px 0px' }}
                    >
                      <div className="flex justify-between items-center w-full mb-[15px]">
                        <h3 
                          className="font-bold text-[24px] md:text-[28px] tracking-wide m-0 p-0"
                          style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}
                        >
                          {project.title}
                        </h3>
                        <a
                          href={project.href}
                          target="_blank"
                          className="text-[12px] md:text-[14px] font-bold tracking-wider text-[#FFFFFF] flex items-center gap-[10px] shrink-0 hover:text-[#F58331] transition-colors"
                        >
                          <span className="w-[30px] md:w-[50px] h-[1px] bg-[#FFFFFF]/40" />
                          <span>View Case Study</span>
                        </a>
                      </div>
                      <p 
                        className="text-[14px] md:text-[16px] text-[#FFFFFF]/80 font-normal leading-[1.5] m-0 p-0"
                        style={{ fontFamily: "'GT-Walsheim-Pro', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
