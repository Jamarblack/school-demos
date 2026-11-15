import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import crest from '../assets/crest2.png';
import { useLanguage } from '../context/LanguageContext';

const MaldinoNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();

  const t = {
    en: {
      schoolName: "Shiekh Tajudeen Gurumoh",
      schoolSuffix: "Islamic Academy",
      navAbout: "About Us",
      navAcademics: "Academics",
      navPortal: "Portal",
      navContact: "Contact",
      btnLogin: "Login",
      btnApply: "Apply Now",
      btnPortalLogin: "Portal Login",
      toggleBtn: "عربي"
    },
    ar: {
      schoolName: "الشيخ تاج الدين غروما",
      schoolSuffix: "الإسلامية",
      navAbout: "معلومات عنا",
      navAcademics: "الأكاديميون",
      navPortal: "البوابة",
      navContact: "اتصل بنا",
      btnLogin: "تسجيل الدخول",
      btnApply: "قدم الآن",
      btnPortalLogin: "تسجيل دخول البوابة",
      toggleBtn: "English"
    }
  };

  const activeText = t[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-maldino-navy/95 backdrop-blur-lg border-b border-white/10 font-sans transition-all">
      <div className="container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 rounded flex items-center justify-center shadow-lg bg-white p-0.5">
            <img src={crest} alt="Gurumoh Crest" className="w-full h-full object-contain" />
          </div>
          <span className="text-white font-serif font-bold text-sm md:text-xl tracking-wide">
            {activeText.schoolName} <span className="text-maldino-gold hidden sm:inline">{activeText.schoolSuffix}</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-200">
          <a href="#about" className="hover:text-maldino-gold transition-colors">{activeText.navAbout}</a>
          <a href="#academics" className="hover:text-maldino-gold transition-colors">{activeText.navAcademics}</a>
          <Link to="/portal/login" className="hover:text-maldino-gold transition-colors">{activeText.navPortal}</Link>
          <a href="#contact" className="hover:text-maldino-gold transition-colors">{activeText.navContact}</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className="text-maldino-gold border border-maldino-gold hover:bg-maldino-gold hover:text-maldino-navy px-3 py-1 rounded-md text-xs font-bold transition-all"
          >
            {activeText.toggleBtn}
          </button>
          <Link to="/portal/login" className="text-slate-300 hover:text-white text-sm font-medium transition-colors">
            {activeText.btnLogin}
          </Link>
          <button className="bg-maldino-gold hover:bg-maldino-gold-light text-maldino-navy px-5 py-2 rounded-md text-sm font-bold transition-all shadow-md hover:shadow-lg">
            {activeText.btnApply}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button onClick={toggleLang} className="text-maldino-gold border border-maldino-gold px-2 py-1 rounded text-xs font-bold">
            {activeText.toggleBtn}
          </button>
          <button className="text-white p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-maldino-navy border-t border-white/10 p-6 space-y-4 animate-fade-in-up">
          <a href="#about" className="block text-slate-200 font-medium hover:text-maldino-gold">{activeText.navAbout}</a>
          <a href="#academics" className="block text-slate-200 font-medium hover:text-maldino-gold">{activeText.navAcademics}</a>
          <Link to="/portal/login" className="block text-slate-200 font-medium hover:text-maldino-gold">{activeText.navPortal}</Link>
          <a href="#contact" className="block text-slate-200 font-medium hover:text-maldino-gold">{activeText.navContact}</a>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
             <Link to="/portal/login" className="w-full text-center border border-white/20 text-white py-3 rounded-md text-sm font-bold block">{activeText.btnPortalLogin}</Link>
            <button className="w-full bg-maldino-gold text-maldino-navy py-3 rounded-md text-sm font-bold shadow-md">{activeText.btnApply}</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MaldinoNavbar;