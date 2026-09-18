import React from 'react';

interface BrandWordmarkProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandWordmark: React.FC<BrandWordmarkProps> = ({ className = '', size = 'md' }) => {
  const sizeStyles = {
    sm: { fontSize: '0.95rem', letterSpacing: '-0.02em' },
    md: { fontSize: '1.15rem', letterSpacing: '-0.025em' },
    lg: { fontSize: '1.75rem', letterSpacing: '-0.03em' }
  }[size];

  return (
    <span
      className={`brand-wordmark font-display ${className}`}
      style={{
        fontWeight: 700,
        color: 'var(--color-text)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.2rem',
        ...sizeStyles
      }}
    >
      <span>SabKuch</span>
      <span style={{ color: 'var(--color-primary)' }}>AI</span>
    </span>
  );
};
