import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import crest from '../assets/crest.png';

const UnionvilleNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/80 font-sans">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3">
          <img src={crest} alt="Unionville Crest" className="w-10 h-10 rounded-xl" />
          <div>
            <span className="text-stone-900 font-extrabold text-lg tracking-tight block leading-tight">
              The Unionville <span className="text-union-emerald">School</span>
            </span>
            <span className="text-[10px] text-stone-500 font-semibold uppercase tracking-wider block">
              Descendo | Floremus
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-stone-700">
          <a href="#about" className="hover:text-union-emerald transition-colors">Our Approach</a>
          <a href="#curriculum" className="hover:text-union-emerald transition-colors">Pathways</a>
          <a href="#campus" className="hover:text-union-emerald transition-colors">Campus Life</a>
          <Link to="/portal/login" className="hover:text-union-emerald transition-colors">Portal Access</Link>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/portal/login" 
            className="text-stone-700 hover:text-stone-950 text-sm font-bold transition-colors"
          >
            Sign In
          </Link>
          <a 
            href="#apply" 
            className="px-5 py-2.5 rounded-xl bg-union-emerald hover:bg-union-forest text-white text-sm font-bold transition-all shadow-md shadow-emerald-700/25 hover:-translate-y-0.5"
          >
            Apply for Admission
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className="md:hidden text-stone-800 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-6 space-y-4 shadow-xl animate-fade-in-up">
          <a href="#about" onClick={() => setIsOpen(false)} className="block text-stone-700 font-semibold hover:text-union-emerald">Our Approach</a>
          <a href="#curriculum" onClick={() => setIsOpen(false)} className="block text-stone-700 font-semibold hover:text-union-emerald">Pathways</a>
          <a href="#campus" onClick={() => setIsOpen(false)} className="block text-stone-700 font-semibold hover:text-union-emerald">Campus Life</a>
          <Link to="/portal/login" onClick={() => setIsOpen(false)} className="block text-stone-700 font-semibold hover:text-union-emerald">Portal Access</Link>
          <div className="pt-4 border-t border-stone-100 flex flex-col gap-3">
            <Link 
              to="/portal/login" 
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl border border-stone-200 text-stone-800 font-bold text-sm"
            >
              Portal Login
            </Link>
            <a 
              href="#apply"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-union-emerald text-white font-bold text-sm shadow-md"
            >
              Apply for Admission
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default UnionvilleNavbar;