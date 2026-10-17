import { useState } from 'react';
import { LayoutDashboard, Users, CreditCard, Bell, LogOut, Menu,  } from 'lucide-react';
import Dashboard from './Dashboard';
import Payments from './Payments';
import StudentsProfile from './WardsProfile';
import crest from './assets/crest.png'; 

type PortalTab = 'dashboard' | 'students' | 'payments';

export default function PortalView({ onNavigate }: { onNavigate: () => void }) {
  const [activeTab, setActiveTab] = useState<PortalTab>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', img: crest },
    { id: 'students', label: 'Results & Profile', img: crest },
    { id: 'payments', label: 'Fee Payments', img: crest },
  ];

  const handleTabChange = (id: string) => {
    setActiveTab(id as PortalTab);
    setIsSidebarOpen(false); 
  };

  const SidebarContent = () => (
    <>
      <div onClick={onNavigate} className="p-6 flex items-center gap-3 cursor-pointer group shrink-0">
        <div className=" bg-emerald-600 rounded-xl flex items-center justify-center shadow-md group-hover:bg-emerald-700 transition-colors">
          <img src={crest} className="text-white w-12 h-12" />
        </div>
        <span className="text-2xl font-black text-slate-900 tracking-tight">
          Laborc<span className="text-blue-600">.</span>
        </span>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabChange(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all duration-200 ${
              activeTab === item.id 
                ? 'bg-blue-600 text-white shadow-md transform scale-[1.02]' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-emerald-700'
            }`}
          >
           <img src={item.img} alt={item.label} className={`w-5 h-5 object-contain ${activeTab === item.id ? 'animate-pulse' : ''}`} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-slate-200 shrink-0">
        <button onClick={onNavigate} className="flex items-center gap-3 text-slate-400 font-bold hover:text-red-500 transition-colors">
          <LogOut className="w-5 h-5" /> Log Out
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex text-slate-800 bg-slate-50 overflow-x-hidden">
      
      {/* Desktop Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 h-screen fixed left-0 top-0 flex-col z-20 hidden md:flex shadow-sm">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Mobile Sidebar Drawer */}
      <aside className={`w-64 bg-white h-screen fixed left-0 top-0 flex flex-col z-50 md:hidden transition-transform duration-300 ease-in-out shadow-xl ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SidebarContent />
      </aside>

      <main className="flex-1 md:ml-64 flex flex-col min-h-screen relative w-full">
        {/* Top Header */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-30 border-b border-slate-200 px-4 md:px-8 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <button 
              className="md:hidden p-1 text-slate-600 hover:bg-slate-100 rounded-lg"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
            
            <h2 className="text-lg md:text-xl font-black text-slate-800 capitalize flex items-center gap-2">
              {activeTab === 'dashboard' ? <LayoutDashboard className="w-5 h-5 text-emerald-600 hidden sm:block"/> : 
               activeTab === 'students' ? <Users className="w-5 h-5 text-blue-600 hidden sm:block"/> : 
               <CreditCard className="w-5 h-5 text-amber-500 hidden sm:block"/>}
              {activeTab.replace('-', ' ')}
            </h2>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <button className="relative p-2 text-slate-400 hover:text-emerald-600 transition-colors bg-slate-50 rounded-full hidden sm:block">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-2 md:gap-3 sm:pl-4 sm:border-l border-slate-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-black text-slate-700">Mr Olatunji</p>
                <p className="text-xs font-bold text-slate-400">Parent Account</p>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-black text-sm md:text-lg border-2 border-white shadow-sm">
                O
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="p-4 sm:p-6 md:p-10 flex-1 overflow-x-hidden">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'payments' && <Payments />}
          {activeTab === 'students' && <StudentsProfile />}
        </div>
      </main>
    </div>
  );
}