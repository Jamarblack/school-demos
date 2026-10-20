import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  role: 'admin' | 'parent';
  activeTab: string;
  setActiveTab: (tab: string) => void;
  menuItems: string[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const UnionvillePortalSidebar: React.FC<SidebarProps> = ({ role, activeTab, setActiveTab, menuItems, isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)} />
      )}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-union-forest text-stone-300 flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-union-emerald text-white flex items-center justify-center font-extrabold text-sm">U</div>
            <h3 className="text-white font-extrabold text-lg tracking-tight">Portal</h3>
          </div>
          <button className="md:hidden text-white" onClick={() => setIsOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <p className="px-4 text-xs font-bold text-stone-400 uppercase tracking-wider mb-4">
            {role === 'admin' ? 'Administration' : 'Parent Access'}
          </p>
          {menuItems.map((item) => (
            <button 
              key={item}
              onClick={() => { setActiveTab(item); setIsOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-3 ${
                activeTab === item 
                  ? 'bg-union-emerald text-white shadow-md' 
                  : 'hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${activeTab === item ? 'bg-white' : 'bg-union-emerald'}`}></div>
              {item}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button onClick={() => navigate('/')} className="w-full px-4 py-3 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 rounded-xl text-sm font-bold transition-colors">
            Logout Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default UnionvillePortalSidebar;