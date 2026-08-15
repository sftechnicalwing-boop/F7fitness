import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VideoTourModal } from './VideoTourModal';

const backgroundImages = [
  "/images/gym_background.jpg",
  "/images/gym_background2.jpg",
  "/images/gym_background3.jpg"
];

export const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center bg-black">
      {/* Background Image Carousel Layer */}
      {backgroundImages.map((image, idx) => (
        <img
          key={image}
          src={image}
          alt={`F7 Fitness Gym Background ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover scale-[1.01] transition-opacity duration-1000 ease-in-out brightness-[1.15] contrast-[1.05] saturate-[1.05] ${
            idx === activeImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Cinematic Vignette Overlay (Subtle readability gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/45 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/15 z-10" />

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
            <Link
              to="/auth"
              className="group inline-flex items-center justify-center bg-brand-yellow text-brand-black font-sans font-extrabold text-sm uppercase tracking-wider px-8 py-4 border border-brand-yellow hover:bg-transparent hover:text-brand-yellow transition-all duration-300"
            >
              <span>JOIN F7 FITNESS</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center justify-center bg-transparent text-white font-sans font-extrabold text-sm uppercase tracking-wider px-8 py-4 border border-white/30 hover:border-brand-yellow hover:text-brand-yellow transition-all duration-300 cursor-pointer"
            >
              <Play size={14} className="mr-2 fill-white group-hover:fill-brand-yellow group-hover:text-brand-yellow transition-colors" />
              <span>EXPLORE THE GYM</span>
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoTourModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
