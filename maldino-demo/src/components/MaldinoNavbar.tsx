import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MaldinoNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-maldino-navy/95 backdrop-blur-lg border-b border-white/10 font-sans transition-all">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-maldino-gold rounded flex items-center justify-center shadow-lg">
            <span className="font-serif font-bold text-maldino-navy text-xl">M</span>
          </div>
          <span className="text-white font-serif font-bold text-lg md:text-xl tracking-wide">
            Maldino Divine <span className="text-maldino-gold hidden sm:inline">Academy</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <a href="#about" className="hover:text-maldino-gold transition-colors">About Us</a>
          <a href="#academics" className="hover:text-maldino-gold transition-colors">Academics</a>
          <Link to="/portal/login" className="hover:text-maldino-gold transition-colors">Portal</Link>
          <a href="#contact" className="hover:text-maldino-gold transition-colors">Contact</a>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/portal/login" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
            Login
          </Link>
          <button className="bg-maldino-gold hover:bg-maldino-gold-light text-maldino-navy px-5 py-2 rounded-md text-sm font-bold transition-all shadow-md hover:shadow-lg">
            Apply Now
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-maldino-navy border-t border-white/10 p-6 space-y-4 animate-fade-in-up">
          <a href="#about" className="block text-slate-200 font-medium hover:text-maldino-gold">About Us</a>
          <a href="#academics" className="block text-slate-200 font-medium hover:text-maldino-gold">Academics</a>
          <Link to="/portal/login" className="block text-slate-200 font-medium hover:text-maldino-gold">Portal</Link>
          <a href="#contact" className="block text-slate-200 font-medium hover:text-maldino-gold">Contact</a>
          
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
             <Link to="/portal/login" className="w-full text-center border border-white/20 text-white py-3 rounded-md text-sm font-bold block">
              Portal Login
            </Link>
            <button className="w-full bg-maldino-gold text-maldino-navy py-3 rounded-md text-sm font-bold shadow-md">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MaldinoNavbar;