import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'emblem';
  height?: number | string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'horizontal', 
  height = 40 
}) => {
  if (variant === 'emblem') {
    return (
      <img 
        src="/images/logo_emblem.png" 
        alt="F7 Fitness Emblem"
        className={`inline-block object-contain h-auto ${className}`}
        style={{ height }}
      />
    );
  }

  // Horizontal variant containing both emblem and wordmarks
  return (
    <img 
      src="/images/logo_horizontal.png" 
      alt="F7 Fitness Logo"
      className={`inline-block object-contain h-auto ${className}`}
      style={{ height }}
    />
  );
};
