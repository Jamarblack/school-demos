import React from 'react';

const UnionvilleCTA: React.FC = () => {
  return (
    <section id="apply" className="py-20 bg-union-navy text-white font-sans relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-union-forest-dark/70 border border-emerald-500/20 rounded-3xl p-8 md:p-14 shadow-2xl flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left space-y-4">
            <span className="px-3 py-1 rounded-full bg- text-emerald-300 text-xs font-bold tracking-wider uppercase">
              2026/2027 Admissions
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Give Your Child an Unfair Advantage?
            </h2>
            <p className="text-emerald-100 text-sm md:text-base leading-relaxed">
              Schedule a personalized school tour, meet our faculty heads, or submit an admission inquiry online in under 2 minutes.
            </p>
          </div>

          <form className="w-full md:w-80 space-y-3 bg-union-gold p-6 rounded-2xl text-stone-900 shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-extrabold text-base text-stone-950">Book a Campus Tour</h3>
            <input 
              type="text" 
              placeholder="Parent's Name" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-union-emerald"
            />
            <input 
              type="tel" 
              placeholder="WhatsApp / Phone Number" 
              className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-union-emerald"
            />
            <select className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-sm text-stone-600 focus:outline-none focus:border-union-emerald">
              <option>Early Years (Creche / Nursery)</option>
              <option>Primary School</option>
              <option>Junior Secondary (JSS)</option>
              <option>Senior Secondary (SSS)</option>
            </select>
            <button className="w-full py-3 rounded-xl bg-union-emerald hover:bg-union-forest text-white font-bold text-sm shadow-md transition-colors">
              Schedule Tour
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UnionvilleCTA;