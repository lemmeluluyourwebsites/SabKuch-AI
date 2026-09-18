import React from 'react';
import { SERVICES, ServiceItemData } from '../../config/brand';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  // Minimal monochrome geometric SVG visualizations with brand green accents
  const renderGeometricVisual = (type: ServiceItemData['visualType']) => {
    switch (type) {
      case 'website':
        return (
          <svg width="68" height="48" viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Minimal browser geometry */}
            <rect x="1" y="1" width="66" height="46" rx="4" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
            <line x1="1" y1="12" x2="67" y2="12" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
            <circle cx="8" cy="6.5" r="1.5" fill="var(--color-primary)" />
            <circle cx="14" cy="6.5" r="1.5" fill="currentColor" opacity="0.4" />
            <circle cx="20" cy="6.5" r="1.5" fill="currentColor" opacity="0.4" />
            {/* Content wire elements */}
            <rect x="8" y="19" width="22" height="14" rx="2" fill="currentColor" opacity="0.12" />
            <line x1="36" y1="21" x2="58" y2="21" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            <line x1="36" y1="27" x2="52" y2="27" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
            <line x1="8" y1="38" x2="60" y2="38" stroke="var(--color-primary)" strokeWidth="1.5" opacity="0.75" />
          </svg>
        );
      case 'automation':
        return (
          <svg width="68" height="48" viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Connected nodes & pipeline lines */}
            <circle cx="12" cy="24" r="5" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
            <circle cx="12" cy="24" r="2" fill="var(--color-primary)" />
            <line x1="17" y1="24" x2="31" y2="24" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.4" />
            
            <rect x="31" y="16" width="16" height="16" rx="3" stroke="var(--color-primary)" strokeWidth="1.2" fill="rgba(133, 254, 1, 0.06)" />
            
            <line x1="47" y1="24" x2="56" y2="24" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
            <circle cx="59" cy="24" r="4" stroke="currentColor" strokeWidth="1.2" opacity="0.4" />
          </svg>
        );
      case 'agent':
        return (
          <svg width="68" height="48" viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Decision node & orbital coordinates */}
            <ellipse cx="34" cy="24" rx="28" ry="14" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
            <circle cx="34" cy="24" r="7" stroke="var(--color-primary)" strokeWidth="1.5" fill="rgba(133, 254, 1, 0.08)" />
            <circle cx="34" cy="24" r="2.5" fill="var(--color-primary)" />
            <circle cx="58" cy="18" r="3" fill="var(--color-primary)" opacity="0.8" />
            <circle cx="14" cy="30" r="2" fill="currentColor" opacity="0.4" />
          </svg>
        );
      case 'chatbot':
        return (
          <svg width="68" height="48" viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Minimal speech interface geometry */}
            <path
              d="M10 11C10 7.68629 12.6863 5 16 5H48C51.3137 5 54 7.68629 54 11V27C54 30.3137 51.3137 33 48 33H22L13 41V33H16C12.6863 33 10 30.3137 10 27V11Z"
              stroke="currentColor"
              strokeWidth="1.2"
              opacity="0.4"
            />
            {/* Conversational dots */}
            <circle cx="24" cy="19" r="2" fill="var(--color-primary)" />
            <circle cx="32" cy="19" r="2" fill="var(--color-primary)" opacity="0.75" />
            <circle cx="40" cy="19" r="2" fill="var(--color-primary)" opacity="0.5" />
          </svg>
        );
    }
  };

  return (
    <section className="section services-section" id="services">
      <Container>
        <div className="reveal-init">
          <SectionHeading
            number="02"
            eyebrow="CAPABILITIES & PRACTICE"
            title="WHAT WE BUILD"
            subtitle="Practical AI systems designed around the way your business actually works."
          />
        </div>

        {/* Editorial Service Rows */}
        <div className="services-list reveal-init delay-100">
          {SERVICES.map((service) => (
            <div key={service.id} className="service-row">
                {/* Desktop: 1. Numeric index */}
                <div className="service-number desktop-only">{service.number}</div>

                {/* Desktop: 2. Title & Tagline */}
                <div className="service-title-col desktop-only">
                  <h3 className="service-title">{service.title}</h3>
                  <span className="service-tagline mono-tag">{service.tagline}</span>
                </div>

                {/* Mobile & Tablet: Header with Number, Title, and Tagline */}
                <div className="service-mobile-header mobile-tab-only">
                  <span className="service-number">{service.number}.</span>
                  <h3 className="service-title">{service.title}</h3>
                  <span style={{ color: 'var(--color-primary)', opacity: 0.5 }}>—</span>
                  <span className="service-tagline mono-tag">{service.tagline}</span>
                </div>

                {/* Desktop Content Columns */}
                <div className="service-desc-col desktop-only">
                  <p className="service-desc">{service.description}</p>
                  <div className="service-highlights">
                    {service.highlights.map((tag) => (
                      <span key={tag} className="service-tag">
                        +{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="service-visual-col desktop-only">
                  {renderGeometricVisual(service.visualType)}
                </div>

                <div className="service-arrow desktop-only">
                  <ArrowRight size={18} />
                </div>

                {/* Mobile & Tablet Body: Paragraph on left, Logo/Visualizer beside it on right */}
                <div className="service-mobile-body mobile-tab-only">
                  <div className="service-desc-col">
                    <p className="service-desc">{service.description}</p>
                    <div className="service-highlights">
                      {service.highlights.map((tag) => (
                        <span key={tag} className="service-tag">
                          +{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="service-visual-col">
                    {renderGeometricVisual(service.visualType)}
                  </div>
                </div>
              </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
