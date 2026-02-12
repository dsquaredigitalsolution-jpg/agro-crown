import React from 'react';
import { FOUNDER } from '../constants';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-green-900 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">About Mini Crown Agro</h1>
        <p className="text-xl max-w-2xl mx-auto text-green-100">Cultivating the future of food in Nigeria, one harvest at a time.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" 
              alt="Farm Life" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-900 font-serif mb-6">Our Mission</h2>
            <p className="text-stone-700 leading-relaxed mb-6 text-lg">
              Mini Crown Agro Ventures was born out of a desire to solve a simple problem: providing easy access to high-quality, organic Nigerian food items.
            </p>
            <p className="text-stone-700 leading-relaxed text-lg">
              We bridge the gap between hard-working rural farmers and urban families. By cutting out unnecessary middlemen, we ensure farmers get paid fairly and you get the freshest produce at the best prices.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-stone-50 rounded-3xl p-8 md:p-12 shadow-sm border border-stone-100">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-2xl transform rotate-6 translate-y-2"></div>
                <img 
                  src={FOUNDER.image} 
                  alt={FOUNDER.name} 
                  className="relative rounded-2xl shadow-lg w-full aspect-square object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-2">
                 <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">The Founder</span>
              </div>
              <h2 className="text-3xl font-bold text-stone-900 font-serif mb-2">{FOUNDER.name}</h2>
              <p className="text-green-700 font-medium mb-6">{FOUNDER.role}</p>
              
              <div className="relative pl-8 border-l-4 border-yellow-400">
                <Quote className="absolute top-0 left-[-42px] text-yellow-400 bg-stone-50 p-1" size={32} />
                <p className="italic text-stone-700 text-lg mb-6">
                  "Hustle is not just about making money; it's about creating value. At Mini Crown, my hustle is ensuring no Nigerian family has to worry about the quality of food on their table. We are young, we are driven, and we are feeding the nation."
                </p>
              </div>
              <p className="text-stone-600">
                {FOUNDER.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;