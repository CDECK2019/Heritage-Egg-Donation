
import React, { useState, useEffect } from 'react';
import { VALUATION_QUESTIONS, BASE_COMPENSATION } from '../constants';
import { CalculatorState } from '../types';

const Calculator: React.FC = () => {
  const [selections, setSelections] = useState<CalculatorState>({});
  const [total, setTotal] = useState(BASE_COMPENSATION);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const premiums = (Object.values(selections) as number[]).reduce((acc, val) => acc + val, 0);
    setTotal(BASE_COMPENSATION + premiums);
  }, [selections]);

  const handleSelect = (questionId: string, premium: number) => {
    setSelections(prev => ({
      ...prev,
      [questionId]: premium
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the 'selections' and contact info to your backend or Formspree here.
    setIsSubmitted(true);
  };

  const progress = Math.round((Object.keys(selections).length / VALUATION_QUESTIONS.length) * 100);

  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-24">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 text-center bg-stone-100 border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-serif text-stone-900 mb-6">Valuation Checklist</h1>
          <p className="text-stone-600 font-light leading-relaxed">
            Your unique combinations of heritage, intellect, and physical gifts are in high demand. Use our estimator to explore the market value of your donation.
          </p>
          <div className="mt-8 inline-block px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-xs text-amber-800 uppercase tracking-widest font-semibold">
            Confidential Assessment
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 mt-16 grid lg:grid-cols-12 gap-12">
        {/* Main Form */}
        <div className="lg:col-span-8">
          <div className="bg-white border border-stone-200 p-8 md:p-12 shadow-sm rounded-sm">
            <div className="mb-12">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs uppercase tracking-widest text-stone-500 font-semibold">Your Progress</span>
                <span className="text-xs font-semibold text-amber-800">{progress}% Complete</span>
              </div>
              <div className="w-full h-1 bg-stone-100">
                <div 
                  className="h-full bg-amber-800 transition-all duration-500" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-16">
              {VALUATION_QUESTIONS.map((q) => (
                <div key={q.id} className="scroll-mt-32">
                  <h3 className="text-xl font-serif text-stone-900 mb-2">{q.label}</h3>
                  {q.description && <p className="text-sm text-stone-500 font-light mb-6">{q.description}</p>}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {q.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSelect(q.id, opt.premium)}
                        className={`text-left p-4 border text-sm transition-all rounded-sm flex justify-between items-center ${
                          selections[q.id] === opt.premium 
                          ? 'border-amber-800 bg-amber-50 text-amber-900 font-medium' 
                          : 'border-stone-200 text-stone-600 hover:border-stone-400'
                        }`}
                      >
                        <span>{opt.label}</span>
                        <span className="text-xs text-stone-400">
                          {opt.premium > 0 ? `+$${opt.premium.toLocaleString()}` : ''}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 p-8 bg-stone-50 border border-stone-200 rounded-sm">
              <h4 className="font-serif text-lg mb-4 text-stone-900 uppercase tracking-tight">Important Considerations</h4>
              <ul className="text-sm text-stone-600 font-light space-y-3 list-disc pl-5">
                <li>Estimated compensation is per donation cycle. Actual payouts vary by agency and demand.</li>
                <li>Final eligibility depends on a BMI in the healthy range (18-28) and full medical/genetic screening.</li>
                <li>Smoking, drug use, or significant family health history may result in disqualification.</li>
                <li>The premiums listed reflect current market disparities and trends in the U.S. fertility industry.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-32">
            <div className="bg-stone-900 text-white p-10 shadow-2xl rounded-sm transition-all duration-500 min-h-[500px] flex flex-col">
              {!isSubmitted ? (
                <>
                  {!showForm ? (
                    <div className="animate-in fade-in duration-500 flex flex-col h-full">
                      <h3 className="text-xs uppercase tracking-[0.2em] text-stone-400 mb-8 font-semibold">Valuation Summary</h3>
                      <div className="space-y-6 mb-10 pb-10 border-b border-stone-800">
                        <div className="flex justify-between items-baseline">
                          <span className="text-stone-400 font-light">Base Rate</span>
                          <span className="font-serif text-xl">${BASE_COMPENSATION.toLocaleString()}</span>
                        </div>
                        {(Object.entries(selections) as [string, number][]).map(([id, premium]) => (
                          premium > 0 && (
                            <div key={id} className="flex justify-between items-baseline group animate-in slide-in-from-right duration-300">
                              <span className="text-xs text-stone-500 uppercase tracking-widest font-light line-clamp-1 mr-2">
                                {VALUATION_QUESTIONS.find(q => q.id === id)?.label}
                              </span>
                              <span className="text-amber-200 font-light whitespace-nowrap">+${premium.toLocaleString()}</span>
                            </div>
                          )
                        ))}
                      </div>
                      <div className="text-center mt-auto">
                        <span className="text-xs uppercase tracking-widest text-amber-200 block mb-2">Estimated Market Value</span>
                        <div className="text-5xl font-serif text-white tracking-tight">${total.toLocaleString()}</div>
                        <p className="text-[10px] text-stone-500 mt-6 uppercase tracking-[0.1em] font-light leading-relaxed">
                          Final compensation determined after medical screening.
                        </p>
                      </div>
                      <button 
                        onClick={() => setShowForm(true)}
                        disabled={progress < 10}
                        className={`w-full mt-10 py-5 text-xs uppercase tracking-widest font-bold transition-all shadow-xl ${
                          progress < 10 ? 'bg-stone-800 text-stone-600 cursor-not-allowed' : 'bg-amber-800 hover:bg-amber-700 text-white'
                        }`}
                      >
                        {progress < 10 ? 'Complete Checklist First' : 'Submit Application'}
                      </button>
                    </div>
                  ) : (
                    <div className="animate-in slide-in-from-bottom duration-500">
                      <button 
                        onClick={() => setShowForm(false)}
                        className="text-stone-500 hover:text-white text-xs uppercase tracking-widest mb-6 flex items-center transition-colors"
                      >
                        ← Back to Valuation
                      </button>
                      <h3 className="text-2xl font-serif text-amber-100 mb-6">Begin Your Journey</h3>
                      <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">Full Name</label>
                          <input 
                            required 
                            type="text" 
                            className="w-full bg-stone-800 border-none p-3 text-white text-sm focus:ring-1 focus:ring-amber-500 rounded-sm" 
                            placeholder="Your Name"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">Email Address</label>
                          <input 
                            required 
                            type="email" 
                            className="w-full bg-stone-800 border-none p-3 text-white text-sm focus:ring-1 focus:ring-amber-500 rounded-sm" 
                            placeholder="email@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1">Phone Number</label>
                          <input 
                            required 
                            type="tel" 
                            className="w-full bg-stone-800 border-none p-3 text-white text-sm focus:ring-1 focus:ring-amber-500 rounded-sm" 
                            placeholder="(555) 000-0000"
                          />
                        </div>
                        <div className="pt-4">
                          <button 
                            type="submit"
                            className="w-full py-5 bg-amber-800 hover:bg-amber-700 text-white text-xs uppercase tracking-widest font-bold transition-all shadow-xl"
                          >
                            Finalize Assessment
                          </button>
                        </div>
                        <p className="text-[10px] text-stone-500 italic text-center leading-relaxed">
                          Your information is held in the strictest confidence and will only be used to discuss your potential donation.
                        </p>
                      </form>
                    </div>
                  )}
                </>
              ) : (
                <div className="animate-in zoom-in duration-700 text-center flex flex-col items-center justify-center h-full">
                  <div className="text-5xl text-amber-200 mb-6 font-serif italic">Thank You</div>
                  <h4 className="text-xl font-serif text-white mb-4">A legacy of hope begins today.</h4>
                  <p className="text-stone-400 font-light text-sm leading-relaxed mb-8">
                    An advisor from Heritage Egg Donation will review your assessment and reach out to you within 24–48 hours to discuss the next steps of your journey.
                  </p>
                  <div className="w-12 h-[1px] bg-amber-800"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
