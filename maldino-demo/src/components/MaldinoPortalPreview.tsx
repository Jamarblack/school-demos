import React from 'react';

const MaldinoPortalPreview: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-maldino-gold font-semibold tracking-wider uppercase text-sm mb-4 block">
            The Digital Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maldino-navy mb-6">
            Seamless School Management
          </h2>
          <p className="text-lg text-slate-600">
            Provide parents with real-time academic updates and give your administrative staff 
            the tools they need to manage fees, grading, and attendance effortlessly.
          </p>
        </div>

        {/* Browser Mockup Wrapper */}
        <div className="relative mx-auto max-w-5xl">
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-maldino-blue to-maldino-gold opacity-20 blur-2xl rounded-[2.5rem]"></div>
          
          <div className="relative rounded-2xl bg-slate-50 border border-slate-200 shadow-2xl overflow-hidden">
            
            {/* Fake Browser Header */}
            <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="mx-auto bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-400 font-medium w-1/2 text-center flex items-center justify-center gap-2">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                portal.maldinoacademy.com
              </div>
            </div>

            {/* Dashboard Mockup UI */}
            <div className="flex h-[500px]">
              
              {/* Sidebar */}
              <div className="w-64 bg-maldino-navy text-slate-300 hidden md:flex flex-col border-r border-maldino-navy">
                <div className="p-6">
                  <h3 className="text-white font-serif font-bold text-xl tracking-wide">Maldino Portal</h3>
                </div>
                <nav className="flex-1 px-4 space-y-2">
                  <div className="bg-maldino-blue/30 text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-3 border border-maldino-blue/50">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    Dashboard
                  </div>
                  {['Students', 'Academics', 'Finance', 'Communications'].map((item) => (
                    <div key={item} className="px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white/5 hover:text-white transition-colors flex items-center gap-3 cursor-pointer">
                      <div className="w-4 h-4 bg-slate-600 rounded-sm"></div>
                      {item}
                    </div>
                  ))}
                </nav>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 p-6 md:p-8 bg-slate-50 overflow-hidden flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <div>
                    <h4 className="text-2xl font-bold text-maldino-navy">Overview</h4>
                    <p className="text-sm text-slate-500">2026/2027 Academic Session - First Term</p>
                  </div>
                  <button className="bg-maldino-gold text-maldino-navy px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-shadow">
                    + Generate Report
                  </button>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { label: 'Total Enrolled', value: '1,248', trend: '+12% this year', color: 'text-green-600' },
                    { label: 'Outstanding Fees', value: '₦4.2M', trend: '-5% from last term', color: 'text-red-500' },
                    { label: 'Avg Attendance', value: '96.4%', trend: 'Steady', color: 'text-maldino-blue' },
                  ].map((stat, i) => (
                    <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                      <p className="text-sm text-slate-500 font-medium mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-maldino-navy mb-2">{stat.value}</p>
                      <p className={`text-xs font-medium ${stat.color}`}>{stat.trend}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Activity Table Mockup */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm flex-1 flex flex-col overflow-hidden">
                  <div className="border-b border-slate-100 px-6 py-4">
                    <h5 className="font-bold text-maldino-navy">Recent Fee Payments</h5>
                  </div>
                  <div className="flex-1 p-6 space-y-4">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-50 last:border-0 last:pb-0">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-maldino-navy/5 flex items-center justify-center text-maldino-navy font-bold text-xs">
                            {['A', 'B', 'C'][i]}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-maldino-navy">JSS 2 School Fees</p>
                            <p className="text-xs text-slate-500">Paid via Paystack • Today, 10:4{i} AM</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-maldino-navy">₦150,000</p>
                          <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Successful</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default MaldinoPortalPreview;