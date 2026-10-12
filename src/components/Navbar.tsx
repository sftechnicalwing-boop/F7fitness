import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { gymDetails } from '../data/gymData';

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Programs', to: '/programs' },
  { name: 'Location', to: '/location' },
  { name: 'Trainers', to: '/trainers' },
  { name: 'Membership', to: '/membership' },
  { name: 'Contact', to: '/contact' },
];

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const updateScrolled = (scrollTop: number) => {
      setScrolled(scrollTop > 50);
    };

    const onWindowScroll = () => updateScrolled(window.scrollY);
    const onSnapScroll = (event: Event) => {
      updateScrolled((event.currentTarget as HTMLElement).scrollTop);
    };

    window.addEventListener('scroll', onWindowScroll);
    const snap = document.getElementById('home-snap');
    snap?.addEventListener('scroll', onSnapScroll);
    updateScrolled(snap?.scrollTop ?? window.scrollY);

    return () => {
      window.removeEventListener('scroll', onWindowScroll);
      snap?.removeEventListener('scroll', onSnapScroll);
    };
  }, [pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-sans text-[13px] font-semibold uppercase tracking-wider transition-colors duration-200 ${
      isActive ? 'text-brand-yellow' : 'text-brand-white/80 hover:text-brand-yellow'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `font-display font-black text-2xl uppercase tracking-wider transition-colors ${
      isActive ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'
    }`;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-brand-black border-b border-brand-gray-light py-4 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo variant="horizontal" height={scrolled ? 36 : 44} className="transition-all duration-300" />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              to="/auth"
              className="group relative inline-flex items-center justify-center bg-brand-yellow text-brand-black font-sans font-bold text-xs uppercase tracking-widest px-6 py-3 border border-brand-yellow hover:bg-transparent hover:text-brand-yellow transition-all duration-300"
            >
              <span>JOIN NOW</span>
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-brand-yellow p-1 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <div 
        className={`fixed inset-0 z-30 bg-brand-black border-l border-brand-gray-light lg:hidden transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-28 pb-8 px-8">
          <div className="flex flex-col gap-6 mb-auto">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={mobileLinkClass}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-6 border-t border-brand-gray-light pt-8">
            <Link
              to="/auth"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-brand-yellow text-brand-black font-sans font-bold text-sm uppercase tracking-widest py-4 border border-brand-yellow hover:bg-transparent hover:text-brand-yellow transition-all duration-300"
            >
              JOIN F7 FITNESS
            </Link>
            
            <div className="text-center">
              <p className="text-[10px] text-brand-neutral/50 uppercase tracking-widest">CALL NOW</p>
              <a href={`tel:${gymDetails.phone.replace(/\s+/g, '')}`} className="text-brand-yellow font-sans font-bold tracking-wider text-sm mt-1 inline-block">
                {gymDetails.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
