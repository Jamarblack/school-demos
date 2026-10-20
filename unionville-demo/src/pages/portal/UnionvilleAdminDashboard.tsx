import React, { useState } from 'react';
import UnionvillePortalSidebar from '../../components/portal/UnionvillePortalSidebar';
import UnionvillePortalHeader from '../../components/portal/UnionvillePortalHeader';

const UnionvilleAdminDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const menuItems = ['Overview', 'Student Directory', 'Fee Management', 'Result Processing'];

  return (
    <div className="flex h-screen bg-stone-50 font-sans overflow-hidden">
      <UnionvillePortalSidebar role="admin" activeTab={activeTab} setActiveTab={setActiveTab} menuItems={menuItems} isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        <UnionvillePortalHeader role="admin" activeTab={activeTab} onMenuClick={() => setIsSidebarOpen(true)} />
        
        <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
          {activeTab === 'Overview' && (
            <div className="max-w-6xl mx-auto space-y-8 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { label: 'Total Enrolled', value: '842', trend: '+5% this year', color: 'text-union-emerald' },
                  { label: 'Outstanding Fees', value: '₦2.1M', trend: '-12% from last term', color: 'text-union-coral' },
                  { label: 'Avg Attendance', value: '98.2%', trend: 'Excellent', color: 'text-blue-600' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
                    <p className="text-sm text-stone-500 font-bold mb-2 uppercase tracking-wider">{stat.label}</p>
                    <p className="text-4xl font-extrabold text-stone-900 mb-3 tracking-tight">{stat.value}</p>
                    <p className={`text-sm font-bold ${stat.color}`}>{stat.trend}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Student Directory' && (
            <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-stone-200 shadow-sm">
                <input type="text" placeholder="Search students..." className="w-full md:w-80 px-4 py-2.5 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:border-union-emerald" />
                <button className="w-full md:w-auto bg-union-emerald text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md">+ Add Student</button>
              </div>
              <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-stone-50 text-xs uppercase text-stone-500 border-b border-stone-200">
                      <th className="px-6 py-4 font-extrabold">Reg ID</th>
                      <th className="px-6 py-4 font-extrabold">Student Name</th>
                      <th className="px-6 py-4 font-extrabold">Class</th>
                      <th className="px-6 py-4 font-extrabold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-stone-100">
                      <td className="px-6 py-4 font-mono text-xs text-stone-500 font-bold">UNV/26/001</td>
                      <td className="px-6 py-4 font-extrabold text-stone-900">Chioma Okeke</td>
                      <td className="px-6 py-4 text-stone-600 font-semibold">Year 8 (JSS 2)</td>
                      <td className="px-6 py-4"><button className="text-union-emerald font-bold text-sm hover:underline">View Profile</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Fee Management & Result Processing remain structurally similar, ensuring UI consistency */}
          {activeTab === 'Fee Management' && (
             <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
               <div className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm">
                  <p className="text-sm text-stone-500 font-bold mb-1 uppercase">Total Expected vs Collected</p>
                  <p className="text-3xl font-extrabold text-stone-900">₦28.5M / <span className="text-union-emerald">₦26.4M</span></p>
               </div>
             </div>
          )}
          {activeTab === 'Result Processing' && (
             <div className="max-w-6xl mx-auto space-y-6 animate-fade-in-up">
               <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                 <h3 className="text-xl font-extrabold text-stone-900">Term 1 Computations</h3>
                 <button className="w-full md:w-auto bg-union-emerald text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md">Publish Selected</button>
               </div>
             </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default UnionvilleAdminDashboard;