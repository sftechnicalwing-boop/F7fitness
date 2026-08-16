import React from 'react';
import { Logo } from './Logo';
import { gymDetails, locations } from '../data/gymData';

export const Footer: React.FC = () => {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-brand-black border-t border-brand-gray-light pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top/Main block */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-brand-gray-light">
          
          {/* Logo column - 5 cols */}
          <div className="md:col-span-5 flex flex-col items-start text-left space-y-6">
            <a href="#home">
              <Logo variant="horizontal" height={44} />
            </a>
            <p className="font-sans text-brand-neutral/50 text-xs sm:text-sm leading-relaxed max-w-sm">
              Elite strength training and athletic coaching center in Hyderabad. Built for athletes, lifters, and individuals seeking progressive physical improvement.
            </p>
            {/* Social Links - minimal placeholders */}
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-brand-gray border border-brand-gray-light hover:border-brand-yellow hover:text-brand-yellow rounded-full text-white/70 transition-all duration-300" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="p-2 bg-brand-gray border border-brand-gray-light hover:border-brand-yellow hover:text-brand-yellow rounded-full text-white/70 transition-all duration-300" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="p-2 bg-brand-gray border border-brand-gray-light hover:border-brand-yellow hover:text-brand-yellow rounded-full text-white/70 transition-all duration-300" aria-label="Youtube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"></path><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Quick links - 3 cols */}
          <div className="md:col-span-3 text-left">
            <h4 className="font-display font-bold text-xs text-brand-yellow uppercase tracking-widest mb-6">
              QUICK NAVIGATION
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="font-sans text-xs sm:text-sm text-brand-neutral/60 hover:text-white transition-colors uppercase tracking-wider font-semibold"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details - 4 cols */}
          <div className="md:col-span-4 text-left">
            <h4 className="font-display font-bold text-xs text-brand-yellow uppercase tracking-widest mb-6">
              CONTACT BASE
            </h4>
            <div className="space-y-4 font-sans text-xs sm:text-sm text-brand-neutral/60">
              <p className="leading-relaxed">
                <span className="text-white font-bold block mb-1">HQ ADDRESS:</span>
                {locations[0].address}
              </p>
              <p>
                <span className="text-white font-bold block mb-1">TELEPHONE:</span>
                <a href={`tel:${gymDetails.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {gymDetails.phone}
                </a>
              </p>
              <p>
                <span className="text-white font-bold block mb-1">EMAIL SUPPORT:</span>
                <a href={`mailto:${gymDetails.email}`} className="hover:text-white transition-colors">
                  {gymDetails.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom block */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] sm:text-xs text-brand-neutral/40 uppercase tracking-widest">
          <p>© 2026 F7 Fitness — By Prasad Konda. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
