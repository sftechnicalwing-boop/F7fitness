import React, { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { trainers, alwalTrainers } from '../data/gymData';
import { AlwalTrainersModal } from './AlwalTrainersModal';

export const Trainers: React.FC = () => {
  const [selectedBranch, setSelectedBranch] = useState<string>('all');
  const [isAlwalModalOpen, setIsAlwalModalOpen] = useState<boolean>(false);

  const branches = [
    { id: 'all', label: 'All Branches' },
    { id: 'alwal', label: 'Alwal (4 Coaches)' },
    { id: 'bolarum', label: 'Bolarum' },
    { id: 'risala', label: 'Risala Bazar' },
  ];

  const filteredTrainers = trainers.filter((coach) => {
    if (selectedBranch === 'all') return true;
    if (selectedBranch === 'alwal') return coach.location?.toLowerCase().includes('alwal');
    if (selectedBranch === 'bolarum') return coach.location?.toLowerCase().includes('new bolarum');
    if (selectedBranch === 'risala') return coach.location?.toLowerCase().includes('risala');
    return true;
  });

  return (
    <section id="trainers" className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-3 flex items-center gap-2">
              <Sparkles size={14} />
              THE COACHING STAFF
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase leading-[0.95]">
              MEET THE COACHES.
            </h2>
            <div className="h-[2px] w-16 bg-brand-yellow mt-4"></div>
          </div>
          <p className="font-sans text-brand-neutral/60 max-w-sm text-xs sm:text-sm leading-relaxed">
            Train with elite coaches dedicated to technical execution, progressive overload, and long-term athletic transformation across our branches.
          </p>
        </div>

        {/* Branch Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-brand-gray-light pb-6">
          {branches.map((branch) => (
            <button
              key={branch.id}
              onClick={() => setSelectedBranch(branch.id)}
              className={`font-sans font-bold text-[10px] tracking-widest px-4 py-2 uppercase border transition-all ${
                selectedBranch === branch.id
                  ? 'bg-brand-yellow text-brand-black border-brand-yellow'
                  : 'bg-transparent text-white border-white/20 hover:border-brand-yellow'
              }`}
            >
              {branch.label}
            </button>
          ))}
        </div>

        {/* Coaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {filteredTrainers.map((coach) => {
            const isAlwalTeam = coach.id === 'alwal-team';

            return (
              <div 
                key={coach.id} 
                className={`flex flex-col text-left group ${isAlwalTeam ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (isAlwalTeam) setIsAlwalModalOpen(true);
                }}
              >
                {/* Image Container */}
                {isAlwalTeam ? (
                  /* 2x2 Collage Container for Alwal Branch */
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-yellow/40 bg-brand-gray mb-6 shadow-xl group/collage">
                    {/* 2x2 Photos Grid */}
                    <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-0.5 bg-black p-0.5">
                      {alwalTrainers.map((alwalCoach, idx) => (
                        <div key={alwalCoach.id} className="relative overflow-hidden w-full h-full bg-brand-gray">
                          <img 
                            src={alwalCoach.image} 
                            alt={`Alwal Coach ${idx + 1}`} 
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-all duration-700 ease-out"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Hover yellow border */}
                    <div className="absolute inset-0 border-b-4 border-transparent group-hover:border-brand-yellow transition-all duration-300 pointer-events-none" />
                  </div>
                ) : (
                  /* Solo Coach Portrait */
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-brand-gray-light bg-brand-gray mb-6">
                    <img 
                      src={coach.image} 
                      alt={coach.name} 
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-700 ease-out"
                    />
                    <div className="absolute inset-0 border-b-4 border-transparent group-hover:border-brand-yellow transition-all duration-300" />
                  </div>
                )}
                
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
                <p className="font-sans text-brand-neutral/60 text-xs sm:text-sm leading-relaxed mb-4">
                  {coach.bio}
                </p>

                {/* Extra CTA for Alwal Collage */}
                {isAlwalTeam && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsAlwalModalOpen(true);
                    }}
                    className="mb-4 inline-flex items-center justify-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 hover:bg-brand-yellow hover:text-brand-black text-brand-yellow font-sans font-bold text-xs uppercase tracking-widest py-2.5 px-4 transition-all"
                  >
                    <Eye size={14} />
                    <span>View All 4 Trainers</span>
                  </button>
                )}

                {/* Phone & Location */}
                <div className="flex flex-col gap-1 border-t border-brand-gray-light pt-4">
                  {coach.location && (
                    <p className="font-sans text-[11px] text-brand-neutral/50 uppercase tracking-widest">
                      📍 {coach.location}
                    </p>
                  )}
                  {coach.phone && (
                    <a
                      href={`tel:${coach.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="font-sans font-bold text-brand-yellow text-sm tracking-wider hover:underline"
                    >
                      📞 {coach.phone}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Alwal 4 Trainers Modal */}
      <AlwalTrainersModal
        isOpen={isAlwalModalOpen}
        onClose={() => setIsAlwalModalOpen(false)}
      />
    </section>
  );
};
