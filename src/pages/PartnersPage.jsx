import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PartnersPage = () => {
  const partners = [
    {
      name: 'Regional Hospital Network',
      type: 'Healthcare Provider',
      description: 'Multi-facility hospital system serving over 2 million patients annually.'
    },
    {
      name: 'Metropolitan Medical Center',
      type: 'Medical Facility',
      description: 'Leading teaching hospital with 800+ beds and comprehensive medical services.'
    },
    {
      name: 'Surgical Specialty Clinics',
      type: 'Clinic Network',
      description: 'Network of outpatient surgical centers across North America.'
    },
    {
      name: 'Global Medical Distributors',
      type: 'Distribution Partner',
      description: 'International distributor serving healthcare facilities in 45 countries.'
    },
    {
      name: 'University Medical Research',
      type: 'Academic Institution',
      description: 'Leading medical research facility and teaching hospital.'
    },
    {
      name: 'Healthcare Solutions Group',
      type: 'Group Purchasing',
      description: 'GPO representing over 500 healthcare facilities nationwide.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Partners - MedGuard Medical Supplies</title>
        <meta name="description" content="Trusted partnerships with leading healthcare facilities, hospitals, and medical distributors worldwide. Join our network of quality-focused partners." />
      </Helmet>

      <div className="bg-white">
        <section className="bg-neutral-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 relative inline-block">
              Our Partners
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></span>
            </h1>
            <p className="text-xl text-neutral-500 max-w-3xl mt-4">
              Building trusted relationships with healthcare facilities and distributors worldwide through quality products and reliable service.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-4">Trusted by Leading Healthcare Organizations</h2>
              <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
                Our partners represent some of the most respected names in healthcare, choosing MedGuard for our unwavering commitment to quality and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {partners.map((partner, index) => (
                <div key={index} className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                  <div className="bg-neutral-50 h-32 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                    <img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={`${partner.name} logo`} src="https://images.unsplash.com/photo-1566824203852-338343468f3c" />
                  </div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary-very-light rounded-full mb-3">
                    {partner.type}
                  </span>
                  <h3 className="text-lg font-bold text-neutral-800 mb-2">{partner.name}</h3>
                  <p className="text-sm text-neutral-500">{partner.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 md:p-12 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Building2 className="h-12 w-12 text-primary mb-4" />
                  <h2 className="text-3xl font-bold text-neutral-800 mb-6">Partnership Benefits</h2>
                  <ul className="space-y-4">
                    {[
                      "Dedicated account management and support",
                      "Custom product development and specifications",
                      "Volume pricing and flexible payment terms",
                      "Technical training and product education",
                      "Priority access to new products and innovations",
                      "Comprehensive regulatory documentation support"
                    ].map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="bg-primary text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-neutral-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-80 flex items-center justify-center">
                  <img className="w-full h-full object-cover" alt="Healthcare partnership meeting" src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">Healthcare Providers</h3>
                <p className="text-neutral-500 mb-8">
                  We partner with hospitals, clinics, and healthcare facilities to provide reliable medical supplies that meet the highest standards of quality and safety.
                </p>
                <Link to="/products">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary-very-light">
                    View Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">Distributors</h3>
                <p className="text-neutral-500 mb-8">
                  Our distribution partners benefit from competitive pricing, reliable supply, and comprehensive technical support for their medical supply operations.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary-very-light">
                    Become a Partner
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Ready to Partner with MedGuard?</h2>
            <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
              Join our network of trusted partners and experience the MedGuard difference in medical supply quality and service.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary-dark text-white px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                Contact Partnership Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;