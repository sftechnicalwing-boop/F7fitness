import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Navigation, Eye } from 'lucide-react';
import { gymDetails, locations, alwalTrainers } from '../data/gymData';
import { AlwalTrainersModal } from './AlwalTrainersModal';

export const Location: React.FC = () => {
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  const [isAlwalModalOpen, setIsAlwalModalOpen] = useState(false);
  const activeLocation = locations[activeLocationIndex];

  const phoneDigits = activeLocation.phone.replace(/\D/g, '');
  const waPhone = phoneDigits.startsWith('91') ? phoneDigits : `91${phoneDigits}`;
  const isAlwal = activeLocation.id === 'loc-alwal';

  const whatsappGreeting = isAlwal
    ? 'Hi F7 Fitness! I am interested in joining F7 Fitness (Alwal branch).'
    : `Hi ${activeLocation.trainerName}! I am interested in joining F7 Fitness (${activeLocation.name} branch).`;

  const whatsappUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(whatsappGreeting)}`;

  return (
    <section id="location" className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-left mb-16 max-w-xl">
          <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-3">
            OPERATIONAL BASE
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase leading-[0.95]">
            LOCATION & HOURS.
          </h2>
          <div className="h-[2px] w-16 bg-brand-yellow mt-4"></div>
        </div>

        {/* Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Information (6 cols) */}
          <div className="lg:col-span-6 text-left flex flex-col justify-between">
            <div className="space-y-8">
              {/* Location Selector */}
              <div className="flex gap-4 mb-6">
                <div className="mt-1 text-brand-yellow shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="w-full">
                  <h4 className="font-sans font-bold text-xs text-brand-neutral/40 uppercase tracking-widest mb-3">
                    SELECT LOCATION
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {locations.map((loc, idx) => (
                      <button
                        key={loc.id}
                        onClick={() => setActiveLocationIndex(idx)}
                        className={`font-sans font-bold text-[10px] tracking-widest px-4 py-2 uppercase border transition-colors ${
                          activeLocationIndex === idx
                            ? 'bg-brand-yellow text-brand-black border-brand-yellow'
                            : 'bg-transparent text-white border-white/20 hover:border-brand-yellow'
                        }`}
                      >
                        {loc.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <div className="mt-1 text-brand-yellow shrink-0 opacity-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-brand-neutral/40 uppercase tracking-widest mb-1.5">
                    THE TRAINING BASE
                  </h4>
                  <p className="font-sans text-white text-xs sm:text-sm leading-relaxed">
                    {activeLocation.address}
                  </p>
                </div>
              </div>

              {/* Alwal Coaches Collage Teaser (If Alwal Branch is active) */}
              {isAlwal && (
                <div 
                  onClick={() => setIsAlwalModalOpen(true)}
                  className="group cursor-pointer p-4 border border-brand-yellow/40 bg-brand-yellow/5 hover:bg-brand-yellow/10 transition-all duration-300 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    {/* Mini 2x2 Collage Thumbnail */}
                    <div className="grid grid-cols-2 grid-rows-2 w-16 h-16 shrink-0 gap-0.5 bg-black border border-brand-yellow/50 overflow-hidden shadow-md">
                      {alwalTrainers.map((coach, idx) => (
                        <img 
                          key={coach.id} 
                          src={coach.image} 
                          alt={`Trainer ${idx + 1}`}
                          className="w-full h-full object-cover object-top transition-all duration-300"
                        />
                      ))}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-display font-black text-sm text-white uppercase tracking-wider group-hover:text-brand-yellow transition-colors">
                          ALWAL COACHING TEAM
                        </span>
                        <span className="font-sans font-bold text-[9px] bg-brand-yellow text-brand-black px-2 py-0.5 uppercase tracking-wider">
                          4 COACHES
                        </span>
                      </div>
                      <p className="font-sans text-xs text-brand-neutral/70 mt-1">
                        4 certified trainers ready to guide your journey. Click to view all coaches.
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1 font-sans font-bold text-xs text-brand-yellow uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    <span className="hidden sm:inline">VIEW</span>
                    <Eye size={16} />
                  </div>
                </div>
              )}

              {/* Hours */}
              <div className="flex gap-4">
                <div className="mt-1 text-brand-yellow shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-brand-neutral/40 uppercase tracking-widest mb-1.5">
                    OPENING HOURS
                  </h4>
                  <div className="space-y-1 font-sans text-white text-xs sm:text-sm">
                    {gymDetails.openingHours.map((hours, idx) => (
                      <p key={idx}>{hours}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Triggers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-brand-gray-light">
                {/* Phone */}
                <div className="flex gap-3">
                  <Phone size={16} className="text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="font-sans font-bold text-[10px] text-brand-neutral/40 uppercase tracking-widest block mb-0.5">
                      {isAlwal ? 'CALL BRANCH DESK • ALWAL' : `CALL TRAINER • ${activeLocation.trainerName.toUpperCase()}`}
                    </span>
                    <a href={`tel:${activeLocation.phone.replace(/\s+/g, '')}`} className="font-sans font-bold text-sm text-white hover:text-brand-yellow transition-colors">
                      {activeLocation.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <Mail size={16} className="text-brand-yellow shrink-0 mt-0.5" />
                  <div>
                    <span className="font-sans font-bold text-[10px] text-brand-neutral/40 uppercase tracking-widest block mb-0.5">
                      EMAIL INQUIRIES
                    </span>
                    <a href={`mailto:${gymDetails.email}`} className="font-sans font-bold text-sm text-white hover:text-brand-yellow transition-colors">
                      {gymDetails.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12">
              <a 
                href={activeLocation.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center bg-brand-yellow text-brand-black font-sans font-black text-xs uppercase tracking-widest px-8 py-4 border border-brand-yellow hover:bg-transparent hover:text-brand-yellow transition-all duration-300"
              >
                <Navigation size={14} className="mr-2 group-hover:rotate-45 transition-transform duration-300 fill-brand-black group-hover:fill-brand-yellow" />
                <span>GET DIRECTIONS</span>
              </a>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center bg-transparent text-white font-sans font-black text-xs uppercase tracking-widest px-8 py-4 border border-white/20 hover:border-brand-yellow hover:text-brand-yellow transition-all duration-300"
              >
                <MessageSquare size={14} className="mr-2" />
                <span>WHATSAPP US</span>
              </a>
            </div>
          </div>

          {/* Google Maps Embed (6 cols) */}
          <div className="lg:col-span-6 relative w-full h-[320px] lg:h-full min-h-[300px] border border-brand-gray-light overflow-hidden bg-brand-gray">
            <iframe 
              key={activeLocation.id}
              title={`Google Maps Location - ${activeLocation.name}`}
              src={`https://maps.google.com/maps?q=${activeLocation.lat},${activeLocation.lng}&z=16&ie=UTF8&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all duration-500"
            />
          </div>

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
