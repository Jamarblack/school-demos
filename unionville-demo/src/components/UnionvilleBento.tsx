import React from 'react';

const UnionvilleBento: React.FC = () => {
  return (
    <section id="curriculum" className="py-24 bg-stone-100/60 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-union-emerald text-xs font-bold uppercase tracking-wider mb-3">
            Holistic Modern Curriculum
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-stone-950 tracking-tight">
            Built for Minds That Want to <span className="text-union-emerald">Change the World</span>.
          </h2>
          <p className="mt-4 text-stone-600 text-base md:text-lg">
            We merge standard academic requirements with future-ready skills: programming, artificial intelligence literacy, and problem-solving.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: 8 cols - STEM & Robotics Lab */}
          <div className="md:col-span-8 rounded-3xl bg-union-navy p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-lg">
            <div className="absolute top-0 right-0 w-96 h-96 bg-union-emerald opacity-30 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                Innovation Hub
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold mt-4 mb-3">
                Robotics, Electronics & Coding from Year 1
              </h3>
              <p className="text-emerald-100 max-w-xl text-sm md:text-base leading-relaxed">
                Students don't just consume technology; they construct it. Hands-on coding with microcontrollers, 3D printing simulations, and computational thinking are baked into the weekly timetable.
              </p>
            </div>

            <div className="relative z-10 pt-8 flex flex-wrap gap-3">
              {['Python & Scratch', 'IoT & Sensors', 'Applied Mechatronics', 'Design Thinking'].map((tag) => (
                <span key={tag} className="px-3.5 py-1.5 rounded-xl bg-white/10 text-white text-xs font-semibold backdrop-blur-sm border border-white/10">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2: 4 cols - Student Wellbeing & Community */}
          <div className="md:col-span-4 rounded-3xl bg-white border border-stone-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 text-union-coral flex items-center justify-center font-bold text-xl mb-6">
                ♥
              </div>
              <h3 className="text-xl font-extrabold text-stone-900 mb-2">Wellbeing & Mentorship</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Every learner is assigned an academic coach and peer mentor to maintain mental resilience, active study habits, and balanced growth.
              </p>
            </div>
            <div className="pt-6 border-t border-stone-100 text-xs font-bold text-union-emerald">
              1-on-1 Weekly Check-ins →
            </div>
          </div>

          {/* Card 3: 4 cols - Creative Arts & Public Speaking */}
          <div className="md:col-span-4 rounded-3xl bg-white border border-stone-200 p-8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-union-emerald flex items-center justify-center font-bold text-xl mb-6">
                🎙
              </div>
              <h3 className="text-xl font-extrabold text-stone-900 mb-2">Debate, Media & Arts</h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                From Model United Nations simulations to digital studio art and orchestra, we ensure confident articulation in public settings.
              </p>
            </div>
            <div className="pt-6 border-t border-stone-100 text-xs font-bold text-union-emerald">
              Annual Inter-School Laurels →
            </div>
          </div>

          {/* Card 4: 8 cols - Sports & Leadership */}
          <div className="md:col-span-8 rounded-3xl bg-white border border-stone-200 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-md">
              <span className="px-3 py-1 rounded-full bg-rose-50 text-union-coral text-xs font-bold uppercase tracking-wider">
                Athletics & Teams
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-stone-950">
                Championship Athletics & Physical Culture
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Full-size synthetic football pitch, Olympic-standard track training, basketball courts, and inter-house athletic tournaments.
              </p>
            </div>
            <div className="w-full md:w-56 bg-stone-50 rounded-2xl p-5 border border-stone-200 text-center shrink-0">
              <p className="text-4xl font-extrabold text-union-emerald">14</p>
              <p className="text-xs font-semibold text-stone-500 uppercase mt-1">Active Sports Teams</p>
              <div className="mt-4 pt-4 border-t border-stone-200 text-xs text-stone-600 font-medium">
                Football • Basketball • Swimming • Table Tennis
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UnionvilleBento;