import emailjs from 'emailjs-com';

// EmailJS Configuration
// NOTE: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key from your dashboard
export const EMAILJS_SERVICE_ID = "service_contact";
export const EMAILJS_TEMPLATE_ID = "template_contact";
export const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export const initEmailJS = () => {
  emailjs.init(EMAILJS_PUBLIC_KEY);
};