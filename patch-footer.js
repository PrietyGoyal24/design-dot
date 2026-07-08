const fs = require('fs');

const path = './components/Footer.tsx';
let content = fs.readFileSync(path, 'utf8');

// Use regex to find the start and end of the return statement
const startIndex = content.search(/return \(\s*<footer/);
const endIndexRegexMatch = content.match(/<\/footer>\s*\);\s*\}/);

if (startIndex === -1 || !endIndexRegexMatch) {
  console.error('Could not find the bounds of the return statement.');
  process.exit(1);
}

const endIndex = endIndexRegexMatch.index + endIndexRegexMatch[0].length;

const newReturn = `return (
    <footer className="relative w-full overflow-hidden select-none bg-white font-sans text-slate-900 border-t border-slate-200/50 pt-24 pb-12">
      <div className="max-w-[1440px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Let's build something awesome & details */}
          <div className="lg:col-span-6 space-y-12 text-left pr-4">
            <div className="flex items-start gap-6">
              <div className="w-[40px] md:w-[60px] h-[1px] bg-slate-400 mt-5 hidden sm:block" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tighter leading-[1.1] text-slate-900 lowercase">
                let&apos;s build something<br/>awesome
              </h2>
            </div>

            <div className="flex flex-col gap-10 pt-4">
              
              {/* Phone number */}
              <div className="flex items-start gap-6">
                <div className="w-[40px] md:w-[60px] h-[1px] bg-slate-400 mt-2.5 hidden sm:block" />
                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-medium text-slate-400 tracking-wide">Phone number</span>
                  <div className="text-[13px] font-extrabold flex flex-col gap-2 text-slate-900">
                    <a href="tel:+919873282812" className="hover:text-[#f27820] transition-colors">+91-9873.282.812</a>
                    <a href="tel:+14694410125" className="hover:text-[#f27820] transition-colors">+1 469-441-0125</a>
                  </div>
                </div>
              </div>

              {/* Mail at */}
              <div className="flex items-start gap-6">
                <div className="w-[40px] md:w-[60px] h-[1px] bg-slate-400 mt-2.5 hidden sm:block" />
                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-medium text-slate-400 tracking-wide">Mail at</span>
                  <div className="text-[13px] font-extrabold text-slate-900">
                    <a href="mailto:info@designdot.co" className="hover:text-[#f27820] transition-colors">info@designdot.co</a>
                  </div>
                </div>
              </div>

              {/* Direct Chat */}
              <div className="flex items-start gap-6">
                <div className="w-[40px] md:w-[60px] h-[1px] bg-slate-400 mt-2.5 hidden sm:block" />
                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-medium text-slate-400 tracking-wide">Direct Chat</span>
                  <div className="text-[14px] font-extrabold text-slate-900 flex items-center gap-1.5">
                    <svg className="w-4 h-4 fill-current text-slate-900" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.727-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.896 14.1 1.87 11.666 1.872 6.232 1.872 1.81 6.29 1.806 11.724c-.001 1.677.443 3.31 1.285 4.757l-.973 3.555 3.639-.954zm10.974-6.843c-.27-.136-1.602-.79-1.85-.88-.25-.09-.43-.136-.61.136-.18.27-.69.88-.85 1.05-.15.18-.3.2-.57.06-.27-.136-1.136-.418-2.16-1.332-.798-.712-1.337-1.59-1.493-1.86-.15-.27-.015-.417.12-.553.124-.122.27-.318.4-.478.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.477-.06-.136-.61-1.477-.84-2.02-.22-.53-.45-.45-.61-.46-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.01 2.79 1.15 2.97c.14.18 1.99 3.038 4.82 4.258.67.29 1.2.46 1.61.59.68.21 1.3.18 1.78.11.54-.08 1.6-.66 1.83-1.28.22-.61.22-1.14.16-1.28-.07-.14-.25-.22-.52-.36z" /></svg>
                    <a
                      href="https://api.whatsapp.com/send?phone=+919873282812&text=Hii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#f27820] transition-colors"
                    >
                      Whats app
                    </a>
                  </div>
                </div>
              </div>

              {/* Connect */}
              <div className="flex items-start gap-6">
                <div className="w-[40px] md:w-[60px] h-[1px] bg-slate-400 mt-2.5 hidden sm:block" />
                <div className="flex flex-col gap-3">
                  <span className="text-[12px] font-medium text-slate-400 tracking-wide">Connect with us</span>
                  <div className="flex gap-3 text-slate-800">
                    <a href="#" className="w-6 h-6 border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors" aria-label="Facebook">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M9 8H7v3h2v9h3v-9h2.72L15 8h-3V6.12C12 5.5 12.5 5 13 5h2V2h-3a4 4 0 0 0-4 4v2z" /></svg>
                    </a>
                    <a href="#" className="w-6 h-6 border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors" aria-label="LinkedIn">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
                    </a>
                    <a href="#" className="w-6 h-6 border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors" aria-label="Twitter">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                    </a>
                    <a href="#" className="w-6 h-6 border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors" aria-label="YouTube">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                    </a>
                    <a href="#" className="w-6 h-6 border border-slate-300 rounded-full flex items-center justify-center hover:bg-slate-100 transition-colors" aria-label="Instagram">
                      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204 013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Write us Proposal Form */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-[20px] font-extrabold tracking-wide text-slate-900 flex items-center mb-6">
              Feel Free To Write Us<span className="text-[#f27820]">.</span>
            </h3>

            {isSubmitted ? (
              <div className="bg-[#363266] p-10 rounded-[12px] text-center flex flex-col items-center justify-center min-h-[380px] shadow-lg">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mb-4">
                  <Check size={32} />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Proposal Request Received</h4>
                <p className="text-white/70 text-sm">Our team will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-sm bg-[#363266] p-8 md:p-10 rounded-[12px] shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] font-sans">
                
                <div className="space-y-4">
                  <div>
                    <label className="text-[12px] font-medium text-white block mb-1.5 tracking-wide">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#edf2f9] border-0 rounded-[2px] py-2.5 px-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f27820] text-[13px] font-medium"
                    />
                  </div>
                  
                  <div>
                    <label className="text-[12px] font-medium text-white block mb-1.5 tracking-wide">
                      E-mail ID <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#edf2f9] border-0 rounded-[2px] py-2.5 px-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f27820] text-[13px] font-medium"
                    />
                  </div>
                  
                  <div>
                    <label className="text-[12px] font-medium text-white block mb-1.5 tracking-wide">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#edf2f9] border-0 rounded-[2px] py-2.5 px-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#f27820] text-[13px] font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-medium text-white block mb-1.5 tracking-wide">
                    Select a Budget Range <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-transparent border-0 border-b border-white/20 rounded-none py-2 px-0 text-white focus:outline-none focus:border-white/50 text-[13px] font-medium appearance-none"
                    >
                      <option value="" disabled className="text-slate-900 bg-white">-- Please select --</option>
                      <option value="Still Evaluating" className="text-slate-900 bg-white">Still Evaluating</option>
                      <option value="Less than $50K" className="text-slate-900 bg-white">Less than $50K</option>
                      <option value="$50K - $100K" className="text-slate-900 bg-white">$50K - $100K</option>
                      <option value="$100 - $250K" className="text-slate-900 bg-white">$100 - $250K</option>
                      <option value="More than $250K" className="text-slate-900 bg-white">More than $250K</option>
                    </select>
                    <div className="absolute right-1 top-2.5 pointer-events-none text-white/50 text-[10px]">▼</div>
                  </div>
                </div>

                <div>
                  <label className="text-[12px] font-medium text-white block mb-1.5 tracking-wide">
                    Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={1}
                    value={formData.idea}
                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-white/20 rounded-none py-2 px-0 text-white focus:outline-none focus:border-white/50 text-[13px] font-medium resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 pt-4">
                  <label className="flex items-center gap-2.5 text-white/90 text-[11px] font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.nda}
                      onChange={(e) => setFormData({ ...formData, nda: e.target.checked })}
                      className="rounded-sm border-white/30 bg-transparent text-[#f27820] focus:ring-0 w-3.5 h-3.5 cursor-pointer"
                    />
                    <span>Include Copy of a Non-Disclosure Agreement</span>
                  </label>

                  <div className="flex items-center gap-3">
                    <span className="text-white font-medium text-[13px]">3 + 7 =</span>
                    <input
                      type="text"
                      required
                      value={captchaAnswer}
                      onChange={(e) => setCaptchaAnswer(e.target.value)}
                      className="w-14 bg-[#2b274c] border border-white/10 rounded-[2px] py-1.5 px-2 text-center text-white focus:outline-none focus:border-white/30 text-[13px]"
                    />
                  </div>
                </div>

                {captchaError && (
                  <p className="text-red-400 text-xs font-semibold mt-2">Incorrect Captcha Answer.</p>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#dce1e8] hover:bg-white text-slate-900 transition-colors py-3.5 rounded-[3px] font-extrabold text-[12px] tracking-wide uppercase cursor-pointer focus:outline-none"
                  >
                    REQUEST PROPOSAL
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-10 flex flex-col items-center mt-20">
        {/* Top Divider Line with Center Circle */}
        <div className="border-t border-slate-300 w-full mb-8 relative flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border border-slate-300 bg-white absolute flex items-center justify-center">
            <div className="w-4 h-[1px] bg-slate-300" />
          </div>
        </div>

        {/* Working Hours & Local Time Strip */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 w-full pb-8">
          <div className="flex flex-col gap-5 text-left">
            <span className="text-slate-400 text-[13px] font-medium tracking-wide">Working Hours</span>
            <div className="flex flex-col gap-3">
              <span className="text-slate-900 text-[12px] font-extrabold tracking-wide">/ MON - FRI, 9AM TO 6PM /</span>
              {/* Privacy Policy links */}
              <div className="flex flex-wrap gap-3 text-[12px] font-extrabold text-slate-800 items-center">
                <a href="https://dd.mocup.in/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Privacy Policy</a>
                <span className="text-slate-300">|</span>
                <a href="https://dd.mocup.in/cookies-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Cookies Policy</a>
                <span className="text-slate-300">|</span>
                <a href="https://dd.mocup.in/terms-conditions" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Terms & Conditions</a>
                <span className="text-slate-300">|</span>
                <a href="https://dd.mocup.in/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-[#f27820] transition-colors">Refund Policy</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 text-right items-end self-start">
            <span className="text-slate-400 text-[13px] font-medium tracking-wide">Local Time</span>
            <span className="text-slate-900 text-[12px] font-extrabold tracking-wide">{localTime}</span>
          </div>
        </div>

        {/* Bottom Divider Line */}
        <div className="border-t border-slate-300 w-full mb-6" />

        {/* Happiness, Achievements, Brochure & Copyright Column block */}
        <div className="flex flex-col lg:flex-row justify-between items-end w-full gap-8 py-4">

          {/* Happiness Guarantee */}
          <div className="flex items-center gap-6 text-left max-w-[400px]">
            <img
              src="https://dd.mocup.in/assets/web/images/design-wheel.png"
              alt="Happiness guarantee"
              className="w-24 h-24 object-contain flex-shrink-0"
              loading="lazy"
            />
            <div className="space-y-1.5">
              <h5 className="text-[13px] font-extrabold tracking-wide text-slate-900 uppercase">Happiness guarantee</h5>
              <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                If you&apos;re not happy, we&apos;re not happy. We work tirelessly to make sure your Designdot experience is delightful.<br/>That&apos;s why we offer the DesignDot Happiness Guarantee.
              </p>
            </div>
          </div>

          {/* Achievement */}
          <div className="flex flex-col gap-3 max-w-[300px]">
            <h5 className="text-[13px] font-extrabold tracking-wide text-slate-900 uppercase">OUR ACHIEVEMENT.</h5>
            <div className="flex gap-4">
              <img src="https://dd.mocup.in/assets/web/images/footer-award-2.png" alt="Award 2" className="h-[72px] object-contain" loading="lazy" />
              <img src="https://dd.mocup.in/assets/web/images/footer-award-1.png" alt="Award 1" className="h-[72px] border border-yellow-400 p-1 object-contain" loading="lazy" />
            </div>
          </div>

          {/* Brochure & Copyright Column */}
          <div className="flex flex-col gap-2 text-right">
            <a
              href="https://drive.google.com/file/d/1m0wCjfT7xhCWghgZBxrkRXdDrwZkpaue/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f27820] hover:text-black font-extrabold text-[13px] tracking-wide transition-colors cursor-pointer uppercase"
            >
              Download Brochure
            </a>
            <p className="text-[10px] text-slate-700 font-bold tracking-widest uppercase mt-2">
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
        className="fixed bottom-6 right-6 z-50 bg-[#25d366] text-white p-3 rounded-full shadow-lg hover:bg-[#128c7e] transition-all hover:scale-105 flex items-center justify-center cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.727-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98C16.584 1.896 14.1 1.87 11.666 1.872 6.232 1.872 1.81 6.29 1.806 11.724c-.001 1.677.443 3.31 1.285 4.757l-.973 3.555 3.639-.954zm10.974-6.843c-.27-.136-1.602-.79-1.85-.88-.25-.09-.43-.136-.61.136-.18.27-.69.88-.85 1.05-.15.18-.3.2-.57.06-.27-.136-1.136-.418-2.16-1.332-.798-.712-1.337-1.59-1.493-1.86-.15-.27-.015-.417.12-.553.124-.122.27-.318.4-.478.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.477-.06-.136-.61-1.477-.84-2.02-.22-.53-.45-.45-.61-.46-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4s1.01 2.79 1.15 2.97c.14.18 1.99 3.038 4.82 4.258.67.29 1.2.46 1.61.59.68.21 1.3.18 1.78.11.54-.08 1.6-.66 1.83-1.28.22-.61.22-1.14.16-1.28-.07-.14-.25-.22-.52-.36z" />
        </svg>
      </a>

    </footer>
  );
}
`;

const prefix = content.substring(0, startIndex);
fs.writeFileSync(path, prefix + newReturn, 'utf8');
console.log('Footer updated successfully.');
