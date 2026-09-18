import React, { useState } from 'react';
import { BRAND_CONFIG } from '../../config/brand';
import { FORM_CONFIG, InquiryFormData } from '../../config/form';
import { Container } from '../common/Container';
import { SectionHeading } from '../common/SectionHeading';
import { PrimaryButton } from '../common/Button';
import { Mail, Phone, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: FORM_CONFIG.serviceOptions[0],
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof InquiryFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = (): boolean => {
    const errs: Partial<Record<keyof InquiryFormData, string>> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.service) {
      errs.service = 'Please select a service category';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief description of your project';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof InquiryFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      /**
       * BACKEND INTEGRATION NOTE:
       * When a production webhook or API is ready (e.g. Formspree, Resend, or your internal API route),
       * simply specify it in `src/config/form.ts` -> `FORM_CONFIG.endpoint`.
       */
      if (FORM_CONFIG.endpoint) {
        const response = await fetch(FORM_CONFIG.endpoint, {
          method: FORM_CONFIG.method,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (!response.ok) throw new Error('Submission failed');

        setSubmitStatus('success');
        setStatusMessage(FORM_CONFIG.successMessage);
      } else {
        // Transparent frontend simulation state for staging & demonstration
        await new Promise((resolve) => setTimeout(resolve, 800));
        setSubmitStatus('success');
        setStatusMessage(
          `Inquiry received (Studio Demo Mode). Thank you, ${formData.name}. In production, this form routes directly to ${BRAND_CONFIG.email} via the configured endpoint.`
        );
      }

      // Reset form on success
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: FORM_CONFIG.serviceOptions[0],
        message: ''
      });
    } catch (err) {
      console.error('Submission error:', err);
      setSubmitStatus('error');
      setStatusMessage(FORM_CONFIG.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <Container>
        <div className="reveal-init">
          <SectionHeading
            number="05"
            eyebrow="COMMENCE AN ENGAGEMENT"
            title="LET'S BUILD SOMETHING USEFUL."
            subtitle="Have a problem that could be solved better with AI? Tell us what you're working on."
          />
        </div>

        <div className="contact-editorial-grid reveal-init delay-100">
          {/* Left Column: Direct Studio Contact Channels */}
          <div className="contact-details-col">
            <div className="contact-direct-card">
              <span className="mono-tag" style={{ display: 'block', marginBottom: 'var(--space-4)' }}>
                Direct Communication Channels
              </span>

              {/* Email item */}
              <a
                href={`mailto:${BRAND_CONFIG.email}`}
                className="contact-item"
                aria-label={`Send email to ${BRAND_CONFIG.email}`}
              >
                <div className="contact-icon-box">
                  <Mail size={18} />
                </div>
                <div className="contact-info">
                  <span className="contact-label">Studio Email</span>
                  <span className="contact-value">{BRAND_CONFIG.email}</span>
                </div>
              </a>

              {/* Studio Direct Phone Lines */}
              {BRAND_CONFIG.phones.map((phone) => (
                <a
                  key={phone.raw}
                  href={`tel:${phone.raw}`}
                  className="contact-item"
                  aria-label={`Call direct phone ${phone.display}`}
                >
                  <div className="contact-icon-box">
                    <Phone size={18} />
                  </div>
                  <div className="contact-info">
                    <span className="contact-label">Direct Line</span>
                    <span className="contact-value">+91 {phone.display}</span>
                  </div>
                </a>
              ))}

              {/* Turnaround notice */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginTop: 'var(--space-6)',
                  paddingTop: 'var(--space-4)',
                  borderTop: '1px solid var(--color-border-subtle)',
                  color: 'var(--color-text-muted)',
                  fontSize: 'var(--text-xs)'
                }}
              >
                <Clock size={14} color="var(--color-primary)" />
                <span>Typical studio response window: within 24 business hours.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="contact-form-col">
            <div className="inquiry-form-card card">
              <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>
                Start an Inquiry
              </h3>
              <p className="body-muted" style={{ marginBottom: 'var(--space-5)' }}>
                Provide brief context regarding your workflow or product requirements.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                {/* Name & Email 2-col row */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your Name <span className="form-required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Maya Chen"
                      className="form-input"
                      required
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email Address <span className="form-required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. maya@domain.com"
                      className="form-input"
                      required
                    />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>
                </div>

                {/* Phone & Company 2-col row */}
                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone Number <span className="mono-tag">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 8591707971"
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">
                      Company / Brand <span className="mono-tag">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Studio"
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="form-group">
                  <label htmlFor="service" className="form-label">
                    What Do You Need? <span className="form-required">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {FORM_CONFIG.serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.service && <span className="form-error-msg">{errors.service}</span>}
                </div>

                {/* Message */}
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Problem & Project Details <span className="form-required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Briefly describe your objectives, existing tools, or operational bottlenecks..."
                    className="form-textarea"
                    required
                  />
                  {errors.message && <span className="form-error-msg">{errors.message}</span>}
                </div>

                {/* Submit Action */}
                <div style={{ marginTop: 'var(--space-5)' }}>
                  <PrimaryButton
                    type="submit"
                    disabled={isSubmitting}
                    fullWidth={true}
                    showArrow={true}
                  >
                    {isSubmitting ? 'Transmitting...' : 'Send Inquiry'}
                  </PrimaryButton>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="form-status-box form-status-success">
                    <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                      <CheckCircle2 size={18} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{statusMessage}</span>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="form-status-box form-status-error">
                    <div style={{ display: 'flex', gap: 'var(--space-2)', alignItems: 'flex-start' }}>
                      <AlertCircle size={18} color="#ff5555" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{statusMessage}</span>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>

      <style>{`
        .contact-editorial-grid {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: clamp(2rem, 5vw, 5rem);
          align-items: start;
        }

        .contact-direct-card {
          padding: var(--space-6);
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }

        @media (max-width: 860px) {
          .contact-editorial-grid {
            grid-template-columns: 1fr;
          }

          .form-row-2 {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
};
