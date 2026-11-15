import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const MaldinoFeatures: React.FC = () => {
  const { lang } = useLanguage();
  
  const t = {
    en: {
      header1: "A Tradition of",
      header2: "Excellence",
      headerSub: "Our curriculum perfectly balances standard Western education with comprehensive Islamic and Quranic studies.",
      f1Title: "Comprehensive Tahfeez",
      f1Sub: "Dedicated programs for Quranic memorization, Tajweed, and recitation arts guided by experienced scholars.",
      f2Title: "Standard Academics",
      f2Sub: "Rigorous curriculum in Mathematics, Sciences, and Humanities preparing students for future professional excellence.",
      f3Title: "Moral Upbringing",
      f3Sub: "We focus on building character through Tawheed, Fiqh, and Seerah, ensuring our students embody true Islamic values.",
      f4Badge: "Digital Infrastructure",
      f4Title: "State-of-the-Art Portal",
      f4Sub: "Parents can easily track academic progress, download termly results, and manage fee history through our secure, digitized school management portal."
    },
    ar: {
      header1: "تقليد من",
      header2: "التميز",
      headerSub: "يوازن منهجنا بشكل مثالي بين التعليم الغربي القياسي والدراسات الإسلامية والقرآنية الشاملة.",
      f1Title: "تحفيظ شامل",
      f1Sub: "برامج مخصصة لحفظ القرآن الكريم والتجويد وفنون التلاوة بتوجيه من علماء ذوي خبرة.",
      f2Title: "أكاديميات قياسية",
      f2Sub: "منهج صارم في الرياضيات والعلوم لإعداد الطلاب للتميز المهني في المستقبل.",
      f3Title: "التربية الأخلاقية",
      f3Sub: "نحن نركز على بناء الشخصية من خلال التوحيد والفقه والسيرة، مما يضمن تجسيد طلابنا للقيم الإسلامية الحقيقية.",
      f4Badge: "البنية التحتية الرقمية",
      f4Title: "بوابة إلكترونية متطورة",
      f4Sub: "يمكن للآباء تتبع التقدم الأكاديمي بسهولة، وتحميل نتائج الفصل الدراسي، وإدارة سجل الرسوم من خلال بوابة الإدارة الرقمية الآمنة."
    }
  };
  
  const activeText = t[lang];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-2xl mb-16 text-start">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maldino-navy mb-4">
            {activeText.header1} <span className="text-maldino-gold italic">{activeText.header2}</span>
          </h2>
          <p className="text-lg text-slate-600 font-sans">{activeText.headerSub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-maldino-navy shadow-xl min-h-[320px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
            <img src="https://images.unsplash.com/photo-1584286595398-a59f2fa29e20?q=80&w=2070&auto=format&fit=crop" alt="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay group-hover:scale-105 transition-transform duration-700"/>
            <div className="absolute inset-0 bg-gradient-to-t from-maldino-navy via-maldino-navy/40 to-transparent"></div>
            <div className="absolute bottom-0 start-0 p-8 text-start">
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{activeText.f1Title}</h3>
              <p className="text-slate-300 font-sans max-w-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{activeText.f1Sub}</p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-maldino-gold shadow-xl min-h-[320px] p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl text-start">
            <div className="text-maldino-navy">
              <h3 className="text-2xl font-serif font-bold mb-2">{activeText.f2Title}</h3>
              <p className="text-maldino-navy/80 font-sans font-medium">{activeText.f2Sub}</p>
            </div>
            <div className="w-24 h-24 bg-white/20 rounded-full blur-2xl absolute -bottom-4 -end-4"></div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-lg min-h-[320px] p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl text-start">
            <h3 className="text-xl font-serif font-bold text-maldino-navy mb-3 mt-12">{activeText.f3Title}</h3>
            <p className="text-slate-600 font-sans text-sm leading-relaxed">{activeText.f3Sub}</p>
          </div>

          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-slate-900 shadow-xl min-h-[320px] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex items-center">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative z-10 p-8 md:p-12 w-full md:w-2/3 text-start">
              <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold tracking-widest uppercase mb-6 inline-block">{activeText.f4Badge}</span>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">{activeText.f4Title}</h3>
              <p className="text-slate-300 font-sans mb-8">{activeText.f4Sub}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaldinoFeatures;