import React, { useState } from 'react';
import PortalSidebar from '../../components/portal/PortalSidebar';
import PortalHeader from '../../components/portal/PortalHeader';
import crest from '../../assets/crest2.png';

const ParentDashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Academic Results');
  const [lang, setLang] = useState<'en' | 'ar'>('en');

  const menuItems = ['My Ward Overview', 'Academic Results', 'Fee History'];

  // Translation Dictionary for the Report Slip
  const t = {
    en: {
      toggleLang: "Switch to Arabic",
      slipTitle: "Terminal Report Slip",
      slipSubtitle: "First Term, 2026/2027 Academic Session",
      schoolName: "Shiekh Tajudeen Gurumoh Islamic Academy",
      motto: "Investing in Future Generation",
      address: "FG87+HJM, Olorunsogo Rd, Oko Erin 240281, Kwara",
      labels: {
        studentName: "Student Name",
        adminNo: "Admission No",
        class: "Class",
        term: "Term / Session",
        noInClass: "No. in Class",
        position: "Position in Class",
        totalAvg: "Total Score / Avg",
        nextTerm: "Next Term Begins"
      },
      values: {
        term: "1st Term • 2026/2027",
        nextTerm: "Jan 11, 2027"
      },
      tableHeaders: {
        subject: "Subject",
        ca1: "CA 1 (10)",
        ca2: "CA 2 (10)",
        ca3: "CA 3 (10)",
        exam: "Exam (70)",
        total: "Total (100)",
        grade: "Grade",
        remark: "Remark"
      },
      sections: {
        result: "Result",
        affective: "Affective Traits",
        psychomotor: "Psychomotor Skills",
        teacherRemark: "Form Teacher's Remark",
        principalRemark: "Principal's Remark",
        stamp: "Gurumoh Academy"
      }
    },
    ar: {
      toggleLang: "Switch to English",
      slipTitle: "كشف نتيجة نهاية الفصل",
      slipSubtitle: "الفصل الدراسي الأول، 2026/2027",
      schoolName: "أكاديمية الشيخ تاج الدين غروما الإسلامية",
      motto: "الاستثمار في جيل المستقبل",
      address: "FG87+HJM، طريق أولورونسوغو، أوكو إيرين 240281، كوارا",
      labels: {
        studentName: "اسم الطالب",
        adminNo: "رقم القبول",
        class: "الفصل",
        term: "الفصل الدراسي",
        noInClass: "العدد في الفصل",
        position: "المركز في الفصل",
        totalAvg: "المجموع الكلي / المتوسط",
        nextTerm: "بداية الفصل القادم"
      },
      values: {
        term: "الفصل الأول • 2026/2027",
        nextTerm: "11 يناير 2027"
      },
      tableHeaders: {
        subject: "المادة",
        ca1: "التقييم 1",
        ca2: "التقييم 2",
        ca3: "التقييم 3",
        exam: "الامتحان",
        total: "المجموع",
        grade: "التقدير",
        remark: "ملاحظة"
      },
      sections: {
        result: "النتيجة",
        affective: "السمات الوجدانية",
        psychomotor: "المهارات الحركية",
        teacherRemark: "ملاحظة رائد الفصل",
        principalRemark: "ملاحظة المدير",
        stamp: "أكاديمية غروما"
      }
    }
  };

  const activeText = t[lang];

  // Updated Hybrid Curriculum (Islamic + 4 Western Core)
  const subjects = [
    { en: 'Quran (Memorization)', ar: 'القرآن الكريم', ca1: 9, ca2: 10, ca3: 10, exam: 68, total: 97, grade: 'A', remark: 'Excellent' },
    { en: 'Tajweed', ar: 'التجويد', ca1: 8, ca2: 9, ca3: 9, exam: 62, total: 88, grade: 'A', remark: 'Excellent' },
    { en: 'Tawheed', ar: 'التوحيد', ca1: 10, ca2: 10, ca3: 10, exam: 65, total: 95, grade: 'A', remark: 'Excellent' },
    { en: 'Fiqh', ar: 'الفقه', ca1: 8, ca2: 8, ca3: 9, exam: 60, total: 85, grade: 'A', remark: 'Excellent' },
    { en: 'Sarfu', ar: 'الصرف', ca1: 7, ca2: 8, ca3: 8, exam: 58, total: 81, grade: 'A', remark: 'Excellent' },
    { en: 'Nahw', ar: 'النحو', ca1: 8, ca2: 9, ca3: 8, exam: 61, total: 86, grade: 'A', remark: 'Excellent' },
    { en: 'Seerah', ar: 'السيرة', ca1: 9, ca2: 9, ca3: 10, exam: 65, total: 93, grade: 'A', remark: 'Excellent' },
    { en: 'Hadith', ar: 'الحديث', ca1: 10, ca2: 9, ca3: 10, exam: 66, total: 95, grade: 'A', remark: 'Excellent' },
    { en: 'Mathematics', ar: 'الرياضيات', ca1: 8, ca2: 9, ca3: 10, exam: 62, total: 89, grade: 'A', remark: 'Excellent' },
    { en: 'English Language', ar: 'اللغة الإنجليزية', ca1: 7, ca2: 8, ca3: 8, exam: 58, total: 81, grade: 'A', remark: 'Excellent' },
    { en: 'Basic Science', ar: 'العلوم الأساسية', ca1: 6, ca2: 7, ca3: 9, exam: 55, total: 77, grade: 'A', remark: 'Excellent' },
    { en: 'Computer Studies (ICT)', ar: 'تقنية المعلومات', ca1: 9, ca2: 9, ca3: 10, exam: 68, total: 96, grade: 'A', remark: 'Excellent' },
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
    { skill: 'Quranic Recitation Art', score: 5 },
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
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 relative overflow-hidden text-center md:text-left">
                <div className="absolute top-0 right-0 w-32 h-32 bg-maldino-gold/40 rounded-bl-full"></div>
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-maldino-navy flex items-center justify-center text-white text-2xl md:text-3xl font-serif font-bold shadow-lg z-10">
                  AM
                </div>
                <div className="z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-maldino-navy mb-1">Abdullah Mubaraq</h3>
                  <p className="text-slate-600 font-medium mb-4 text-sm md:text-base">Class: JSS 2A • ID: STGIA/26/001</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded border border-emerald-100">Attendance: 98%</span>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded border border-blue-100">Fees: Cleared</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Academic Results' && (
            <div className="max-w-5xl mx-auto animate-fade-in-up" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6">
                 <div>
                   <h3 className="text-xl md:text-2xl font-bold text-maldino-navy">{activeText.slipTitle}</h3>
                   <p className="text-xs md:text-sm text-slate-500">{activeText.slipSubtitle}</p>
                 </div>
                 <div className="flex w-full md:w-auto gap-3">
                   <button 
                     onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
                     className="w-full md:w-auto justify-center bg-white border-2 border-maldino-navy text-maldino-navy hover:bg-slate-50 px-5 py-2.5 rounded-lg text-sm font-bold shadow-sm transition-colors"
                   >
                     {activeText.toggleLang}
                   </button>
                   <button className="w-full md:w-auto justify-center bg-maldino-navy hover:bg-maldino-blue text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md flex items-center gap-2 transition-colors">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                     Download PDF
                   </button>
                 </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-lg shadow-lg overflow-x-auto">
                <div className="p-6 md:p-8 relative min-w-[800px]">

                  {/* Background Watermark */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
                    <img src={crest} alt="Crest Watermark" className="w-[500px] object-contain transform -rotate-12"/>
                  </div>

                  {/* Header */}
                  <div className="border-b-4 border-double border-maldino-navy pb-4 mb-6 flex justify-between items-start relative z-10">
                     <div className="flex gap-4 items-center">
                       <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm border border-slate-100 p-1">
                        <img src={crest} alt="Crest" className="w-full h-full object-contain" />
                       </div>
                       <div>
                         <h2 className="text-2xl font-serif font-black text-maldino-navy tracking-wide">{activeText.schoolName}</h2>
                         <p className="text-xs font-bold text-[#D4AF37] tracking-widest uppercase">{activeText.motto}</p>
                         <p className="text-xs text-slate-500 mt-1">{activeText.address}</p>
                       </div>
                     </div>
                  </div>

                  {/* Student Bio-Data Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6 text-xs relative z-10">
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">{activeText.labels.studentName}</span><span className="font-bold text-maldino-navy text-sm">Abdullah Mubaraq</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">{activeText.labels.adminNo}</span><span className="font-bold text-slate-800">STGIA/26/001</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">{activeText.labels.class}</span><span className="font-bold text-slate-800">JSS 2A</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">{activeText.labels.term}</span><span className="font-bold text-slate-800">{activeText.values.term}</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">{activeText.labels.noInClass}</span><span className="font-bold text-slate-800">42</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">{activeText.labels.position}</span><span className="font-bold text-maldino-navy text-sm">4th</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">{activeText.labels.totalAvg}</span><span className="font-bold text-slate-800">1042 / 86.8%</span></div>
                    <div><span className="text-slate-500 block uppercase font-semibold text-[10px]">{activeText.labels.nextTerm}</span><span className="font-bold text-slate-800">{activeText.values.nextTerm}</span></div>
                  </div>

                  {/* Cognitive Domain Table */}
                  <div className="mb-8 relative z-10">
                    <h4 className="font-bold text-maldino-navy uppercase tracking-wider text-sm mb-2 border-b-2 border-maldino-navy inline-block pb-1">{activeText.sections.result}</h4>
                    <table className="w-full text-start border-collapse border border-slate-300">
                      <thead>
                        <tr className="bg-slate-100 text-[10px] uppercase text-maldino-navy border-b border-slate-300">
                          <th className="px-3 py-2 border-x border-slate-300 font-bold w-1/4 text-start">{activeText.tableHeaders.subject}</th>
                          <th className="px-3 py-2 border-x border-slate-300 font-bold text-center">{activeText.tableHeaders.ca1}</th>
                          <th className="px-3 py-2 border-x border-slate-300 font-bold text-center">{activeText.tableHeaders.ca2}</th>
                          <th className="px-3 py-2 border-x border-slate-300 font-bold text-center">{activeText.tableHeaders.ca3}</th>
                          <th className="px-3 py-2 border-x border-slate-300 font-bold text-center">{activeText.tableHeaders.exam}</th>
                          <th className="px-3 py-2 border-x border-slate-300 font-bold text-center">{activeText.tableHeaders.total}</th>
                          <th className="px-3 py-2 border-x border-slate-300 font-bold text-center">{activeText.tableHeaders.grade}</th>
                          <th className="px-3 py-2 font-bold text-start border-s border-slate-300">{activeText.tableHeaders.remark}</th>
                        </tr>
                      </thead>
                      <tbody className="text-[11px]">
                        {subjects.map((row, i) => (
                          <tr key={i} className="border-b border-slate-200 even:bg-slate-50 hover:bg-slate-100">
                            <td className="px-3 py-1.5 border-x border-slate-300 font-bold text-slate-800 text-start">{lang === 'en' ? row.en : row.ar}</td>
                            <td className="px-3 py-1.5 border-x border-slate-300 text-center">{row.ca1}</td>
                            <td className="px-3 py-1.5 border-x border-slate-300 text-center">{row.ca2}</td>
                            <td className="px-3 py-1.5 border-x border-slate-300 text-center">{row.ca3}</td>
                            <td className="px-3 py-1.5 border-x border-slate-300 text-center">{row.exam}</td>
                            <td className="px-3 py-1.5 border-x border-slate-300 text-center font-bold text-maldino-navy">{row.total}</td>
                            <td className="px-3 py-1.5 border-x border-slate-300 text-center font-bold text-emerald-600">{row.grade}</td>
                            <td className="px-3 py-1.5 text-slate-600 italic text-start border-s border-slate-300">{row.remark}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Affective & Psychomotor Domains */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                    <div>
                      <h4 className="font-bold text-maldino-navy uppercase tracking-wider text-sm mb-2 border-b-2 border-maldino-navy inline-block pb-1">{activeText.sections.affective}</h4>
                      <table className="w-full text-start border-collapse border border-slate-300 text-xs">
                        <thead className="bg-slate-100 border-b border-slate-300">
                          <tr>
                            <th className="px-3 py-1.5 border-x border-slate-300 font-semibold text-slate-600 text-start">Trait</th>
                            <th className="px-3 py-1.5 font-semibold text-slate-600 text-center border-s border-slate-300">Rating (1-5)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {affectiveTraits.map((item, i) => (
                            <tr key={i} className="border-b border-slate-200 last:border-0">
                              <td className="px-3 py-1.5 border-x border-slate-300 text-start">{item.trait}</td>
                              <td className="px-3 py-1.5 text-center font-bold border-s border-slate-300">{item.score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div>
                      <h4 className="font-bold text-maldino-navy uppercase tracking-wider text-sm mb-2 border-b-2 border-maldino-navy inline-block pb-1">{activeText.sections.psychomotor}</h4>
                      <table className="w-full text-start border-collapse border border-slate-300 text-xs">
                        <thead className="bg-slate-100 border-b border-slate-300">
                          <tr>
                            <th className="px-3 py-1.5 border-x border-slate-300 font-semibold text-slate-600 text-start">Skill</th>
                            <th className="px-3 py-1.5 font-semibold text-slate-600 text-center border-s border-slate-300">Rating (1-5)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {psychomotorSkills.map((item, i) => (
                            <tr key={i} className="border-b border-slate-200 last:border-0">
                              <td className="px-3 py-1.5 border-x border-slate-300 text-start">{item.skill}</td>
                              <td className="px-3 py-1.5 text-center font-bold border-s border-slate-300">{item.score}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Signatures & Remarks */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t-2 border-slate-200 pt-6 relative z-10">
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-500 mb-1">{activeText.sections.teacherRemark}</p>
                      <p className="text-sm italic text-slate-800 border-b border-dotted border-slate-400 pb-1 mb-4">"Abdullah is an exceptionally bright and well-behaved student. Keep it up!"</p>
                      <div className="flex items-end gap-2">
                        <div className="font-[Signature] italic text-2xl text-blue-900 border-b border-slate-800 w-40 inline-block px-2 text-center">Ustadh T.O.</div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute opacity-30 transform -rotate-12 pointer-events-none border-4 border-emerald-700 rounded-full w-28 h-28 flex items-center justify-center top-0 end-10">
                        <div className="border-2 border-emerald-700 rounded-full w-24 h-24 flex flex-col items-center justify-center text-center">
                          <span className="text-emerald-700 font-bold text-[7px] tracking-widest uppercase mt-2">{activeText.sections.stamp}</span>
                          <span className="text-emerald-700 font-black text-sm mt-0.5">APPROVED</span>
                          <span className="text-emerald-700 font-bold text-[6px] mt-0.5">19 OCT 2026</span>
                        </div>
                      </div>
                      <p className="text-xs uppercase font-bold text-slate-500 mb-1">{activeText.sections.principalRemark}</p>
                      <p className="text-sm italic text-slate-800 border-b border-dotted border-slate-400 pb-1 mb-4">"An outstanding result. Promoted to next term with high expectations."</p>
                      <div className="flex items-end gap-2">
                        <div className="font-[Signature] italic text-3xl text-maldino-navy border-b border-slate-800 w-40 inline-block px-2 text-center">Sheikh A.K.</div>
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