import React from 'react';
import { Download, FileText, Calendar } from 'lucide-react';
import { MOCK_WARDS } from './data';

export default function WardsProfile() {
  return (
    <div className="animate-pop-in space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-blue-900 mb-2">Academic Profiles</h1>
          <p className="text-slate-500 font-semibold text-lg">Comprehensive terminal reports and evaluations.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all active:scale-95">
          <Download size={18} />
          Download PDF Reports
        </button>
      </div>

      <div className="space-y-12">
        {MOCK_WARDS.map((ward) => (
          <div key={ward.id} className="bg-white rounded-[2rem] shadow-xl border border-slate-100 overflow-hidden">
            
            {/* --- REPORT HEADER --- */}
            <div className={`p-6 md:p-10 ${ward.theme === 'blue' ? 'bg-blue-600' : 'bg-yellow-400'} flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 blob-shape-1 animate-float-gentle"></div>
              
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 shrink-0 border-4 border-white/20">
                  <span className={`text-4xl md:text-5xl font-black ${ward.theme === 'blue' ? 'text-blue-600' : 'text-yellow-500'}`}>
                    {ward.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h2 className={`text-3xl md:text-4xl font-black mb-1 ${ward.theme === 'blue' ? 'text-white' : 'text-yellow-900'}`}>{ward.name}</h2>
                  <p className={`font-bold text-base md:text-lg mb-2 ${ward.theme === 'blue' ? 'text-blue-100' : 'text-yellow-800'}`}>
                    {ward.class} • {ward.results.term}
                  </p>
                  <span className={`px-3 py-1 rounded-lg text-sm font-bold ${ward.theme === 'blue' ? 'bg-blue-800/50 text-white' : 'bg-yellow-500/50 text-yellow-900'}`}>
                    ID: {ward.admissionNo}
                  </span>
                </div>
              </div>

              {/* Top Level Summary Stats */}
              <div className="relative z-10 flex flex-wrap lg:flex-nowrap gap-3 md:gap-4 w-full lg:w-auto">
                <div className={`flex-1 lg:flex-none bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border ${ward.theme === 'blue' ? 'border-blue-400 text-white' : 'border-yellow-300 text-yellow-900'}`}>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Average</p>
                  <p className="text-2xl font-black">{ward.results.summary.average}%</p>
                </div>
                <div className={`flex-1 lg:flex-none bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border ${ward.theme === 'blue' ? 'border-blue-400 text-white' : 'border-yellow-300 text-yellow-900'}`}>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Total</p>
                  <p className="text-2xl font-black">{ward.results.summary.total}</p>
                </div>
                <div className={`flex-1 lg:flex-none bg-white/20 backdrop-blur-md rounded-xl p-4 text-center border ${ward.theme === 'blue' ? 'border-blue-400 text-white' : 'border-yellow-300 text-yellow-900'}`}>
                  <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Grade</p>
                  <p className="text-2xl font-black">{ward.results.summary.grade}</p>
                </div>
              </div>
            </div>

            {/* --- REPORT BODY --- */}
            <div className="p-6 md:p-10 flex flex-col xl:flex-row gap-8">
              
              {/* Left Column: Subject Grades Table */}
              <div className="flex-1 space-y-6">
                <h3 className="text-xl font-black text-slate-800 flex items-center gap-2">
                  <FileText className="text-blue-600" /> Academic Performance
                </h3>
                
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-50 text-slate-500 font-bold text-sm uppercase tracking-wider">
                        <th className="p-4 border-b border-slate-200">Subject</th>
                        <th className="p-4 border-b border-slate-200 text-center">CA (40)</th>
                        <th className="p-4 border-b border-slate-200 text-center">Exam (60)</th>
                        <th className="p-4 border-b border-slate-200 text-center">Total</th>
                        <th className="p-4 border-b border-slate-200 text-center">Grade</th>
                        <th className="p-4 border-b border-slate-200">Remark</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 font-semibold">
                      {ward.results.subjects.map((subject, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                          <td className="p-4 text-slate-900 font-bold">{subject.name}</td>
                          <td className="p-4 text-center text-slate-500">{subject.ca}</td>
                          <td className="p-4 text-center text-slate-500">{subject.exam}</td>
                          <td className="p-4 text-center">
                            <span className="bg-blue-50 text-blue-700 py-1 px-3 rounded-lg font-black inline-block min-w-[3rem]">
                              {subject.total}
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            <span className={`font-black ${subject.grade.includes('A') ? 'text-green-500' : 'text-yellow-500'}`}>
                              {subject.grade}
                            </span>
                          </td>
                          <td className="p-4 text-sm font-bold text-slate-500">{subject.remark}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column: Traits & Remarks */}
              <div className="xl:w-80 flex flex-col gap-8">
                
                {/* Behavioral / Affective Domain */}
                <div>
                  <h3 className="text-xl font-black text-slate-800 flex items-center gap-2 mb-4">
                     Behavioral Traits
                  </h3>
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
                    {ward.results.behavioral.map((trait, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="font-bold text-slate-600 text-sm">{trait.trait}</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-3 h-3 rounded-full ${i < trait.rating ? 'bg-yellow-400' : 'bg-slate-200'}`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 mt-4 border-t border-slate-200 flex justify-between items-center">
                       <span className="font-bold text-slate-600 text-sm">Attendance</span>
                       <span className="font-black text-green-500 bg-green-50 px-2 py-1 rounded-md">{ward.results.attendance}%</span>
                    </div>
                  </div>
                </div>

                {/* Next Term Card */}
                <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100 flex items-start gap-4">
                  <div className="bg-yellow-200 text-yellow-800 p-3 rounded-xl shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-yellow-900 text-sm mb-1">Next Term Resumes</h4>
                    <p className="font-bold text-yellow-700">{ward.results.nextTerm}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* --- REMARKS SECTION --- */}
            <div className="px-6 pb-6 md:px-10 md:pb-10">
              <div className="grid md:grid-cols-2 gap-6 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-200">
                <div className="relative">
                 
                  <div className="relative z-10">
                    <h4 className="font-black text-blue-900 mb-2 uppercase tracking-wide text-sm">Class Teacher's Remark</h4>
                    <p className="text-slate-700 font-semibold leading-relaxed italic">
                      "{ward.results.teacherRemark}"
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-200/60">
                      <p className="font-bold text-slate-900 text-sm">Sign: _________________</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                 
                  <div className="relative z-10">
                    <h4 className="font-black text-blue-900 mb-2 uppercase tracking-wide text-sm">Head Teacher's Remark</h4>
                    <p className="text-slate-700 font-semibold leading-relaxed italic">
                      "{ward.results.headTeacherRemark}"
                    </p>
                    <div className="mt-4 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                      <p className="font-bold text-slate-900 text-sm">Sign: _________________</p>
                      {/* Stamp Placeholder */}
                      <div className="w-16 h-16 border-4 border-red-500/20 rounded-full flex items-center justify-center -mt-8 -mr-2 transform rotate-12">
                        <span className="text-[10px] font-black text-red-500/40 uppercase text-center leading-tight">School<br/>Stamp</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}