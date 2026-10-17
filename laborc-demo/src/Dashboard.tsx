
import {  Calendar, CheckCircle, ChevronRight, TrendingUp } from 'lucide-react';
import { MOCK_WARDS, UPCOMING_EVENTS } from './data';

export default function Dashboard() {
  return (
    <div className="animate-pop-in space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-emerald-800 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden shadow-lg">
        {/* Geometric Accents instead of blobs */}
        <div className="absolute -top-24 -right-10 w-64 h-64 bg-blue-500 opacity-20 transform rotate-45 rounded-3xl"></div>
        <div className="absolute -bottom-24 left-20 w-48 h-48 bg-white opacity-5 transform -rotate-12 rounded-xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black mb-2">Welcome back, Mr. Olatunji</h1>
          <p className="text-emerald-100 font-semibold text-lg max-w-xl">
            Emmanuel is having a productive term. The Inter-House sports competition is fast approaching!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Wards Overview */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
             Active Wards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_WARDS.map((ward) => (
              <div key={ward.id} className="bg-white p-6 card-structured flex flex-col gap-4 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-black text-2xl ${ward.avatarColor}`}>
                    {ward.name.charAt(0)}
                  </div>
                  <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-bold flex items-center gap-1 border border-blue-100">
                    <CheckCircle className="w-3 h-3" /> Present Today
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900">{ward.name}</h3>
                  <p className="text-slate-500 font-medium">{ward.class} • Age {ward.age}</p>
                </div>
                <div className="mt-2 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-400 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-blue-500"/> {ward.results.summary.average}% Avg
                  </span>
                  <button className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:text-emerald-800 transition-colors">
                    View Profile <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-slate-600" /> Notice Board
          </h2>
          <div className="bg-white p-6 card-structured space-y-5 border border-slate-200">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="relative pl-6 border-l-2 border-slate-200 group">
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-white shadow-sm ${event.type === 'green' ? 'bg-emerald-500' : 'bg-slate-400'} group-hover:scale-125 transition-transform`}></div>
                
                <h4 className="font-black text-slate-800 text-lg">{event.title}</h4>
                <p className={`text-xs font-bold mb-1 uppercase tracking-wider ${event.type === 'green' ? 'text-emerald-600' : 'text-slate-500'}`}>
                  {event.date}
                </p>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
            <button className="w-full py-3 mt-2 bg-slate-50 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-colors border border-slate-200">
              View Academic Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}