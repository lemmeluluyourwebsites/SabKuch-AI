import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  number?: string;
  title: string | React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  number,
  title,
  subtitle,
  align = 'left',
  className = ''
}) => {
  return (
    <div
      className={`section-heading ${align === 'center' ? 'text-center' : ''} ${className}`}
      style={{
        marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
        textAlign: align === 'center' ? 'center' : 'left',
        maxWidth: align === 'center' ? '760px' : '920px',
        marginInline: align === 'center' ? 'auto' : undefined
      }}
    >
      {(eyebrow || number) && (
        <div
          className="eyebrow"
          style={{
            justifyContent: align === 'center' ? 'center' : 'flex-start'
          }}
        >
          {number && <span className="section-number">{number}</span>}
          {number && eyebrow && <span style={{ opacity: 0.35 }}>/</span>}
          {eyebrow && <span>{eyebrow}</span>}
          <span className="eyebrow-dot" />
        </div>
      )}

      <h2 style={{ marginBottom: subtitle ? 'var(--space-3)' : 0 }}>{title}</h2>

      {subtitle && (
        <p
          className="lead-text"
          style={{
            marginInline: align === 'center' ? 'auto' : undefined,
            marginTop: 'var(--space-2)'
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
