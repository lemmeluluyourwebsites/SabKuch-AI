/**
 * Inquiry Form Configuration.
 * Formspree Endpoint integrated for live email delivery to your inbox.
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
  // Live Formspree endpoint
  endpoint: 'https://formspree.io/f/mrpbbyoe',
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
