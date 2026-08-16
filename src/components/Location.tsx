import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import { gymDetails, locations } from '../data/gymData';

export const Location: React.FC = () => {
  const [activeLocationIndex, setActiveLocationIndex] = useState(0);
  const activeLocation = locations[activeLocationIndex];

  return (
    <section id="contact" className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
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
          
          {/* Contact Information (7 cols) */}
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
                      CALL OFFICE
                    </span>
                    <a href={`tel:${gymDetails.phone.replace(/\s+/g, '')}`} className="font-sans font-bold text-sm text-white hover:text-brand-yellow transition-colors">
                      {gymDetails.phone}
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
                href={gymDetails.whatsapp}
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
              title={`Google Maps Location - ${activeLocation.name}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(activeLocation.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
