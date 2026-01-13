import React from 'react';
import { Helmet } from 'react-helmet';
import { Target, Eye, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - MedGuard Medical Supplies</title>
        <meta name="description" content="Learn about MedGuard Medical Supplies' commitment to quality, safety, and regulatory compliance in medical supply manufacturing." />
      </Helmet>

      <div className="bg-white">
        <section className="bg-neutral-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 relative inline-block">
              About MedGuard
              <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
            </h1>
            <p className="text-xl text-neutral-500 max-w-3xl mt-4">
              Leading the medical supply industry with uncompromising standards in quality, safety, and regulatory compliance.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-neutral-800 mb-6">Our Story</h2>
                <div className="space-y-4 text-neutral-500">
                  <p>
                    Founded over two decades ago, MedGuard Medical Supplies emerged from a vision to provide healthcare facilities with reliable, high-quality medical supplies that meet the most stringent international standards.
                  </p>
                  <p>
                    Our commitment to excellence has positioned us as a trusted partner to hospitals, clinics, and healthcare providers worldwide. We understand that medical safety is not negotiable, and every product we manufacture reflects this fundamental principle.
                  </p>
                  <p>
                    Through continuous investment in technology, quality control systems, and regulatory compliance, we ensure that our products meet or exceed all applicable medical device regulations including FDA and CE Mark requirements.
                  </p>
                </div>
              </div>
              <div className="bg-neutral-200 rounded-xl overflow-hidden shadow-lg h-96 flex items-center justify-center">
                <img className="w-full h-full object-cover" alt="MedGuard manufacturing facility exterior" src="https://images.unsplash.com/photo-1607838720191-0d8eba3e9040" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { icon: Target, title: 'Our Mission', text: 'To deliver medical supplies that healthcare professionals can trust, manufactured with precision and unwavering commitment to patient safety.' },
                { icon: Eye, title: 'Our Vision', text: 'To be the global leader in medical supply manufacturing, recognized for innovation, quality excellence, and regulatory leadership.' },
                { icon: Heart, title: 'Our Values', text: 'Integrity, quality, compliance, and patient safety guide every decision we make and every product we manufacture.' }
              ].map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary hover:shadow-xl transition-shadow">
                  <item.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-neutral-800 mb-3">{item.title}</h3>
                  <p className="text-neutral-500">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-neutral-50 p-8 rounded-xl border border-neutral-200">
              <h2 className="text-3xl font-bold text-neutral-800 mb-8">Our Commitment to Quality</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'ISO Certification', text: 'Our manufacturing facility maintains ISO 13485 certification, demonstrating our comprehensive quality management system.' },
                  { title: 'Regulatory Compliance', text: 'Full compliance with FDA, CE Mark, and international medical device directives ensuring global market access.' },
                  { title: 'Quality Control', text: 'Rigorous testing protocols and quality assurance procedures at every stage of the manufacturing process.' },
                  { title: 'Continuous Improvement', text: 'Ongoing investment in technology, training, and process optimization to maintain industry-leading standards.' }
                ].map((item, i) => (
                   <div key={i} className="flex flex-col">
                      <h3 className="text-lg font-bold text-neutral-800 mb-2">{item.title}</h3>
                      <p className="text-neutral-500">{item.text}</p>
                   </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;