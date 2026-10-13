import React, { useState } from 'react';
import LandingView from './LandingView';
import PortalView from './PortalView';
import { Analytics } from "@vercel/analytics/react"

const customStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');
  
  body {
    font-family: 'Nunito', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f1f5f9;
    margin: 0;
    overflow-x: hidden;
  }
  
  .font-rounded { font-family: 'Nunito', sans-serif; }

  @keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(4deg); }
  }
  @keyframes float-reverse {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(20px) rotate(-4deg); }
  }
  @keyframes morph {
    0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    33% { border-radius: 40% 60% 50% 50% / 40% 50% 60% 50%; }
    66% { border-radius: 50% 50% 60% 40% / 50% 60% 40% 60%; }
    100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  }

  .animate-float { animation: float 6s ease-in-out infinite; }
  .animate-float-delayed { animation: float-reverse 7s ease-in-out infinite; }
  .animate-morph { animation: morph 6s ease-in-out infinite; }
  .blob-1, .blob-shape-1 { border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%; }
  .blob-2, .blob-shape-2 { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  .blob-3 { border-radius: 50% 50% 60% 40% / 40% 60% 50% 50%; }

  .card-organic {
    border-radius: 24px;
    box-shadow: 0 10px 25px -5px rgba(29, 78, 216, 0.08);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .card-organic:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 35px -5px rgba(29, 78, 216, 0.12);
  }

  @keyframes float-gentle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }
  .animate-float-gentle { animation: float-gentle 4s ease-in-out infinite; }
  @keyframes pop-in {
    0% { transform: scale(0.8); opacity: 0; }
    100% { transform: scale(1); opacity: 1; }
  }
  .animate-pop-in { animation: pop-in 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #f1f5f9; }
  ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
  ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
`;

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'portal'>('landing');

  return (
    <>
      <style>{customStyles}</style>
      {currentView === 'landing' ? (
        <LandingView onNavigate={() => setCurrentView('portal')} />
      ) : (
        <PortalView onNavigate={() => setCurrentView('landing')} />
      )}
      <Analytics />
    </>
  );
}