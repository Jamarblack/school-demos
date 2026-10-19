import React, { useState } from 'react';
import PortalSidebar from '../../components/portal/PortalSidebar';
import PortalHeader from '../../components/portal/PortalHeader';

const AdminDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const menuItems = ['Overview', 'Student Directory', 'Fee Management', 'Result Processing'];

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      <PortalSidebar 
        role="admin" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        menuItems={menuItems}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        <PortalHeader 
          role="admin" 
          activeTab={activeTab} 
          onMenuClick={() => setIsSidebarOpen(true)}
        />
        
        <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
          {activeTab === 'Overview' && (
            <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Total Enrolled', value: '1,248', trend: '+12% this year', color: 'text-emerald-600' },
                  { label: 'Outstanding Fees', value: '₦4.2M', trend: '-5% from last term', color: 'text-rose-500' },
                  { label: 'Avg Attendance', value: '96.4%', trend: 'Steady', color: 'text-maldino-blue' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <p className="text-sm text-slate-500 font-medium mb-2">{stat.label}</p>
                    <p className="text-4xl font-bold text-maldino-navy mb-3">{stat.value}</p>
                    <p className={`text-sm font-medium ${stat.color}`}>{stat.trend}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Student Directory' && (
            <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <input type="text" placeholder="Search students..." className="w-full md:w-80 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm" />
                <button className="w-full md:w-auto bg-maldino-gold text-maldino-navy px-5 py-2 rounded-lg text-sm font-bold shadow-sm">+ Add Student</button>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-slate-50 text-xs uppercase text-slate-500 border-b border-slate-200">
                      <th className="px-6 py-4 font-semibold">Reg ID</th>
                      <th className="px-6 py-4 font-semibold">Student Name</th>
                      <th className="px-6 py-4 font-semibold">Class</th>
                      <th className="px-6 py-4 font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-slate-100">
                      <td className="px-6 py-4 font-mono text-xs text-slate-500">MDA/26/001</td>
                      <td className="px-6 py-4 font-bold text-maldino-navy">Adebayo Johnson</td>
                      <td className="px-6 py-4 text-slate-600">JSS 2A</td>
                      <td className="px-6 py-4"><button className="text-maldino-blue font-semibold text-sm">View Profile</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'Fee Management' && (
            <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-sm text-slate-500 font-medium mb-1">Total Expected (Term 1)</p>
                    <p className="text-3xl font-bold text-maldino-navy">₦45.5M</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-sm text-slate-500 font-medium mb-1">Total Collected</p>
                    <p className="text-3xl font-bold text-emerald-600">₦41.3M</p>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'Result Processing' && (
            <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                <h3 className="text-xl font-bold text-maldino-navy">Term 1 Results Compilation</h3>
                <button className="w-full md:w-auto bg-maldino-blue text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm">Publish All Results</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="text-lg font-bold text-maldino-navy mb-2">JSS 1</h4>
                  <p className="text-xs text-slate-500 mb-4">12 Subjects Total</p>
                  <div className="h-2 w-full bg-slate-100 rounded-full mb-4 overflow-hidden">
                    <div className="h-full rounded-full bg-emerald-500" style={{ width: '100%' }}></div>
                  </div>
                  <button className="w-full py-2 rounded-lg text-sm font-bold border bg-white border-maldino-gold text-maldino-gold">View Broadsheet</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;