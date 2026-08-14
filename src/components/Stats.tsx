import React from 'react';

export const Stats: React.FC = () => {
  const statsList = [
    { value: "500+", label: "ACTIVE MEMBERS" },
    { value: "10+", label: "EXPERT COACHES" },
    { value: "12+", label: "YEARS EXPERIENCE" },
    { value: "15,000+", label: "SESSIONS DELIVERED" }
  ];

  return (
    <section className="bg-brand-black py-16 border-y border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {statsList.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              {/* Statistic Large Number */}
              <span className="font-display font-black text-4xl sm:text-6xl text-brand-yellow leading-none tracking-tight">
                {stat.value}
              </span>
              
              {/* Label */}
              <span className="font-sans font-bold text-[10px] sm:text-xs tracking-[0.2em] text-brand-neutral/50 mt-3 uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
