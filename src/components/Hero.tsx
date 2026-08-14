import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const Hero: React.FC = () => {
  // Stable high-quality CDN fitness stock video (autoplays fast)
  const videoUrl = "https://player.vimeo.com/external/538902581.sd.mp4?s=d001602492f1f0a514d3f3f5b08c903fb5cdbe2e&profile_id=165&oauth2_token_id=57447761";
  const posterUrl = "/images/hero_gym_poster.png";

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center bg-black">
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={posterUrl}
        className="absolute top-0 left-0 w-full h-full object-cover scale-[1.02]"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Cinematic Vignette Overlay (Subtle readability gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/20 z-10" />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full mt-12 sm:mt-0">
        <div className="max-w-2xl text-left">
          {/* Brand Label Accent */}
          <div className="flex items-center gap-2 mb-4 animate-fade-in">
            <span className="h-[2px] w-8 bg-brand-yellow"></span>
            <span className="font-sans font-black text-xs sm:text-sm tracking-[0.3em] text-brand-yellow uppercase">
              F7 FITNESS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl tracking-tighter text-white uppercase leading-[0.9] mb-6">
            BUILD YOUR <br />
            <span className="text-brand-yellow">STRONGEST</span> SELF.
          </h1>

          {/* Supporting Body */}
          <p className="font-sans text-sm sm:text-base text-brand-neutral/80 max-w-lg mb-8 leading-relaxed">
            Train with purpose. Build functional strength. Elevate your athletic capacity and become better every single day.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a 
              href="#membership" 
              className="group inline-flex items-center justify-center bg-brand-yellow text-brand-black font-sans font-extrabold text-sm uppercase tracking-wider px-8 py-4 border border-brand-yellow hover:bg-transparent hover:text-brand-yellow transition-all duration-300"
            >
              <span>JOIN F7 FITNESS</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="#about" 
              className="group inline-flex items-center justify-center bg-transparent text-white font-sans font-extrabold text-sm uppercase tracking-wider px-8 py-4 border border-white/30 hover:border-brand-yellow hover:text-brand-yellow transition-all duration-300"
            >
              <Play size={14} className="mr-2 fill-white group-hover:fill-brand-yellow group-hover:text-brand-yellow transition-colors" />
              <span>EXPLORE THE GYM</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator overlay */}
      <div className="absolute bottom-8 left-0 w-full z-20 flex justify-center pointer-events-none">
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans font-semibold text-[10px] tracking-[0.25em] text-white/50 uppercase">
            SCROLL TO EXPLORE
          </span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-yellow animate-[scrollLine_2s_infinite_ease-in-out]" />
          </div>
        </div>
      </div>
      
      {/* Styles for scroll animation inline */}
      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};
