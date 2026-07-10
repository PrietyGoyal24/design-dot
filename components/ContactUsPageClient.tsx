'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ContactUsPageClient() {
  // Capture local time dynamic rendering
  const [localTime, setLocalTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      };
      // Format to get `/ Fri, 8 PM /` style
      const formatted = new Intl.DateTimeFormat('en-US', options).format(new Date());
      // Adjust format to match "/ Fri, 8:00 PM /" style
      setLocalTime(`/ ${formatted.replace(',', '')} /`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    organisation: '',
    location: '',
    projectBudget: '',
    service: '',
    description: '',
    captchaInput: '',
  });

  const [captchaCode, setCaptchaCode] = useState('7198');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Generate a random captcha code on mount
  useEffect(() => {
    regenerateCaptcha();
  }, []);

  const regenerateCaptcha = () => {
    const chars = '0123456789';
    let code = '';
    for (let i = 0; i < 4; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Check captcha
    if (formData.captchaInput !== captchaCode) {
      setErrorMessage('Security code is incorrect. Please try again.');
      return;
    }

    // Success simulation
    setFormSubmitted(true);
  };

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
              Looking for something special? Contact us now and let your ideas become reality!
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
              <source src="https://dd.mocup.in/assets/web/images/video/contact-video.mp4" type="video/mp4" />
            </video>

            {/* Mobile Video background */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover opacity-85 block md:hidden"
            >
              <source src="https://dd.mocup.in/assets/web/images/video/contact-mobile.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35" />

            {/* Video overlay texts */}
            <div className="absolute left-[30px] md:left-[60px] bottom-[40px] md:bottom-[60px] text-left z-10">
              <h1 
                className="text-[42px] md:text-[70px] leading-none font-extrabold tracking-widest text-[#f58331] uppercase mb-1"
                style={{ fontFamily: 'GT-Walsheim-Pro-Black, sans-serif' }}
              >
                CONTACT US<span className="inline-block w-4 h-4 rounded-full bg-white ml-2"></span>
              </h1>
              <p 
                className="text-[18px] md:text-[24px] uppercase text-[#f58331] tracking-wide"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif', fontWeight: 800 }}
              >
                timing is everything<span className="inline-block w-2.5 h-2.5 rounded-full bg-[#f58331] ml-2"></span>
              </p>
            </div>
          </div>

          {/* Let's talk description paragraph */}
          <div className="mt-12 max-w-[900px] text-left">
            <h2 
              className="text-[32px] md:text-[48px] font-extrabold text-[#111] uppercase tracking-wide mb-4"
              style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
            >
              Let’s talk<span className="inline-block w-2 h-2 rounded-full bg-black ml-1.5 align-baseline"></span>
            </h2>
            <p 
              className="text-[16px] md:text-[18px] text-[#4a4a4a] leading-[1.8] font-normal"
              style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
            >
              No matter what your ask—big or small—we’re ready to talk. We’re all about working together to solve your gnarliest. Just send us your questions or concerns by sending a proposal and we will give you the help you need.
            </p>
          </div>
        </div>

        {/* Section One: Form and Guidelines */}
        <section className="bg-white border-t border-gray-150 py-16">
          <div className="max-w-[1240px] mx-auto px-6 md:px-12">
            
            {/* Divider styling line above section content */}
            <div className="flex justify-between items-center w-full mb-12">
              <div className="w-[120px] md:w-[160px] h-[1.5px] bg-[#d2d2d2] shrink-0" />
              <div 
                className="text-[18px] md:text-[20px] font-bold text-[#111111] tracking-wide uppercase"
                style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
              >
                Contact Form<span className="inline-block w-1.5 h-1.5 bg-black rounded-full ml-1"></span>
              </div>
            </div>

            {/* Grid wrapper */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Interactive Form */}
              <div className="lg:col-span-6 w-full lg:pr-10">
                {formSubmitted ? (
                  <div className="thank-you-contact-page bg-[#fcf5f5] border border-gray-100 p-8 rounded-xl text-left">
                    <h3 className="text-[#f27820] text-[28px] font-extrabold uppercase mb-4" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                      Thank You!
                    </h3>
                    <p className="text-[#111] text-[18px] leading-[1.7]" style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}>
                      Your request has been successfully submitted. Our business development team will review details and contact you shortly in the next 24 hours.
                    </p>
                    <button 
                      onClick={() => setFormSubmitted(false)}
                      className="mt-6 bg-[#083169] text-white font-bold px-6 py-3 text-[14px] uppercase tracking-wider hover:bg-black transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left">
                    {errorMessage && (
                      <div className="bg-red-50 text-red-600 border border-red-150 p-4 rounded text-[14px] font-bold">
                        {errorMessage}
                      </div>
                    )}

                    <div className="flex flex-col gap-1">
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="name *" 
                        className="w-full border border-gray-300 bg-[#fcf5f5] h-[52px] text-[18px] text-[#222] placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                        style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <input 
                        type="number" 
                        name="phone" 
                        required 
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="phone *" 
                        className="w-full border border-gray-300 bg-[#fcf5f5] h-[52px] text-[18px] text-[#222] placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                        style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <input 
                        type="email" 
                        name="email" 
                        required 
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="email *" 
                        className="w-full border border-gray-300 bg-[#fcf5f5] h-[52px] text-[18px] text-[#222] placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                        style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <input 
                        type="text" 
                        name="organisation" 
                        value={formData.organisation}
                        onChange={handleInputChange}
                        placeholder="organisation" 
                        className="w-full border border-gray-300 bg-[#fcf5f5] h-[52px] text-[18px] text-[#222] placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                        style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <input 
                        type="text" 
                        name="location" 
                        required
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="location *" 
                        className="w-full border border-gray-300 bg-[#fcf5f5] h-[52px] text-[18px] text-[#222] placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                        style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <select 
                        name="projectBudget" 
                        value={formData.projectBudget}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 bg-[#fcf5f5] h-[52px] text-[18px] text-[#666] px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm"
                        style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                      >
                        <option value="">Project Budget...</option>
                        <option value="Not Sure">Not Sure</option>
                        <option value="$3000 to $10000">$3000 to $10000</option>
                        <option value="$10000 to $20000">$10000 to $20000</option>
                        <option value="$20000 to $30000">$20000 to $30000</option>
                        <option value="$30000 to $50000">$30000 to $50000</option>
                        <option value="$50000 to $100000">$50000 to $100000</option>
                        <option value="$100000 and above">$100000 and above</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <input 
                        type="text" 
                        name="service" 
                        required 
                        value={formData.service}
                        onChange={handleInputChange}
                        placeholder="services *" 
                        className="w-full border border-gray-300 bg-[#fcf5f5] h-[52px] text-[18px] text-[#222] placeholder:text-gray-400 px-[20px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase"
                        style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <input 
                        type="file" 
                        name="file_data"
                        className="w-full border border-gray-300 bg-[#fcf5f5] h-[52px] text-[15px] text-gray-500 pt-[12px] px-[20px] focus:outline-none rounded-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <textarea 
                        name="description" 
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Description" 
                        className="w-full border border-gray-300 bg-[#fcf5f5] h-[160px] text-[18px] text-[#222] placeholder:text-gray-400 px-[20px] py-[12px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm lowercase resize-none"
                        style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                      />
                    </div>

                    {/* Interactive Captcha Section */}
                    <div className="flex items-center gap-[10px] mt-2">
                      <input 
                        type="text" 
                        name="captchaInput" 
                        required 
                        value={formData.captchaInput}
                        onChange={handleInputChange}
                        placeholder="Enter Security Code → *" 
                        className="flex-1 border border-gray-300 bg-[#fcf5f5] h-[52px] text-[16px] text-[#222] px-[15px] focus:outline-none focus:border-[#f27820] transition-colors rounded-sm"
                        style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                      />
                      <div className="flex items-center justify-center bg-[#f58331] text-white text-[20px] font-bold tracking-widest px-6 h-[52px] rounded-sm select-none">
                        {captchaCode}
                      </div>
                      <button 
                        type="button" 
                        onClick={regenerateCaptcha}
                        className="text-gray-500 hover:text-black font-semibold text-[13px] px-2 select-none tracking-wide"
                      >
                        REFRESH
                      </button>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      className="w-full bg-[#083169] text-white hover:bg-black text-[20px] font-bold h-[68px] border border-[#d3d3d3] transition-colors tracking-wide mt-5"
                      style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                    >
                      SUBMIT
                    </button>
                  </form>
                )}
              </div>

              {/* Right Column: Guidelines */}
              <div className="lg:col-span-6 flex flex-col gap-10 mt-6 lg:mt-0 text-left lg:pl-[40px]">
                
                {/* Rule 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-[100px] h-[1.5px] bg-[#d2d2d2] mt-3 shrink-0" />
                  <div className="flex flex-col">
                    <b className="text-[17px] text-black font-bold uppercase tracking-wide mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                      Put Forward Your Requirement
                    </b>
                    <p className="text-[14px] text-[#555] leading-[1.7]" style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}>
                      Fill up the form given on the right side of this page, and within 24 hours, one of our business development executive will reach you for further communication.
                    </p>
                  </div>
                </div>

                {/* Rule 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-[100px] h-[1.5px] bg-[#d2d2d2] mt-3 shrink-0" />
                  <div className="flex flex-col">
                    <b className="text-[17px] text-black font-bold uppercase tracking-wide mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                      Sign Non-Disclosure Agreement:
                    </b>
                    <p className="text-[14px] text-[#555] leading-[1.7]" style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}>
                      Through NDA, we make you feel secure. Your idea will be yours. Signing up an NDA assures you the privacy of your idea and project.
                    </p>
                  </div>
                </div>

                {/* Rule 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-[100px] h-[1.5px] bg-[#d2d2d2] mt-3 shrink-0" />
                  <div className="flex flex-col">
                    <b className="text-[17px] text-black font-bold uppercase tracking-wide mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                      Analyzing Your Requirement:
                    </b>
                    <p className="text-[14px] text-[#555] leading-[1.7]" style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}>
                      As soon as you signed up the NDA, we shall analyze the requirements put forward by you. Our team of experts will read and analyze the same, and will get back to you within few hours.
                    </p>
                  </div>
                </div>

                {/* Rule 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-[100px] h-[1.5px] bg-[#d2d2d2] mt-3 shrink-0" />
                  <div className="flex flex-col">
                    <b className="text-[17px] text-black font-bold uppercase tracking-wide mb-1" style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}>
                      Estimated Budget:
                    </b>
                    <p className="text-[14px] text-[#555] leading-[1.7]" style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}>
                      Once our team of <span className="font-extrabold text-[#111]">experts</span> and business development managers are done with analyzing the project and compilation of necessary resources required for the project, <span className="font-extrabold text-[#111]">we shall send you</span> with estimated budget or cost and estimated time required for completion of project successfully.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* Section Two: Address Cards */}
        <section className="bg-white border-t border-gray-150 py-16">
          <div className="max-w-[1240px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Card 1: India */}
              <div 
                className="group flex flex-col justify-between items-start h-[560px] p-9 bg-[#fcf5f5] hover:bg-[#f47820] hover:text-white transition-all duration-[900ms] border-[5px] border-white rounded-[20px] shadow-sm select-none"
              >
                <img 
                  src="https://dd.mocup.in/assets/web/images/indian-flag.png" 
                  alt="India Flag" 
                  className="w-[71px] object-contain"
                />
                
                <div className="text-left font-sans select-none text-[#111] group-hover:text-white transition-colors duration-500">
                  <b 
                    className="text-[18px] tracking-widest block uppercase mb-6"
                    style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                  >
                    INDIA
                  </b>
                  <b 
                    className="text-[17px] tracking-wide block uppercase leading-[1.66] mb-8 font-normal"
                    style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                  >
                    <span style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif', fontWeight: 900 }}>DESIGNDOT TECHNOLOGIES</span> <br/>PVT LTD
                  </b>
                  
                  <p 
                    className="text-[14px] md:text-[15px] leading-[1.8] lowercase tracking-wide block mb-8"
                    style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                  >
                    RZ 1/3, 3RD FLOOR, <br/>RAJNAGAR 1, DWARKA,<br/>
                    NEW DELHI - 110077
                  </p>
                  
                  <a 
                    href="tel:+91-9873282812" 
                    className="text-[17px] font-bold uppercase tracking-wide block mb-8 hover:underline text-[#f27820] group-hover:text-white transition-colors"
                  >
                    +91 9873-282-812
                  </a>

                  <p 
                    className="text-[15px] font-bold uppercase tracking-widest block mb-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                  >
                    INDIA
                  </p>
                </div>
              </div>

              {/* Card 2: Canada */}
              <div 
                className="group flex flex-col justify-between items-start h-[560px] p-9 bg-[#fcf5f5] hover:bg-[#418fce] hover:text-white transition-all duration-[900ms] border-[5px] border-white rounded-[20px] shadow-sm select-none"
              >
                <img 
                  src="https://dd.mocup.in/assets/web/images/canada-flag.png" 
                  alt="Canada Flag" 
                  className="w-[71px] object-contain"
                />
                
                <div className="text-left font-sans select-none text-[#111] group-hover:text-white transition-colors duration-500">
                  <b 
                    className="text-[18px] tracking-widest block uppercase mb-6"
                    style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                  >
                    CANADA
                  </b>
                  <b 
                    className="text-[17px] tracking-wide block uppercase leading-[1.66] mb-8 font-normal"
                    style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                  >
                    <span style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif', fontWeight: 900 }}>DESIGNDOT TECHNOLOGIES</span> <br/>PVT LTD
                  </b>
                  
                  <p 
                    className="text-[14px] md:text-[15px] leading-[1.8] lowercase tracking-wide block mb-8"
                    style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                  >
                    54 Hanbury <br/>Crescent L6X5N7, <br/>Brampton Ontario
                  </p>
                  
                  {/* Empty text row replacement to match height */}
                  <div className="h-[26px] mb-8" />

                  <p 
                    className="text-[15px] font-bold uppercase tracking-widest block mb-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                  >
                    Canada
                  </p>
                </div>
              </div>

              {/* Card 3: US */}
              <div 
                className="group flex flex-col justify-between items-start h-[560px] p-9 bg-[#fcf5f5] hover:bg-[#fcf5f5] transition-all duration-[900ms] border-[5px] border-white rounded-[20px] shadow-sm select-none"
              >
                <img 
                  src="https://dd.mocup.in/assets/web/images/usa-icon-c.png" 
                  alt="US Flag" 
                  className="w-[71px] object-contain"
                />
                
                <div className="text-left font-sans select-none text-[#111]">
                  <b 
                    className="text-[18px] tracking-widest block uppercase mb-6"
                    style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                  >
                    US
                  </b>
                  <b 
                    className="text-[17px] tracking-wide block uppercase leading-[1.66] mb-8 font-normal"
                    style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                  >
                    <span style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif', fontWeight: 900 }}>DESIGNDOT TECHNOLOGIES</span> <br/>PVT LTD
                  </b>
                  
                  <p 
                    className="text-[14px] md:text-[15px] leading-[1.8] lowercase tracking-wide block mb-8"
                    style={{ fontFamily: 'GTWalsheimPro-Regular, sans-serif' }}
                  >
                    13151 Emily Rd, <br/>Suite- 135,<br/>
                    Dallas, TX - 75240
                  </p>
                  
                  <a 
                    href="tel:+1-4694410125" 
                    className="text-[17px] font-bold uppercase tracking-wide block mb-8 hover:underline text-[#f27820] transition-colors"
                  >
                    +1 469-441-0125
                  </a>

                  <p 
                    className="text-[15px] font-bold uppercase tracking-widest block mb-0 opacity-40"
                    style={{ fontFamily: 'GTWalsheimPro-Bold, sans-serif' }}
                  >
                    US
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Reusable Footer Component */}
      <Footer />
    </div>
  );
}
