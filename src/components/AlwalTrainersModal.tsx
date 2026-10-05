import React, { useEffect, useState } from 'react';
import { X, Phone, MessageSquare, Award, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { alwalTrainers } from '../data/gymData';

interface AlwalTrainersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlwalTrainersModal: React.FC<AlwalTrainersModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTrainerIndex, setActiveTrainerIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setActiveTrainerIndex(null);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeTrainerIndex !== null) {
          setActiveTrainerIndex(null);
        } else {
          onClose();
        }
      } else if (activeTrainerIndex !== null) {
        if (e.key === 'ArrowRight') {
          setActiveTrainerIndex((prev) => ((prev ?? 0) + 1) % alwalTrainers.length);
        } else if (e.key === 'ArrowLeft') {
          setActiveTrainerIndex((prev) => ((prev ?? 0) - 1 + alwalTrainers.length) % alwalTrainers.length);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, activeTrainerIndex, onClose]);

  if (!isOpen) return null;

  const alwalPhone = "+91 90322 71341";
  const whatsappUrl = `https://wa.me/919032271341?text=${encodeURIComponent(
    "Hi F7 Fitness! I am inquiring about training sessions at the Alwal branch."
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto">
      {/* Background click to dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-5xl bg-brand-black border border-brand-yellow/30 shadow-2xl my-auto overflow-hidden animate-fadeIn">
        {/* Top Header */}
        <div className="p-6 sm:p-8 border-b border-brand-gray-light flex items-start justify-between gap-4 bg-brand-gray/30">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-sans font-bold text-[10px] tracking-[0.25em] text-brand-yellow uppercase bg-brand-yellow/10 px-2.5 py-1 border border-brand-yellow/20">
                ALWAL BRANCH
              </span>
              <span className="font-sans font-bold text-[10px] tracking-widest text-brand-neutral/60 uppercase">
                4 CERTIFIED COACHES
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
              MEET THE ALWAL COACHES
            </h2>
            <p className="font-sans text-brand-neutral/70 text-xs sm:text-sm mt-2 max-w-2xl leading-relaxed">
              Our 4 certified trainers at F7 Fitness Alwal provide hands-on coaching, progressive overload guidance, biomechanics correction, and goal-focused workout plans.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-brand-neutral/60 hover:text-brand-yellow hover:bg-brand-gray border border-transparent hover:border-brand-yellow/30 transition-all shrink-0"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body: 4 Trainers Grid */}
        <div className="p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {alwalTrainers.map((coach, idx) => (
              <div
                key={coach.id}
                onClick={() => setActiveTrainerIndex(idx)}
                className="group cursor-pointer flex flex-col bg-brand-gray/40 border border-brand-gray-light hover:border-brand-yellow transition-all duration-300 overflow-hidden"
              >
                {/* Trainer Portrait */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-brand-gray">
                  <img
                    src={coach.image}
                    alt="F7 Alwal Certified Trainer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Zoom indicator on hover */}
                  <div className="absolute inset-0 bg-brand-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-brand-black/90 border border-brand-yellow text-brand-yellow px-3 py-1 text-[11px] font-sans font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg">
                      <Maximize2 size={12} /> Expand
                    </span>
                  </div>
                </div>

                {/* Trainer Details */}
                <div className="p-4 flex flex-col flex-grow justify-between text-left">
                  <div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <Award size={14} className="text-brand-yellow shrink-0" />
                      <span className="font-sans font-bold text-xs text-brand-yellow tracking-widest uppercase">
                        {coach.role}
                      </span>
                    </div>
                    <h3 className="font-display font-black text-base text-white uppercase tracking-wider mb-1">
                      {coach.specialization}
                    </h3>
                  </div>

                  <div className="mt-4 pt-3 border-t border-brand-gray-light flex items-center justify-between text-[10px] font-sans text-brand-neutral/50 uppercase tracking-widest">
                    <span>📍 F7 Alwal</span>
                    <span className="text-brand-yellow group-hover:underline">View Photo →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Contact / Branch Actions */}
        <div className="p-6 sm:p-8 bg-brand-gray/20 border-t border-brand-gray-light flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left w-full sm:w-auto">
            <span className="font-sans font-bold text-[10px] text-brand-neutral/50 uppercase tracking-widest block">
              READY TO TRAIN AT ALWAL?
            </span>
            <p className="font-sans text-white text-xs sm:text-sm font-semibold">
              Reach out to our Alwal branch desk to book a session with our coaches.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${alwalPhone.replace(/\s+/g, '')}`}
              className="inline-flex items-center justify-center gap-2 bg-brand-yellow text-brand-black font-sans font-black text-xs uppercase tracking-widest px-5 py-3 border border-brand-yellow hover:bg-transparent hover:text-brand-yellow transition-all"
            >
              <Phone size={14} />
              <span>CALL {alwalPhone}</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-sans font-black text-xs uppercase tracking-widest px-5 py-3 border border-white/20 hover:border-brand-yellow hover:text-brand-yellow transition-all"
            >
              <MessageSquare size={14} />
              <span>WHATSAPP ALWAL</span>
            </a>
          </div>
        </div>
      </div>

      {/* Single Trainer Expanded Lightbox (if clicked) */}
      {activeTrainerIndex !== null && (
        <div
          className="fixed inset-0 z-60 bg-black/95 flex flex-col items-center justify-center p-4 animate-fadeIn"
          onClick={() => setActiveTrainerIndex(null)}
        >
          {/* Close expanded view */}
          <button
            onClick={() => setActiveTrainerIndex(null)}
            className="absolute top-4 right-4 p-2 text-white hover:text-brand-yellow transition-colors"
            aria-label="Close photo view"
          >
            <X size={28} />
          </button>

          {/* Navigation buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveTrainerIndex((prev) => ((prev ?? 0) - 1 + alwalTrainers.length) % alwalTrainers.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-brand-black/70 border border-white/20 text-white hover:border-brand-yellow hover:text-brand-yellow transition-all"
            aria-label="Previous trainer"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveTrainerIndex((prev) => ((prev ?? 0) + 1) % alwalTrainers.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-brand-black/70 border border-white/20 text-white hover:border-brand-yellow hover:text-brand-yellow transition-all"
            aria-label="Next trainer"
          >
            <ChevronRight size={24} />
          </button>

          {/* Image Container */}
          <div
            className="max-h-[80vh] max-w-lg w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={alwalTrainers[activeTrainerIndex].image}
              alt="Alwal Certified Trainer"
              className="max-h-[70vh] w-auto object-contain border border-brand-yellow/40 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="font-sans font-bold text-xs text-brand-yellow tracking-widest uppercase">
                ALWAL BRANCH • CERTIFIED COACH
              </span>
              <h4 className="font-display font-black text-xl text-white uppercase mt-1">
                {alwalTrainers[activeTrainerIndex].specialization}
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
