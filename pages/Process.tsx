
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Initial Screening',
      description: 'The journey begins with a comprehensive application covering your health history, genetics, and personal background. We ensure our donors meet the highest medical standards.'
    },
    {
      number: '02',
      title: 'The Matching Process',
      description: 'Intended parents browse our curated donor database. Once selected, we move forward with psychological evaluation and genetic testing to ensure a healthy match.'
    },
    {
      number: '03',
      title: 'Ovarian Stimulation',
      description: 'You will receive fertility medications for about 10–12 days to encourage the development of multiple eggs. This is closely monitored via ultrasound at a partner clinic near you.'
    },
    {
      number: '04',
      title: 'Egg Retrieval',
      description: 'A 20-minute outpatient procedure performed under mild sedation. You\'ll be resting comfortably and can return home the same day. Most donors resume normal activity within 24–48 hours.'
    },
    {
      number: '05',
      title: 'Compensation & Recovery',
      description: 'Compensation is typically dispersed on the day of retrieval. We provide follow-up care to ensure your physical and emotional well-being as you return to your routine.'
    }
  ];

  return (
    <div className="bg-[#fcfaf7] min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 text-center bg-stone-100 border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-semibold mb-4 block underline underline-offset-8 decoration-stone-300">The Journey</span>
          <h1 className="text-5xl font-serif text-stone-900 mb-6">A Path of Compassion & Science</h1>
          <p className="text-stone-600 font-light leading-relaxed">
            From the first application to the final procedure, we manage every technical detail so you can focus on the significance of your gift.
          </p>
        </div>
      </section>

      {/* Technical Process */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h2 className="text-3xl font-serif text-stone-900 mb-8 leading-tight">A Step-by-Step <br /> Guide to Donation</h2>
              <div className="space-y-8">
                <p className="text-stone-500 font-light leading-relaxed">
                  We partner with elite fertility clinics nationwide, ensuring that wherever you are, you receive world-class medical attention.
                </p>
                <div className="bg-amber-50 p-6 border-l-4 border-amber-800">
                  <h4 className="font-semibold text-stone-900 mb-2">Did you know?</h4>
                  <p className="text-sm text-stone-600 italic">
                    You aren't "losing" your future fertility. A typical woman loses hundreds of eggs naturally every month; stimulation simply matures the eggs that would have otherwise been lost.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 space-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="flex gap-8 group">
                <div className="text-5xl font-serif text-stone-200 group-hover:text-amber-200 transition-colors leading-none">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-xl font-serif text-stone-900 mb-4">{step.title}</h3>
                  <p className="text-stone-600 font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Partner Clinics */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif mb-8 text-amber-100">Convenience & Professionalism</h2>
          <p className="text-stone-400 font-light text-lg mb-12">
            You don't need to live near our main office. We work with an extensive network of partner fertility clinics in all major U.S. cities—including NYC, Los Angeles, Chicago, San Francisco, and Boston—to provide care close to home.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['In-house Doctors', 'Legal Support', 'Travel Concierge', 'Counseling'].map((item, i) => (
              <div key={i} className="border border-stone-800 p-6 rounded-sm">
                <p className="text-sm uppercase tracking-widest text-stone-300 font-light">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;
