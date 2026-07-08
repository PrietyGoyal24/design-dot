'use client';

import { useEffect, useRef, useState } from 'react';

const SLIDES = [
  {
    heading: 'DESIGN.DEVELOPMENT.TECHNOLOGY',
    paragraph: ''
  },
  {
    heading: 'WE BUILD YOUR IDEAS.',
    paragraph: 'We create award-winning brands and strategically designed experiences for a digitally driven world.'
  },
  {
    heading: 'DESIGN AND INNOVATION.',
    paragraph: "We're a brand strategy, digital design agency and application development. Building brands experiences INSPIRED BY CULTURE & PLACE."
  },
  {
    heading: 'GREAT EXPERIENCE BUILDS GREAT BRANDS.',
    paragraph: 'Precisely what you imagined your brand could be, only more so. Brand Strategy & Digital Innovation.'
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Sequential typing state
  const [slideIndex, setSlideIndex] = useState(0);
  const [typedHeading, setTypedHeading] = useState('');
  const [typedParagraph, setTypedParagraph] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Sequential Typing Loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentSlide = SLIDES[slideIndex];

    if (!isDeleting) {
      // Typing phase
      if (typedHeading.length < currentSlide.heading.length) {
        timer = setTimeout(() => {
          setTypedHeading(currentSlide.heading.slice(0, typedHeading.length + 1));
        }, 60); // Heading typing speed
      } else if (typedParagraph.length < currentSlide.paragraph.length) {
        timer = setTimeout(() => {
          setTypedParagraph(currentSlide.paragraph.slice(0, typedParagraph.length + 1));
        }, 30); // Paragraph typing speed
      } else {
        // Pause once fully typed
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 3000); // Wait 3 seconds on complete slide
      }
    } else {
      // Deleting phase
      if (typedParagraph.length > 0) {
        timer = setTimeout(() => {
          setTypedParagraph(typedParagraph.slice(0, -1));
        }, 15); // Paragraph deleting speed
      } else if (typedHeading.length > 0) {
        timer = setTimeout(() => {
          setTypedHeading(typedHeading.slice(0, -1));
        }, 30); // Heading deleting speed
      } else {
        // Move to next slide
        timer = setTimeout(() => {
          setIsDeleting(false);
          setSlideIndex((prev) => (prev + 1) % SLIDES.length);
        }, 500); // Small delay before typing next slide
      }
    }

    return () => clearTimeout(timer);
  }, [typedHeading, typedParagraph, isDeleting, slideIndex]);

  return (
    <section 
      ref={containerRef}
      data-cursor="paint"
      className="relative w-full flex flex-col items-center justify-center pt-36 pb-28 md:pt-48 md:pb-36 lg:pt-56 lg:pb-44 overflow-hidden bg-transparent select-none animate-in fade-in duration-500 cursor-none"
    >
      {/* Centered content */}
      <div className="max-w-[1100px] w-full px-6 flex flex-col items-center text-center z-10">
        
        {/* Heading */}
        <h1 
          className="font-display font-extrabold text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[52px] leading-[1.08] tracking-tight text-white uppercase select-none mb-4 max-w-4xl"
        >
          {typedHeading}
          {/* Typing Cursor (only active when paragraph is empty and heading is typing) */}
          {typedParagraph.length === 0 && (
            <span 
              className="inline-block ml-1 w-[3px] h-[22px] sm:h-[30px] md:h-[38px] lg:h-[44px] bg-white animate-[pulse_1s_infinite] align-middle"
            />
          )}
        </h1>

        {/* Paragraph */}
        {typedParagraph.length > 0 && (
          <p 
            className="text-[11.5px] sm:text-[13px] md:text-[14px] font-extrabold tracking-wider uppercase text-slate-300 max-w-2xl leading-[1.5] select-none"
          >
            {typedParagraph}
            {/* Typing Cursor on Paragraph */}
            <span 
              className="inline-block ml-1 w-[2px] h-[12px] sm:h-[13px] md:h-[14px] bg-white animate-[pulse_1s_infinite] align-middle"
            />
          </p>
        )}

      </div>
    </section>
  );
}
