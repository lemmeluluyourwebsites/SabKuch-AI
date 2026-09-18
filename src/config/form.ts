/**
 * Inquiry Form Configuration.
 * To integrate with a real backend service (Formspree, Resend, EmailJS, AWS API Gateway, etc.):
 * simply specify the `endpoint` URL below.
 * If endpoint is left empty (""), the client will gracefully operate in interactive simulation mode.
 */

export interface InquiryFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

export interface FormConfig {
  endpoint: string;
  method: 'POST' | 'GET';
  successMessage: string;
  errorMessage: string;
  serviceOptions: string[];
}

export const FORM_CONFIG: FormConfig = {
  // Replace with your production webhook or API route (e.g., https://formspree.io/f/xyz or /api/inquiry)
  endpoint: '',
  method: 'POST',
  successMessage: 'Thank you. Your inquiry has been received. Our studio will review and follow up shortly.',
  errorMessage: 'Unable to submit inquiry right now. Please reach out directly to tirthbusiness9@gmail.com.',
  serviceOptions: [
    'Websites',
    'Automations',
    'AI Agents',
    'Chatbots',
    'Integrated AI System / Other'
  ]
};
