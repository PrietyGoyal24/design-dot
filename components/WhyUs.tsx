'use client';

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-white text-[#111] w-full overflow-x-hidden pt-[60px] pb-[40px] md:pt-[100px] md:pb-[50px]">
      <div className="flex flex-col md:flex-row items-stretch w-full">

        {/* Left column — text */}
        <div className="w-full md:w-[58.33%] flex items-center">
          <div className="w-full px-[30px] md:pl-[160px] lg:pl-[200px] xl:pl-[260px] md:pr-[40px]">

            {/* Row 1: 00. + separator + 'Why Us' */}
            <div className="flex items-center text-[#111] md:relative mb-[30px] md:mb-[50px]">
              <div className="flex items-center md:absolute md:right-full md:top-1/2 md:-translate-y-1/2">
                <span className="text-[16px] md:text-[18px] font-extrabold" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>00.</span>
                <span className="block w-[50px] md:w-[70px] lg:w-[80px] xl:w-[100px] h-[1.5px] bg-[#111] mx-[16px] md:mx-[20px]" />
              </div>
              <span className="text-[18px] md:text-[20px] tracking-[1px] font-extrabold" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                Why Us
                <span className="inline-block w-[6px] h-[6px] rounded-full bg-[#111] ml-[6px] shrink-0 relative -bottom-[2px]" />
              </span>
            </div>

            {/* Heading and Content */}
            <div className="w-full">
              <div className="w-full">
                <h2
                  className="text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] 2xl:text-[30px] leading-[1.2] tracking-[1px] md:tracking-[2px] uppercase m-0 font-extrabold text-[#111] whitespace-nowrap"
                  style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif', fontWeight: 900 }}
                >
                  A CREATIVE DIGITAL AGENCY
                  <span className="inline-block w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#111] ml-[8px] shrink-0 relative -bottom-[2px] md:-bottom-[3px]" />
                </h2>

                <span className="block w-[60px] md:w-[80px] h-[1px] bg-[#111] mt-[16px] mb-[24px] md:mb-[34px]" />

                <p
                  className="text-[16px] xl:text-[18px] leading-[1.8] xl:leading-[2] text-[#111] m-0 w-full md:max-w-[450px] lg:max-w-[480px] xl:max-w-[500px]"
                  style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                >
                  DesignDot is a Global creative agency. We{' '}
                  <span className="font-extrabold" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                    Design & Build Brands, UI / UX, Interface & Application Development, Campaigns & Digital Projects, Signage & Advertising, Visualisation & Interior, Exhibition & Event
                  </span>
                  {' '}
                  {'{360 Services, support and solutions} provider for businesses provider for businesses Small, Medium, Large Enterprises across the world. We are at our best in the following areas...'}
                </p>

                <div className="flex items-center mt-[40px] md:mt-[50px]">
                  <span className="inline-block w-[60px] md:w-[80px] h-[1px] bg-[#111]" />
                  <a
                    href="https://dd.mocup.in/about-us"
                    className="inline-block ml-[18px] px-[24px] py-[10px] bg-[#f27820] text-black text-[14px] uppercase tracking-wide font-extrabold transition-opacity hover:opacity-90"
                    style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                  >
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — logo */}
        <div className="w-full md:w-[41.67%] flex items-center justify-end p-0 mt-10 md:mt-0">
          <div className="w-full max-w-[645px]">
            <img
              src="https://dd.mocup.in/assets/web/images/d-logo-2.jpg"
              alt="design dot logo"
              width={645}
              height={780}
              loading="lazy"
              className="w-full h-auto"
              style={{ boxShadow: '-9px 8px 24px 17px #f4f4f4' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
