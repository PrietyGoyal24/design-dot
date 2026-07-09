'use client';

import { useState, useEffect } from 'react';
import { X, Send, Check } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Neeraj Tiwari",
    role: "Director - Digital Engineering",
    company: "Americana Group (Kuwait Food Co.)",
    text: "We approached Designdot with a clear vision to build a robust and future-ready platform that could seamlessly integrate with the busy lifestyle of our customers while uplifting their overall experience and giving us a competitive edge."
  },
  {
    name: "Shashank Pokhriyal",
    role: "CEO",
    company: "AR Group",
    text: "DesignDot is a group of highly professional people. They are highly recommended for all kinds of software and digital transformation design work."
  }
];

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    idea: '',
    prefix: '+91',
    phone: '',
    captcha: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', idea: '', prefix: '+91', phone: '', captcha: '' });
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-black/10 animate-in fade-in duration-200 pointer-events-none">
      <div className="relative w-full max-w-5xl flex flex-col gap-4 max-h-[95vh] pointer-events-auto mt-[80px]">
        {/* Main Modal Box */}
        <div className="bg-white text-slate-900 rounded-[12px] overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-slate-300 hover:text-slate-500 transition-colors cursor-pointer"
          >
            <X size={20} strokeWidth={3} />
          </button>

          {/* Left Section: Testimonials & Client info */}
          <div className="w-full md:w-1/2 bg-[#fffaf5] p-8 md:p-12 flex flex-col justify-center select-none relative">
            <h3 className="text-[22px] font-bold text-[#f27820] mb-3 font-walsheim">Leaving Already?</h3>
            <p className="text-slate-900 text-[15px] font-bold mb-8 leading-snug max-w-[280px]">
              Hear from our clients and why 5000+ businesses trust Designdot
            </p>

            {/* Testimonial Card */}
            <div className="relative bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center mt-4">
              {/* Previous/Next Arrows */}
              <button className="absolute left-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-colors cursor-pointer shadow-sm z-10">
                <span className="text-lg leading-none font-bold">‹</span>
              </button>
              <button className="absolute right-[-16px] top-1/2 -translate-y-1/2 w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-colors cursor-pointer shadow-sm z-10">
                <span className="text-lg leading-none font-bold">›</span>
              </button>

              <div className="relative w-full overflow-hidden flex flex-col items-center">
                {TESTIMONIALS.map((testi, idx) => (
                  <div
                    key={testi.name}
                    className={`transition-all duration-500 flex flex-col items-center w-full ${
                      idx === activeSlide ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="w-12 h-12 mb-3 rounded-full overflow-hidden border border-slate-100">
                      <img src="https://dd.mocup.in/assets/web/images/client/Neeraj-Tiwari.webp" alt={testi.name} className="w-full h-full object-cover" />
                    </div>
                    <h6 className="font-bold text-[16px] text-slate-900 mb-2">{testi.name}</h6>
                    <div className="border border-slate-300 rounded-[20px] px-4 py-1.5 mb-5 inline-block">
                      <span className="text-[11px] text-slate-500 italic block">{testi.role}</span>
                      <span className="text-[11px] text-slate-500 italic block">{testi.company}</span>
                    </div>
                    <p className="font-semibold text-slate-800 text-[13px] leading-relaxed mb-2 px-4">
                      “{testi.text}”
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Check size={36} />
              </div>
              <h3 className="text-xl font-bold mb-1">Proposal Requested!</h3>
              <p className="text-slate-500 text-sm">We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <>
              <h3 className="text-[20px] font-bold mb-1 text-[#f27820] font-walsheim">
                Tell Us What You Need,
              </h3>
              <p className="text-[20px] text-[#f27820] font-bold mb-8 font-walsheim">
                And We'll Get Back With A Cost And<br/>Timeline Estimate
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 text-[14px]">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-slate-300 focus:border-[#f27820] outline-none py-2 text-slate-900 transition-colors placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="E-Mail ID*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b border-slate-300 focus:border-[#f27820] outline-none py-2 text-slate-900 transition-colors placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe Your Project/Idea In Brief"
                    rows={1}
                    value={formData.idea}
                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                    className="w-full border-b border-slate-300 focus:border-[#f27820] outline-none py-2 text-slate-900 transition-colors resize-none placeholder:text-slate-400"
                  />
                </div>
                <div className="flex gap-4">
                  <select
                    value={formData.prefix}
                    onChange={(e) => setFormData({ ...formData, prefix: e.target.value })}
                    className="border-b border-slate-300 focus:border-[#f27820] outline-none py-2 bg-transparent text-slate-700 w-20"
                  >
                    <option>+91</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input
                    type="tel"
                    required
                    placeholder="Contact Number*"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-b border-slate-300 focus:border-[#f27820] outline-none py-2 text-slate-900 transition-colors placeholder:text-slate-400"
                  />
                </div>
                
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-800 font-bold text-[14px]">3 + 2 =</span>
                    <input
                      type="text"
                      required
                      className="w-16 border-b border-slate-300 focus:border-[#f27820] outline-none py-1 text-center font-bold text-slate-900"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex-1 bg-[#f27820] hover:bg-[#d56113] text-white py-3.5 rounded-[4px] font-bold text-[13px] tracking-wider cursor-pointer transition-colors"
                  >
                    SCHEDULE FREE CONSULTATION
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-white rounded-[12px] shadow-2xl p-5 px-8 flex flex-col md:flex-row items-center justify-between">
          <span className="text-[14px] text-[#1a1a1a] font-bold leading-tight max-w-lg">
            Empowering businesses worldwide with <strong className="text-[#f27820]">5000+</strong> custom-built apps that drive growth and fuel innovation.
          </span>
          <div className="flex gap-8 mt-4 md:mt-0 opacity-80 mix-blend-multiply">
            <img src="https://dd.mocup.in/assets/web/images/client/fortis.webp" alt="Fortis" className="h-6 object-contain" />
            <img src="https://dd.mocup.in/assets/web/images/client/panasonic.webp" alt="Panasonic" className="h-6 object-contain" />
            <img src="https://dd.mocup.in/assets/web/images/client/british.webp" alt="British Council" className="h-6 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}
