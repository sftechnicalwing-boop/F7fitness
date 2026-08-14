import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-start text-left max-w-5xl">
          {/* Section Descriptor */}
          <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-6">
            OUR CORE MANIFESTO
          </p>
          
          {/* Manifesto Statement */}
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl xl:text-7xl tracking-tight leading-[0.95] uppercase">
            <span className="text-white">TRAIN WITH PURPOSE.</span>
            <br />
            <span className="text-stroke">MOVE WITH POWER.</span>
            <br />
            <span className="text-brand-yellow">BECOME BETTER.</span>
          </h2>
          
          {/* Editorial Paragraph block */}
          <div className="mt-12 lg:mt-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="h-[1px] bg-brand-gray-light w-full self-center hidden md:block"></div>
            <p className="font-sans text-brand-neutral/60 text-sm sm:text-base leading-relaxed">
              F7 Fitness is not a place for casual workouts or distraction. We build a high-performance environment structured around progress, coaching discipline, and measurable physical development. Under Prasad Konda’s guidance, every member trains to execute with athletic precision.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
