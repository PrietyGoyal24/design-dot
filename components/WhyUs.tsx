'use client';

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-white text-[#111] w-full overflow-x-hidden py-[60px] md:py-[100px]">
      <div className="flex flex-col md:flex-row items-stretch w-full">

        {/* Left column — text */}
        <div className="w-full md:w-[58.33%] flex items-start">
          <div className="w-full px-6 md:pl-[160px] lg:pl-[200px] xl:pl-[260px] md:pr-[40px]">

            {/* Row 1: 00. + separator + 'Why Us' (inline, left-aligned) */}
            <div className="flex items-center md:ml-[-140px] lg:ml-[-180px] xl:ml-[-240px] text-[#111]">
              <div className="hidden md:flex w-[50px] lg:w-[60px] xl:w-[80px] items-center pr-[10px] lg:pr-[20px]">
                <span
                  className="text-[18px] md:text-[28px] leading-[30px] font-extrabold"
                  style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                >
                   00.
                </span>
                <span className="flex-grow" />
              </div>

              <span className="md:hidden font-extrabold text-[18px] mr-2" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                00.
              </span>

              <span className="block w-[120px] md:w-[70px] lg:w-[100px] xl:w-[140px] h-[2px] bg-[#727272] relative -top-[1.5px] md:-top-[2.5px]" />

              <span
                className="text-[18px] md:text-[24px] leading-[30px] tracking-[1px] font-extrabold ml-[20px] flex items-center"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
              >
                Why Us
                <span className="inline-block w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#111] ml-[6px] md:ml-[8px] relative -top-[1px]" />
              </span>
            </div>

            {/* vertical spacing between top row and heading */}
            <div className="w-full mt-[40px] md:mt-[75px]">

              <div className="w-full md:max-w-[900px]">
                <h2
                  className="text-[22px] sm:text-[28px] lg:text-[36px] xl:text-[42px] leading-[1.02] tracking-[2px] uppercase m-0 font-extrabold whitespace-nowrap flex items-center"
                  style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif', fontWeight: 900 }}
                >
                  A CREATIVE DIGITAL AGENCY
                  <span className="inline-block w-[8px] h-[8px] md:w-[10px] md:h-[10px] rounded-full bg-[#111] ml-[6px] md:ml-[10px] relative -top-[2px] md:-top-[4px]" />
                </h2>

                <span className="block w-[80px] md:w-[100px] h-[2px] bg-[#727272] mt-[8px] md:mt-[10px] mb-[24px] md:mb-[34px]" />

                <p
                  className="text-[15px] md:text-[16px] leading-[1.8] text-[#111] m-0 md:max-w-[440px]"
                  style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                >
                  DesignDot is a Global creative agency. We{' '}
                  <span className="font-extrabold" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Design & Build Brands</span>
                  {', '}
                  <span className="font-extrabold" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>UI / UX</span>
                  {', '}
                  <span className="font-extrabold" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Interface & Application Development</span>
                  {', '}
                  <span className="font-extrabold" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Campaigns & Digital Projects</span>
                  {', '}
                  <span className="font-extrabold" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Signage & Advertising</span>
                  {', '}
                  <span className="font-extrabold" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Visualisation & Interior</span>
                  {', '}
                  <span className="font-extrabold" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>Exhibition & Event</span>
                  {' '}
                  {'{360 Services, support and solutions} provider for businesses provider for businesses Small, Medium, Large Enterprises across the world. We are at our best in the following areas...'}
                </p>

                <div className="flex items-center mt-[40px] md:mt-[60px]">
                  <span className="inline-block w-[80px] md:w-[100px] h-[2px] bg-[#727272] relative -top-[1px]" />
                  <a
                    href="https://dd.mocup.in/about-us"
                    className="inline-block ml-[18px] px-[24px] py-[8px] bg-[#f3812f] text-black text-[14px] uppercase tracking-wide font-extrabold transition-opacity hover:opacity-90"
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
