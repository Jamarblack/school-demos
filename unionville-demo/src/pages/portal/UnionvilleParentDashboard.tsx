import React, { useState } from 'react';
import UnionvillePortalSidebar from '../../components/portal/UnionvillePortalSidebar';
import UnionvillePortalHeader from '../../components/portal/UnionvillePortalHeader';
import crest from '../../assets/crest.png'; // Assuming you still want to use the crest image here

const UnionvilleParentDashboard: React.FC = () => {
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
    <div className="flex h-screen bg-stone-50 font-sans overflow-hidden">
      <UnionvillePortalSidebar 
        role="parent" 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        menuItems={menuItems} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
      />

      <div className="flex-1 flex flex-col h-full overflow-hidden w-full">
        <UnionvillePortalHeader 
          role="parent" 
          activeTab={activeTab} 
          onMenuClick={() => setIsSidebarOpen(true)} 
        />

        <main className="flex-1 p-4 md:p-8 overflow-y-auto w-full">
          {activeTab === 'My Ward Overview' && (
             <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
              <div className="bg-white p-6 md:p-8 rounded-3xl border border-stone-200 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative overflow-hidden text-center md:text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-union-gold/20 rounded-bl-full"></div>
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-2xl bg-union-navy flex items-center justify-center text-white text-2xl md:text-3xl font-extrabold shadow-lg z-10 border-b-4 border-union-gold">
                  CO
                </div>
                <div className="z-10">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-union-navy mb-1">Chioma Okeke</h3>
                  <p className="text-stone-600 font-medium mb-4 text-sm md:text-base">Year 8 (JSS 2) • UNV/26/001</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                    <span className="px-3 py-1 bg-union-teal/10 text-union-teal text-xs font-extrabold rounded-lg border border-union-teal/20 uppercase tracking-wider">Attendance: 99%</span>
                    <span className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-extrabold rounded-lg border border-stone-200 uppercase tracking-wider">Fees: Cleared</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Academic Results' && (
            <div className="max-w-5xl mx-auto animate-fade-in-up">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
                 <div>
                   <h3 className="text-xl md:text-2xl font-extrabold text-union-navy">Terminal Report Slip</h3>
                   <p className="text-xs md:text-sm text-stone-500 font-bold uppercase tracking-wider mt-1">First Term, 2026/2027 Academic Session</p>
                 </div>
                 <button className="w-full md:w-auto justify-center bg-union-navy hover:bg-union-teal text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md flex items-center gap-2 transition-colors">
                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                   Download PDF
                 </button>
              </div>

              <div className="bg-white border border-stone-200 rounded-3xl shadow-lg overflow-x-auto">
                
                <div className="p-6 md:p-8 relative min-w-[800px]">

                  {/* Background Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.2] pointer-events-none">
                  <img src={crest} alt="" />
                  </div>

                  {/* Header */}
                  <div className="border-b-4 border-solid border-union-navy pb-6 mb-6 flex justify-between items-start relative z-10">
                     <div className="flex gap-5 items-center">
                       <div className="w-16 h-16 bg-union-navy rounded-2xl flex items-center justify-center shadow-md border-b-4 border-union-gold">
                        <img src={crest} alt="Crest" className="w-10 h-10 object-contain" />
                       </div>
                       <div>
                         <h2 className="text-2xl font-extrabold text-union-navy uppercase tracking-tight">The Unionville School</h2>
                         <p className="text-xs font-extrabold text-union-teal tracking-widest uppercase mt-0.5">Descendo | Floremus</p>
                         <p className="text-xs text-stone-500 mt-1 font-medium">L.G.A, Michael Adegbola St, Ibeju, Lakowe 105101, Lagose</p>
                       </div>
                     </div>
                  </div>

                  {/* Student Bio-Data Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-stone-50 p-5 rounded-2xl border border-stone-200 mb-8 text-xs relative z-10">
                    <div><span className="text-stone-500 block uppercase font-bold text-[10px] tracking-wider mb-1">Student Name</span><span className="font-extrabold text-union-navy text-sm">Chioma Okeke</span></div>
                    <div><span className="text-stone-500 block uppercase font-bold text-[10px] tracking-wider mb-1">Admission No</span><span className="font-extrabold text-stone-800">UNV/26/001</span></div>
                    <div><span className="text-stone-500 block uppercase font-bold text-[10px] tracking-wider mb-1">Class</span><span className="font-extrabold text-stone-800">Year 8 (JSS 2)</span></div>
                    <div><span className="text-stone-500 block uppercase font-bold text-[10px] tracking-wider mb-1">Term / Session</span><span className="font-extrabold text-stone-800">1st Term • 2026/2027</span></div>
                    <div><span className="text-stone-500 block uppercase font-bold text-[10px] tracking-wider mb-1">No. in Class</span><span className="font-extrabold text-stone-800">42</span></div>
                    <div><span className="text-stone-500 block uppercase font-bold text-[10px] tracking-wider mb-1">Position in Class</span><span className="font-extrabold text-union-teal text-sm">4th</span></div>
                    <div><span className="text-stone-500 block uppercase font-bold text-[10px] tracking-wider mb-1">Total Score / Avg</span><span className="font-extrabold text-stone-800">1254 / 78.3%</span></div>
                    <div><span className="text-stone-500 block uppercase font-bold text-[10px] tracking-wider mb-1">Next Term Begins</span><span className="font-extrabold text-stone-800">Jan 11, 2027</span></div>
                  </div>

                  {/* Cognitive Domain Table */}
                  <div className="mb-8 relative z-10">
                    <h4 className="font-extrabold text-union-navy uppercase tracking-wider text-sm mb-3 border-b-2 border-union-teal inline-block pb-1">Cognitive Domain</h4>
                    <table className="w-full text-left border-collapse border border-stone-200 rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-union-navy text-[10px] uppercase text-white">
                          <th className="px-3 py-2.5 font-bold w-1/4">Subject</th>
                          <th className="px-3 py-2.5 font-bold text-center">CA 1 (10)</th>
                          <th className="px-3 py-2.5 font-bold text-center">CA 2 (10)</th>
                          <th className="px-3 py-2.5 font-bold text-center">CA 3 (10)</th>
                          <th className="px-3 py-2.5 font-bold text-center">Exam (70)</th>
                          <th className="px-3 py-2.5 font-bold text-center">Total (100)</th>
                          <th className="px-3 py-2.5 font-bold text-center">Grade</th>
                          <th className="px-3 py-2.5 font-bold">Remark</th>
                        </tr>
                      </thead>
                      <tbody className="text-[11px] border border-stone-200">
                        {subjects.map((row, i) => (
                          <tr key={i} className="border-b border-stone-200 even:bg-stone-50 hover:bg-stone-100">
                            <td className="px-3 py-2 border-r border-stone-200 font-bold text-stone-900">{row.name}</td>
                            <td className="px-3 py-2 border-r border-stone-200 text-center font-medium">{row.ca1}</td>
                            <td className="px-3 py-2 border-r border-stone-200 text-center font-medium">{row.ca2}</td>
                            <td className="px-3 py-2 border-r border-stone-200 text-center font-medium">{row.ca3}</td>
                            <td className="px-3 py-2 border-r border-stone-200 text-center font-medium">{row.exam}</td>
                            <td className="px-3 py-2 border-r border-stone-200 text-center font-extrabold text-union-navy">{row.total}</td>
                            <td className={`px-3 py-2 border-r border-stone-200 text-center font-extrabold ${row.grade === 'A' ? 'text-union-teal' : row.grade === 'B' ? 'text-blue-600' : 'text-amber-600'}`}>{row.grade}</td>
                            <td className="px-3 py-2 text-stone-600 italic font-medium">{row.remark}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Affective & Psychomotor Domains */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                    <div>
                      <h4 className="font-extrabold text-union-navy uppercase tracking-wider text-sm mb-3 border-b-2 border-union-teal inline-block pb-1">Affective Traits</h4>
                      <table className="w-full text-left border-collapse border border-stone-200 text-xs rounded-lg overflow-hidden">
                        <thead className="bg-stone-100 border-b border-stone-200">
                          <tr>
                            <th className="px-3 py-2 border-r border-stone-200 font-bold text-stone-700 uppercase tracking-wider text-[10px]">Trait</th>
                            <th className="px-3 py-2 font-bold text-stone-700 text-center uppercase tracking-wider text-[10px]">Rating (1-5)</th>
                          </tr>
                        </thead>
                        <tbody className="border border-stone-200">
                          {affectiveTraits.map((item, i) => (
                            <tr key={i} className="border-b border-stone-200 last:border-0 hover:bg-stone-50">
                              <td className="px-3 py-1.5 border-r border-stone-200 font-medium">{item.trait}</td>
                              <td className="px-3 py-1.5 text-center font-extrabold text-union-navy">{item.score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-union-navy uppercase tracking-wider text-sm mb-3 border-b-2 border-union-teal inline-block pb-1">Psychomotor Skills</h4>
                      <table className="w-full text-left border-collapse border border-stone-200 text-xs rounded-lg overflow-hidden">
                        <thead className="bg-stone-100 border-b border-stone-200">
                          <tr>
                            <th className="px-3 py-2 border-r border-stone-200 font-bold text-stone-700 uppercase tracking-wider text-[10px]">Skill</th>
                            <th className="px-3 py-2 font-bold text-stone-700 text-center uppercase tracking-wider text-[10px]">Rating (1-5)</th>
                          </tr>
                        </thead>
                        <tbody className="border border-stone-200">
                          {psychomotorSkills.map((item, i) => (
                            <tr key={i} className="border-b border-stone-200 last:border-0 hover:bg-stone-50">
                              <td className="px-3 py-1.5 border-r border-stone-200 font-medium">{item.skill}</td>
                              <td className="px-3 py-1.5 text-center font-extrabold text-union-navy">{item.score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Signatures & Remarks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t-2 border-stone-200 pt-8 relative z-10">

                    {/* Form Teacher */}
                    <div>
                      <p className="text-[10px] uppercase font-extrabold text-stone-500 mb-2 tracking-wider">Form Teacher's Remark</p>
                      <p className="text-sm italic text-stone-800 border-b border-dotted border-stone-300 pb-2 mb-4 font-medium">"Chioma is a natural leader. Exceptional grasp of logic and continuous application in class."</p>
                      <div className="flex items-end gap-3">
                        <div className="font-[Signature] italic text-2xl text-union-navy border-b border-stone-800 w-40 inline-block px-2">M.T. Ibrahim</div>
                        <span className="text-[9px] text-stone-400 uppercase font-bold tracking-widest">Signature & Date</span>
                      </div>
                    </div>

                    {/* Principal */}
                    <div className="relative">
                      {/* Dummy Stamp */}
                      <div className="absolute opacity-20 transform -rotate-12 pointer-events-none border-4 border-union-red rounded-full w-28 h-28 flex items-center justify-center top-0 right-4">
                        <div className="border-2 border-union-red rounded-full w-24 h-24 flex flex-col items-center justify-center text-center">
                          <span className="text-union-red font-extrabold text-[7px] tracking-widest uppercase mt-2">Unionville Sch.</span>
                          <span className="text-union-red font-black text-sm mt-0.5">APPROVED</span>
                          <span className="text-union-red font-bold text-[6px] mt-0.5">19 OCT 2026</span>
                        </div>
                      </div>

                      <p className="text-[10px] uppercase font-extrabold text-stone-500 mb-2 tracking-wider">Principal's Remark</p>
                      <p className="text-sm italic text-stone-800 border-b border-dotted border-stone-300 pb-2 mb-4 font-medium">"An outstanding result. Promoted to next term with high expectations."</p>
                      <div className="flex items-end gap-3">
                        <div className="font-[Signature] italic text-3xl text-union-navy border-b border-stone-800 w-40 inline-block px-2">Dr. F. Bello</div>
                        <span className="text-[9px] text-stone-400 uppercase font-bold tracking-widest">Signature & Date</span>
                      </div>
                    </div>

                  </div>

                  {/* Grading Scale Footer */}
                  <div className="mt-10 pt-5 border-t border-stone-200 text-[10px] text-stone-500 flex flex-wrap justify-center gap-4 md:gap-8 relative z-10 font-bold uppercase tracking-wider">
                    <span><strong className="text-union-navy font-black text-xs">A</strong>: 70-100 (Excellent)</span>
                    <span><strong className="text-union-navy font-black text-xs">B</strong>: 60-69 (Very Good)</span>
                    <span><strong className="text-union-navy font-black text-xs">C</strong>: 50-59 (Credit)</span>
                    <span><strong className="text-union-navy font-black text-xs">D</strong>: 40-49 (Pass)</span>
                    <span><strong className="text-union-red font-black text-xs">F</strong>: 0-39 (Fail)</span>
                  </div>

                </div>
              </div>
            </div>
          )}

          {activeTab === 'Fee History' && (
            <div className="max-w-4xl mx-auto animate-fade-in-up">
              <h3 className="text-xl md:text-2xl font-extrabold text-union-navy mb-4 md:mb-6">Financial Records</h3>
              <div className="bg-white border border-stone-200 rounded-3xl shadow-sm overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead className="bg-stone-50 text-xs uppercase text-stone-500 border-b border-stone-200">
                    <tr>
                      <th className="px-4 md:px-6 py-4 font-extrabold">Description</th>
                      <th className="px-4 md:px-6 py-4 font-extrabold">Amount</th>
                      <th className="px-4 md:px-6 py-4 font-extrabold">Status</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-stone-100 hover:bg-stone-50">
                      <td className="px-4 md:px-6 py-4 font-extrabold text-union-navy">1st Term Tuition & Levies</td>
                      <td className="px-4 md:px-6 py-4 font-bold text-stone-700">₦250,000</td>
                      <td className="px-4 md:px-6 py-4"><span className="text-xs font-bold text-union-teal bg-union-teal/10 px-3 py-1.5 rounded-lg border border-union-teal/20 whitespace-nowrap">Fully Paid</span></td>
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

export default UnionvilleParentDashboard;