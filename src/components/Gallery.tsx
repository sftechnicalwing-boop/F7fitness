import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { Lightbox } from './Lightbox';

interface GalleryItem {
  id: string;
  category: 'training' | 'facilities' | 'coaches';
  image: string;
  title: string;
}

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'training' | 'facilities' | 'coaches'>('all');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    { id: "g1", category: "facilities", image: "/images/facilities_floor.png", title: "Strength training floor" },
    { id: "g2", category: "training", image: "/images/program_strength.png", title: "Heavy lifting progressive overload" },
    { id: "g3", category: "coaches", image: "/images/trainer_prasad_konda.png", title: "Founder Prasad Konda coaching" },
    { id: "g4", category: "facilities", image: "/images/hero_gym_poster.png", title: "Main cardio and squat setup" },
    { id: "g5", category: "training", image: "/images/gym.jpg", title: "Personal training and barbells" },
    { id: "g6", category: "training", image: "/images/team.jpg", title: "High intensity team workout" },
    { id: "g7", category: "facilities", image: "/images/team2.jpg", title: "Locker room and stretching rig" }
  ];

  // Filter items based on active category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const handlePrev = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev as number) - 1));
    }
  };

  const handleNext = () => {
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev as number) + 1));
    }
  };

  return (
    <section className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-3">
              VISUAL CHRONICLES
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase leading-[0.95]">
              F7 VISUAL GALLERY.
            </h2>
            <div className="h-[2px] w-16 bg-brand-yellow mt-4"></div>
          </div>
          
          {/* Category Filter buttons */}
          <div className="flex flex-wrap gap-2 md:mb-1 select-none">
            {['all', 'training', 'facilities', 'coaches'].map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat as any);
                  setActiveImageIndex(null);
                }}
                className={`px-4 py-2 font-sans font-bold text-[10px] tracking-wider uppercase border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-yellow text-brand-black border-brand-yellow'
                    : 'bg-transparent text-brand-neutral/60 border-brand-gray-light hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => setActiveImageIndex(index)}
              className="relative aspect-square overflow-hidden border border-brand-gray-light cursor-pointer group bg-brand-gray"
            >
              {/* Image */}
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
              />
              
              {/* Overlay zoom indicator */}
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                <div className="p-3 bg-brand-yellow text-brand-black rounded-full transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <Maximize2 size={18} />
                </div>
              </div>
              
              {/* Bottom text label */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-brand-black/90 to-transparent z-10 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="font-sans font-bold text-[9px] text-brand-yellow tracking-widest uppercase">
                  {item.category}
                </span>
                <h4 className="font-display font-semibold text-xs text-white uppercase tracking-wider mt-0.5">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && filteredItems[activeImageIndex] && (
        <Lightbox 
          imageSrc={filteredItems[activeImageIndex].image}
          imageAlt={filteredItems[activeImageIndex].title}
          onClose={() => setActiveImageIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};
