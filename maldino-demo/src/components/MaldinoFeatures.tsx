import React from 'react';

const MaldinoFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-blue-950 mb-4">
            A Tradition of <span className="text-amber-500 italic">Excellence</span>
          </h2>
          <p className="text-lg text-slate-600 font-sans">
            Our curriculum is designed to challenge the mind, build character, and prepare students for global leadership.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          {/* Main Feature - Spans 2 Columns on Desktop */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-blue-950 shadow-xl min-h-[320px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop" 
              alt="Science Lab" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 p-8">
              <div className="w-12 h-12 rounded-full backdrop-blur-md flex items-center justify-center mb-4 ">
                {/* <svg className="w-6 h-6 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> */}
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">Advanced STEM Labs</h3>
              <p className="text-slate-300 font-sans max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                Equipping students with university-grade equipment for physics, chemistry, and applied robotics.
              </p>
            </div>
          </div>

          {/* Secondary Feature - Standard Square */}
          <div className="group relative overflow-hidden rounded-3xl bg-amber-500 shadow-xl min-h-[320px] p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <div className="text-blue-950">
               {/* <svg className="w-10 h-10 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg> */}
              <h3 className="text-2xl font-serif font-bold mb-2">Global Curriculum</h3>
              <p className="text-blue-900/80 font-sans font-medium">
                Integrated learning pathways preparing students for top-tier international universities.
              </p>
            </div>
            {/* Decorative Element */}
            <div className="w-24 h-24 bg-white/20 rounded-full blur-2xl absolute -bottom-4 -right-4"></div>
          </div>

          {/* Tertiary Feature - Standard Square */}
          <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-lg min-h-[320px] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
            <div className="w-12 h-12 rounded-full  flex items-center justify-center mb-6">
              {/* <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> */}
            </div>
            <h3 className="text-xl font-serif font-bold text-blue-950 mb-3">Holistic Development</h3>
            <p className="text-slate-600 font-sans text-sm leading-relaxed">
              Beyond academics, we focus on emotional intelligence, public speaking, and leadership through structured debate and arts programs.
            </p>
          </div>

          {/* Quaternary Feature - Spans 2 Columns on Desktop */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 shadow-xl min-h-[320px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex items-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
            <div className="relative z-10 p-8 md:p-12 w-full md:w-2/3">
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-6 inline-block">
                Athletics
              </span>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">Champion Spirit</h3>
              <p className="text-slate-300 font-sans mb-8">
                State-of-the-art sporting facilities that foster teamwork, discipline, and physical excellence.
              </p>
              <button className="text-amber-500 font-semibold font-sans flex items-center gap-2 hover:gap-3 transition-all duration-300">
                Explore Facilities <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaldinoFeatures;