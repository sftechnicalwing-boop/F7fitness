import React from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Navigation, ExternalLink } from 'lucide-react';
import { gymDetails } from '../data/gymData';

export const Location: React.FC = () => {
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
              {/* Address */}
              <div className="flex gap-4">
                <div className="mt-1 text-brand-yellow shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-xs text-brand-neutral/40 uppercase tracking-widest mb-1.5">
                    THE TRAINING BASE
                  </h4>
                  <p className="font-sans text-white text-xs sm:text-sm leading-relaxed">
                    {gymDetails.address}
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
                href={gymDetails.googleMapsUrl}
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

          {/* Custom Styled Map Placeholder (6 cols) */}
          <div className="lg:col-span-6">
            <a 
              href={gymDetails.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block w-full h-[320px] lg:h-full min-h-[300px] bg-brand-gray border border-brand-gray-light hover:border-brand-yellow/50 overflow-hidden group cursor-pointer"
            >
              {/* Sleek Map Vector/Abstract Pattern Grid */}
              <div className="absolute inset-0 bg-brand-black opacity-90 transition-opacity group-hover:opacity-80">
                {/* Radial grid lines for high-tech maps feel */}
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'radial-gradient(var(--color-brand-gray-light) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />
                
                {/* Abstract road paths */}
                <svg className="absolute inset-0 w-full h-full opacity-10 text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0 100 Q 150 120 300 100 T 600 120" stroke="white" strokeWidth="4" fill="none" />
                  <path d="M 100 0 L 120 400" stroke="white" strokeWidth="3" fill="none" />
                  <path d="M 400 0 L 380 400" stroke="white" strokeWidth="3" fill="none" />
                  <path d="M 0 250 L 600 280" stroke="white" strokeWidth="5" fill="none" />
                </svg>
              </div>

              {/* Pin Accent Marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="relative">
                  {/* Rippling circle */}
                  <span className="absolute -top-1 -left-1 w-8 h-8 rounded-full bg-brand-yellow/30 animate-ping" />
                  <div className="w-6 h-6 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg border border-brand-black">
                    <MapPin size={12} className="text-brand-black fill-brand-black" />
                  </div>
                </div>
                
                <span className="font-display font-black text-[10px] text-brand-black bg-brand-yellow px-2 py-0.5 tracking-wider uppercase mt-2 shadow-md">
                  F7 FITNESS
                </span>
              </div>

              {/* Action Banner */}
              <div className="absolute bottom-4 right-4 bg-brand-black/90 border border-brand-gray-light px-3 py-1.5 flex items-center gap-1.5 font-sans font-bold text-[9px] text-brand-neutral/60 tracking-wider uppercase group-hover:text-brand-yellow group-hover:border-brand-yellow/30 transition-colors">
                <span>Launch Google Maps</span>
                <ExternalLink size={10} />
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
