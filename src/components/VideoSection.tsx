import React, { useRef, useState } from 'react';
import { Play, Pause } from 'lucide-react';

export const VideoSection: React.FC = () => {
  // Cinematic raw lifting video
  const videoUrl = "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0227e339f37c355ab09000a6e0337fb&profile_id=139&oauth2_token_id=57447761";
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative w-full h-[50vh] sm:h-[70vh] bg-brand-black overflow-hidden flex items-center justify-center">
      {/* Full width Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover scale-[1.01]"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay for text contrast */}
      <div className="absolute inset-0 bg-brand-black/40 z-10" />

      {/* Minimal Overlay Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white tracking-widest uppercase mb-6 drop-shadow-md">
          FEEL THE <span className="text-brand-yellow">ENERGY.</span>
        </h2>
        
        {/* Play/Pause Control Button */}
        <button 
          onClick={togglePlay}
          className="p-5 sm:p-6 bg-brand-black/80 hover:bg-brand-yellow text-white hover:text-brand-black rounded-full border border-white/20 hover:border-brand-yellow transition-all duration-300 transform hover:scale-105 active:scale-95"
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause size={24} className="fill-current" /> : <Play size={24} className="fill-current ml-0.5" />}
        </button>
      </div>
    </section>
  );
};
