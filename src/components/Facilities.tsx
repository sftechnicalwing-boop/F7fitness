import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { facilities } from '../data/gymData';
import { Lightbox } from './Lightbox';

export const Facilities: React.FC = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev === 0 ? facilities.length - 1 : (prev as number) - 1));
    }
  };

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev === facilities.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <section id="facilities" className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-left mb-16 max-w-xl">
          <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-3">
            TRAINING ENVIRONMENT
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase leading-[0.95]">
            BUILT FOR BETTER TRAINING.
          </h2>
          <div className="h-[2px] w-16 bg-brand-yellow mt-4"></div>
        </div>

        {/* Asymmetrical Grid Layout (Large featured image + 3 supporting) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Large Featured Facility (Strength Floor) - 7 cols */}
          <div 
            onClick={() => setActiveImageIndex(0)}
            className="lg:col-span-7 relative h-[400px] sm:h-[524px] group overflow-hidden border border-brand-gray-light cursor-pointer bg-brand-gray"
          >
            <img 
              src={facilities[0].image} 
              alt={facilities[0].name}
              className="w-full h-full object-cover grayscale opacity-75 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-10" />
            
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-left">
              <span className="inline-flex items-center gap-1.5 font-sans font-bold text-[10px] text-brand-yellow tracking-widest uppercase mb-2">
                <Maximize2 size={12} /> CLICK TO ZOOM
              </span>
              <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-1">
                {facilities[0].name}
              </h3>
              <p className="font-sans text-brand-neutral/80 text-xs max-w-md">
                {facilities[0].description}
              </p>
            </div>
          </div>

          {/* Supporting Facilities Grid - 5 cols */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {facilities.slice(1).map((fac, index) => (
              <div 
                key={fac.id}
                onClick={() => setActiveImageIndex(index + 1)}
                className="relative h-[250px] lg:h-[160px] group overflow-hidden border border-brand-gray-light cursor-pointer bg-brand-gray"
              >
                <img 
                  src={fac.image} 
                  alt={fac.name}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-90 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent z-10" />
                
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-left">
                  <h4 className="font-display font-bold text-base text-white uppercase tracking-wider mb-1 group-hover:text-brand-yellow transition-colors">
                    {fac.name}
                  </h4>
                  <p className="font-sans text-brand-neutral/70 text-[10px] max-w-sm hidden sm:block lg:hidden">
                    {fac.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Trigger */}
      {activeImageIndex !== null && (
        <Lightbox 
          imageSrc={facilities[activeImageIndex].image}
          imageAlt={facilities[activeImageIndex].name}
          onClose={() => setActiveImageIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};
