import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// UI Components
import { Toaster } from "./components/ui/toaster";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ManufacturingPage from "./pages/ManufacturingPage";
import PartnersPage from "./pages/PartnersPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Navigation Bar */}
        <Navigation />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/sterilization-pouches" element={<ProductDetailPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Toaster for notifications */}
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
