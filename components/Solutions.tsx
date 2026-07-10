'use client';

import { INDUSTRY_ITEMS } from '@/constants';

const ICON_MAP: Record<string, string> = {
  robot: 'fas fa-robot',
  cogs: 'fas fa-cogs',
  brain: 'fas fa-brain',
  eye: 'fas fa-eye',
  cloud: 'fas fa-cloud',
  language: 'fas fa-language',
  chart: 'fas fa-chart-line',
};

export default function Solutions() {
  return (
    <section className="relative bg-[#191919] text-white select-none py-[60px] md:py-[80px]">
      <div className="w-full max-w-[1440px] mx-auto px-5 md:pl-[45px] md:pr-[78px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Left sticky column */}
          <div className="lg:sticky lg:top-[120px] self-start">

            <div className="flex items-center flex-wrap">
              <p
                className="text-[18px] md:text-[24px] leading-[30px] m-0 shrink-0 text-[#f58331]"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
              >
                02.
              </p>
              <span className="block w-[96px] md:w-[130px] h-[2px] bg-[#727272] mx-[15px] relative -top-[1.5px] md:-top-[2.5px]" />
              <span
                className="text-[18px] md:text-[24px] leading-[30px] text-white font-extrabold"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif', fontWeight: 1200 }}
              >
                We Build Smarter, Faster Solutions
                <span className="inline-block w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-white ml-[4px] md:ml-[6px] align-baseline" />
              </span>
            </div>

            <div className="mt-[40px] md:mt-[60px] ml-0 md:ml-[11.8rem] w-full md:w-[65%] p-8 md:p-10 rounded-[8px] bg-[#2c2c2c4f] shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
              <div className="mb-6">
                <i className="fas fa-paper-plane text-white text-[24px]" />
              </div>
              <h5
                className="text-[22px] md:text-[24px] leading-[30px] text-white mb-3 tracking-[1px] font-extrabold"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif', fontWeight: 900 }}
              >
                Fuel Your Digital-First Idea
              </h5>
              <p
                className="text-[15px] md:text-[16px] leading-[1.6] text-[#adadad] mb-8"
                style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
              >
                With 1600+ Transformation Experts
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-[#f58331] text-white text-[14px] tracking-[1px] rounded-[21px] transition-opacity hover:opacity-80 uppercase font-extrabold"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
              >
                Innovate With Us
              </a>
            </div>
          </div>

          {/* Right sidebar list */}
          <div className="pt-0 lg:pt-[85px] mt-10 lg:mt-0">
            {INDUSTRY_ITEMS.map((item) => {
              const iconClass = ICON_MAP[item.icon] || 'fas fa-cogs';
              return (
                <div
                  key={item.title}
                  className="industry-item border-b border-white/10 last:border-b-0"
                >
                  <div className="industry-item-inner group flex gap-6 md:gap-8 items-start py-6 md:py-8 px-0 cursor-pointer transition-all duration-300 ease-linear hover:bg-[#232323] hover:pl-4 hover:pr-4">
                    <div className="w-[30px] shrink-0 text-center pt-1">
                      <i className={`${iconClass} text-white text-[22px] md:text-[24px]`} />
                    </div>

                    <div className="flex-1 min-w-0 mr-2 md:mr-4">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <h5
                          className="text-[20px] md:text-[24px] leading-[30px] text-white m-0 font-extrabold tracking-[0.5px]"
                          style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif', fontWeight: 900 }}
                        >
                          {item.title}
                        </h5>
                        <img
                          src="https://dd.mocup.in/assets/web/images/tools-arrow-vector.svg"
                          alt="arrow"
                          width={26}
                          height={26}
                          loading="lazy"
                          className="shrink-0 mt-1 opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                      </div>
                      <p
                        className="text-[15px] md:text-[16px] leading-[1.65] text-[#adadad] m-0"
                        style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
