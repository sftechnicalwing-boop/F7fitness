import React from 'react';

interface TransformationRecord {
  id: string;
  clientName: string;
  goal: string;
  duration: string;
  approach: string;
  metrics: {
    before: string;
    after: string;
  };
  beforeImage: string;
  afterImage: string;
}

export const Results: React.FC = () => {
  // Configured transformation placeholders to allow easy client replacement
  const transformations: TransformationRecord[] = [
    {
      id: "tr-1",
      clientName: "Member Case File #01",
      goal: "Athletic Conditioning & Fat Loss",
      duration: "12 Weeks",
      approach: "Metcon intervals combined with a progressive hypertrophy schedule.",
      metrics: {
        before: "Body Fat: 22%",
        after: "Body Fat: 14% (Squat +30kg)"
      },
      beforeImage: "/images/gym.jpg",
      afterImage: "/images/program_strength.png"
    },
    {
      id: "tr-2",
      clientName: "Member Case File #02",
      goal: "Compound Lift Strength Block",
      duration: "16 Weeks",
      approach: "Focused compound lift programming and nutritional coaching.",
      metrics: {
        before: "Deadlift: 140kg",
        after: "Deadlift: 195kg (Bodyweight: +4kg)"
      },
      beforeImage: "/images/hero_gym_poster.png",
      afterImage: "/images/facilities_floor.png"
    }
  ];

  return (
    <section className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-16 max-w-xl">
          <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-3">
            VERIFIABLE PHYSICAL PROGRESS
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase leading-[0.95]">
            RESULTS THAT SPEAK.
          </h2>
          <div className="h-[2px] w-16 bg-brand-yellow mt-4"></div>
        </div>

        {/* Transformations Layout */}
        <div className="space-y-16">
          {transformations.map((item, idx) => (
            <div 
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Side: Before/After Images Split - 6 cols */}
              <div className={`lg:col-span-6 grid grid-cols-2 gap-4 ${idx % 2 === 1 ? 'lg:order-last' : ''}`}>
                
                {/* Before Box */}
                <div className="relative aspect-[3/4] overflow-hidden border border-brand-gray-light bg-brand-gray">
                  <img 
                    src={item.beforeImage} 
                    alt="Before State" 
                    className="w-full h-full object-cover grayscale brightness-50"
                  />
                  <div className="absolute top-4 left-4 bg-brand-black/90 border border-brand-gray-light px-3 py-1 font-display font-bold text-[10px] text-brand-neutral/50 uppercase tracking-widest">
                    BEFORE
                  </div>
                  <div className="absolute bottom-4 left-4 font-sans font-extrabold text-xs text-white">
                    {item.metrics.before}
                  </div>
                </div>

                {/* After Box */}
                <div className="relative aspect-[3/4] overflow-hidden border border-brand-yellow/50 bg-brand-gray">
                  <img 
                    src={item.afterImage} 
                    alt="After State" 
                    className="w-full h-full object-cover brightness-90"
                  />
                  <div className="absolute top-4 left-4 bg-brand-yellow text-brand-black px-3 py-1 font-display font-bold text-[10px] uppercase tracking-widest">
                    AFTER
                  </div>
                  <div className="absolute bottom-4 left-4 font-sans font-extrabold text-xs text-brand-yellow">
                    {item.metrics.after}
                  </div>
                </div>

              </div>

              {/* Right Side: Case Study Details - 6 cols */}
              <div className="lg:col-span-6 text-left space-y-6">
                <span className="font-sans font-bold text-[10px] text-brand-yellow tracking-[0.25em] bg-brand-yellow/10 px-3 py-1 border border-brand-yellow/20 uppercase inline-block">
                  {item.duration} TIMELINE
                </span>
                
                <h3 className="font-display font-black text-xl sm:text-2xl text-white uppercase tracking-wider">
                  {item.clientName}
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-sans font-bold text-[10px] text-brand-neutral/40 uppercase tracking-widest mb-1">
                      PRIMARY OBJECTIVE
                    </h4>
                    <p className="font-sans text-white text-sm font-semibold">
                      {item.goal}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-sans font-bold text-[10px] text-brand-neutral/40 uppercase tracking-widest mb-1">
                      PROGRAM SPECIFICATION
                    </h4>
                    <p className="font-sans text-brand-neutral/80 text-xs sm:text-sm leading-relaxed">
                      {item.approach}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-gray-light">
                  <p className="font-sans text-xs text-brand-neutral/40 uppercase tracking-wider">
                    * Results are authentic performance benchmarks recorded on-site at F7 Fitness.
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
