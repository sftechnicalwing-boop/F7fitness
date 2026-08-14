import React from 'react';
import { ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="bg-brand-black py-24 sm:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column: Image Composition (taking 5 cols) */}
          <div className="lg:col-span-5 relative group">
            {/* Outline box accent behind image */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-brand-yellow/30 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-500" />
            
            {/* The Image */}
            <div className="overflow-hidden border border-brand-gray-light bg-brand-gray">
              <img 
                src="/images/founder_prasad_konda.png" 
                alt="Prasad Konda - Head Coach & Founder" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out scale-100 hover:scale-105"
              />
            </div>
            
            {/* Small floating tag */}
            <div className="absolute bottom-4 left-4 bg-brand-black/90 border border-brand-gray-light px-4 py-2">
              <p className="font-display font-bold text-xs text-white uppercase tracking-wider">
                PRASAD KONDA
              </p>
              <p className="font-sans text-[9px] text-brand-yellow uppercase tracking-widest mt-0.5">
                FOUNDER & HEAD COACH
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Block (taking 7 cols) */}
          <div className="lg:col-span-7 text-left flex flex-col items-start lg:pl-8">
            <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-4">
              ABOUT F7 FITNESS
            </p>
            
            <h2 className="font-display font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight uppercase leading-[0.95] mb-6">
              MORE THAN A GYM. <br />
              <span className="text-stroke">A PLACE TO BUILD YOURSELF.</span>
            </h2>
            
            <div className="space-y-6 font-sans text-brand-neutral/80 text-sm sm:text-base leading-relaxed">
              <p>
                F7 Fitness represents a structural commitment to elite physical performance. Founded by Prasad Konda, our philosophy centers on functional strength, athletic discipline, and data-backed progression. We reject the generic local-gym model in favor of a focused, goal-driven atmosphere.
              </p>
              <p className="text-brand-neutral/60 text-xs sm:text-sm border-l-2 border-brand-yellow pl-4">
                "We don't sell memberships; we coach results. Our space is engineered for those who value structure, understand consistency, and show up ready to do the work."
              </p>
              <p>
                Whether your goal is lifting heavier, packing on clean muscle tissue, or sculpting a resilient athletic frame, we provide the expert coaching and quality equipment required to manifest your objectives.
              </p>
            </div>

            {/* Action CTA */}
            <div className="mt-8">
              <a 
                href="#programs" 
                className="group relative inline-flex items-center text-white font-sans font-bold text-sm uppercase tracking-widest hover:text-brand-yellow transition-colors duration-300"
              >
                <span>DISCOVER F7 FITNESS</span>
                <span className="ml-2 w-8 h-[1px] bg-white group-hover:bg-brand-yellow group-hover:w-12 transition-all duration-300"></span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 ml-1 group-hover:translate-x-1 transition-all duration-300 text-brand-yellow" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
