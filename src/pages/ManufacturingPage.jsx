import React from 'react';
import { Helmet } from 'react-helmet';
import { Factory, ClipboardCheck, Award, Users } from 'lucide-react';

const ManufacturingPage = () => {
  const certifications = [
    'ISO 13485:2016 Medical Device Quality Management',
    'FDA Registration and Compliance',
    'CE Mark Certification',
    'ISO 9001:2015 Quality Management',
    'Good Manufacturing Practice (GMP)',
    'EN ISO 11607 Packaging Standards'
  ];

  const qualitySteps = [
    {
      title: 'Raw Material Inspection',
      description: 'Rigorous testing and verification of all incoming raw materials against specifications.'
    },
    {
      title: 'In-Process Quality Control',
      description: 'Continuous monitoring and testing throughout the manufacturing process.'
    },
    {
      title: 'Final Product Testing',
      description: 'Comprehensive testing of finished products for safety, performance, and compliance.'
    },
    {
      title: 'Documentation & Traceability',
      description: 'Complete batch records and traceability systems for full product lifecycle tracking.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Manufacturing & Quality - MedGuard Medical Supplies</title>
        <meta name="description" content="ISO-certified manufacturing facility with comprehensive quality management systems ensuring medical device safety and regulatory compliance." />
      </Helmet>

      <div className="bg-white">
        <section className="bg-neutral-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6">
              Manufacturing & <span className="text-primary">Quality</span>
            </h1>
            <p className="text-xl text-neutral-500 max-w-3xl">
              State-of-the-art manufacturing facility with comprehensive quality management systems ensuring the highest standards of medical device safety.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-neutral-800 mb-6">Our Facility</h2>
                <p className="text-neutral-500 mb-4">
                  MedGuard operates a modern, ISO-certified manufacturing facility equipped with advanced production technology and comprehensive quality control systems. Our facility is designed to meet the stringent requirements of medical device manufacturing.
                </p>
                <p className="text-neutral-500 mb-4">
                  Every aspect of our manufacturing process is controlled and documented, from raw material receipt through final product release. Our cleanroom environments ensure product integrity, while our automated systems provide consistency and traceability.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-primary-very-light p-4 rounded-lg border border-primary/20">
                    <Factory className="h-8 w-8 text-primary mb-2" />
                    <p className="font-semibold text-neutral-800">50,000 sq ft</p>
                    <p className="text-sm text-neutral-500">Manufacturing Space</p>
                  </div>
                  <div className="bg-primary-very-light p-4 rounded-lg border border-primary/20">
                    <Users className="h-8 w-8 text-primary mb-2" />
                    <p className="font-semibold text-neutral-800">200+</p>
                    <p className="text-sm text-neutral-500">Trained Personnel</p>
                  </div>
                </div>
              </div>
              <div className="bg-neutral-200 rounded-xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
                <img className="w-full h-full object-cover" alt="MedGuard manufacturing facility interior" src="https://images.unsplash.com/photo-1679454690793-83340db232db" />
              </div>
            </div>

            <div className="bg-white border border-neutral-200 shadow-lg rounded-xl p-8 mb-16">
              <h2 className="text-3xl font-bold text-neutral-800 mb-6">Certifications & Compliance</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors">
                    <Award className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-600 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">Quality Control Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {qualitySteps.map((step, index) => (
                  <div key={index} className="bg-white border border-neutral-200 rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0 shadow-md">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-800 mb-2">{step.title}</h3>
                        <p className="text-neutral-500">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="bg-neutral-200 rounded-xl overflow-hidden shadow-lg h-96 flex items-center justify-center order-2 lg:order-1">
                <img className="w-full h-full object-cover" alt="Quality control laboratory" src="https://images.unsplash.com/photo-1657778752500-9da406aa813f" />
              </div>
              <div className="order-1 lg:order-2">
                <ClipboardCheck className="h-12 w-12 text-primary mb-4" />
                <h2 className="text-3xl font-bold text-neutral-800 mb-6">Continuous Improvement</h2>
                <p className="text-neutral-500 mb-4">
                  Our commitment to quality extends beyond compliance. We maintain a culture of continuous improvement through:
                </p>
                <ul className="space-y-3">
                  {[
                    "Regular internal audits and management reviews",
                    "Ongoing employee training and certification programs",
                    "Investment in advanced testing and manufacturing equipment",
                    "Customer feedback integration into process improvements",
                    "Participation in industry standards development"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="bg-primary text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-neutral-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-neutral-800 text-white rounded-xl p-8 md:p-12 text-center shadow-2xl">
              <h2 className="text-3xl font-bold mb-4">Quality is Our Foundation</h2>
              <p className="text-lg text-neutral-300 mb-6 max-w-3xl mx-auto">
                Every product that leaves our facility represents our commitment to patient safety, regulatory compliance, and manufacturing excellence.
              </p>
              <p className="text-sm text-neutral-400">
                For detailed information about our quality management systems and certifications, please contact our quality assurance team.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ManufacturingPage;