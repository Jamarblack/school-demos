import React from 'react';
import crest from '../assets/crest.png';

const MaldinoFooter: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 font-sans border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8  rounded flex items-center justify-center">
              <img src={crest} alt="Maldino Divine Academy" className="w-full h-full object-contain" />
            </div>
            <span className="text-white font-serif font-bold text-lg">Maldino Divine Academy</span>
          </div>
          <p className="text-sm max-w-sm">
            Fostering a community of learners dedicated to academic excellence, 
            moral integrity, and global leadership.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-maldino-gold transition-colors">Admissions</a></li>
            <li><a href="#" className="hover:text-maldino-gold transition-colors">Academic Calendar</a></li>
            <li><a href="#" className="hover:text-maldino-gold transition-colors">Student Portal</a></li>
            <li><a href="#" className="hover:text-maldino-gold transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li> Alhaji Ibrahim Street, Abule Parapo, Awoyaya, Lekki-Epe Expressway, Lagos</li>
            <li>info@maldinoacademy.com</li>
            <li>+234 800 000 0000</li>
          </ul>
        </div>

      </div>
      <div className="container mx-auto px-6 lg:px-12 pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2026 Maldino Divine Academy. All rights reserved.</p>
        <p>Powered by <span className="text-white font-bold">Darkieson Code Studio</span></p>
      </div>
    </footer>
  );
};

export default MaldinoFooter;