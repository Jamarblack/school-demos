import React, { useState, useEffect } from 'react';
import { Play, ArrowRight, Star, Sparkles, Menu, X } from 'lucide-react';
import crest from './assets/crest.png';

export default function LandingView({ onNavigate }: { onNavigate: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [hubIndex, setHubIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Replaced lucide icons with the crest image variable
  const hubs = [
    { title: "Creche Learning Hub", img: crest, color: "from-red-400 to-red-600", border: "bg-red-500" },
    { title: "Nursery Learning Hub", img: crest, color: "from-yellow-400 to-yellow-600", border: "bg-yellow-400" },
    { title: "Primary Learning Hub", img: crest, color: "from-blue-400 to-blue-600", border: "bg-blue-700" }
  ];

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setHubIndex((prev) => (prev + 1) % hubs.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [hubs.length]);

  const activeHub = hubs[hubIndex];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-rounded overflow-x-hidden relative">
      {/* Background Decorative Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-10 w-32 md:w-64 h-32 md:h-64 bg-yellow-200/40 blob-1 animate-float blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 md:w-96 h-48 md:h-96 bg-blue-200/40 blob-2 animate-float-delayed blur-xl"></div>
        <div className="absolute top-40 right-10 md:right-40 w-24 md:w-48 h-24 md:h-48 bg-red-200/30 blob-3 animate-float blur-lg"></div>
      </div>

      <nav className="relative z-50 w-full max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 transition-all duration-700 ease-out">
        <div className="flex items-center justify-between bg-white/80 backdrop-blur-md px-4 md:px-6 py-3 md:py-4 rounded-[2rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center blob-1 border-2 border-slate-100 shadow-sm">
              <img src={crest} className="w-6 h-6 md:w-8 md:h-8 object-contain" alt="Tots-Up Logo" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-extrabold text-blue-900 tracking-tight leading-none">
                Tots-Up
              </span>
              <span className="text-xs md:text-sm font-bold text-slate-500">
                Educational services <span className="text-red-500">.</span>
              </span>
            </div>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 font-bold text-slate-600">
            <a href="#" className="hover:text-blue-700 transition-colors hover:-translate-y-1 transform duration-200">Our Story</a>
            <a href="#" className="hover:text-red-500 transition-colors hover:-translate-y-1 transform duration-200">Academics</a>
            <a href="#" className="hover:text-yellow-500 transition-colors hover:-translate-y-1 transform duration-200">Gallery</a>
          </div>

          <div className="hidden md:block">
            <button 
              onClick={onNavigate}
              className="flex items-center gap-2 bg-blue-100 text-blue-800 px-6 py-2.5 rounded-full font-bold hover:bg-blue-200 transition-all active:scale-95"
            >
              Portal Login
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex flex-col gap-4 z-50 animate-pop-in md:hidden">
            <a href="#" className="font-bold text-slate-600 p-2 hover:bg-slate-50 rounded-lg">Our Story</a>
            <a href="#" className="font-bold text-slate-600 p-2 hover:bg-slate-50 rounded-lg">Academics</a>
            <a href="#" className="font-bold text-slate-600 p-2 hover:bg-slate-50 rounded-lg">Gallery</a>
            <button 
              onClick={onNavigate}
              className="w-full bg-blue-600 text-white p-3 rounded-xl font-bold mt-2"
            >
              Portal Login
            </button>
          </div>
        )}
      </nav>

      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 pt-8 pb-24 md:pt-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
        
        {/* Left Column: Text & CTA */}
        <div className={`w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start transition-all duration-1000 transform ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold w-max shadow-sm border border-yellow-200 text-sm md:text-base">
            <img src={crest} className="w-5 h-5" />
            <span>Enrollment for 2026 is Open!</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-blue-900 leading-[1.1] tracking-tight">
            Seeking <br/> Knowledge till Eternity<br className="hidden lg:block"/>
            {/* <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-600 blob-text block mt-2">
              Eternity
            </span> */}
          </h1>
          
          <p className="text-base md:text-lg text-slate-600 font-medium max-w-xl leading-relaxed px-4 lg:px-0">
            Welcome to Tots-Up School. We nurture bright minds through an immersive, colorful, and highly stimulating environment designed for your child's foundational years.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto px-4 sm:px-0">
            <button 
              onClick={onNavigate}
              className="w-full sm:w-auto group relative flex items-center justify-center gap-3 bg-red-500 text-white px-8 py-4 rounded-full font-extrabold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out z-0"></div>
              <span className="relative z-10 flex items-center gap-2 group-hover:text-blue-900 transition-colors duration-300">
                Automated Admissions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <button className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-blue-900 border-2 border-blue-100 px-8 py-4 rounded-full font-extrabold text-lg hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 active:scale-95">
              <Play className="w-5 h-5 text-yellow-500 fill-current" />
              Take Campus Tour
            </button>
          </div>
        </div>

        {/* Right Column: Dynamic Blob */}
        <div className={`w-full lg:w-1/2 relative h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          <div className={`relative z-10 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] ${activeHub.border} p-1.5 sm:p-2 shadow-2xl animate-float animate-morph transition-colors duration-1000`}>
            <div className="w-full h-full bg-slate-200 overflow-hidden relative border-4 border-white flex items-center justify-center group cursor-pointer animate-morph">
               <div className={`absolute inset-0 bg-gradient-to-br ${activeHub.color} group-hover:scale-110 transition-colors duration-1000`}></div>
               
               {/* Updated Image Rendering */}
               <div key={hubIndex} className="relative z-10 animate-pop-in drop-shadow-lg flex items-center justify-center">
                 <img 
                   src={activeHub.img} 
                   alt={activeHub.title} 
                   className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 blob-1 object-contain opacity-95 drop-shadow-md" 
                 />
               </div>
               
               <div className="absolute bottom-4 sm:bottom-8 text-center w-full z-10 text-white font-bold text-sm sm:text-base bg-black/20 backdrop-blur-sm py-2">
                 {activeHub.title}
               </div>
            </div>
          </div>

          <div className="absolute top-4 right-4 sm:top-10 sm:right-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-float-delayed z-20 border-4 border-white">
            <Star className="text-white w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" />
          </div>

          <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-red-500 blob-3 flex items-center justify-center shadow-lg animate-float z-20 border-4 border-white">
            <span className="text-white font-black text-lg sm:text-xl">A, B, C</span>
          </div>
        </div>
      </main>
    </div>
  );
}