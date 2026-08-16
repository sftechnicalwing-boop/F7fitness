import React from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '../data/gymData';

export const Testimonials: React.FC = () => {
  // Duplicate for seamless infinite scrolling
  const marqueeItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-3">
            MEMBER TESTIMONIALS
          </p>
          <div className="h-[2px] w-12 bg-brand-yellow mt-2"></div>
        </div>

        {/* Floating Marquee Container */}
        <div className="relative overflow-hidden w-full flex items-center min-h-[300px]">
          {/* Quotes Icon Background Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none text-brand-gray-light z-0">
            <Quote size={120} className="fill-current" />
          </div>

          <div className="animate-marquee z-10 py-8 gap-8">
            {marqueeItems.map((test, index) => (
              <div 
                key={`${test.id}-${index}`} 
                className="w-[300px] sm:w-[450px] p-8 sm:p-10 bg-brand-gray border border-brand-gray-light rounded-sm shrink-0 flex flex-col justify-between hover:border-brand-yellow/50 transition-colors shadow-2xl"
              >
                {/* Large Quote Text */}
                <blockquote className="font-display font-medium text-sm sm:text-base text-brand-neutral leading-relaxed tracking-wide italic mb-8">
                  "{test.quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  {test.image && (
                    <img 
                      src={test.image} 
                      alt={test.name} 
                      className="w-10 h-10 rounded-full object-cover border border-brand-yellow/30 grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  )}
                  <div className="flex flex-col items-start">
                    <cite className="not-italic font-sans font-black text-xs text-brand-yellow uppercase tracking-widest">
                      {test.name}
                    </cite>
                    <span className="font-sans font-semibold text-[9px] text-brand-neutral/40 uppercase tracking-widest mt-1">
                      {test.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Edges */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-brand-black to-transparent pointer-events-none z-20" />
          <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-brand-black to-transparent pointer-events-none z-20" />
        </div>

      </div>
    </section>
  );
};
