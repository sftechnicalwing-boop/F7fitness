import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gymDetails } from '../data/gymData';

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative w-full py-24 sm:py-36 bg-brand-black overflow-hidden flex items-center justify-center border-t border-brand-gray-light">
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-brand-black">
        <img 
          src="/images/hero_gym_poster.png" 
          alt="Gym background" 
          className="w-full h-full object-cover grayscale opacity-30 scale-100"
        />
      </div>

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-brand-black z-10" />

      {/* Content wrapper */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        {/* Brand visual line anchor */}
        <div className="flex justify-center mb-6">
          <span className="w-12 h-[2px] bg-brand-yellow"></span>
        </div>
        
        {/* Title */}
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tighter uppercase leading-[0.95] mb-6">
          YOUR STRONGEST SELF <br />
          <span className="text-brand-yellow">STARTS HERE.</span>
        </h2>
        
        {/* Supporting statement */}
        <p className="font-sans text-brand-neutral/80 text-sm sm:text-lg uppercase tracking-wider mb-10 max-w-xl mx-auto">
          Stop waiting. Start training.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/auth"
            className="group w-full sm:w-auto inline-flex items-center justify-center bg-brand-yellow text-brand-black font-sans font-black text-xs uppercase tracking-widest px-8 py-4 border border-brand-yellow hover:bg-transparent hover:text-brand-yellow transition-all duration-300"
          >
            <span>JOIN F7 FITNESS</span>
            <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a 
            href={`mailto:${gymDetails.email}?subject=Booking%20a%20Visit%20to%20F7%20Fitness`}
            className="group w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-white font-sans font-black text-xs uppercase tracking-widest px-8 py-4 border border-white/20 hover:border-brand-yellow hover:text-brand-yellow transition-all duration-300"
          >
            <Calendar size={14} className="mr-2" />
            <span>BOOK A VISIT</span>
          </a>
        </div>
      </div>
    </section>
  );
};
