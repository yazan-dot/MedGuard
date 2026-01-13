import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductsPage = () => {
  const products = [
    {
      id: 'sterilization-pouches',
      name: 'Sterilization Pouches',
      category: 'Sterilization',
      description: 'Medical-grade self-sealing sterilization pouches for autoclaves and EtO sterilization.',
      link: '/products/sterilization-pouches'
    },
    {
      id: 'surgical-gloves',
      name: 'Surgical Gloves',
      category: 'Personal Protection',
      description: 'Latex and nitrile surgical gloves meeting highest safety standards.'
    },
    {
      id: 'disposable-masks',
      name: 'Disposable Masks',
      category: 'Personal Protection',
      description: 'Medical-grade disposable masks with superior filtration efficiency.'
    },
    {
      id: 'sterilization-indicators',
      name: 'Sterilization Indicators',
      category: 'Sterilization',
      description: 'Chemical and biological indicators for sterilization process validation.'
    },
    {
      id: 'autoclave-tape',
      name: 'Autoclave Tape',
      category: 'Sterilization',
      description: 'Steam sterilization indicator tape for autoclave processes.'
    },
    {
      id: 'medical-gowns',
      name: 'Medical Gowns',
      category: 'Personal Protection',
      description: 'Isolation and surgical gowns with fluid resistance properties.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Products - MedGuard Medical Supplies</title>
        <meta name="description" content="Browse our comprehensive range of medical supplies including sterilization pouches, surgical gloves, masks, and protective equipment." />
      </Helmet>

      <div className="bg-white">
        <section className="bg-neutral-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-6 relative inline-block">
              Our Products
              <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full"></span>
            </h1>
            <p className="text-xl text-neutral-500 max-w-3xl mt-4">
              Comprehensive range of medical supplies manufactured to the highest quality standards.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group">
                  <div className="bg-neutral-100 h-56 flex items-center justify-center overflow-hidden">
                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={`${product.name} product image`} src="https://images.unsplash.com/photo-1601208609469-625ff6f4ea7e" />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary-very-light rounded-full mb-3">
                      {product.category}
                    </span>
                    <h2 className="text-xl font-bold text-neutral-800 mb-2">{product.name}</h2>
                    <p className="text-neutral-500 mb-6 h-12 overflow-hidden text-ellipsis">{product.description}</p>
                    {product.link ? (
                      <Link to={product.link}>
                        <Button className="w-full bg-primary hover:bg-primary-dark text-white shadow-md transition-all">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : (
                      <Button className="w-full bg-neutral-200 text-neutral-500 cursor-not-allowed hover:bg-neutral-200">
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-neutral-800 mb-4">Need a Custom Solution?</h2>
            <p className="text-lg text-neutral-500 mb-8 max-w-2xl mx-auto">
              Our team can work with you to develop custom medical supply solutions for your specific requirements.
            </p>
            <Link to="/contact">
              <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-base shadow-lg transition-all">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductsPage;