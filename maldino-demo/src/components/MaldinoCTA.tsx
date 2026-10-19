import React from 'react';

const MaldinoCTA: React.FC = () => {
  return (
    <section className="py-24 bg-maldino-navy relative font-sans">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-maldino-blue/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-14 max-w-5xl mx-auto shadow-2xl flex flex-col md:flex-row gap-12 items-center">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              Begin Your Journey <br /> With Us
            </h2>
            <p className="text-slate-300 mb-8 max-w-md mx-auto md:mx-0">
              Admissions for the 2026/2027 academic session are now open. Secure a place for your child at Maldino Divine Academy today.
            </p>
            {/* <div className="flex items-center justify-center md:justify-start gap-4">
               <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-maldino-navy bg-slate-400 flex items-center justify-center overflow-hidden`}>
                     <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Parent" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-400">Join <span className="text-white font-bold">500+</span> parents</p>
            </div> */}
          </div>

          {/* Quick Inquiry Form */}
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold text-maldino-navy mb-6">Request Prospectus</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Parent's Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-maldino-gold/50 focus:border-maldino-gold transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-maldino-gold/50 focus:border-maldino-gold transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Child's Intended Class</label>
                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-maldino-gold/50 focus:border-maldino-gold transition-all text-slate-700">
                  <option>Primary 1 - 6</option>
                  <option>JSS 1 - 3</option>
                  <option>SSS 1 - 3</option>
                </select>
              </div>
              <button className="w-full py-4 bg-maldino-gold hover:bg-maldino-gold-light text-maldino-navy font-bold rounded-lg transition-all shadow-md mt-2">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MaldinoCTA;