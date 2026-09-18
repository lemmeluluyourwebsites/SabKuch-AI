import React from 'react';
import { BRAND_CONFIG, BRAND_ASSETS } from '../../config/brand';
import { Container } from '../common/Container';
import { PrimaryButton, SecondaryButton } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="section section-first hero-section" id="hero">
      <Container>
        <div className="hero-grid">
          {/* Left Column: Typography & CTAs */}
          <div className="hero-content animate-hero-text">
            {/* Eyebrow & Status indicator */}
            <div className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>
              <span className="eyebrow-dot" />
              <span>AI STUDIO</span>
              <span style={{ opacity: 0.35 }}>|</span>
              <span className="mono-tag" style={{ color: 'var(--color-primary-dim)' }}>
                BOUTIQUE PRACTICE
              </span>
            </div>

            {/* Main Dominant Headline */}
            <h1 className="hero-headline">
              AI FOR <br />
              <span className="text-highlight">REAL-WORLD</span> <br />
              PROBLEMS.
            </h1>

            {/* Micro horizontal accent line */}
            <div
              style={{
                width: '48px',
                height: '2px',
                backgroundColor: 'var(--color-primary)',
                margin: 'var(--space-5) 0 var(--space-4) 0',
                opacity: 0.85
              }}
            />

            {/* Secondary Lead Text */}
            <p className="lead-text hero-lead">
              {BRAND_CONFIG.positioning}
            </p>

            {/* Sub-tagline badge from business card reference */}
            <div
              className="font-mono"
              style={{
                fontSize: 'var(--text-micro)',
                letterSpacing: 'var(--tracking-eyebrow)',
                textTransform: 'uppercase',
                color: 'var(--color-text-muted)',
                marginBottom: 'var(--space-6)',
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-3)'
              }}
            >
              <span>{BRAND_CONFIG.secondaryTagline}</span>
              <span style={{ color: 'var(--color-primary)' }}>•</span>
              <span>BUILD / AUTOMATE / GROW</span>
            </div>

            {/* CTA Group */}
            <div className="hero-cta-group">
              <PrimaryButton href="#contact" showArrow={true}>
                Start an Inquiry
              </PrimaryButton>
              <SecondaryButton href="#services" showArrow={true}>
                Explore What We Build
              </SecondaryButton>
            </div>
          </div>

          {/* Right Column: Signature Luminous Alien Silhouette */}
          <div className="hero-visual-col animate-hero-alien">
            <div className="alien-glow-halo" />
            <div className="alien-frame">
              <img
                src={BRAND_ASSETS.logo}
                alt="SabKuch AI Alien Identity"
                className="alien-hero-img"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Container>

      {/* Hero-specific scoped styling */}
      <style>{`
        .hero-section {
          min-height: calc(100vh - var(--navbar-height));
          display: flex;
          align-items: center;
          position: relative;
          background: radial-gradient(
            circle at 75% 45%,
            rgba(133, 254, 1, 0.055) 0%,
            rgba(6, 7, 7, 0) 65%
          );
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: clamp(2rem, 5vw, 5rem);
        }

        .hero-headline {
          letter-spacing: var(--tracking-tighter);
          margin-bottom: var(--space-2);
        }

        .hero-lead {
          margin-bottom: var(--space-4);
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-4);
        }

        .hero-visual-col {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .alien-glow-halo {
          position: absolute;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(133, 254, 1, 0.22) 0%,
            rgba(133, 254, 1, 0.04) 50%,
            transparent 75%
          );
          filter: blur(48px);
          pointer-events: none;
          z-index: 1;
        }

        .alien-frame {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 440px;
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #000000;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.9),
                      0 0 45px rgba(133, 254, 1, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .alien-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: contrast(1.05) brightness(1.02);
          transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .alien-frame:hover .alien-hero-img {
          transform: scale(1.03);
        }

        /* Tablet View (768px - 1024px) */
        @media (max-width: 1024px) and (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1.25fr 0.75fr;
            align-items: center;
            gap: clamp(1.5rem, 3vw, 2.5rem);
          }

          .hero-visual-col {
            justify-content: center;
          }

          .alien-frame {
            max-width: 250px;
            max-height: 250px;
          }

          .alien-glow-halo {
            width: 220px;
            height: 220px;
          }
        }

        /* Mobile View (< 768px) */
        @media (max-width: 767px) {
          .hero-section {
            min-height: auto;
            padding-top: calc(var(--navbar-height) + var(--space-5));
            padding-bottom: var(--space-7);
          }

          .hero-grid {
            grid-template-columns: 1fr clamp(100px, 32vw, 145px);
            align-items: center;
            gap: var(--space-3);
          }

          .hero-content {
            min-width: 0;
          }

          .hero-headline {
            font-size: clamp(1.55rem, 6vw, 2.2rem);
            line-height: 1.1;
          }

          .hero-lead {
            font-size: var(--text-sm);
            line-height: 1.5;
            margin-bottom: var(--space-3);
          }

          .hero-visual-col {
            justify-content: center;
            flex-shrink: 0;
          }

          .alien-frame {
            width: 100%;
            max-width: 140px;
            max-height: 140px;
            border-radius: var(--radius-md);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9),
                        0 0 25px rgba(133, 254, 1, 0.18);
          }

          .alien-glow-halo {
            width: 125px;
            height: 125px;
            filter: blur(24px);
          }

          .hero-cta-group {
            flex-direction: column;
            align-items: stretch;
            gap: var(--space-2);
            width: 100%;
          }

          .hero-cta-group .btn {
            width: 100%;
            padding: 0.65rem 1rem;
            font-size: var(--text-xs);
          }
        }
      `}</style>
    </section>
  );
};
