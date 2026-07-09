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
        }, 90); // Heading typing speed (reduced)
      } else if (typedParagraph.length < currentSlide.paragraph.length) {
        timer = setTimeout(() => {
          setTypedParagraph(currentSlide.paragraph.slice(0, typedParagraph.length + 1));
        }, 50); // Paragraph typing speed (reduced)
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
    <>
      <section
        ref={containerRef}
        data-cursor="paint"
        className="relative w-full flex flex-col items-center justify-center pt-[150px] pb-[220px] md:pt-[200px] md:pb-[320px] lg:pt-[240px] lg:pb-[420px] overflow-hidden bg-transparent select-none animate-in fade-in duration-500 cursor-none"
      >
        {/* Centered content */}
        <div className="max-w-[1100px] w-full px-6 flex flex-col items-center text-center z-10">

          {/* Heading */}
          <h1
            className="font-walsheim-black font-black text-[28px] sm:text-[36px] md:text-[44px] lg:text-[48px] xl:text-[52px] leading-[1.08] tracking-tight text-white uppercase select-none mb-4 w-full"
          >
            {typedHeading}
          </h1>

          {/* Paragraph */}
          {typedParagraph.length > 0 && (
            <p
              className="text-[16px] font-sans tracking-wide text-white/90 max-w-none leading-[1.5] select-none mt-2"
            >
              {typedParagraph}
            </p>
          )}

        </div>
      </section>

      {/* Video Mockup Section (Recreating the original website portfolio player with split background) */}
      <div
        data-cursor="paint"
        className="w-full bg-[#fcf9f6] relative pb-12 md:pb-16 z-20 cursor-none select-none flow-root"
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-[40px] lg:px-[85px] -mt-[160px] md:-mt-[240px] lg:-mt-[330px] z-30 relative animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <div 
            className="bg-[#333333] border border-white/10 rounded-none shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
            style={{ padding: '10px' }}
          >
            <div className="relative w-full overflow-hidden rounded-none bg-white">
              <video
                src="https://dd.mocup.in/assets/web/images/video/designdot.mp4"
                className="w-full h-auto block"
                playsInline
                autoPlay
                loop
                muted
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
