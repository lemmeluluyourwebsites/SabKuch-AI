import React from 'react';
import { PRINCIPLES } from '../../config/brand';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const Principles: React.FC = () => {
  return (
    <section className="section principles-section" id="approach">
      <Container>
        <div className="reveal-init">
          <SectionHeading
            number="04"
            eyebrow="OUR APPROACH"
            title="ENGINEERED AROUND PRINCIPLES."
            subtitle="We replace speculative hype with architectural discipline and measurable utility."
          />
        </div>

        <div className="principles-grid reveal-init delay-100">
          {PRINCIPLES.map((principle) => (
            <div key={principle.number} className="principle-item">
              <span className="principle-num">PRINCIPLE {principle.number}</span>
              <h3>{principle.title}</h3>
              <p className="body-muted" style={{ lineHeight: 'var(--leading-relaxed)' }}>
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
