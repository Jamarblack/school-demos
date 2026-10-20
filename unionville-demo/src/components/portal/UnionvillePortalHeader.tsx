import React from 'react';

interface HeaderProps {
  role: 'admin' | 'parent';
  activeTab: string;
  onMenuClick: () => void;
}

const UnionvillePortalHeader: React.FC<HeaderProps> = ({ role, activeTab, onMenuClick }) => {
  return (
    <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-4 md:px-8 z-30 sticky top-0">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="md:hidden text-stone-800 p-1 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
        <h2 className="text-lg md:text-xl font-extrabold text-stone-900 truncate">{activeTab}</h2>
      </div>
      <div className="flex items-center gap-3 md:gap-4 shrink-0">
        <span className="text-xs md:text-sm font-bold text-stone-500 hidden sm:block">Term: 2026/2027 (1st)</span>
        <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-union-emerald font-extrabold text-xs shadow-sm">
          {role === 'admin' ? 'AD' : 'PR'}
        </div>
      </div>
    </header>
  );
};

export default UnionvillePortalHeader;