import React from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { BrandLogo } from '../common/BrandLogo';
import { Container } from '../common/Container';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: '1px solid var(--color-border)',
        backgroundColor: 'var(--color-bg)',
        paddingTop: 'var(--space-8)',
        paddingBottom: 'var(--space-7)',
        position: 'relative'
      }}
    >
      <Container>
        {/* Top Tier: Brand, Tagline, Direct Links */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-7)',
            marginBottom: 'var(--space-8)'
          }}
        >
          {/* Col 1: Identity & Description */}
          <div>
            <div style={{ marginBottom: 'var(--space-4)' }}>
              <BrandLogo size="md" showWordmark={true} />
            </div>
            <p className="body-muted" style={{ maxWidth: '38ch', lineHeight: 'var(--leading-relaxed)' }}>
              {BRAND_CONFIG.description}
            </p>
          </div>

          {/* Col 2: Tagline & Mission */}
          <div>
            <span className="mono-tag" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>
              Studio Philosophy
            </span>
            <p
              className="font-display"
              style={{
                fontSize: 'var(--text-xl)',
                fontWeight: 600,
                color: 'var(--color-text)',
                lineHeight: 'var(--leading-snug)',
                marginBottom: 'var(--space-2)'
              }}
            >
              {BRAND_CONFIG.tagline}
            </p>
            <p className="eyebrow" style={{ marginTop: 'var(--space-2)' }}>
              {BRAND_CONFIG.secondaryTagline}
            </p>
          </div>

          {/* Col 3: Direct Inquiry Links */}
          <div>
            <span className="mono-tag" style={{ display: 'block', marginBottom: 'var(--space-3)' }}>
              Inquiries & Contact
            </span>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li>
                <a
                  href={`mailto:${BRAND_CONFIG.email}`}
                  style={{
                    color: 'var(--color-text)',
                    fontSize: 'var(--text-sm)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 'var(--space-1)',
                    transition: 'color var(--duration-fast) var(--ease-standard)'
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
                >
                  <span>{BRAND_CONFIG.email}</span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
              {BRAND_CONFIG.phones.map((phone) => (
                <li key={phone.raw}>
                  <a
                    href={`tel:${phone.raw}`}
                    style={{
                      color: 'var(--color-text-secondary)',
                      fontSize: 'var(--text-sm)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      transition: 'color var(--duration-fast) var(--ease-standard)'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-secondary)')}
                  >
                    <span>+91 {phone.display}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Minimal Copyright & Secondary Tagline */}
        <div
          style={{
            paddingTop: 'var(--space-6)',
            borderTop: '1px solid var(--color-border-subtle)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-4)',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-text-muted)'
          }}
        >
          <div>
            © {currentYear} {BRAND_CONFIG.name}. All rights reserved.
          </div>

          <div
            className="font-mono"
            style={{
              letterSpacing: 'var(--tracking-widest)',
              textTransform: 'uppercase',
              fontSize: 'var(--text-micro)'
            }}
          >
            {BRAND_CONFIG.secondaryTagline}
          </div>

          <div>
            Boutique AI Technology Studio
          </div>
        </div>
      </Container>
    </footer>
  );
};
