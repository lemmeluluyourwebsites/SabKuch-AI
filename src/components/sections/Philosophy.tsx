import React from 'react';
import { Container } from '../common/Container';
import { BRAND_ASSETS, BRAND_CONFIG } from '../../config/brand';

export const Philosophy: React.FC = () => {
  return (
    <section className="section philosophy-section" id="philosophy">
      {/* Ambient background subtle alien mark */}
      <div className="philosophy-bg-mark" aria-hidden="true">
        <img
          src={BRAND_ASSETS.logoMark}
          alt=""
          className="philosophy-alien-ghost"
        />
      </div>

      <Container>
        <div className="philosophy-content reveal-init">
          <div className="eyebrow" style={{ marginBottom: 'var(--space-5)' }}>
            <span className="eyebrow-dot" />
            <span>BRAND PHILOSOPHY</span>
            <span style={{ opacity: 0.35 }}>/</span>
            <span className="mono-tag" style={{ color: 'var(--color-primary-dim)' }}>
              CORE BELIEF
            </span>
          </div>

          <div className="philosophy-typography-block font-display">
            <div className="philosophy-line">
              <span>SAME</span>
              <span className="philosophy-accent">INTELLIGENCE.</span>
            </div>
            <div className="philosophy-line">
              <span>MORE</span>
              <span className="text-highlight">POSSIBILITIES.</span>
            </div>
          </div>

          <div className="philosophy-bottom-bar">
            <div className="philosophy-rule" />
            <div className="philosophy-meta">
              <span className="font-mono philosophy-subline">
                {BRAND_CONFIG.secondaryTagline}
              </span>
              <span className="mono-tag">
                SABKUCH AI STUDIO • ARCHITECTURAL SYSTEM
              </span>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .philosophy-section {
          position: relative;
          background-color: var(--color-bg-alt);
          overflow: hidden;
          padding-top: clamp(6rem, 10vw, 10rem);
          padding-bottom: clamp(6rem, 10vw, 10rem);
        }

        .philosophy-bg-mark {
          position: absolute;
          right: -5%;
          top: 50%;
          transform: translateY(-50%);
          width: 580px;
          height: 580px;
          opacity: 0.045;
          pointer-events: none;
          z-index: 1;
        }

        .philosophy-alien-ghost {
          width: 100%;
          height: 100%;
          object-fit: contain;
          filter: drop-shadow(0 0 60px var(--color-primary));
        }

        .philosophy-content {
          position: relative;
          z-index: 2;
        }

        .philosophy-typography-block {
          font-size: clamp(2.4rem, 6.5vw, 6.2rem);
          font-weight: 700;
          line-height: 1.02;
          letter-spacing: -0.035em;
          text-transform: uppercase;
          color: var(--color-text);
          margin-bottom: var(--space-8);
        }

        .philosophy-line {
          display: flex;
          flex-wrap: wrap;
          gap: clamp(0.5rem, 1.5vw, 1.5rem);
          margin-bottom: 0.15em;
        }

        .philosophy-accent {
          color: rgba(255, 255, 255, 0.7);
        }

        .philosophy-bottom-bar {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          max-width: 900px;
        }

        .philosophy-rule {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            to right,
            var(--color-primary),
            rgba(255, 255, 255, 0.1) 40%,
            transparent
          );
        }

        .philosophy-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-3);
        }

        .philosophy-subline {
          font-size: var(--text-sm);
          letter-spacing: var(--tracking-wide);
          text-transform: uppercase;
          color: var(--color-text);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .philosophy-bg-mark {
            width: 320px;
            height: 320px;
            right: -20%;
          }
        }
      `}</style>
    </section>
  );
};
