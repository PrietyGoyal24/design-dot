'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import { Check } from 'lucide-react';

export default function DesignBuildPageClient() {
  const benefits = [
    {
      title: 'Interior Design',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse.',
      href: '/services/interior-design',
    },
    {
      title: 'Turnkey Solutions',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum?',
      href: '/services/turnkey-projects',
    },
    {
      title: 'Event Design',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, dolore.',
      href: '/services/event-management',
    },
    {
      title: 'Exhibition Stands',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem in aliquam blanditiis? Dolores, eius?',
      href: '/services/exhibition-stands',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-[#111111] overflow-x-hidden selection:bg-[#f27820] selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      <main className="w-full pt-[96px] lg:pt-[120px]">
        {/* Banner Top Strip Message */}
        <div className="w-full bg-[#fcf5f5] py-5 border-b border-gray-200">
          <div className="max-w-[1240px] mx-auto px-6 md:px-12 text-center">
            <h5 
              className="text-[13px] md:text-[15px] font-bold text-[#111111] uppercase tracking-wider"
              style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
            >
              Rapid delivery. Total team coordination.
            </h5>
          </div>
        </div>

        {/* Video & Banner Text Section */}
        <div className="max-w-[1240px] mx-auto px-6 md:px-12 py-10">
          <div className="relative w-full h-[320px] md:h-[450px] overflow-hidden rounded-2xl bg-black">
            {/* Desktop Video background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-85 hidden md:block"
            >
              <source src="https://dd.mocup.in/assets/web/images/video/design-build.mp4" type="video/mp4" />
            </video>

            {/* Mobile Video background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-85 block md:hidden"
            >
              <source src="https://dd.mocup.in/assets/web/images/video/designbuild-mobile.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Video overlay texts */}
            <div className="absolute left-[30px] md:left-[60px] bottom-[40px] md:bottom-[60px] text-left z-10">
              <h1 
                className="text-[42px] md:text-[70px] leading-none font-extrabold tracking-widest text-[#f58331] uppercase mb-1"
                style={{ fontFamily: 'GT-Walsheim-Pro-Black, sans-serif' }}
              >
                DESIGN-BUILD<span className="inline-block w-4 h-4 rounded-full bg-white ml-2"></span>
              </h1>
              <p 
                className="text-[18px] md:text-[24px] uppercase text-white tracking-wide"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif', fontWeight: 800 }}
              >
                total turnkey solutions<span className="inline-block w-2.5 h-2.5 rounded-full bg-white ml-2"></span>
              </p>
            </div>
          </div>

          {/* Let's talk description paragraph */}
          <div className="mt-12 max-w-[900px] text-left">
            <h2 
              className="text-[32px] md:text-[44px] font-extrabold text-[#2a255e] uppercase tracking-wide mb-4 leading-[1.25]"
              style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
            >
              DESIGN-BUILD. YOU MIGHT SAY IT’S A SIMPLE APPROACH TO 
              <br />
              <span className="text-[#f58331]">CONSTRUCTION.</span>
            </h2>
            <p 
              className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.8] font-normal mt-6"
              style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
            >
              A team working together from start to finish in open communication and purposeful collaboration to deliver otherwise unachievable results. It’s the notion that when owners sit at the same table with architects, builders, engineers and estimators, great ideas — the best ideas — are born.
            </p>
          </div>
        </div>

        {/* Benefits Grid Section */}
        <section className="bg-white border-t border-gray-150 py-16">
          <div className="max-w-[1240px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {benefits.map((b) => (
                <a 
                  key={b.title} 
                  href={b.href}
                  className="group block relative select-none cursor-pointer"
                >
                  <div 
                    className="flex flex-col justify-center items-start h-[280px] p-6 md:p-8 bg-white border-l-4 border-[#f58331] rounded-r-[5px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-[#f58331] hover:text-white hover:-translate-y-[6px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all duration-300 text-left"
                  >
                    <div className="flex flex-col gap-5 w-full">
                      {/* CheckCircle Badge Icon */}
                      <div 
                        className="w-[50px] h-[50px] rounded-md bg-[#f58331]/10 group-hover:bg-white flex items-center justify-center text-[#f58331] transition-colors duration-300"
                      >
                        <Check className="w-[20px] h-[20px] stroke-[3.5px]" />
                      </div>

                      {/* Header title */}
                      <h4 
                        className="text-[18px] font-bold text-black group-hover:text-white transition-colors uppercase tracking-wider"
                        style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                      >
                        {b.title}
                      </h4>
                    </div>

                    {/* Desc Paragraph */}
                    <p 
                      className="text-[14px] text-[#555] group-hover:text-white/90 transition-colors mt-3 leading-[1.6]"
                      style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                    >
                      {b.desc}
                    </p>
                  </div>
                </a>
              ))}

            </div>
          </div>
        </section>
      </main>

      {/* Reusable Footer Component */}
      <Footer />
    </div>
  );
}
