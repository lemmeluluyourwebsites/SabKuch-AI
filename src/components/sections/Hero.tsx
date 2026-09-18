import React from 'react';
import { BRAND_CONFIG, BRAND_ASSETS } from '../../config/brand';
import { Container } from '../common/Container';
import { PrimaryButton, SecondaryButton } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="section section-first hero-section" id="hero">
      <Container>
        <div className="hero-grid">
          {/* Top Block (Left on Desktop, Top-Left on Mobile/Tab): Headline */}
          <div className="hero-header-block animate-hero-text">
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
          </div>

          {/* Right Column (Right on Desktop, Top-Right on Mobile/Tab): Alien Silhouette */}
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

          {/* Bottom Block (Bottom-Left on Desktop, Full-Width below line on Mobile/Tab) */}
          <div className="hero-details-block animate-hero-text">
            {/* Straight line divider */}
            <div className="hero-divider-line" />

            {/* Secondary Lead Text */}
            <p className="lead-text hero-lead">
              {BRAND_CONFIG.positioning}
            </p>

            {/* Sub-taglines badge */}
            <div className="hero-quotes font-mono">
              <span>{BRAND_CONFIG.secondaryTagline}</span>
              <span className="quote-dot">•</span>
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

        /* Desktop Layout (> 1024px): 2-column with left content and right visual */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          grid-template-rows: auto auto;
          grid-template-areas:
            "header visual"
            "details visual";
          align-items: center;
          gap: 0 clamp(2rem, 5vw, 5rem);
        }

        .hero-header-block {
          grid-area: header;
        }

        .hero-headline {
          letter-spacing: var(--tracking-tighter);
          margin-bottom: var(--space-2);
        }

        .hero-visual-col {
          grid-area: visual;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-details-block {
          grid-area: details;
        }

        .hero-divider-line {
          width: 48px;
          height: 2px;
          background-color: var(--color-primary);
          margin: var(--space-5) 0 var(--space-4) 0;
          opacity: 0.85;
        }

        .hero-lead {
          margin-bottom: var(--space-4);
        }

        .hero-quotes {
          font-size: var(--text-micro);
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
          color: var(--color-text-muted);
          margin-bottom: var(--space-6);
          display: flex;
          align-items: center;
          gap: var(--space-3);
        }

        .quote-dot {
          color: var(--color-primary);
        }

        .hero-cta-group {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: var(--space-4);
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

        /* Tablet and Mobile Layout (<= 1024px) */
        @media (max-width: 1024px) {
          .hero-section {
            min-height: auto;
            padding-top: calc(var(--navbar-height) + var(--space-5));
            padding-bottom: var(--space-7);
          }

          .hero-grid {
            display: grid;
            grid-template-columns: 1fr auto;
            grid-template-rows: auto auto;
            grid-template-areas:
              "header visual"
              "details details";
            align-items: center;
            gap: var(--space-4) clamp(1rem, 3vw, 2.5rem);
          }

          .hero-header-block {
            grid-area: header;
            min-width: 0;
          }

          .hero-visual-col {
            grid-area: visual;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .hero-details-block {
            grid-area: details;
            width: 100%;
          }

          /* Full-width straight divider line */
          .hero-divider-line {
            width: 100%;
            height: 1px;
            background: linear-gradient(
              to right,
              var(--color-primary),
              rgba(255, 255, 255, 0.12) 60%,
              transparent
            );
            margin: var(--space-4) 0 var(--space-4) 0;
            opacity: 0.85;
          }

          .hero-lead {
            max-width: 100%;
            margin-bottom: var(--space-4);
          }
        }

        /* Tablet Specifics (768px - 1024px) */
        @media (min-width: 768px) and (max-width: 1024px) {
          .alien-frame {
            width: 220px;
            height: 220px;
          }

          .alien-glow-halo {
            width: 200px;
            height: 200px;
          }

          .hero-cta-group {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--space-4);
          }
        }

        /* Mobile Specifics (< 768px) */
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr clamp(100px, 30vw, 135px);
            gap: var(--space-3);
          }

          .hero-headline {
            font-size: clamp(1.5rem, 6.2vw, 2.15rem);
            line-height: 1.1;
          }

          .alien-frame {
            width: 100%;
            max-width: 135px;
            max-height: 135px;
            border-radius: var(--radius-md);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9),
                        0 0 25px rgba(133, 254, 1, 0.18);
          }

          .alien-glow-halo {
            width: 120px;
            height: 120px;
            filter: blur(22px);
          }

          .hero-lead {
            font-size: var(--text-sm);
            line-height: 1.6;
            text-align: left;
          }

          .hero-quotes {
            justify-content: center;
            text-align: center;
            font-size: var(--text-micro);
            margin-bottom: var(--space-5);
            flex-wrap: wrap;
          }

          /* Center-line buttons on mobile */
          .hero-cta-group {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: var(--space-3);
            width: 100%;
          }

          .hero-cta-group .btn {
            width: 100%;
            max-width: 320px;
            padding: 0.75rem 1.25rem;
          }
        }
      `}</style>
    </section>
  );
};
