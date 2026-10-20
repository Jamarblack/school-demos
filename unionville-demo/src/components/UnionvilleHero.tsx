import React from 'react';
import crest from '../assets/crest.png';

const UnionvilleHero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-stone-50 text-stone-900 flex items-center overflow-hidden font-sans pt-20 lg:pt-0">
      {/* Decorative background glow using the uniform theme */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-union-teal/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-union-gold/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="container mx-auto px-6 py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Copy & CTA */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center md:text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-union-navy/5 border border-union-navy/10 text-union-navy text-xs font-extrabold tracking-wide uppercase">
            <img src={crest} alt="Unionville Crest" className="w-6 h-6 rounded-full" />
              <span className="w-2 h-2 rounded-full bg-union-red animate-pulse" />
              Admissions Open 2026/2027
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-stone-950 leading-[1.1]">
              Where Curiosity Meets <span className="text-union-teal relative whitespace-nowrap">
                Innovation
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-union-gold" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,0 Q25,12 50,0 T100,0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>.
            </h1>

            <p className="text-base md:text-lg text-stone-600 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              At The Unionville School, we nurture future thinkers, creators, and leaders through hands-on STEM programs, holistic arts, and tech-forward learning spaces.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center md:justify-start">
              <a 
                href="#apply" 
                className="px-7 py-3.5 rounded-xl bg-union-teal hover:bg-union-navy text-white font-bold transition-all duration-200 shadow-lg shadow-union-teal/20 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                Apply for Admission
              </a>
              <a 
                href="#campus" 
                className="px-7 py-3.5 rounded-xl bg-white hover:bg-stone-100 text-stone-800 font-bold border border-stone-200 transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto text-center"
              >
                Explore Campus
              </a>
            </div>

            {/* Quick Metrics Bar */}
            {/* <div className="pt-8 border-t border-stone-200 grid grid-cols-3 gap-4 md:gap-6 max-w-lg mx-auto md:mx-0 text-center md:text-left">
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-stone-900">98%</p>
                <p className="text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-wider mt-1">Uni Acceptance</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-stone-900">12:1</p>
                <p className="text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-wider mt-1">Student-Teacher</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-extrabold text-union-teal">100%</p>
                <p className="text-[10px] md:text-xs text-stone-500 font-bold uppercase tracking-wider mt-1">Digital Classes</p>
              </div>
            </div> */}
          </div>

          {/* Right Column - Visual Grid */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 hidden sm:block">
            <div className="grid grid-cols-2 gap-4">
              
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop" 
                  alt="Students learning" 
                  className="rounded-2xl object-cover h-48 md:h-56 w-full shadow-md hover:scale-[1.02] transition-transform duration-300" 
                />
                <div className="p-5 rounded-2xl bg-union-navy text-white shadow-md border-b-4 border-union-gold">
                  <p className="text-[10px] uppercase tracking-widest text-union-gold font-extrabold mb-1">STEM Focused</p>
                  <p className="text-sm font-semibold leading-snug">Robotics, Coding, and Maker Spaces integrated from primary classes.</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-md">
                  <p className="text-2xl md:text-3xl font-extrabold text-union-teal">25+</p>
                  <p className="text-xs text-stone-600 mt-1 font-bold">Clubs, Sports, and Co-Curricular Activities</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop" 
                  alt="Classroom activity" 
                  className="rounded-2xl object-cover h-56 md:h-64 w-full shadow-md hover:scale-[1.02] transition-transform duration-300" 
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UnionvilleHero;