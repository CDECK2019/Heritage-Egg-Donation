
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#fcfaf7] min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 text-center bg-stone-100 border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-semibold mb-4 block underline underline-offset-8 decoration-stone-300">Inquiry</span>
          <h1 className="text-5xl font-serif text-stone-900 mb-6">Connect With Us</h1>
          <p className="text-stone-600 font-light leading-relaxed">
            Begin your conversation with Heritage Egg Donation. We provide discrete, personalized guidance for donors ready to make an extraordinary impact.
          </p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-xl mx-auto">
          {!submitted ? (
            <div className="bg-white p-10 md:p-12 border border-stone-200 shadow-sm rounded-sm animate-in fade-in slide-in-from-bottom-4 duration-700">
              <h2 className="text-2xl font-serif text-stone-900 mb-8 text-center">Inquiry Form</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-500 font-semibold mb-2">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    className="w-full bg-[#fcfaf7] border border-stone-200 p-4 text-stone-900 text-sm focus:ring-1 focus:ring-amber-800 focus:border-amber-800 rounded-sm outline-none transition-all" 
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-500 font-semibold mb-2">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    className="w-full bg-[#fcfaf7] border border-stone-200 p-4 text-stone-900 text-sm focus:ring-1 focus:ring-amber-800 focus:border-amber-800 rounded-sm outline-none transition-all" 
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-500 font-semibold mb-2">Phone Number</label>
                  <input 
                    required 
                    type="tel" 
                    className="w-full bg-[#fcfaf7] border border-stone-200 p-4 text-stone-900 text-sm focus:ring-1 focus:ring-amber-800 focus:border-amber-800 rounded-sm outline-none transition-all" 
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-500 font-semibold mb-2">Preferred Contact Method</label>
                  <select className="w-full bg-[#fcfaf7] border border-stone-200 p-4 text-stone-900 text-sm focus:ring-1 focus:ring-amber-800 focus:border-amber-800 rounded-sm outline-none transition-all">
                    <option>Email</option>
                    <option>Phone Call</option>
                    <option>Text Message</option>
                  </select>
                </div>
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full py-5 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-widest font-bold transition-all shadow-xl rounded-sm"
                  >
                    Submit Information
                  </button>
                </div>
                <p className="text-[10px] text-stone-400 italic text-center leading-relaxed">
                  Heritage Egg Donation maintains strict confidentiality. Your details are never shared with third parties without your explicit consent.
                </p>
              </form>
            </div>
          ) : (
            <div className="text-center py-16 animate-in zoom-in duration-700 bg-white border border-stone-200 p-12 shadow-sm rounded-sm">
              <div className="text-6xl text-amber-800 mb-8 font-serif italic">Thank You</div>
              <h3 className="text-2xl font-serif text-stone-900 mb-4">Your inquiry has been received.</h3>
              <p className="text-stone-500 font-light leading-relaxed mb-10 max-w-sm mx-auto">
                A member of our team will contact you within 24 hours to begin the conversation about your journey with Heritage Egg Donation.
              </p>
              <div className="w-16 h-[1px] bg-stone-200 mx-auto"></div>
              <button 
                onClick={() => window.location.hash = "/"}
                className="mt-10 text-xs uppercase tracking-widest text-amber-800 font-bold hover:underline"
              >
                Return Home
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Trust section */}
      <section className="py-24 bg-stone-100 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-xl font-serif text-stone-900 mb-6">Our Commitment to You</h3>
          <p className="text-stone-500 font-light text-sm leading-relaxed max-w-2xl mx-auto">
            At Heritage, we understand that this is a deeply personal decision. We provide a sanctuary of professional discretion and personalized support for every woman who considers becoming a part of our legacy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
