import React from 'react';
import crest from '../assets/crest.png';

const UnionvilleFooter: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-12 font-sans border-t border-stone-800">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-sm">
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <img src={crest} alt="Unionville Crest" className="w-8 h-8 rounded-lg" />
            <span className="text-white font-extrabold text-lg">The Unionville School</span>
          </div>
          <p className="max-w-sm text-stone-400 text-xs md:text-sm">
            Empowering students with 21st-century problem-solving, moral discipline, and technological literacy.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider">Academics</h4>
          <ul className="space-y-2 text-xs">
            <li><a href="#" className="hover:text-emerald-400">Curriculum Structure</a></li>
            <li><a href="#" className="hover:text-emerald-400">Robotics & STEM Lab</a></li>
            <li><a href="#" className="hover:text-emerald-400">Sports Complex</a></li>
            <li><a href="#" className="hover:text-emerald-400">School Calendar</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-xs uppercase tracking-wider">Campus</h4>
          <ul className="space-y-2 text-xs">
            <li>Unionville Avenue, Off Ring Road</li>
            <li>admissions@unionville.edu.ng</li>
            <li>+234 810 000 0000</li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 pt-6 border-t border-stone-900 text-xs flex flex-col md:flex-row justify-between items-center gap-3">
        <p>© 2026 The Unionville School. All rights reserved.</p>
        <p>Engineered by <span className="text-white font-bold">Darkieson Code Studio</span></p>
      </div>
    </footer>
  );
};

export default UnionvilleFooter;