import React from 'react';
import { PROCESS_STEPS } from '../../config/brand';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';

export const Process: React.FC = () => {
  return (
    <section className="section process-section" id="process">
      <Container>
        <div className="reveal-init">
          <SectionHeading
            number="03"
            eyebrow="METHODOLOGY"
            title="FROM PROBLEM TO POSSIBILITY."
            subtitle="A disciplined engineering lifecycle focused on practical utility and sustainable deployment."
          />
        </div>

        <div className="process-grid reveal-init delay-100">
          {PROCESS_STEPS.map((step) => (
            <div key={step.step} className="process-card">
              <span className="process-step-num">PHASE {step.step}</span>
              <h3>{step.title}</h3>
              <p className="process-subtitle">{step.subtitle}</p>
              <p className="body-muted" style={{ lineHeight: 'var(--leading-relaxed)' }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
