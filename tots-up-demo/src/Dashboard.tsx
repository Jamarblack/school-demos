import React from 'react';
import { Users, Calendar, CheckCircle, ChevronRight } from 'lucide-react';
import { MOCK_WARDS, UPCOMING_EVENTS } from './data';

export default function Dashboard() {
  return (
    <div className="animate-pop-in space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden shadow-xl shadow-blue-900/20">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-yellow-400 opacity-20 blob-shape-2 animate-float-gentle"></div>
        <div className="absolute -bottom-10 left-20 w-32 h-32 bg-red-500 opacity-30 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-black mb-2">Welcome back, Mr. Adeyemi!</h1>
          <p className="text-blue-100 font-semibold text-lg max-w-xl">
            Timmy and Sarah are having a great week. Don't forget, Red Color Day is coming up!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Wards Overview */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-black text-blue-900 flex items-center gap-2">
            <Users className="w-6 h-6 text-red-500" /> Active Wards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_WARDS.map((ward) => (
              <div key={ward.id} className="bg-white p-6 card-organic flex flex-col gap-4 border-2 border-transparent hover:border-blue-100">
                <div className="flex items-center justify-between">
                  <div className={`w-14 h-14 rounded-[1.2rem] flex items-center justify-center font-black text-2xl ${ward.avatarColor}`}>
                    {ward.name.charAt(0)}
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" /> Present Today
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-800">{ward.name}</h3>
                  <p className="text-slate-500 font-semibold">{ward.class} • Age {ward.age}</p>
                </div>
                <button className="mt-2 text-blue-600 font-bold text-sm flex items-center gap-1 hover:text-blue-800 transition-colors w-max">
                  View Academic Profile <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="space-y-6">
          <h2 className="text-2xl font-black text-blue-900 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-yellow-500" /> Notice Board
          </h2>
          <div className="bg-white p-6 card-organic space-y-5">
            {UPCOMING_EVENTS.map((event) => (
              <div key={event.id} className="relative pl-6 border-l-4 border-slate-100 group">
                <div className={`absolute -left-[11px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-sm ${event.type === 'red' ? 'bg-red-500' : 'bg-blue-600'} group-hover:scale-125 transition-transform`}></div>
                
                <h4 className="font-black text-slate-800 text-lg">{event.title}</h4>
                <p className={`text-sm font-bold mb-1 ${event.type === 'red' ? 'text-red-500' : 'text-blue-500'}`}>
                  {event.date}
                </p>
                <p className="text-slate-600 font-medium text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
            <button className="w-full py-3 bg-slate-50 text-slate-600 font-bold rounded-xl hover:bg-slate-100 transition-colors">
              View School Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}