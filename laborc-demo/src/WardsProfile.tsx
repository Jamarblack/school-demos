
import { Download, Award, FileText, Calendar, ShieldCheck } from 'lucide-react';
import { MOCK_WARDS } from './data';

export default function WardsProfile() {
  return (
    <div className="animate-pop-in space-y-8 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-slate-900 mb-2">Academic Profiles</h1>
          <p className="text-slate-500 font-semibold text-lg">Comprehensive terminal reports and evaluations.</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-slate-900 text-white font-bold px-6 py-3 rounded-xl hover:bg-emerald-600 shadow-md transition-all active:scale-95">
          <Download size={18} />
          Download PDF Reports
        </button>
      </div>

      <div className="space-y-12">
        {MOCK_WARDS.map((ward) => (
          <div key={ward.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            
            {/* --- REPORT HEADER --- */}
            <div className="p-6 md:p-10 bg-blue-600 flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative overflow-hidden">
              {/* Subtle geometric pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 transform rotate-45 translate-x-16 -translate-y-16"></div>
              
              <div className="flex items-center gap-6 relative z-10">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl flex items-center justify-center shadow-md shrink-0 border-2 border-blue-400">
                  <span className="text-4xl md:text-5xl font-black text-blue-600">
                    {ward.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black mb-1 text-white">{ward.name}</h2>
                  <p className="font-bold text-base md:text-lg mb-2 text-emerald-100">
                    {ward.class} • {ward.results.term}
                  </p>
                  <span className="px-3 py-1 rounded-md text-xs font-bold bg-blue-800/60 text-white border border-blue-500/50 uppercase tracking-wider">
                    ID: {ward.admissionNo}
                  </span>
                </div>
              </div>

              {/* Top Level Summary Stats */}
              <div className="relative z-10 flex flex-wrap lg:flex-nowrap gap-3 md:gap-4 w-full lg:w-auto">
                <div className="flex-1 lg:flex-none bg-blue-700/50 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-500 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Average</p>
                  <p className="text-2xl font-black">{ward.results.summary.average}%</p>
                </div>
                <div className="flex-1 lg:flex-none bg-emerald-700/50 backdrop-blur-sm rounded-xl p-4 text-center border border-emerald-500 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Total Score</p>
                  <p className="text-2xl font-black">{ward.results.summary.total}</p>
                </div>
                <div className="flex-1 lg:flex-none bg-emerald-700/50 backdrop-blur-sm rounded-xl p-4 text-center border border-emerald-500 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">Grade</p>
                  <p className="text-2xl font-black">{ward.results.summary.grade}</p>
                </div>
              </div>
            </div>

            {/* --- REPORT BODY --- */}
            <div className="p-6 md:p-10 flex flex-col xl:flex-row gap-8">
              
              {/* Left Column: Subject Grades Table */}
              <div className="flex-1 space-y-6">
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
                  <FileText className="text-blue-600" /> Academic Performance
                </h3>
                
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="bg-slate-50 text-slate-500 font-bold text-xs uppercase tracking-wider">
                        <th className="p-4 border-b border-slate-200">Subject</th>
                        <th className="p-4 border-b border-slate-200 text-center">CA (40)</th>
                        <th className="p-4 border-b border-slate-200 text-center">Exam (60)</th>
                        <th className="p-4 border-b border-slate-200 text-center">Total Score</th>
                        <th className="p-4 border-b border-slate-200 text-center">Grade</th>
                        <th className="p-4 border-b border-slate-200">Remark</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-700 font-medium">
                      {ward.results.subjects.map((subject, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0">
                          <td className="p-4 text-slate-900 font-bold">{subject.name}</td>
                          <td className="p-4 text-center text-slate-500">{subject.ca}</td>
                          <td className="p-4 text-center text-slate-500">{subject.exam}</td>
                          <td className="p-4 text-center">
                            <span className="bg-slate-100 text-slate-800 py-1 px-3 rounded-md font-black inline-block min-w-[3rem] border border-slate-200">
                              {subject.total}
                            </span>
                          </td>
                          <td className="p-4 text-center">
                            <span className={`font-black ${subject.grade.includes('A') ? 'text-emerald-600' : 'text-slate-700'}`}>
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
                  <h3 className="text-xl font-black text-slate-900 flex items-center gap-2 mb-4 pb-2 border-b border-slate-100">
                    Behavioral Traits
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                    {ward.results.behavioral.map((trait, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="font-bold text-slate-600 text-sm">{trait.trait}</span>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`w-3 h-3 rounded-sm ${i < trait.rating ? 'bg-blue-500' : 'bg-slate-200'}`}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 mt-4 border-t border-slate-200 flex justify-between items-center">
                       <span className="font-bold text-slate-600 text-sm">Attendance</span>
                       <span className="font-black text-emerald-700 bg-emerald-100 px-3 py-1 rounded-md border border-emerald-200">{ward.results.attendance}%</span>
                    </div>
                  </div>
                </div>

                {/* Next Term Card */}
                <div className="bg-white rounded-xl p-6 border border-slate-200 flex items-start gap-4 shadow-sm">
                  <div className="bg-slate-100 text-slate-600 p-3 rounded-lg shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-500 text-xs uppercase tracking-wider mb-1">Next Term Resumes</h4>
                    <p className="font-black text-slate-900">{ward.results.nextTerm}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* --- REMARKS SECTION --- */}
            <div className="px-6 pb-6 md:px-10 md:pb-10">
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 relative">
                  <div className="relative z-10 flex flex-col h-full">
                    <h4 className="font-black text-slate-900 mb-2 uppercase tracking-wider text-xs flex items-center gap-2">
                      <Award className="text-emerald-600 w-4 h-4" /> Class Teacher's Remark
                    </h4>
                    <p className="text-slate-600 font-medium leading-relaxed italic flex-1">
                      "{ward.results.teacherRemark}"
                    </p>
                    <div className="mt-6 pt-4 border-t border-slate-200">
                      <p className="font-bold text-slate-400 text-sm">Signature: _________________</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 relative overflow-hidden">
                  <div className="relative z-10 flex flex-col h-full">
                    <h4 className="font-black text-slate-900 mb-2 uppercase tracking-wider text-xs flex items-center gap-2">
                      <ShieldCheck className="text-emerald-600 w-4 h-4" /> Head Teacher's Remark
                    </h4>
                    <p className="text-slate-600 font-medium leading-relaxed italic flex-1">
                      "{ward.results.headTeacherRemark}"
                    </p>
                    <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                      <p className="font-bold text-slate-400 text-sm">Signature: _________________</p>
                      {/* Stamp Placeholder */}
                      <div className="w-16 h-16 border-2 border-emerald-600/30 rounded-full flex items-center justify-center -mt-6 transform rotate-12 bg-white">
                        <span className="text-[9px] font-black text-emerald-600/50 uppercase text-center leading-tight tracking-tighter">Laborc<br/>Official</span>
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