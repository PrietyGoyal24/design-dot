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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>

        {/* Left Section: Testimonials & Client info */}
        <div className="w-full md:w-1/2 bg-slate-950 text-white p-8 flex flex-col justify-between select-none">
          <div>
            <h3 className="text-xl font-bold text-amber-500 mb-2">Leaving already?</h3>
            <p className="text-slate-400 text-sm mb-6">
              Hear from our clients and why 5000+ businesses trust Designdot
            </p>

            {/* Slider */}
            <div className="relative overflow-hidden min-h-[160px] flex items-center">
              {TESTIMONIALS.map((testi, idx) => (
                <div
                  key={testi.name}
                  className={`transition-all duration-500 absolute w-full ${
                    idx === activeSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  <p className="italic text-slate-300 text-sm mb-4 leading-relaxed">
                    “{testi.text}”
                  </p>
                  <h6 className="font-bold text-sm text-white mb-0">{testi.name}</h6>
                  <span className="text-xs text-slate-500">{testi.role}, {testi.company}</span>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-4">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`w-2 h-2 rounded-full cursor-pointer transition-colors ${
                    idx === activeSlide ? 'bg-amber-500' : 'bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom info */}
          <div className="mt-8 pt-6 border-t border-slate-800">
            <span className="text-xs text-slate-400 block mb-3">
              Empowering businesses worldwide with <strong className="text-amber-500">5000+</strong> custom-built apps that drive growth.
            </span>
            <div className="flex gap-4">
              <span className="text-xs bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-400">Fortis</span>
              <span className="text-xs bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-400">Panasonic</span>
              <span className="text-xs bg-slate-900 border border-slate-800 px-2.5 py-1 rounded text-slate-400">British Council</span>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
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
              <h3 className="text-lg md:text-xl font-extrabold mb-1 tracking-tight text-slate-900 leading-tight">
                Tell us what you need,
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                and we'll get back with a cost and timeline estimate
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-slate-200 focus:border-slate-800 outline-none py-2 text-slate-900 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="E-Mail ID*"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b border-slate-200 focus:border-slate-800 outline-none py-2 text-slate-900 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Describe Your Project/Idea In Brief"
                    rows={1}
                    value={formData.idea}
                    onChange={(e) => setFormData({ ...formData, idea: e.target.value })}
                    className="w-full border-b border-slate-200 focus:border-slate-800 outline-none py-2 text-slate-900 transition-colors resize-none"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={formData.prefix}
                    onChange={(e) => setFormData({ ...formData, prefix: e.target.value })}
                    className="border-b border-slate-200 focus:border-slate-800 outline-none py-2 bg-transparent text-slate-700"
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
                    className="w-full border-b border-slate-200 focus:border-slate-800 outline-none py-2 text-slate-900 transition-colors"
                  />
                </div>
                
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-slate-500 font-bold bg-slate-100 px-3 py-1 rounded">3 + 2 =</span>
                  <input
                    type="text"
                    required
                    placeholder="5"
                    className="w-16 border-b border-slate-200 focus:border-slate-800 outline-none py-1 text-center font-bold text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f27820] hover:bg-[#d56113] text-white py-3 rounded-lg font-bold tracking-wider cursor-pointer shadow-md transition-colors mt-6 flex items-center justify-center gap-2"
                >
                  <Send size={16} /> SCHEDULE CONSULTATION
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
