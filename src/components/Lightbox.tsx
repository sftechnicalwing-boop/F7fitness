import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  imageSrc: string;
  imageAlt?: string;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  imageSrc,
  imageAlt = 'Enlarged view',
  onClose,
  onPrev,
  onNext
}) => {
  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm transition-opacity duration-300">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2 text-white hover:text-brand-yellow bg-brand-gray-light hover:bg-brand-yellow/10 rounded-full transition-colors"
        aria-label="Close Lightbox"
      >
        <X size={28} />
      </button>

      {/* Navigation - Prev */}
      {onPrev && (
        <button 
          onClick={onPrev}
          className="absolute left-6 z-50 p-3 text-white hover:text-brand-yellow bg-brand-gray-light/50 hover:bg-brand-yellow/10 rounded-full transition-colors hidden sm:block"
          aria-label="Previous Image"
        >
          <ChevronLeft size={32} />
        </button>
      )}

      {/* Image Container */}
      <div className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center select-none" onClick={(e) => e.stopPropagation()}>
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="max-w-full max-h-[80vh] object-contain border border-brand-gray-light"
        />
        {imageAlt && (
          <p className="mt-4 text-brand-neutral font-sans text-sm tracking-wider uppercase font-semibold">
            {imageAlt}
          </p>
        )}
      </div>

      {/* Navigation - Next */}
      {onNext && (
        <button 
          onClick={onNext}
          className="absolute right-6 z-50 p-3 text-white hover:text-brand-yellow bg-brand-gray-light/50 hover:bg-brand-yellow/10 rounded-full transition-colors hidden sm:block"
          aria-label="Next Image"
        >
          <ChevronRight size={32} />
        </button>
      )}

      {/* Backdrop tap to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
};
