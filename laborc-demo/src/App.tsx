import  { useState } from 'react';
import LandingView from './LandingView';
import PortalView from './PortalView';
import { Analytics } from "@vercel/analytics/react";
import crest from './assets/crest.png'; // Import the Laborc crest here

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');
  
  body {
    font-family: 'Inter', sans-serif;
    background-color: #f8fafc;
    margin: 0;
    overflow-x: hidden;
  }

  @keyframes fade-up {
    0% { transform: translateY(20px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
  .animate-fade-up { animation: fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  
  @keyframes pop-in {
    0% { transform: scale(0.95); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

  .card-structured {
    border-radius: 16px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .card-structured:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #f8fafc; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
`;

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'portal'>('landing');

  return (
    <>
      <style>{customStyles}</style>
      
      {/* GLOBAL FADED WATERMARK */}
      <div className="fixed inset-0 pointer-events-none flex items-center opacity-[0.5] justify-center z-100 overflow-hidden">
        <img 
          src={crest} 
          alt="Laborc Watermark" 
          className="w-[80vw] md:w-[600px] object-contain opacity-[0.5] rounded-full mix-blend-multiply" 
        />
      </div>

      {/* Main App Content Container */}
      <div className="relative z-10">
        {currentView === 'landing' ? (
          <LandingView onNavigate={() => setCurrentView('portal')} />
        ) : (
          <PortalView onNavigate={() => setCurrentView('landing')} />
        )}
      </div>
      
      <Analytics />
    </>
  );
}