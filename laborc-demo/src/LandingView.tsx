import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import crest from './assets/crest.png'; 

export default function LandingView({ onNavigate }: { onNavigate: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* Geometric Background Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-600/5 -skew-x-12 transform origin-top-right pointer-events-none"></div>

      <nav className="relative z-50 w-full max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="flex items-center justify-between bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-4 cursor-pointer">
            <div className=" rounded-xl flex items-center justify-center shadow-inner">
              <img src={crest} className="w-12 h-12 object-contain" alt="Laborc Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                Laborc Schools
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex gap-8 font-bold text-slate-600">
            <a href="#" className="hover:text-emerald-600 transition-colors">About Us</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Admissions</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Academics</a>
          </div>

          <button 
            onClick={onNavigate}
            className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-emerald-600 transition-all active:scale-95"
          >
            Portal Login
          </button>

          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-24 left-4 right-4 bg-white rounded-xl shadow-xl border border-slate-200 p-4 flex flex-col gap-4 z-50 animate-pop-in md:hidden">
            <a href="#" className="font-bold text-slate-600 p-2">About Us</a>
            <a href="#" className="font-bold text-slate-600 p-2">Admissions</a>
            <button 
              onClick={onNavigate}
              className="w-full bg-emerald-600 text-white p-3 rounded-lg font-bold mt-2"
            >
              Portal Login
            </button>
          </div>
        )}
      </nav>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-12 pb-24 md:pt-20 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Column: Hero Text */}
        <div className={`w-full lg:w-1/2 flex flex-col gap-6 items-center text-center lg:items-start lg:text-left transition-all duration-1000 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          {/* <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full font-bold border border-emerald-200 text-sm">
            <ShieldCheck className="w-4 h-4" />
            <span></span>
          </div> */}
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            Education, <br/> the best legacy.
          </h1>
          
          <p className="text-lg text-slate-600 font-medium max-w-xl leading-relaxed">
            Located in the heart of Ibeju-Lekki, Laborc Schools provides a serene, prejudice-free environment where every child has access to top-tier learning without breaking the bank.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
            <button 
              onClick={onNavigate}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-4xl font-bold text-lg shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 transition-all active:scale-95" 
            >
              Begin Digital Admission
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right Column: Structured Feature Grid */}
        {/* <div className={`w-full lg:w-1/2 grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 aspect-square flex flex-col justify-center items-center text-center hover:border-emerald-500 transition-colors cursor-pointer group">
             <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <GraduationCap className="text-emerald-600 w-8 h-8" />
             </div>
             <h3 className="font-black text-slate-900 mb-2">Excellence</h3>
             <p className="text-sm font-medium text-slate-500">Structured termly curriculum.</p>
          </div>
          
          <div className="bg-slate-900 p-6 rounded-3xl shadow-lg border border-slate-800 aspect-square flex flex-col justify-center items-center text-center transform translate-y-8">
             <div className="text-4xl font-black text-white mb-2">100%</div>
             <p className="text-sm font-bold text-slate-400">Digital Reporting & Admisions</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 aspect-square flex flex-col justify-center items-center text-center hover:border-emerald-500 transition-colors cursor-pointer group">
             <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
               <Users className="text-blue-600 w-8 h-8" />
             </div>
             <h3 className="font-black text-slate-900 mb-2">Community</h3>
             <p className="text-sm font-medium text-slate-500">Zero segregation learning.</p>
          </div>
        </div> */}
      </main>
    </div>
  );
}