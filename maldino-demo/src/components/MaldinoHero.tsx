import React from 'react';
import crest from '../assets/crest.png';

const MaldinoHero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        {/* Deep Royal Blue / Black Gradient Overlay using our v4 theme colors */}
        <div className="absolute inset-0 bg-gradient-to-r from-maldino-navy via-maldino-blue/99 to-slate-900/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center md:text-left flex flex-col md:flex-row items-center">
        
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="flex px-4 py-1.5 mb-6 w-73 rounded-full border border-maldino-gold/30 bg-maldino-gold/10 backdrop-blur-md">
          <img src={crest}  className='w-8 h-8 rounded-full' alt="" />
            <span className="text-maldino-gold  ml-2 text-sm font-medium">Admissions Open for 2026/2027</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
            Building Legacy. <br />
            <span className="text-maldino-gold italic">Investing in Future Generations</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-sans leading-relaxed">
            Empowering students with world-class academics, character development, 
            and modern innovation. Welcome to the future of learning at Maldino Divine Academy.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-8 py-4 bg-maldino-gold hover:bg-maldino-gold-light text-maldino-navy font-bold rounded-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-300 hover:-translate-y-1">
              Admissions 2026/2027
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg backdrop-blur-md border border-white/20 transition-all duration-300 hover:-translate-y-1">
              Access Parent Portal
            </button>
          </div>
        </div>

        {/* Floating Stats/Portal Teaser Card on Desktop */}
        <div className="hidden lg:block ml-auto mt-12 md:mt-0 animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl w-72 transform rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-maldino-gold/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-maldino-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold font-sans">Term Results</p>
                <p className="text-slate-300 text-sm font-sans">Published Today</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-maldino-gold w-4/5"></div>
              </div>
              <p className="text-xs text-slate-400 text-right font-sans">80% Class Average</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MaldinoHero;