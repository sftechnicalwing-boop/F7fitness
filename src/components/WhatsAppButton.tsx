import React from 'react';

export const WhatsAppButton: React.FC = () => {
  const phoneNumber = '919908191614';
  const message = encodeURIComponent("Hi! I'm interested in F7 Fitness. Can I get more details?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#22c35e] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 group animate-bounce-subtle cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Logo SVG */}
      <svg
        className="w-8 h-8 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.025 14.077.996 11.997.996c-5.442 0-9.87 4.372-9.874 9.802-.001 1.73.476 3.41 1.381 4.869L2.512 21.05l5.525-1.436v-.004c.002 0 .002.001.003.001.002 0 .002-.001.003-.001zm10.742-7.39c-.27-.133-1.597-.788-1.845-.878-.248-.09-.43-.134-.61.134-.18.27-.697.878-.855 1.058-.158.18-.315.202-.585.068-.27-.133-1.139-.42-2.17-1.341-.803-.715-1.345-1.6-1.503-1.869-.158-.27-.017-.417.118-.552.122-.121.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.337-.022-.472-.068-.135-.61-1.472-.835-2.016-.219-.53-.439-.459-.61-.468-.158-.008-.338-.01-.518-.01a1 1 0 00-.72.338c-.248.248-.945.923-.945 2.25 0 1.328.968 2.61 1.103 2.79.135.18 1.905 2.91 4.615 4.08.645.278 1.148.445 1.54.57.648.206 1.238.177 1.704.108.52-.078 1.597-.652 1.823-1.282.225-.63.225-1.17.158-1.282-.068-.112-.248-.202-.518-.337z" />
      </svg>
      
      {/* Tooltip */}
      <span className="absolute right-16 bg-brand-black text-white text-xs font-bold font-sans px-3 py-2 rounded-md border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl pointer-events-none">
        Chat with F7 Fitness
      </span>
    </a>
  );
};
