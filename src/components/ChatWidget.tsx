import React, { useState } from 'react';
import { X, ChevronRight, MapPin } from 'lucide-react';
import { locations } from '../data/gymData';

type Step = 'welcome' | 'choose-branch' | 'connecting';

const WaIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.025 14.077.996 11.997.996c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.476 3.41 1.381 4.869L2.512 21.05l5.525-1.436v-.004zm10.742-7.39c-.27-.133-1.597-.788-1.845-.878-.248-.09-.43-.134-.61.134-.18.27-.697.878-.855 1.058-.158.18-.315.202-.585.068-.27-.133-1.139-.42-2.17-1.341-.803-.715-1.345-1.6-1.503-1.869-.158-.27-.017-.417.118-.552.122-.121.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.068-.135-.61-1.472-.835-2.016-.219-.53-.439-.459-.61-.468-.158-.008-.338-.01-.518-.01a1 1 0 00-.72.338c-.248.248-.945.923-.945 2.25 0 1.328.968 2.61 1.103 2.79.135.18 1.905 2.91 4.615 4.08.645.278 1.148.445 1.54.57.648.206 1.238.177 1.704.108.52-.078 1.597-.652 1.823-1.282.225-.63.225-1.17.158-1.282-.068-.112-.248-.202-.518-.337z" />
  </svg>
);

export const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('welcome');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleBranchSelect = (idx: number) => {
    setSelectedIdx(idx);
    setStep('connecting');

    const loc = locations[idx];
    const phoneDigits = loc.phone.replace(/\D/g, '');
    const waPhone = phoneDigits.startsWith('91') ? phoneDigits : `91${phoneDigits}`;
    const message = encodeURIComponent(
      `Hi ${loc.trainerName}! I'm interested in joining F7 Fitness at the ${loc.name} branch. Can you share a plan?`
    );
    const url = `https://wa.me/${waPhone}?text=${message}`;

    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      setTimeout(() => {
        setOpen(false);
        setStep('welcome');
        setSelectedIdx(null);
      }, 800);
    }, 1200);
  };

  const handleClose = () => {
    setOpen(false);
    setStep('welcome');
    setSelectedIdx(null);
  };

  return (
    <>
      {/* Floating Launcher */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Chat with F7 Fitness"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white font-sans font-bold text-sm px-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:bg-[#22c35e] transition-all duration-300 ${open ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100 scale-100'}`}
      >
        <WaIcon />
        <span className="tracking-wide">Chat with Us</span>
      </button>

      {/* Widget Panel */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-[340px] bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center text-white">
              <WaIcon />
            </div>
            <div>
              <p className="font-sans font-black text-white text-sm uppercase tracking-widest">F7 Fitness</p>
              <p className="font-sans text-[10px] text-[#25D366] tracking-widest uppercase">● Online</p>
            </div>
          </div>
          <button onClick={handleClose} className="text-white/40 hover:text-white transition-colors" aria-label="Close">
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-5 py-5">

          {/* STEP: Welcome */}
          {step === 'welcome' && (
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-sans font-black text-white text-base uppercase tracking-wider mb-1">
                  Welcome 👋
                </p>
                <p className="font-sans text-white/50 text-sm leading-relaxed">
                  Connect directly with your nearest branch trainer and get a personalised fitness plan.
                </p>
              </div>
              <button
                onClick={() => setStep('choose-branch')}
                className="w-full flex items-center justify-between bg-[#25D366] text-white font-sans font-black text-xs uppercase tracking-widest px-5 py-3.5 rounded-xl hover:bg-[#22c35e] transition-colors duration-200"
              >
                Select Your Branch
                <ChevronRight size={16} />
              </button>
            </div>
          )}

          {/* STEP: Choose Branch */}
          {step === 'choose-branch' && (
            <div className="flex flex-col gap-3">
              <p className="font-sans font-black text-white text-xs uppercase tracking-widest mb-1">
                Choose a Branch
              </p>
              {locations.map((loc, idx) => (
                <button
                  key={loc.id}
                  onClick={() => handleBranchSelect(idx)}
                  className="w-full flex items-center justify-between bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#25D366]/50 rounded-xl px-4 py-3.5 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 text-left">
                    <MapPin size={14} className="text-[#25D366] shrink-0" />
                    <div>
                      <p className="font-sans font-bold text-white text-sm group-hover:text-[#25D366] transition-colors">
                        {loc.name}
                      </p>
                      <p className="font-sans text-white/30 text-[10px] uppercase tracking-widest mt-0.5">
                        Trainer: {loc.trainerName}
                      </p>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-white/20 group-hover:text-[#25D366] transition-colors shrink-0" />
                </button>
              ))}
            </div>
          )}

          {/* STEP: Connecting */}
          {step === 'connecting' && selectedIdx !== null && (
            <div className="flex flex-col items-center text-center gap-4 py-4">
              <div className="w-12 h-12 bg-[#25D366]/15 rounded-full flex items-center justify-center animate-pulse text-[#25D366]">
                <WaIcon />
              </div>
              <div>
                <p className="font-sans font-black text-white text-sm uppercase tracking-wider">Connecting…</p>
                <p className="font-sans text-[#25D366] font-bold text-base mt-1">{locations[selectedIdx].trainerName}</p>
                <p className="font-sans text-white/30 text-[10px] uppercase tracking-widest mt-0.5">
                  {locations[selectedIdx].name} Branch
                </p>
              </div>
              <p className="font-sans text-white/30 text-xs">Opening WhatsApp</p>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-5 pb-4 text-center">
          <p className="font-sans text-white/15 text-[9px] uppercase tracking-widest">F7 Fitness · All Branches</p>
        </div>
      </div>
    </>
  );
};
