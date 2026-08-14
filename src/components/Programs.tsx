import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { programs } from '../data/gymData';

export const Programs: React.FC = () => {
  return (
    <section id="programs" className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-3">
              ATHLETIC REGIMENS
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase leading-[0.95]">
              TRAIN YOUR WAY.
            </h2>
            <div className="h-[2px] w-16 bg-brand-yellow mt-4"></div>
          </div>
          <p className="font-sans text-brand-neutral/60 max-w-sm text-xs sm:text-sm leading-relaxed">
            Every program is structured around progressive targets and physical accountability. Select your discipline.
          </p>
        </div>

        {/* Large Image Panels - Asymmetrical Grid */}
        <div className="space-y-6">
          
          {/* Row 1: Two Large Columns (Strength & Personal Training) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {programs.slice(0, 2).map((prog) => (
              <div 
                key={prog.id} 
                className="relative h-[350px] sm:h-[450px] overflow-hidden group border border-brand-gray-light cursor-pointer"
              >
                {/* Image Background */}
                <div className="absolute inset-0 bg-brand-black">
                  <img 
                    src={prog.image} 
                    alt={prog.name}
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  />
                </div>
                
                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent z-10" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 sm:p-10 text-left">
                  {/* Top corner hover accent */}
                  <div className="absolute top-6 right-6 p-2 border border-white/20 text-white rounded-full group-hover:border-brand-yellow group-hover:text-brand-yellow group-hover:bg-brand-yellow/10 transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                  
                  {/* Yellow Accent bar */}
                  <div className="w-12 h-1 bg-brand-yellow mb-4 group-hover:w-20 transition-all duration-300" />
                  
                  <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider mb-2">
                    {prog.name}
                  </h3>
                  
                  <p className="font-sans text-brand-neutral/80 text-xs sm:text-sm max-w-md leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Three Columns (Muscle Building, Functional, Fat Loss) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(2).map((prog) => (
              <div 
                key={prog.id} 
                className="relative h-[350px] sm:h-[400px] overflow-hidden group border border-brand-gray-light cursor-pointer"
              >
                {/* Image Background */}
                <div className="absolute inset-0 bg-brand-black">
                  <img 
                    src={prog.image} 
                    alt={prog.name}
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-75 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                  />
                </div>
                
                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent z-10" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-left">
                  {/* Top corner hover accent */}
                  <div className="absolute top-5 right-5 p-1.5 border border-white/20 text-white rounded-full group-hover:border-brand-yellow group-hover:text-brand-yellow group-hover:bg-brand-yellow/10 transition-all duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                  
                  <div className="w-8 h-1 bg-brand-yellow mb-4 group-hover:w-16 transition-all duration-300" />
                  
                  <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wider mb-2">
                    {prog.name}
                  </h3>
                  
                  <p className="font-sans text-brand-neutral/80 text-xs leading-relaxed group-hover:translate-x-1 transition-transform duration-300">
                    {prog.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
