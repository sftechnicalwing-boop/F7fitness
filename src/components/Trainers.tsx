import React from 'react';
import { trainers } from '../data/gymData';

export const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-3">
              THE COACHING STAFF
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase leading-[0.95]">
              MEET THE COACHES.
            </h2>
            <div className="h-[2px] w-16 bg-brand-yellow mt-4"></div>
          </div>
          <p className="font-sans text-brand-neutral/60 max-w-sm text-xs sm:text-sm leading-relaxed">
            Train with elite coaches dedicated to technical execution, physical progressive load, and long-term athletic goals.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className={`grid grid-cols-1 ${trainers.length === 1 ? 'max-w-md mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'} gap-12 lg:gap-8`}>
          {trainers.map((coach) => (
            <div key={coach.id} className="flex flex-col text-left group">
              {/* Trainer Portrait Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-gray-light bg-brand-gray mb-6">
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                />
                {/* Yellow overlay accent */}
                <div className="absolute inset-0 border-b-4 border-transparent group-hover:border-brand-yellow transition-all duration-300" />
              </div>
              
              {/* Role & Name */}
              <div className="flex items-baseline justify-between mb-1">
                <h3 className="font-display font-black text-xl text-white uppercase tracking-wider group-hover:text-brand-yellow transition-colors duration-300">
                  {coach.name}
                </h3>
                <span className="font-sans font-bold text-[10px] text-brand-yellow tracking-widest bg-brand-yellow/10 px-2 py-0.5 border border-brand-yellow/20">
                  {coach.experience}
                </span>
              </div>
              
              {/* Role descriptor */}
              <p className="font-sans font-bold text-[10px] text-brand-neutral/50 uppercase tracking-widest mb-3">
                {coach.role}
              </p>
              
              {/* Specialization tag */}
              <div className="mb-4">
                <span className="text-[11px] font-sans font-semibold tracking-wider text-brand-neutral/80 uppercase border-b border-brand-gray-light pb-1 inline-block">
                  SPEC: {coach.specialization}
                </span>
              </div>

              {/* Bio */}
              <p className="font-sans text-brand-neutral/60 text-xs sm:text-sm leading-relaxed">
                {coach.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
