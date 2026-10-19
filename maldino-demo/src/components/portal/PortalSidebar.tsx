import React from 'react';
import { useNavigate } from 'react-router-dom';

interface PortalSidebarProps {
  role: 'admin' | 'parent';
  activeTab: string;
  setActiveTab: (tab: string) => void;
  menuItems: string[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const PortalSidebar: React.FC<PortalSidebarProps> = ({ role, activeTab, setActiveTab, menuItems, isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Overlay Background */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-maldino-navy/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-maldino-navy text-slate-300 flex flex-col shadow-2xl transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-white/10 flex justify-between items-center">
          <h3 className="text-white font-serif font-bold text-xl tracking-wide">Maldino Portal</h3>
          <button className="md:hidden text-white" onClick={() => setIsOpen(false)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <p className="px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">
            {role === 'admin' ? 'Administration' : 'Parent Access'}
          </p>
          {menuItems.map((item) => (
            <button 
              key={item}
              onClick={() => {
                setActiveTab(item);
                setIsOpen(false); // Auto-close on mobile after selection
              }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-3 ${
                activeTab === item 
                  ? 'bg-maldino-blue/30 text-white border border-maldino-blue/50' 
                  : 'hover:bg-white/5 hover:text-white'
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${activeTab === item ? 'bg-maldino-gold' : 'bg-slate-600'}`}></div>
              {item}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button 
            onClick={() => navigate('/')}
            className="w-full px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 rounded-lg text-sm font-medium transition-colors"
          >
            Logout Demo
          </button>
        </div>
      </div>
    </>
  );
};

export default PortalSidebar;