import React from 'react';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const About: React.FC = () => {
  return (
    <section className="section about-section" id="about">
      <Container>
        <div className="reveal-init">
          <SectionHeading
            number="01"
            eyebrow="STUDIO OVERVIEW"
            title="PRACTICAL AI. BUILT FOR REAL OUTCOMES."
          />
        </div>

        <div className="about-editorial-grid reveal-init delay-100">
          {/* Main Statement Callout */}
          <div className="about-main-text">
            <p className="statement-lead font-display">
              SabKuch AI is an AI technology studio that works with brands to turn real-world problems into practical AI-powered solutions.
            </p>
          </div>

          {/* Supporting Philosophy */}
          <div className="about-sub-text">
            <p style={{ marginBottom: 'var(--space-4)' }}>
              We don&apos;t build technology for the sake of technology. We identify where intelligence, automation, and better digital experiences can create meaningful value, then build the system around the problem.
            </p>
            <p className="body-muted">
              By uniting bespoke design, targeted workflow automation, and specialized task agents, we turn complex technological capabilities into reliable everyday competitive advantages.
            </p>

            {/* Quick architectural focus indicators */}
            <div className="about-pills">
              <span className="pill-item">
                <span className="pill-dot" /> Zero Gimmicks
              </span>
              <span className="pill-item">
                <span className="pill-dot" /> Problem-First
              </span>
              <span className="pill-item">
                <span className="pill-dot" /> Bespoke Systems
              </span>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .about-editorial-grid {
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: start;
        }

        .statement-lead {
          font-size: clamp(1.45rem, 2.5vw, 2.15rem);
          font-weight: 500;
          line-height: 1.35;
          color: var(--color-text);
          letter-spacing: -0.02em;
        }

        .about-pills {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
          margin-top: var(--space-6);
        }

        .pill-item {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: 0.4rem 0.85rem;
          background: rgba(255, 255, 255, 0.025);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-full);
          font-family: var(--font-mono);
          font-size: var(--text-micro);
          letter-spacing: var(--tracking-wide);
          text-transform: uppercase;
          color: var(--color-text-secondary);
        }

        .pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--color-primary);
        }

        @media (max-width: 900px) {
          .about-editorial-grid {
            grid-template-columns: 1fr;
            gap: var(--space-5);
          }
        }
      `}</style>
    </section>
  );
};
