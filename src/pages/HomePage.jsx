import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Shield, Award, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO-certified manufacturing processes ensuring the highest standards of medical safety.'
    },
    {
      icon: Award,
      title: 'Regulatory Compliance',
      description: 'Full compliance with FDA, CE Mark, and international medical device regulations.'
    },
    {
      icon: Users,
      title: 'Trusted Partner',
      description: 'Serving healthcare facilities and medical professionals worldwide for over 20 years.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>MedGuard Medical Supplies - Medical Safety Starts Here</title>
        <meta name="description" content="Professional medical supply solutions with commitment to quality, safety, and regulatory compliance. Trusted by healthcare facilities worldwide." />
      </Helmet>

      <div className="bg-white">
        <section className="bg-neutral-50 py-20 lg:min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-800 leading-tight mb-6">
                  Medical Safety <span className="text-primary">Starts Here</span>
                </h1>
                <p className="text-lg text-neutral-500 mb-8 max-w-lg">
                  MedGuard Medical Supplies provides professional-grade medical equipment and supplies with unwavering commitment to quality, safety, and regulatory compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/products">
                    <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-base w-full sm:w-auto shadow-md transition-all">
                      View Products
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary-very-light px-8 py-6 text-base w-full sm:w-auto transition-all">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="bg-neutral-200 rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[500px] flex items-center justify-center relative">
                 <img 
                    alt="Medical facility with healthcare professionals using MedGuard supplies" 
                    src="https://images.unsplash.com/photo-1580281657702-257584239a55" 
                    className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl border border-neutral-200 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-primary-very-light rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-neutral-800 mb-3">{feature.title}</h2>
                  <p className="text-neutral-500 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Why Choose MedGuard?</h2>
              <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
                Our commitment to excellence in medical supply manufacturing sets us apart in the industry.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { number: "20+", text: "Years of Experience" },
                { number: "500+", text: "Healthcare Partners" },
                { number: "ISO", text: "Certified Facility" },
                { number: "100%", text: "Quality Compliance" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow text-center group">
                  <p className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</p>
                  <p className="text-neutral-600 font-medium">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-neutral-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">Ready to Partner with MedGuard?</h2>
            <p className="text-lg text-neutral-500 mb-10 max-w-2xl mx-auto">
              Contact our team to discuss your medical supply needs and discover how we can support your facility.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary-dark text-white px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;