import React from 'react';
import { Award, Shield, Cpu, Target, Users, TrendingUp } from 'lucide-react';

export const WhyF7: React.FC = () => {
  const benefits = [
    {
      icon: <Award size={24} className="text-brand-yellow" />,
      title: "EXPERT COACHING",
      desc: "Professional guidance focused on meaningful, biomechanically sound athletic progress."
    },
    {
      icon: <TrendingUp size={24} className="text-brand-yellow" />,
      title: "PERFORMANCE",
      desc: "Structured training regimens built entirely around strength, conditioning, and measurable metrics."
    },
    {
      icon: <Cpu size={24} className="text-brand-yellow" />,
      title: "QUALITY EQUIPMENT",
      desc: "A serious training environment equipped with professional-grade barbells, platforms, and heavy iron."
    },
    {
      icon: <Target size={24} className="text-brand-yellow" />,
      title: "PERSONAL ATTENTION",
      desc: "Focused coaching supervision that ensures every set is executed safely, consistently, and effectively."
    },
    {
      icon: <Users size={24} className="text-brand-yellow" />,
      title: "COMMUNITY",
      desc: "A high-intensity training culture that breeds respect, accountability, and the motivation to keep showing up."
    },
    {
      icon: <Shield size={24} className="text-brand-yellow" />,
      title: "RESULTS",
      desc: "A program design engineered around progressive overload and sustainable, long-term physiological improvements."
    }
  ];

  return (
    <section className="bg-brand-black py-24 border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-16 max-w-xl">
          <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-3">
            THE F7 STANDARD
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase">
            WHY F7?
          </h2>
          <div className="h-[2px] w-16 bg-brand-yellow mt-4"></div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-start text-left border-t border-brand-gray-light pt-6 hover:border-brand-yellow transition-colors duration-300 group"
            >
              {/* Minimalist Icon wrapper */}
              <div className="mb-4 p-2 bg-brand-gray border border-brand-gray-light group-hover:border-brand-yellow/30 group-hover:bg-brand-yellow/5 transition-colors duration-300">
                {item.icon}
              </div>
              
              {/* Benefit Title */}
              <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-wider mb-2 uppercase group-hover:text-brand-yellow transition-colors">
                {item.title}
              </h3>
              
              {/* Benefit Description */}
              <p className="font-sans text-brand-neutral/60 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
