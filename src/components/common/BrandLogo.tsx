import React from 'react';
import { BRAND_ASSETS, BRAND_CONFIG } from '../../config/brand';
import { BrandWordmark } from './BrandWordmark';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  glow?: boolean;
  gap?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  glow = true,
  gap
}) => {
  const dimensions = {
    sm: 28,
    md: 38,
    lg: 56,
    xl: 96
  }[size];

  const wordmarkSizeMap = {
    sm: 'sm' as const,
    md: 'md' as const,
    lg: 'lg' as const,
    xl: 'lg' as const
  };

  const defaultGap = {
    sm: '2px',
    md: '4px',
    lg: '6px',
    xl: '8px'
  }[size];

  return (
    <div
      className={`brand-logo-container ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: gap ?? defaultGap
      }}
    >
      <div
        className="brand-logo-mark"
        style={{
          width: dimensions,
          height: dimensions,
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          filter: glow ? 'drop-shadow(0 0 12px rgba(133, 254, 1, 0.45))' : 'none'
        }}
      >
        <img
          src={BRAND_ASSETS.logoMark}
          alt={`${BRAND_CONFIG.name} Alien Symbol`}
          width={dimensions}
          height={dimensions}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            transform: 'scale(1.28)'
          }}
          loading="eager"
        />
      </div>

      {showWordmark && <BrandWordmark size={wordmarkSizeMap[size]} />}
    </div>
  );
};
