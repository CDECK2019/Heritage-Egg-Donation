
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[#fcfaf7] min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 px-4 text-center bg-stone-100 border-b border-stone-200">
        <div className="max-w-3xl mx-auto">
          <span className="text-amber-800 text-xs uppercase tracking-[0.3em] font-semibold mb-4 block underline underline-offset-8 decoration-stone-300">Our Story</span>
          <h1 className="text-5xl font-serif text-stone-900 mb-6">About Heritage Egg Donation</h1>
          <p className="text-stone-600 font-light leading-relaxed">
            A boutique firm dedicated to the direct and meaningful connection between donors and families.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="prose prose-stone lg:prose-xl mx-auto">
          <h2 className="text-3xl font-serif text-stone-900 mb-8">Our Philosophy</h2>
          <p className="text-stone-600 font-light leading-relaxed mb-8">
            Heritage Egg Donation was founded on the belief that the path to parenthood should be as personal and transparent as the miracle of life itself. We are a specialized firm that seeks to connect high-quality egg donors directly with individuals and couples who are actively navigating the family planning process. 
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 my-16">
            <div className="border-l-2 border-amber-800 pl-8 py-2">
              <h3 className="text-lg font-serif text-stone-900 mb-4">Direct Connection</h3>
              <p className="text-sm text-stone-500 font-light">
                By removing the traditional barriers between donors and intended parents, we facilitate a more profound understanding of the gift being shared. This direct link fosters a sense of purpose and mutual respect that is often lost in larger, more clinical environments.
              </p>
            </div>
            <div className="border-l-2 border-amber-800 pl-8 py-2">
              <h3 className="text-lg font-serif text-stone-900 mb-4">Exceptional Curation</h3>
              <p className="text-sm text-stone-500 font-light">
                We represent only a select group of extraordinary women. Our rigorous standards ensure that the donors we connect with families possess the intelligence, health, and grace that intended parents seek when looking to build their legacy.
              </p>
            </div>
          </div>

          <p className="text-stone-600 font-light leading-relaxed mb-8">
            Our role is to act as a sensitive and professional guide throughout this journey. We handle the logistical complexities and medical partnerships with elite fertility clinics, allowing both donors and intended parents to focus on the emotional and human significance of their connection.
          </p>
          
          <p className="text-stone-600 font-light leading-relaxed">
            At Heritage Egg Donation, we aren't just facilitating a medical procedure; we are nurturing the seeds of future families with the dignity, discretion, and care they deserve.
          </p>
        </div>
      </section>

      {/* Visual Break */}
      <section className="h-96 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1920" 
          alt="Spring flowers in bloom" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/20"></div>
      </section>
    </div>
  );
};

export default About;
