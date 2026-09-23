import React, { useState } from 'react';
import { X, MessageSquare, ChevronRight } from 'lucide-react';
import { locations } from '../data/gymData';

type Step = 'welcome' | 'choose-branch' | 'connecting';

const BRANCH_ICONS: Record<string, string> = {
  'loc-bolarum': '🏋️',
  'loc-risala': '💪',
  'loc-alwal': '🔥',
};

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
      `Hi ${loc.trainerName}! I am interested in joining F7 Fitness at the ${loc.name} branch. Can you help me with a plan?`
    );
    const url = `https://wa.me/${waPhone}?text=${message}`;

    // Short delay so user sees the "connecting" screen, then open WhatsApp
    setTimeout(() => {
      window.open(url, '_blank', 'noopener,noreferrer');
      // Reset after redirect
      setTimeout(() => {
        setStep('welcome');
        setSelectedIdx(null);
        setOpen(false);
      }, 1500);
    }, 1200);
  };

  const handleClose = () => {
    setOpen(false);
    setStep('welcome');
    setSelectedIdx(null);
  };

  return (
    <>
      {/* Floating WhatsApp Launcher Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Chat with F7 Fitness"
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#22c35e] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 group ${open ? 'opacity-0 pointer-events-none scale-90' : 'opacity-100'}`}
      >
        {/* WhatsApp SVG */}
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.025 14.077.996 11.997.996c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.476 3.41 1.381 4.869L2.512 21.05l5.525-1.436v-.004c.002 0 .002.001.003.001.002 0 .002-.001.003-.001zm10.742-7.39c-.27-.133-1.597-.788-1.845-.878-.248-.09-.43-.134-.61.134-.18.27-.697.878-.855 1.058-.158.18-.315.202-.585.068-.27-.133-1.139-.42-2.17-1.341-.803-.715-1.345-1.6-1.503-1.869-.158-.27-.017-.417.118-.552.122-.121.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.068-.135-.61-1.472-.835-2.016-.219-.53-.439-.459-.61-.468-.158-.008-.338-.01-.518-.01a1 1 0 00-.72.338c-.248.248-.945.923-.945 2.25 0 1.328.968 2.61 1.103 2.79.135.18 1.905 2.91 4.615 4.08.645.278 1.148.445 1.54.57.648.206 1.238.177 1.704.108.52-.078 1.597-.652 1.823-1.282.225-.63.225-1.17.158-1.282-.068-.112-.248-.202-.518-.337z" />
        </svg>

        {/* Tooltip */}
        <span className="absolute right-16 bg-brand-black text-white text-xs font-bold font-sans px-3 py-2 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none">
          Chat with F7 Fitness
        </span>
      </button>

      {/* Chat Widget Panel */}
      <div
        className={`fixed bottom-6 right-6 z-50 w-80 bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-90 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-[#25D366] px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageSquare size={20} className="text-white" />
            </div>
            <div>
              <p className="font-sans font-black text-white text-sm uppercase tracking-wider">F7 FITNESS</p>
              <p className="font-sans text-white/80 text-[10px] tracking-widest uppercase">● Online</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-4 py-5 min-h-[220px] flex flex-col">

          {/* Step: Welcome */}
          {step === 'welcome' && (
            <div className="flex flex-col gap-4">
              {/* Bot message bubble */}
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 mb-1">
                  <span className="text-xs">💬</span>
                </div>
                <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[220px]">
                  <p className="font-sans text-white text-sm leading-relaxed">
                    👋 Welcome to <span className="font-black text-[#25D366]">F7 Fitness!</span>
                  </p>
                  <p className="font-sans text-white/70 text-xs mt-1 leading-relaxed">
                    We'd love to help you start your fitness journey. Please select your nearest branch to connect with your trainer.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setStep('choose-branch')}
                className="mt-1 w-full bg-[#25D366] hover:bg-[#22c35e] text-white font-sans font-black text-xs uppercase tracking-widest py-3 rounded-xl transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Choose Your Branch
                <ChevronRight size={14} />
              </button>
            </div>
          )}

          {/* Step: Choose Branch */}
          {step === 'choose-branch' && (
            <div className="flex flex-col gap-3">
              <div className="flex items-end gap-2">
                <div className="w-7 h-7 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 mb-1">
                  <span className="text-xs">💬</span>
                </div>
                <div className="bg-white/10 rounded-2xl rounded-bl-sm px-4 py-3 max-w-[220px]">
                  <p className="font-sans text-white text-sm">
                    📍 Which branch is closest to you?
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-1">
                {locations.map((loc, idx) => (
                  <button
                    key={loc.id}
                    onClick={() => handleBranchSelect(idx)}
                    className="w-full text-left bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/50 rounded-xl px-4 py-3 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-sans font-black text-white text-sm group-hover:text-[#25D366] transition-colors">
                          {BRANCH_ICONS[loc.id] || '🏋️'} {loc.name}
                        </p>
                        <p className="font-sans text-white/40 text-[10px] mt-0.5 uppercase tracking-widest">
                          Trainer: {loc.trainerName}
                        </p>
                      </div>
                      <ChevronRight size={14} className="text-white/30 group-hover:text-[#25D366] transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step: Connecting */}
          {step === 'connecting' && selectedIdx !== null && (
            <div className="flex flex-col items-center justify-center gap-4 py-6">
              <div className="w-14 h-14 bg-[#25D366]/20 rounded-full flex items-center justify-center animate-pulse">
                <svg className="w-8 h-8 fill-[#25D366]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.025 14.077.996 11.997.996c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.476 3.41 1.381 4.869L2.512 21.05l5.525-1.436v-.004c.002 0 .002.001.003.001.002 0 .002-.001.003-.001zm10.742-7.39c-.27-.133-1.597-.788-1.845-.878-.248-.09-.43-.134-.61.134-.18.27-.697.878-.855 1.058-.158.18-.315.202-.585.068-.27-.133-1.139-.42-2.17-1.341-.803-.715-1.345-1.6-1.503-1.869-.158-.27-.017-.417.118-.552.122-.121.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.068-.135-.61-1.472-.835-2.016-.219-.53-.439-.459-.61-.468-.158-.008-.338-.01-.518-.01a1 1 0 00-.72.338c-.248.248-.945.923-.945 2.25 0 1.328.968 2.61 1.103 2.79.135.18 1.905 2.91 4.615 4.08.645.278 1.148.445 1.54.57.648.206 1.238.177 1.704.108.52-.078 1.597-.652 1.823-1.282.225-.63.225-1.17.158-1.282-.068-.112-.248-.202-.518-.337z" />
                </svg>
              </div>
              <div className="text-center">
                <p className="font-sans font-black text-white text-sm uppercase tracking-wider">
                  Connecting you to
                </p>
                <p className="font-sans font-black text-[#25D366] text-base uppercase tracking-widest mt-0.5">
                  {locations[selectedIdx].trainerName}
                </p>
                <p className="font-sans text-white/40 text-[10px] mt-1 uppercase tracking-widest">
                  {locations[selectedIdx].name} Branch
                </p>
              </div>
              <p className="font-sans text-white/40 text-xs">Opening WhatsApp...</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 pb-3 text-center">
          <p className="font-sans text-white/20 text-[9px] uppercase tracking-widest">Powered by F7 Fitness</p>
        </div>
      </div>
    </>
  );
};
