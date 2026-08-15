import React from 'react';
import { Check, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { membershipPlans, gymDetails } from '../data/gymData';

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="bg-brand-black py-24 sm:py-36 border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-left mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="font-sans font-bold text-xs tracking-[0.25em] text-brand-yellow uppercase mb-3">
              MEMBERSHIP TIERS
            </p>
            <h2 className="font-display font-black text-3xl sm:text-5xl tracking-tight uppercase leading-[0.95]">
              CHOOSE YOUR COMMITMENT.
            </h2>
            <div className="h-[2px] w-16 bg-brand-yellow mt-4"></div>
          </div>
          <p className="font-sans text-brand-neutral/60 max-w-sm text-xs sm:text-sm leading-relaxed">
            No long-term sign-up fees or hidden contracts. Choose the plan that aligns with your athletic timeline.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {membershipPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col justify-between p-8 bg-brand-gray border ${
                plan.recommended 
                  ? 'border-brand-yellow ring-1 ring-brand-yellow shadow-2xl' 
                  : 'border-brand-gray-light hover:border-white/30'
              } transition-all duration-300 group`}
            >
              {/* Highlight Badge */}
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-yellow text-brand-black font-sans font-black text-[9px] tracking-widest px-4 py-1 uppercase rounded-sm">
                  RECOMMENDED
                </span>
              )}
              
              {/* Plan Title & Price */}
              <div className="text-left">
                <h3 className="font-display font-black text-lg text-brand-neutral/50 uppercase tracking-widest mb-4">
                  {plan.name}
                </h3>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-display font-black text-3xl sm:text-4xl text-white">
                    {plan.price}
                  </span>
                  <span className="font-sans text-xs text-brand-neutral/50 lowercase">
                    / {plan.period}
                  </span>
                </div>
                
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-left">
                      <Check size={14} className="text-brand-yellow mt-0.5 shrink-0" />
                      <span className="font-sans text-brand-neutral/80 text-[11px] sm:text-xs">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conversion Buttons */}
              <div className="flex flex-col gap-3 pt-6 border-t border-brand-gray-light">
                <Link 
                  to="/auth"
                  className={`w-full text-center font-sans font-bold text-xs uppercase tracking-widest py-3 border transition-all duration-300 ${
                    plan.recommended
                      ? 'bg-brand-yellow text-brand-black border-brand-yellow hover:bg-transparent hover:text-brand-yellow'
                      : 'bg-transparent text-white border-white/20 hover:border-brand-yellow hover:text-brand-yellow'
                  }`}
                >
                  JOIN NOW
                </Link>
                
                <a 
                  href={`tel:${gymDetails.phone.replace(/\s+/g, '')}`}
                  className="w-full inline-flex items-center justify-center gap-2 font-sans font-bold text-[10px] text-brand-neutral/50 hover:text-brand-yellow tracking-widest py-1.5 uppercase transition-colors"
                >
                  <MessageSquare size={12} />
                  <span>TALK TO US</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
