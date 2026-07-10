'use client';

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-white text-[#111] w-full overflow-x-hidden py-[50px] md:py-[100px]">
      <div className="flex flex-col md:flex-row items-stretch w-full">

        {/* Left column — text */}
        <div className="w-full md:w-[58.33%] flex items-center">
          <div className="w-full px-10 md:pl-[65px] md:pr-0">

            {/* Row 1: 00. + line (full width, on its own row) */}
            <div className="flex items-center">
              <p
                className="text-[18px] md:text-[24px] leading-[30px] m-0 shrink-0"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
              >
                00.
              </p>
              <span className="block w-[96px] md:w-[130px] h-[2px] bg-[#727272] ml-[15px]" />
            </div>

            {/* Row 2: section text (below 00., not beside it) */}
            <div className="w-full mt-5">

              <span
                className="block text-[18px] md:text-[24px] leading-[30px] tracking-[1px] mb-[22px]"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
              >
                Why Us
                <span className="inline-block w-[8px] h-[8px] rounded-full bg-black ml-[2px] align-middle" />
              </span>

              <h2
                className="text-[23px] sm:text-[27px] lg:text-[32px] xl:text-[38px] leading-[1.4] tracking-[2px] uppercase m-0"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
              >
                A CREATIVE DIGITAL AGENCY
                <span className="inline-block w-[11px] h-[11px] rounded-full bg-black ml-[2px] align-middle" />
              </h2>

              <span className="block w-[96px] md:w-[130px] h-[2px] bg-[#727272] mt-[10px] mb-[50px]" />

              <p
                className="text-[16px] md:text-[18px] leading-[30px] text-[#111] m-0 md:mr-[22px]"
                style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
              >
                DesignDot is a Global creative agency. We{' '}
                <span style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                  Design & Build Brands, UI / UX, Interface & Application Development,
                  Campaigns & Digital Projects, Signage & Advertising, Visualisation & Interior, Exhibition & Event
                </span>{' '}
                {'{'}360 Services, support and solutions{'}'} provider for businesses provider for businesses Small, Medium, Large Enterprises across the world. We are at our best in the following areas…
              </p>

              <div className="flex items-center mt-[50px] md:mt-[90px]">
                <span className="inline-block w-[96px] md:w-[130px] h-[2px] bg-[#727272]" />
                <a
                  href="https://dd.mocup.in/about-us"
                  className="inline-block ml-[18px] px-[7px] py-[5px] bg-[#f3812f] text-black text-[14px] uppercase tracking-wide transition-opacity hover:opacity-90"
                  style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                >
                  EXPLORE
                </a>
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
