import React, { useState } from 'react';
import PortalSidebar from '../../components/portal/PortalSidebar';
import PortalHeader from '../../components/portal/PortalHeader';
import crest from '../../assets/crest.png';

const ParentDashboard: React.FC = () => {
  // Added mobile sidebar state (assuming you are using the updated Sidebar/Header)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Academic Results');
  const menuItems = ['My Ward Overview', 'Academic Results', 'Fee History'];

  const subjects = [
    { name: 'Mathematics', ca1: 8, ca2: 9, ca3: 10, exam: 62, total: 89, grade: 'A', remark: 'Excellent' },
    { name: 'English Language', ca1: 7, ca2: 8, ca3: 8, exam: 58, total: 81, grade: 'A', remark: 'Excellent' },
    { name: 'Basic Science', ca1: 6, ca2: 7, ca3: 9, exam: 55, total: 77, grade: 'A', remark: 'Excellent' },
    { name: 'Basic Technology', ca1: 8, ca2: 8, ca3: 8, exam: 45, total: 69, grade: 'B', remark: 'V. Good' },
    { name: 'Business Studies', ca1: 9, ca2: 9, ca3: 10, exam: 60, total: 88, grade: 'A', remark: 'Excellent' },
    { name: 'Civic Education', ca1: 10, ca2: 9, ca3: 10, exam: 65, total: 94, grade: 'A', remark: 'Excellent' },
    { name: 'Agricultural Science', ca1: 7, ca2: 6, ca3: 8, exam: 50, total: 71, grade: 'A', remark: 'Excellent' },
    { name: 'Physical & Health Ed.', ca1: 8, ca2: 8, ca3: 9, exam: 52, total: 77, grade: 'A', remark: 'Excellent' },
    { name: 'Christian Religious Studies', ca1: 9, ca2: 10, ca3: 9, exam: 61, total: 89, grade: 'A', remark: 'Excellent' },
    { name: 'Social Studies', ca1: 7, ca2: 7, ca3: 8, exam: 48, total: 70, grade: 'A', remark: 'Excellent' },
    { name: 'Home Economics', ca1: 6, ca2: 8, ca3: 7, exam: 45, total: 66, grade: 'B', remark: 'V. Good' },
    { name: 'Computer Studies (ICT)', ca1: 9, ca2: 9, ca3: 10, exam: 68, total: 96, grade: 'A', remark: 'Excellent' },
    { name: 'Yoruba Language', ca1: 5, ca2: 6, ca3: 7, exam: 40, total: 58, grade: 'C', remark: 'Credit' },
    { name: 'French Language', ca1: 8, ca2: 7, ca3: 8, exam: 50, total: 73, grade: 'A', remark: 'Excellent' },
    { name: 'Cultural & Creative Arts', ca1: 7, ca2: 8, ca3: 9, exam: 51, total: 75, grade: 'A', remark: 'Excellent' },
    { name: 'History', ca1: 8, ca2: 9, ca3: 8, exam: 56, total: 81, grade: 'A', remark: 'Excellent' },
  ];

  const affectiveTraits = [
    { trait: 'Punctuality', score: 5 },
    { trait: 'Neatness', score: 5 },
    { trait: 'Politeness', score: 4 },
    { trait: 'Honesty', score: 5 },
    { trait: 'Relationship with Peers', score: 4 },
    { trait: 'Attentiveness', score: 5 },
  ];

  const psychomotorSkills = [
    { skill: 'Handwriting', score: 4 },
    { skill: 'Verbal Fluency', score: 5 },
    { skill: 'Sports & Games', score: 4 },
    { skill: 'Crafts & Painting', score: 3 },
    { skill: 'Musical Skills', score: 3 },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      <PortalSidebar 
        role="parent" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        menuItems={menuItems} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        <PortalHeader 
          role="parent" 
          activeTab={activeTab} 
          onMenuClick={() => setIsSidebarOpen(true)} 
        />

        <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
          {activeTab === 'My Ward Overview' && (
             <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
              {/* Added flex-col on mobile, flex-row on md */}
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative overflow-hidden text-center md:text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-maldino-gold/40 rounded-bl-full"></div>
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-maldino-navy flex items-center justify-center text-white text-2xl md:text-3xl font-serif font-bold shadow-lg z-10">
                  AJ
                </div>
                <div className="z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-maldino-navy mb-1">Adebayo Johnson</h3>
                  <p className="text-slate-600 font-medium mb-4 text-sm md:text-base">Class: JSS 2A • ID: MDA/26/001</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded border border-emerald-100">Attendance: 98%</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded border border-blue-100">Fees: Cleared</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Academic Results' && (
            <div className="max-w-5xl mx-auto animate-fade-in-up">
              {/* Stacked header/button on mobile */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
                 <div>
                   <h3 className="text-xl md:text-2xl font-bold text-maldino-navy">Terminal Report Slip</h3>
                   <p className="text-xs md:text-sm text-slate-500">First Term, 2026/2027 Academic Session</p>
                 </div>
                 <button className="w-full md:w-auto justify-center bg-maldino-navy hover:bg-maldino-blue text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md flex items-center gap-2 transition-colors">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                   Download PDF
                 </button>
              </div>

              {/* SURGICAL FIX: Wrapper div with overflow-x-auto so the complex UI can horizontally scroll on mobile */}
              <div className="bg-white border border-slate-200 rounded-lg shadow-lg overflow-x-auto">
                
                {/* Protected container to ensure your exact UI never squishes below 800px */}
                <div className="p-6 md:p-8 relative min-w-[800px]">

                  {/* Background Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.09] pointer-events-none">
                    <img src={crest} alt="Maldino Divine Academy Crest" className="text-[15rem] font-serif font-bold text-maldino-navy transform -rotate-12"/>
                  </div>

                  {/* Header */}
                  <div className="border-b-4 border-double border-maldino-navy pb-4 mb-6 flex justify-between items-start relative z-10">
                     <div className="flex gap-4 items-center">
                       <div className="w-16 h-16 bg-maldino-gold rounded-lg flex items-center justify-center shadow-md">
                        <img src={crest} alt="Crest" />
                       </div>
                       <div>
                         <h2 className="text-2xl font-serif font-black text-maldino-navy uppercase tracking-wide">Maldino Divine Academy</h2>
                         <p className="text-xs font-bold text-slate-600 tracking-widest uppercase">Investing in Future Generation</p>
                         <p className="text-xs text-slate-500 mt-1"> Alhaji Ibrahim Street, Abule Parapo, Awoyaya, Lekki-Epe Expressway, Lagos</p>
                       </div>
                     </div>
                  </div>

                  {/* Student Bio-Data Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6 text-xs relative z-10">
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">Student Name</span><span className="font-bold text-maldino-navy text-sm">Adebayo Johnson</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">Admission No</span><span className="font-bold text-slate-800">MDA/26/001</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">Class</span><span className="font-bold text-slate-800">JSS 2A</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">Term / Session</span><span className="font-bold text-slate-800">1st Term • 2026/2027</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">No. in Class</span><span className="font-bold text-slate-800">42</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">Position in Class</span><span className="font-bold text-maldino-navy text-sm">4th</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">Total Score / Avg</span><span className="font-bold text-slate-800">1254 / 78.3%</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">Next Term Begins</span><span className="font-bold text-slate-800">Jan 11, 2027</span></div>
                  </div>

                  {/* Cognitive Domain Table */}
                  <div className="mb-8 relative z-10">
                    <h4 className="font-bold text-maldino-navy uppercase tracking-wider text-sm mb-2 border-b-2 border-maldino-navy inline-block pb-1">Result </h4>
                    <table className="w-full text-left border-collapse border border-slate-300">
                      <thead>
                        <tr className="bg-slate-100 text-[10px] uppercase text-maldino-navy border-b border-slate-300">
                          <th className="px-3 py-2 border-r border-slate-300 font-bold w-1/4">Subject</th>
                          <th className="px-3 py-2 border-r border-slate-300 font-bold text-center">CA 1 (10)</th>
                          <th className="px-3 py-2 border-r border-slate-300 font-bold text-center">CA 2 (10)</th>
                          <th className="px-3 py-2 border-r border-slate-300 font-bold text-center">CA 3 (10)</th>
                          <th className="px-3 py-2 border-r border-slate-300 font-bold text-center">Exam (70)</th>
                          <th className="px-3 py-2 border-r border-slate-300 font-bold text-center">Total (100)</th>
                          <th className="px-3 py-2 border-r border-slate-300 font-bold text-center">Grade</th>
                          <th className="px-3 py-2 font-bold">Remark</th>
                        </tr>
                      </thead>
                      <tbody className="text-[11px]">
                        {subjects.map((row, i) => (
                          <tr key={i} className="border-b border-slate-200 even:bg-slate-50 hover:bg-slate-100">
                            <td className="px-3 py-1.5 border-r border-slate-300 font-bold text-slate-800">{row.name}</td>
                            <td className="px-3 py-1.5 border-r border-slate-300 text-center">{row.ca1}</td>
                            <td className="px-3 py-1.5 border-r border-slate-300 text-center">{row.ca2}</td>
                            <td className="px-3 py-1.5 border-r border-slate-300 text-center">{row.ca3}</td>
                            <td className="px-3 py-1.5 border-r border-slate-300 text-center">{row.exam}</td>
                            <td className="px-3 py-1.5 border-r border-slate-300 text-center font-bold text-maldino-navy">{row.total}</td>
                            <td className={`px-3 py-1.5 border-r border-slate-300 text-center font-bold ${row.grade === 'A' ? 'text-emerald-600' : row.grade === 'B' ? 'text-blue-600' : 'text-amber-600'}`}>{row.grade}</td>
                            <td className="px-3 py-1.5 text-slate-600 italic">{row.remark}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Affective & Psychomotor Domains */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                    <div>
                      <h4 className="font-bold text-maldino-navy uppercase tracking-wider text-sm mb-2 border-b-2 border-maldino-navy inline-block pb-1">Affective Traits</h4>
                      <table className="w-full text-left border-collapse border border-slate-300 text-xs">
                        <thead className="bg-slate-100 border-b border-slate-300">
                          <tr>
                            <th className="px-3 py-1.5 border-r border-slate-300 font-semibold text-slate-600">Trait</th>
                            <th className="px-3 py-1.5 font-semibold text-slate-600 text-center">Rating (1-5)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {affectiveTraits.map((item, i) => (
                            <tr key={i} className="border-b border-slate-200 last:border-0">
                              <td className="px-3 py-1.5 border-r border-slate-300">{item.trait}</td>
                              <td className="px-3 py-1.5 text-center font-bold">{item.score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h4 className="font-bold text-maldino-navy uppercase tracking-wider text-sm mb-2 border-b-2 border-maldino-navy inline-block pb-1">Psychomotor Skills</h4>
                      <table className="w-full text-left border-collapse border border-slate-300 text-xs">
                        <thead className="bg-slate-100 border-b border-slate-300">
                          <tr>
                            <th className="px-3 py-1.5 border-r border-slate-300 font-semibold text-slate-600">Skill</th>
                            <th className="px-3 py-1.5 font-semibold text-slate-600 text-center">Rating (1-5)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {psychomotorSkills.map((item, i) => (
                            <tr key={i} className="border-b border-slate-200 last:border-0">
                              <td className="px-3 py-1.5 border-r border-slate-300">{item.skill}</td>
                              <td className="px-3 py-1.5 text-center font-bold">{item.score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Signatures & Remarks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t-2 border-slate-200 pt-6 relative z-10">

                    {/* Form Teacher */}
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-500 mb-1">Form Teacher's Remark</p>
                      <p className="text-sm italic text-slate-800 border-b border-dotted border-slate-400 pb-1 mb-4">"Adebayo is an exceptionally bright and well-behaved student. Keep it up!"</p>
                      <div className="flex items-end gap-2">
                        <div className="font-[Signature] italic text-2xl text-blue-900 border-b border-slate-800 w-40 inline-block px-2">T.O. Alabi</div>
                        <span className="text-[10px] text-slate-500 uppercase font-semibold">Signature & Date</span>
                      </div>
                    </div>

                    {/* Principal */}
                    <div className="relative">
                      {/* Dummy Stamp */}
                      <div className="absolute opacity-30 transform -rotate-12 pointer-events-none border-4 border-red-700 rounded-full w-28 h-28 flex items-center justify-center top-0 right-10">
                        <div className="border-2 border-red-700 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center">
                          <span className="text-red-700 font-bold text-[7px] tracking-widest uppercase mt-2">Maldino Academy</span>
                          <span className="text-red-700 font-black text-sm mt-0.5">APPROVED</span>
                          <span className="text-red-700 font-bold text-[6px] mt-0.5">19 OCT 2026</span>
                        </div>
                      </div>

                      <p className="text-xs uppercase font-bold text-slate-500 mb-1">Principal's Remark</p>
                      <p className="text-sm italic text-slate-800 border-b border-dotted border-slate-400 pb-1 mb-4">"An outstanding result. Promoted to next term with high expectations."</p>
                      <div className="flex items-end gap-2">
                        <div className="font-[Signature] italic text-3xl text-maldino-navy border-b border-slate-800 w-40 inline-block px-2">Dr. E. Ojo</div>
                        <span className="text-[10px] text-slate-500 uppercase font-semibold">Signature & Date</span>
                      </div>
                    </div>

                  </div>

                  {/* Grading Scale Footer */}
                  <div className="mt-8 pt-4 border-t border-slate-200 text-[10px] text-slate-500 flex flex-wrap justify-center gap-4 md:gap-6 relative z-10">
                    <span><strong className="text-maldino-navy">A</strong>: 70 - 100 (Excellent)</span>
                    <span><strong className="text-maldino-navy">B</strong>: 60 - 69 (Very Good)</span>
                    <span><strong className="text-maldino-navy">C</strong>: 50 - 59 (Credit)</span>
                    <span><strong className="text-maldino-navy">D</strong>: 40 - 49 (Pass)</span>
                    <span><strong className="text-maldino-navy">F</strong>: 0 - 39 (Fail)</span>
                  </div>

                </div>
              </div>
            </div>
          )}

          {activeTab === 'Fee History' && (
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <h3 className="text-xl md:text-2xl font-bold text-maldino-navy mb-4 md:mb-6">Financial Records</h3>
              {/* Added overflow-x-auto for Fee History table too */}
              <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-slate-50 text-xs uppercase text-slate-500 border-b border-slate-200">
                      <th className="px-4 md:px-6 py-3 md:py-4 font-semibold">Description</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 font-semibold">Amount</th>
                      <th className="px-4 md:px-6 py-3 md:py-4 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-slate-100">
                      <td className="px-4 md:px-6 py-3 md:py-4 font-bold text-maldino-navy">1st Term Tuition & Levies</td>
                      <td className="px-4 md:px-6 py-3 md:py-4 font-bold text-slate-700">₦150,000</td>
                      <td className="px-4 md:px-6 py-3 md:py-4"><span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full whitespace-nowrap">Paid via Card</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ParentDashboard;