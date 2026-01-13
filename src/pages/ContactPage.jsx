import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '@/config/emailjs';

const ContactPage = () => {
  const { toast } = useToast();
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Full name is required';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email address is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'subject':
        if (!value) error = 'Please select a subject';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    ['name', 'email', 'subject', 'message'].forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Please check the form for errors.",
        className: "bg-accent-red text-white border-none"
      });
      return;
    }

    setIsLoading(true);

    const templateParams = {
      ...formData,
      to_email: 'mohammadyazan425@gmail.com'
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Success!",
        description: "Email sent successfully! We'll get back to you soon.",
        className: "bg-accent-emerald text-white border-none"
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send email. Please try again later.",
        className: "bg-accent-red text-white border-none"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - MedGuard Medical Supplies</title>
        <meta name="description" content="Get in touch with MedGuard Medical Supplies. Contact our team for product inquiries, partnership opportunities, or technical support." />
      </Helmet>

      <div className="bg-white">
        <section className="bg-neutral-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-neutral-500 max-w-3xl">
              Our team is ready to assist you with product inquiries, technical support, or partnership opportunities.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {[
                { icon: MapPin, title: 'Address', text: <>MedGuard Medical Supplies<br />1234 Medical Park Drive<br />Suite 500<br />Healthcare City, HC 12345<br />United States</> },
                { icon: Phone, title: 'Phone', text: <>General Inquiries:<br />+1 (800) 123-4567<br /><br />Technical Support:<br />+1 (800) 123-4568</> },
                { icon: Mail, title: 'Email', text: <>Sales:<br />sales@medguard.com<br /><br />Support:<br />support@medguard.com</> }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-neutral-200 rounded-xl p-6 shadow-lg border-l-4 border-l-primary hover:translate-y-[-4px] transition-transform">
                  <card.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">{card.title}</h3>
                  <div className="text-neutral-600 text-sm leading-relaxed">{card.text}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-neutral-800 mb-6">Send Us a Message</h2>
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-neutral-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.name ? 'border-accent-red bg-red-50' : 'border-neutral-200 bg-white hover:border-primary/50'
                      }`}
                      placeholder="John Smith"
                      disabled={isLoading}
                    />
                    {errors.name && <p className="mt-1 text-sm text-accent-red">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-neutral-800 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.email ? 'border-accent-red bg-red-50' : 'border-neutral-200 bg-white hover:border-primary/50'
                      }`}
                      placeholder="john.smith@hospital.com"
                      disabled={isLoading}
                    />
                    {errors.email && <p className="mt-1 text-sm text-accent-red">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-neutral-800 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 bg-white hover:border-primary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Hospital Name"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-neutral-800 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 bg-white hover:border-primary/50 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="+1 (555) 123-4567"
                        disabled={isLoading}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-neutral-800 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                        errors.subject ? 'border-accent-red bg-red-50' : 'border-neutral-200 bg-white hover:border-primary/50'
                      }`}
                      disabled={isLoading}
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="quote-request">Quote Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="quality-compliance">Quality & Compliance</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && <p className="mt-1 text-sm text-accent-red">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-neutral-800 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none transition-all ${
                        errors.message ? 'border-accent-red bg-red-50' : 'border-neutral-200 bg-white hover:border-primary/50'
                      }`}
                      placeholder="Please provide details about your inquiry..."
                      disabled={isLoading}
                    />
                    {errors.message && <p className="mt-1 text-sm text-accent-red">{errors.message}</p>}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-base shadow-md transition-all"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>

                  <p className="text-xs text-neutral-500">
                    * Required fields. By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>

              <div>
                <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 mb-8 shadow-sm">
                  <Clock className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">Business Hours</h3>
                  <div className="space-y-3 text-neutral-600">
                    <p className="flex justify-between border-b border-neutral-200 pb-2">
                      <span className="font-semibold">Monday - Friday:</span>
                      <span>8:00 AM - 6:00 PM EST</span>
                    </p>
                    <p className="flex justify-between border-b border-neutral-200 pb-2">
                      <span className="font-semibold">Saturday:</span>
                      <span>9:00 AM - 2:00 PM EST</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="font-semibold">Sunday:</span>
                      <span>Closed</span>
                    </p>
                  </div>
                  <p className="mt-6 text-sm text-neutral-500 italic">
                    Emergency technical support available 24/7 for registered partners.
                  </p>
                </div>

                <div className="bg-neutral-200 rounded-xl overflow-hidden shadow-lg h-80 flex items-center justify-center">
                   <img className="w-full h-full object-cover" alt="MedGuard office location map" src="https://images.unsplash.com/photo-1607838720191-0d8eba3e9040" />
                </div>

                <div className="bg-primary text-white rounded-xl p-8 mt-8 shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6 text-neutral-100">
                    For urgent inquiries or technical support, please call our dedicated support line.
                  </p>
                  <p className="text-3xl font-bold">+1 (800) 123-4568</p>
                  <p className="text-sm mt-2 text-neutral-200">Available 24/7 for partners</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;