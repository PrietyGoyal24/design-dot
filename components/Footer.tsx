'use client';

import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaError, setCaptchaError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    idea: '',
    nda: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const today = new Date();
      const daylist = ["Sun", "Mon", "Tue", "Wed", "Thus", "Fri", "Sat"];
      const localday = daylist[today.getDay()];
      let hour = today.getHours();
      const prepand = hour >= 12 ? " PM " : " AM ";
      hour = hour >= 12 ? hour - 12 : hour;
      if (hour === 0) hour = 12; // 12 AM/PM instead of 0
      setLocalTime(`/ ${localday} , ${hour}${prepand} /`);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    
    // Captcha validation
    if (captchaAnswer.trim() !== '10') {
      setCaptchaError(true);
      return;
    }

    setCaptchaError(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', budget: '', idea: '', nda: false });
      setCaptchaAnswer('');
    }, 2500);
  };

  return (
    <footer className="relative w-full overflow-hidden select-none">
      
      {/* 1. UPPER FOOTER SECTION (Dark Navy Background) */}
      <div className="bg-[#111028] text-white pt-24 pb-20 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Let's build something awesome & details */}
            <div className="lg:col-span-6 space-y-12 text-left">
              <div className="space-y-4">
                <span className="text-[11px] uppercase font-extrabold tracking-[0.25em] text-[#f27820] block">
                  LET'S BUILD
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6.5xl font-extrabold tracking-tighter leading-[1.05] text-white uppercase max-w-lg">
                  something awesome
                </h2>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                {/* Phone numbers */}
                <div className="space-y-2.5">
                  <span className="text-[10px] uppercase font-extrabold text-[#f27820] tracking-[0.18em] block">Phone Number</span>
                  <div className="text-[13.5px] font-semibold flex flex-col gap-1 text-slate-300">
                    <a href="tel:+919873282812" className="hover:text-[#f27820] transition-colors">+91-9873.282.812</a>
                    <a href="tel:+14694410125" className="hover:text-[#f27820] transition-colors">+1 469-441-0125</a>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2.5">
                  <span className="text-[10px] uppercase font-extrabold text-[#f27820] tracking-[0.18em] block">Mail at</span>
                  <div className="text-[13.5px] font-semibold text-slate-300">
                    <a href="mailto:info@designdot.co" className="hover:text-[#f27820] transition-colors">info@designdot.co</a>
                  </div>
                </div>

                {/* Direct Chat */}
                <div className="space-y-2.5">
                  <span className="text-[10px] uppercase font-extrabold text-[#f27820] tracking-[0.18em] block">Direct Chat</span>
                  <div className="text-[13.5px] font-semibold text-slate-300">
                    <a
                      href="https://api.whatsapp.com/send?phone=+919873282812&text=Hii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-[#f27820] transition-colors"
                    >
                      <span>WhatsApp Chat</span>
                    </a>
                  </div>
                </div>

                {/* Connect */}
                <div className="space-y-2.5">
                  <span className="text-[10px] uppercase font-extrabold text-[#f27820] tracking-[0.18em] block">Connect with us</span>
                  <div className="flex gap-4 text-slate-400">
                    <a href="#" className="hover:text-[#f27820] transition-colors" aria-label="Facebook">
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h2.72L15 8h-3V6.12C12 5.5 12.5 5 13 5h2V2h-3a4 4 0 0 0-4 4v2z"/></svg>
                    </a>
                    <a href="#" className="hover:text-[#f27820] transition-colors" aria-label="LinkedIn">
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                    </a>
                    <a href="#" className="hover:text-[#f27820] transition-colors" aria-label="Twitter">
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    </a>
                    <a href="#" className="hover:text-[#f27820] transition-colors" aria-label="YouTube">
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                    </a>
                    <a href="#" className="hover:text-[#f27820] transition-colors" aria-label="Instagram">
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Write us Proposal Form */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[11px] uppercase font-extrabold tracking-[0.25em] text-[#f27820] block">
                FEEL FREE TO WRITE US
              </span>

              {isSubmitted ? (
                <div className="bg-[#363266] border border-white/5 p-8 rounded-[15px] text-center flex flex-col items-center justify-center min-h-[320px]">
                  <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center mb-4">
                    <Check size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-white">Proposal Request Received</h4>
                  <p className="text-white/60 text-xs mt-1">Our managers will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-sm bg-[#363266] p-8 rounded-[15px] shadow-2xl">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[9px] font-bold text-white/50 block mb-1 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-2 px-0 text-white placeholder-white/30 focus:outline-none focus:border-white/30 text-sm font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-white/50 block mb-1 uppercase tracking-wider">E-mail ID *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-2 px-0 text-white placeholder-white/30 focus:outline-none focus:border-white/30 text-sm font-semibold"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[9px] font-bold text-white/50 block mb-1 uppercase tracking-wider">Contact Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-2 px-0 text-white placeholder-white/30 focus:outline-none focus:border-white/30 text-sm font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold text-white/50 block mb-1 uppercase tracking-wider">Select a Budget Range *</label>
                      <div className="relative">
                        <select
                          required
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-2 px-0 text-white focus:outline-none focus:border-white/30 text-sm font-semibold appearance-none"
                        >
                          <option value="" disabled className="text-slate-900 bg-white">-- Please select --</option>
                          <option value="Still Evaluating" className="text-slate-900 bg-white">Still Evaluating</option>
                          <option value="Less than $50K" className="text-slate-900 bg-white">Less than $50K</option>
                          <option value="$50K - $100K" className="text-slate-900 bg-white">$50K - $100K</option>
                          <option value="$100 - $250K" className="text-slate-900 bg-white">$100 - $250K</option>
                          <option value="More than $250K" className="text-slate-900 bg-white">More than $250K</option>
                        </select>
                        <div className="absolute right-1 top-2.5 pointer-events-none text-white/40 text-[10px]">▼</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-bold text-white/50 block mb-1 uppercase tracking-wider">Describe Your Project/Idea In Brief *</label>
                    <textarea
                      required
                      rows={2}
                      value={formData.idea}
                      onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-white/10 rounded-none py-2 px-0 text-white placeholder-white/30 focus:outline-none focus:border-white/30 text-sm font-semibold resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pt-2">
                    <label className="flex items-center gap-2.5 text-white/80 text-[12px] font-semibold cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.nda}
                        onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                        className="rounded border-white/10 bg-transparent text-[#f27820] focus:ring-[#f27820] focus:ring-offset-0 w-4 h-4 cursor-pointer"
                      />
                      <span>Include Copy of a Non-Disclosure Agreement</span>
                    </label>

                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">3 + 7 =</span>
                      <input
                        type="text"
                        required
                        value={captchaAnswer}
                        onChange={(e) => setCaptchaAnswer(e.target.value)}
                        className="w-16 bg-transparent border-0 border-b border-white/10 rounded-none py-1 text-center font-bold text-white focus:outline-none focus:border-white/30 text-sm"
                      />
                    </div>
                  </div>

                  {captchaError && (
                    <p className="text-red-400 text-xs font-semibold">Incorrect Captcha Answer. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    className="w-full bg-[#d1d5db] hover:bg-white text-[#111028] transition-colors py-3 rounded-[4px] font-extrabold text-[12.5px] tracking-widest uppercase cursor-pointer focus:outline-none"
                  >
                    Request Proposal
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. BOTTOM FOOTER SECTION (White Background) */}
      <div className="bg-white text-slate-800 pt-16 pb-12">
        <div className="max-w-[1440px] mx-auto px-10 flex flex-col items-center">
          
          {/* Top Divider Line */}
          <div className="border-t border-slate-200/60 w-full mb-8" />

          {/* Working Hours & Local Time Strip */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 w-full pb-8">
            <div className="flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-slate-400 text-[13px] font-normal uppercase tracking-wider">Working Hours</span>
                <span className="text-slate-800 text-[15px] font-bold tracking-wide">/ MON - FRI, 9AM TO 6PM /</span>
              </div>
              
              {/* Privacy Policy links */}
              <div className="flex flex-wrap gap-2 text-[14px] font-bold text-slate-800 items-center">
                <a href="https://dd.mocup.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Privacy Policy</a>
                <span className="text-slate-300">|</span>
                <a href="https://dd.mocup.in/cookies-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Cookies Policy</a>
                <span className="text-slate-300">|</span>
                <a href="https://dd.mocup.in/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Terms & Conditions</a>
                <span className="text-slate-300">|</span>
                <a href="https://dd.mocup.in/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Refund Policy</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-1 text-right items-end self-start">
              <span className="text-slate-400 text-[13px] font-normal uppercase tracking-wider">Local Time</span>
              <span className="text-slate-800 text-[15px] font-bold tracking-wide">{localTime}</span>
            </div>
          </div>

          {/* Bottom Divider Line with Centered Circle */}
          <div className="border-t border-slate-200/60 w-full my-8 relative flex items-center justify-center">
            <div className="w-8 h-8 rounded-full border border-slate-300 bg-white absolute flex items-center justify-center">
              <div className="w-4 h-[1px] bg-slate-300" />
            </div>
          </div>

          {/* Happiness, Achievements, Brochure & Copyright Column block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full pt-4">
            
            {/* Happiness Guarantee (col-span-5) */}
            <div className="lg:col-span-5 flex items-center gap-5 text-left">
              <img
                src="https://dd.mocup.in/assets/web/images/design-wheel.png"
                alt="Happiness guarantee"
                className="w-18 h-18 object-contain flex-shrink-0"
                loading="lazy"
              />
              <div className="space-y-1">
                <h5 className="text-[14px] font-extrabold uppercase tracking-wide text-slate-900 font-display">Happiness guarantee</h5>
                <p className="text-[12.5px] text-slate-500 font-semibold leading-relaxed max-w-[280px]">
                  If you're not happy, we're not happy. We work tirelessly to make sure your Designdot experience is delightful. That's why we offer the DesignDot Happiness Guarantee.
                </p>
              </div>
            </div>

            {/* Achievement Column (col-span-4) */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start xl:items-center gap-3">
              <h5 className="text-[14px] font-extrabold uppercase tracking-wider text-slate-900 font-display">OUR ACHIEVEMENT.</h5>
              <div className="flex gap-4">
                <img src="https://dd.mocup.in/assets/web/images/footer-award-2.png" alt="Award 2" className="h-16 object-contain" loading="lazy" />
                <img src="https://dd.mocup.in/assets/web/images/footer-award-1.png" alt="Award 1" className="h-16 object-contain" loading="lazy" />
              </div>
            </div>

            {/* Brochure & Copyright Column (col-span-3 - aligned right) */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-end gap-2 text-center lg:text-right">
              <a
                href="https://drive.google.com/file/d/1m0wCjfT7xhCWghgZBxrkRXdDrwZkpaue/view"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f27820] hover:text-black font-extrabold text-[14.5px] uppercase tracking-wide transition-colors cursor-pointer"
              >
                Download Brochure
              </a>
              <p className="text-[10.5px] text-slate-500 font-bold tracking-wider">
                © ALL RIGHTS RESERVED 2026,DESIGNDOT
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=+919873282812&text=Hii"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#128c7e] transition-all hover:scale-110 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.727-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.896 14.1 1.87 11.666 1.872 6.232 1.872 1.81 6.29 1.806 11.724c-.001 1.677.443 3.31 1.285 4.757l-.973 3.555 3.639-.954zm10.974-6.843c-.27-.136-1.602-.79-1.85-.88-.25-.09-.43-.136-.61.136-.18.27-.69.88-.85 1.05-.15.18-.3.2-.57.06-.27-.136-1.136-.418-2.16-1.332-.798-.712-1.337-1.59-1.493-1.86-.15-.27-.015-.417.12-.553.124-.122.27-.318.4-.478.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.477-.06-.136-.61-1.477-.84-2.02-.22-.53-.45-.45-.61-.46-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.01 2.79 1.15 2.97c.14.18 1.99 3.038 4.82 4.258.67.29 1.2.46 1.61.59.68.21 1.3.18 1.78.11.54-.08 1.6-.66 1.83-1.28.22-.61.22-1.14.16-1.28-.07-.14-.25-.22-.52-.36z" />
        </svg>
      </a>

    </footer>
  );
}
