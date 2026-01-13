import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, FileText, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductDetailPage = () => {
  const specifications = [
    { label: 'Material', value: 'Medical-grade paper and plastic film' },
    { label: 'Sterilization Methods', value: 'Steam, EtO, Formaldehyde' },
    { label: 'Seal Type', value: 'Self-sealing adhesive strip' },
    { label: 'Indicators', value: 'Chemical sterilization indicators' },
    { label: 'Standards', value: 'ISO 11607, EN 868' },
    { label: 'Available Sizes', value: 'Multiple sizes from 57mm to 400mm' }
  ];

  const features = [
    'Triple-layer laminated construction for superior strength',
    'Chemical process indicators for sterilization validation',
    'Self-sealing adhesive for quick and secure closure',
    'Transparent film for content identification',
    'Bacteria-proof barrier properties',
    'Compliant with international medical device standards'
  ];

  return (
    <>
      <Helmet>
        <title>Sterilization Pouches - MedGuard Medical Supplies</title>
        <meta name="description" content="Medical-grade self-sealing sterilization pouches for autoclaves and EtO sterilization. ISO 11607 and EN 868 compliant." />
      </Helmet>

      <div className="bg-white">
        <section className="py-6 border-b border-neutral-200 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/products" className="inline-flex items-center text-neutral-500 hover:text-primary font-medium transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden h-96 flex items-center justify-center mb-6 p-4 shadow-sm">
                  <img className="h-full object-contain" alt="Sterilization pouches product detail" src="https://images.unsplash.com/photo-1701955343335-b47d2c1197af" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "https://images.unsplash.com/photo-1701955343335-b47d2c1197af",
                    "https://images.unsplash.com/photo-1654889103930-3c8fdfb20d1e",
                    "https://images.unsplash.com/photo-1703419847583-11b4299c7f60"
                  ].map((src, i) => (
                    <div key={i} className="bg-neutral-50 border border-neutral-200 rounded-lg h-24 flex items-center justify-center overflow-hidden cursor-pointer hover:border-primary transition-colors">
                      <img className="w-full h-full object-cover" alt="Product thumbnail" src={src} />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary-very-light rounded-full mb-4">
                  Sterilization
                </span>
                <h1 className="text-4xl font-bold text-neutral-800 mb-4">Sterilization Pouches</h1>
                <p className="text-lg text-neutral-500 mb-6 leading-relaxed">
                  Our medical-grade sterilization pouches provide reliable barrier protection for medical instruments through steam, EtO, and formaldehyde sterilization processes. Manufactured in compliance with ISO 11607 and EN 868 standards.
                </p>

                <div className="bg-primary-very-light border border-primary/20 rounded-lg p-6 mb-8">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-neutral-800 mb-2">Quality Assurance</h3>
                      <p className="text-sm text-neutral-600">
                        Every batch undergoes rigorous quality control testing to ensure compliance with medical device regulations and performance standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-neutral-800 mb-4">Key Features</h2>
                  <ul className="space-y-3">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="flex-1">
                    <Button className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-base shadow-md">
                      Request Quote
                    </Button>
                  </Link>
                  <Link to="/contact" className="flex-1">
                     <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary-very-light py-6 text-base">
                        Sample Request
                     </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8">Technical Specifications</h2>
            <div className="bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-sm">
              <div className="divide-y divide-neutral-100">
                {specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 hover:bg-neutral-50 transition-colors">
                    <span className="font-semibold text-neutral-800">{spec.label}</span>
                    <span className="text-neutral-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 hover:shadow-md transition-shadow">
                <FileText className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Documentation</h3>
                <p className="text-neutral-500 mb-6">
                  Complete technical documentation, certificates of conformity, and test reports available upon request.
                </p>
                <Link to="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary-very-light">
                    Request Documentation
                  </Button>
                </Link>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-8 hover:shadow-md transition-shadow">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Compliance</h3>
                <p className="text-neutral-500 mb-6">
                  Fully compliant with FDA, CE Mark, ISO 11607, and EN 868 requirements for medical device packaging.
                </p>
                <Link to="/manufacturing">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary-very-light">
                    View Quality Standards
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetailPage;