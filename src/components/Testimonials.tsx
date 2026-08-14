import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/gymData';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto transition every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

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

        {/* Carousel Container */}
        <div className="relative flex flex-col items-center justify-center min-h-[250px] text-center select-none">
          {/* Quotes Icon Background Accent */}
          <div className="text-brand-gray-light absolute -top-8 opacity-20 pointer-events-none">
            <Quote size={80} className="fill-current" />
          </div>

          {/* Testimonial Content Wrapper */}
          <div className="relative z-10 w-full max-w-4xl mx-auto">
            {testimonials.map((test, index) => (
              <div 
                key={test.id} 
                className={`transition-all duration-500 ease-in-out ${
                  index === activeIndex 
                    ? 'opacity-100 scale-100 pointer-events-auto block' 
                    : 'opacity-0 scale-95 pointer-events-none absolute inset-0'
                }`}
              >
                {/* Large Quote Text */}
                <blockquote className="font-display font-bold text-lg sm:text-2xl lg:text-3xl text-white leading-relaxed tracking-wide italic mb-8">
                  "{test.quote}"
                </blockquote>
                
                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <cite className="not-italic font-sans font-black text-xs sm:text-sm text-brand-yellow uppercase tracking-widest">
                    {test.name}
                  </cite>
                  <span className="font-sans font-semibold text-[9px] sm:text-[10px] text-brand-neutral/40 uppercase tracking-widest mt-1">
                    {test.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <div className="flex items-center gap-6 mt-12 z-20">
            <button 
              onClick={handlePrev}
              className="p-3 text-brand-neutral hover:text-brand-yellow bg-brand-gray border border-brand-gray-light hover:border-brand-yellow/30 rounded-full transition-all"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            
            {/* Dots navigation */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-6 bg-brand-yellow' : 'w-2 bg-brand-neutral/20'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="p-3 text-brand-neutral hover:text-brand-yellow bg-brand-gray border border-brand-gray-light hover:border-brand-yellow/30 rounded-full transition-all"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
