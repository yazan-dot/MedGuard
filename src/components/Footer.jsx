import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-800 border-t border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <span className="text-lg font-bold text-neutral-50">MedGuard Medical Supplies</span>
            <p className="mt-4 text-sm text-neutral-50">
              Professional medical supply solutions with a commitment to quality, safety, and regulatory compliance.
            </p>
          </div>

          <div>
            <span className="text-sm font-semibold text-neutral-50 uppercase tracking-wider">Company</span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-primary-medium hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/manufacturing" className="text-sm text-primary-medium hover:text-primary transition-colors">
                  Manufacturing & Quality
                </Link>
              </li>
              <li>
                <Link to="/partners" className="text-sm text-primary-medium hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold text-neutral-50 uppercase tracking-wider">Products</span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/products" className="text-sm text-primary-medium hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products/sterilization-pouches" className="text-sm text-primary-medium hover:text-primary transition-colors">
                  Sterilization Pouches
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-sm font-semibold text-neutral-50 uppercase tracking-wider">Contact</span>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/contact" className="text-sm text-primary-medium hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400">
              © {currentYear} MedGuard Medical Supplies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/contact" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link to="/contact" className="text-sm text-neutral-400 hover:text-primary transition-colors">
                Compliance
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-neutral-500 text-center md:text-left">
            All products comply with applicable medical device regulations and quality standards. Consult product documentation for specific certifications and intended use.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;