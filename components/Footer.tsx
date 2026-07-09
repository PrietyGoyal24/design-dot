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
    <footer className="relative w-full overflow-hidden select-none bg-white font-sans text-slate-900 pt-[100px] pb-12">
      <div className="max-w-[1280px] mx-auto px-[40px] md:px-[60px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[80px] items-start">
          
          {/* Left Column: Let's build something awesome & details */}
          <div className="flex flex-col text-left">
            
            {/* Heading */}
            <div className="flex items-start">
              <div className="w-[100px] flex justify-end pr-[20px] shrink-0 mt-[20px] hidden sm:flex">
                <div className="w-[60px] h-[1px] bg-slate-300" />
              </div>
              <h2 className="text-[50px] md:text-[75px] leading-[1] font-bold text-[#111111] lowercase font-sans">
                let&apos;s build something<br/>awesome
              </h2>
            </div>

            <div className="flex flex-col gap-[36px] mt-[60px]">
              
              {/* Phone number */}
              <div className="flex items-start">
                <div className="w-[100px] flex justify-end pr-[20px] shrink-0 mt-[8px] hidden sm:flex">
                  <div className="w-[40px] h-[1px] bg-slate-300" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <span className="text-[14px] font-[500] text-[#a0a0a0]">Phone number</span>
                  <div className="text-[15px] font-[700] tracking-wide flex flex-col gap-[6px] text-[#1a1a1a]">
                    <a href="tel:+919873282812" className="hover:text-[#f27820] transition-colors">+91-9873.282.812</a>
                    <a href="tel:+14694410125" className="hover:text-[#f27820] transition-colors">+1 469-441-0125</a>
                  </div>
                </div>
              </div>

              {/* Mail at */}
              <div className="flex items-start">
                <div className="w-[100px] flex justify-end pr-[20px] shrink-0 mt-[8px] hidden sm:flex">
                  <div className="w-[40px] h-[1px] bg-slate-300" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <span className="text-[14px] font-[500] text-[#a0a0a0]">Mail at</span>
                  <div className="text-[15px] font-[700] tracking-wide text-[#1a1a1a]">
                    <a href="mailto:info@designdot.co" className="hover:text-[#f27820] transition-colors">info@designdot.co</a>
                  </div>
                </div>
              </div>

              {/* Direct Chat */}
              <div className="flex items-start">
                <div className="w-[100px] flex justify-end pr-[20px] shrink-0 mt-[8px] hidden sm:flex">
                  <div className="w-[40px] h-[1px] bg-slate-300" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <span className="text-[14px] font-[500] text-[#a0a0a0]">Direct Chat</span>
                  <div className="text-[15px] font-[700] tracking-wide text-[#1a1a1a] flex items-center gap-[8px]">
                    <svg className="w-[18px] h-[18px] fill-current text-[#1a1a1a]" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.727-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.896 14.1 1.87 11.666 1.872 6.232 1.872 1.81 6.29 1.806 11.724c-.001 1.677.443 3.31 1.285 4.757l-.973 3.555 3.639-.954zm10.974-6.843c-.27-.136-1.602-.79-1.85-.88-.25-.09-.43-.136-.61.136-.18.27-.69.88-.85 1.05-.15.18-.3.2-.57.06-.27-.136-1.136-.418-2.16-1.332-.798-.712-1.337-1.59-1.493-1.86-.15-.27-.015-.417.12-.553.124-.122.27-.318.4-.478.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.477-.06-.136-.61-1.477-.84-2.02-.22-.53-.45-.45-.61-.46-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.01 2.79 1.15 2.97c.14.18 1.99 3.038 4.82 4.258.67.29 1.2.46 1.61.59.68.21 1.3.18 1.78.11.54-.08 1.6-.66 1.83-1.28.22-.61.22-1.14.16-1.28-.07-.14-.25-.22-.52-.36z" /></svg>
                    <a href="https://api.whatsapp.com/send?phone=+919873282812&text=Hii" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">
                      Whats app
                    </a>
                  </div>
                </div>
              </div>

              {/* Connect */}
              <div className="flex items-start">
                <div className="w-[100px] flex justify-end pr-[20px] shrink-0 mt-[8px] hidden sm:flex">
                  <div className="w-[40px] h-[1px] bg-slate-300" />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <span className="text-[14px] font-[500] text-[#a0a0a0]">Connect with us</span>
                  <div className="flex gap-[12px] text-slate-800">
                    <a href="#" className="w-[28px] h-[28px] border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors" aria-label="Facebook">
                      <svg className="w-[12px] h-[12px] fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h2.72L15 8h-3V6.12C12 5.5 12.5 5 13 5h2V2h-3a4 4 0 0 0-4 4v2z" /></svg>
                    </a>
                    <a href="#" className="w-[28px] h-[28px] border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors" aria-label="LinkedIn">
                      <svg className="w-[12px] h-[12px] fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
                    </a>
                    <a href="#" className="w-[28px] h-[28px] border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors" aria-label="Twitter">
                      <svg className="w-[12px] h-[12px] fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    <a href="#" className="w-[28px] h-[28px] border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors" aria-label="YouTube">
                      <svg className="w-[12px] h-[12px] fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                    </a>
                    <a href="#" className="w-[28px] h-[28px] border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors" aria-label="Instagram">
                      <svg className="w-[12px] h-[12px] fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Write us Proposal Form */}
          <div className="flex flex-col text-left font-sans">
            <h3 className="text-[24px] font-bold text-[#111111] mb-[24px]">
              Feel Free To Write Us<span className="text-[#f27820] w-[8px] h-[8px] bg-[#f27820] rounded-full inline-block ml-1"></span>
            </h3>

            {isSubmitted ? (
              <div className="bg-[#302b54] p-[40px] rounded-[8px] text-center flex flex-col items-center justify-center min-h-[420px] shadow-lg">
                <div className="w-[56px] h-[56px] rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
                  <Check size={28} />
                </div>
                <h4 className="text-[20px] font-bold text-white mb-2">Proposal Request Received</h4>
                <p className="text-white/70 text-[14px]">Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#343058] p-[36px] rounded-[8px] shadow-xl font-sans flex flex-col gap-[20px]">
                
                {/* Full Name */}
                <div>
                  <label className="text-[12px] font-[500] text-white block mb-[8px]">
                    Full Name <span className="text-[#ff4b4b]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-[1px] border-white/20 py-[10px] px-0 text-white focus:outline-none focus:border-white/60 text-[14px] font-[500] rounded-none"
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label className="text-[12px] font-[500] text-white block mb-[8px]">
                    E-mail ID <span className="text-[#ff4b4b]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-[1px] border-white/20 py-[10px] px-0 text-white focus:outline-none focus:border-white/60 text-[14px] font-[500] rounded-none"
                  />
                </div>
                
                {/* Contact Number */}
                <div>
                  <label className="text-[12px] font-[500] text-white block mb-[8px]">
                    Contact Number <span className="text-[#ff4b4b]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-[1px] border-white/20 py-[10px] px-0 text-white focus:outline-none focus:border-white/60 text-[14px] font-[500] rounded-none"
                  />
                </div>

                {/* Budget Range */}
                <div>
                  <label className="text-[12px] font-[500] text-white block mb-[8px]">
                    Select a Budget Range <span className="text-[#ff4b4b]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-transparent border-0 border-b-[1px] border-white/20 py-[10px] px-0 text-white focus:outline-none focus:border-white/60 text-[13px] font-[500] appearance-none"
                    >
                      <option value="" disabled className="text-slate-900 bg-white">-- Please select --</option>
                      <option value="Still Evaluating" className="text-slate-900 bg-white">Still Evaluating</option>
                      <option value="Less than $50K" className="text-slate-900 bg-white">Less than $50K</option>
                      <option value="$50K - $100K" className="text-slate-900 bg-white">$50K - $100K</option>
                      <option value="$100 - $250K" className="text-slate-900 bg-white">$100 - $250K</option>
                      <option value="More than $250K" className="text-slate-900 bg-white">More than $250K</option>
                    </select>
                    <div className="absolute right-[4px] top-[12px] pointer-events-none text-white/70 text-[10px]">▼</div>
                  </div>
                </div>

                {/* Project Idea */}
                <div>
                  <label className="text-[12px] font-[500] text-white block mb-[8px] leading-[1.6]">
                    Describe Your Project/Idea In Brief (Helps Us Come Back<br className="hidden sm:block" />
                    Better Prepared)<span className="text-[#ff4b4b]">*</span>
                  </label>
                  <textarea
                    required
                    rows={1}
                    value={formData.idea}
                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                    className="w-full bg-transparent border-0 border-b-[1px] border-white/20 py-[10px] px-0 text-white focus:outline-none focus:border-white/60 text-[13px] font-[500] resize-none"
                  />
                </div>

                {/* NDA & Captcha Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[16px] pt-[12px]">
                  <label className="flex items-center gap-[10px] text-white text-[12px] font-[500] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.nda}
                      onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                      className="rounded-sm border-0 bg-white text-[#f27820] focus:ring-0 w-[14px] h-[14px] cursor-pointer"
                    />
                    <span>Include Copy of a Non-Disclosure Agreement</span>
                  </label>

                  <div className="flex items-center gap-[10px]">
                    <span className="text-white font-[500] text-[13px]">3 + 7 =</span>
                    <input
                      type="text"
                      required
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      className="w-[54px] h-[36px] bg-[#2e2e2e] border-[1px] border-transparent rounded-[2px] text-center text-white focus:outline-none focus:border-white/20 text-[14px] font-[600]"
                    />
                  </div>
                </div>

                {captchaError && (
                  <p className="text-[#ff4b4b] text-[12px] font-[600]">Incorrect Captcha Answer. Please try again.</p>
                )}

                {/* Submit Button */}
                <div className="pt-[16px]">
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-[#f27820] hover:text-white text-[#111111] transition-colors h-[54px] rounded-[4px] font-[800] font-sans text-[14px] tracking-wider uppercase cursor-pointer focus:outline-none"
                  >
                    REQUEST PROPOSAL
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-[40px] md:px-[60px] flex flex-col mt-[64px]">
        {/* Top Divider Line with Center Circle */}
        <div className="w-full mb-[24px] relative flex items-center justify-center">
          <div className="w-full h-[1px] bg-[#e5e5e5]" />
          <div className="w-[30px] h-[30px] rounded-full border border-[#dcdcdc] bg-white absolute flex items-center justify-center" />
        </div>

        {/* Working Hours & Local Time Strip */}
        <div className="flex flex-row justify-between items-start w-full pb-[20px]">
          <div className="flex flex-col gap-[16px] text-left">
            <span className="text-[#a0a0a0] text-[15px] font-[400] tracking-wide">Working Hours</span>
            <div className="flex flex-col gap-[12px]">
              <span className="text-[#1a1a1a] text-[14px] font-[700] tracking-widest uppercase">/ MON - FRI, 9AM TO 6PM /</span>
              {/* Privacy Policy links */}
              <div className="flex flex-wrap text-[13px] font-[500] text-[#1a1a1a] items-center pl-[12px]">
                <a href="https://dd.mocup.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Privacy Policy</a>
                <span className="text-[#a0a0a0] font-normal mx-[14px]">|</span>
                <a href="https://dd.mocup.in/cookies-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Cookies Policy</a>
                <span className="text-[#a0a0a0] font-normal mx-[14px]">|</span>
                <a href="https://dd.mocup.in/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Terms & Conditions</a>
                <span className="text-[#a0a0a0] font-normal mx-[14px]">|</span>
                <a href="https://dd.mocup.in/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[16px] text-right items-end self-start">
            <span className="text-[#a0a0a0] text-[15px] font-[400] tracking-wide">Local Time</span>
            <span className="text-[#1a1a1a] text-[14px] font-[700] tracking-widest">{localTime}</span>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="w-full h-[1px] bg-[#e5e5e5] mb-[40px]" />

        {/* Happiness, Achievements, Brochure & Copyright Column block */}
        <div className="flex flex-col lg:flex-row justify-between items-start w-full pb-[40px]">

          {/* Happiness Guarantee */}
          <div className="flex items-start gap-[24px] text-left">
            <img
              src="https://dd.mocup.in/assets/web/images/design-wheel.png"
              alt="Happiness guarantee"
              className="w-[120px] h-[120px] object-contain flex-shrink-0"
              loading="lazy"
            />
            <div className="flex flex-col gap-[12px] pt-[4px]">
              <h5 className="text-[14px] font-[800] tracking-wide text-[#1a1a1a]">Happiness guarantee</h5>
              <p className="text-[12px] text-[#4a4a4a] font-[500] leading-[2.2] max-w-[210px]">
                If you&apos;re not happy, we&apos;re not<br/>
                happy. We work tirelessly to<br/>
                make sure your Designdot<br/>
                experience is delightful.<br/><br/>
                That&apos;s why we offer the<br/>
                DesignDot Happiness<br/>
                Guarantee.
              </p>
            </div>
          </div>

          {/* Achievement */}
          <div className="flex flex-col gap-[16px] items-center lg:items-start lg:-ml-[20px] pt-[4px]">
            <h5 className="text-[14px] font-[800] tracking-wide text-[#1a1a1a] uppercase">OUR ACHIEVEMENT.</h5>
            <div className="flex gap-[20px]">
              <img src="https://dd.mocup.in/assets/web/images/footer-award-2.png" alt="Award 2" className="h-[96px] object-contain" loading="lazy" />
              <img src="https://dd.mocup.in/assets/web/images/footer-award-1.png" alt="Award 1" className="h-[96px] border-[1.5px] border-yellow-400 p-[4px] object-contain" loading="lazy" />
            </div>
          </div>

          {/* Brochure & Copyright Column */}
          <div className="flex flex-col gap-[8px] text-right items-end pt-[4px]">
            <a
              href="https://drive.google.com/file/d/1m0wCjfT7xhCWghgZBxrkRXdDrwZkpaue/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f27820] hover:text-black font-[600] text-[14px] tracking-wide transition-colors cursor-pointer"
            >
              Download Brochure
            </a>
            <p className="text-[11px] text-[#1a1a1a] font-[600] tracking-widest uppercase mt-[28px]">
              © ALL RIGHTS RESERVED 2026,DESIGNDOT
            </p>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=+919873282812&text=Hii"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[30px] right-[30px] z-50 bg-[#25d366] text-white w-[60px] h-[60px] rounded-full shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:bg-[#128c7e] transition-all hover:-translate-y-1 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-[34px] h-[34px] ml-[2px] mb-[2px]">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>

    </footer>
  );
}