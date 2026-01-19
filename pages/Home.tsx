
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510154221590-ff63e90a136f?auto=format&fit=crop&q=80&w=1920" 
            alt="Mother and child in a sun-drenched spring field" 
            className="w-full h-full object-cover filter brightness-[0.9] saturate-[0.85] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-stone-900/50"></div>
          <div className="absolute inset-0 nostalgic-overlay opacity-25"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="text-white/95 text-xs uppercase tracking-[0.4em] font-semibold mb-6 block animate-fade-in drop-shadow-md">The Gift of New Beginnings</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 tracking-tight leading-tight drop-shadow-xl">
            Create a legacy <br /> of <span className="italic font-light">boundless love.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-10 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Become an egg donor and plant the seeds of a family. Help others experience the miracle of life through a journey of grace and exceptional care.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/calculator" 
              className="px-10 py-5 bg-white text-stone-900 text-sm uppercase tracking-widest font-semibold hover:bg-amber-50 transition-all transform hover:-translate-y-1 shadow-2xl"
            >
              Estimate Your Valuation
            </Link>
            <Link 
              to="/process" 
              className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/40 text-white text-sm uppercase tracking-widest hover:bg-white/20 transition-all shadow-lg"
            >
              The Journey
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section / About Us */}
      <section className="py-24 px-4 bg-[#fcfaf7]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-semibold mb-6 block">Direct Connection</span>
            <h2 className="text-4xl font-serif text-stone-900 mb-8 leading-tight">Nurturing the Dream of Family.</h2>
            <p className="text-stone-600 leading-relaxed mb-6 font-light">
              Heritage Egg Donation is a dedicated firm built upon the concept of meaningful, direct connection. We seek to unite extraordinary egg donors directly with individuals who are looking to begin their families, creating a transparent and purposeful path to parenthood.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 font-light">
              We believe the journey to creating a legacy should be personal. By facilitating this direct link, we ensure that donors understand the profound impact of their gift and intended parents can find the perfect match to begin their new season of life.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8 font-light">
              At Heritage Egg Donation, we celebrate the unique qualities that make you exceptional. We work with elite fertility clinics to provide a sanctuary of care, ensuring you are supported, valued, and generously compensated as you change lives forever.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" 
              alt="Soft spring morning light in a garden" 
              className="rounded-sm shadow-2xl border-8 border-white"
            />
            <div className="absolute -bottom-8 -left-8 bg-amber-50 p-8 shadow-lg max-w-[280px]">
              <p className="italic text-stone-700 font-serif leading-relaxed">
                "To witness a family blossom from a gift I shared... there is no greater fulfillment."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-stone-900">The Heritage Experience</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Exceptional Care',
                desc: 'We partner with the nation\'s most respected clinics to prioritize your well-being and ensure a seamless medical journey.',
                icon: '✧'
              },
              {
                title: 'Premium Compensation',
                desc: 'We recognize the value of your contribution with compensation packages starting from $8,000 to over $50,000.',
                icon: '✧'
              },
              {
                title: 'Absolute Discretion',
                desc: 'Your journey is a personal matter of the highest order. We maintain a strictly private, respectful environment to honor your choice and protect your identity.',
                icon: '✧'
              }
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-12 text-center border border-stone-200 shadow-sm">
                <div className="text-3xl text-amber-800 mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-serif mb-4 text-stone-900">{benefit.title}</h3>
                <p className="text-stone-500 font-light text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-stone-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif mb-8">Ready to plant the seeds of hope?</h2>
          <p className="text-stone-400 mb-10 font-light text-lg">
            Join a community of remarkable women who are redefining the future of families, one gift at a time.
          </p>
          <Link 
            to="/calculator" 
            className="inline-block px-12 py-5 bg-amber-100 text-amber-900 text-sm uppercase tracking-widest font-semibold hover:bg-white transition-all"
          >
            Start Your Valuation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
