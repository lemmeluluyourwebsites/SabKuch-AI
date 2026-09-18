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
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.45rem',
    xl: '0.6rem'
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
            objectFit: 'contain'
          }}
          loading="eager"
        />
      </div>

      {showWordmark && <BrandWordmark size={wordmarkSizeMap[size]} />}
    </div>
  );
};
