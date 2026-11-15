import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const MaldinoCTA: React.FC = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      title1: "Begin Your Child's",
      title2: "Journey With Us",
      sub: "Admissions for the 2026/2027 academic session are now open. Secure a place for your child at Shiekh Tajudeen Gurumoh Islamic Academy today.",
      formTitle: "Request Prospectus",
      label1: "Parent's Name",
      label2: "Phone Number",
      label3: "Child's Intended Class",
      btn: "Submit Inquiry"
    },
    ar: {
      title1: "ابدأ رحلة طفلك",
      title2: "معنا",
      sub: "باب القبول للعام الدراسي 2026/2027 مفتوح الآن. احجز مكانًا لطفلك في أكاديمية الشيخ تاج الدين غروما الإسلامية اليوم.",
      formTitle: "طلب النشرة التعريفية",
      label1: "اسم ولي الأمر",
      label2: "رقم الهاتف",
      label3: "الفصل الدراسي المطلوب",
      btn: "إرسال الطلب"
    }
  };

  const activeText = t[lang];

  return (
    <section className="py-24 bg-maldino-navy relative font-sans">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="bg-maldino-blue/40 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-14 max-w-5xl mx-auto shadow-2xl flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 text-center md:text-start">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
              {activeText.title1} <br /> {activeText.title2}
            </h2>
            <p className="text-slate-300 mb-8 max-w-md mx-auto md:mx-0">
              {activeText.sub}
            </p>
          </div>

          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl text-start">
            <h3 className="text-xl font-bold text-maldino-navy mb-6">{activeText.formTitle}</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{activeText.label1}</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-maldino-gold/50 focus:border-maldino-gold transition-all" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{activeText.label2}</label>
                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-maldino-gold/50 focus:border-maldino-gold transition-all" dir="ltr" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">{activeText.label3}</label>
                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-maldino-gold/50 focus:border-maldino-gold transition-all text-slate-700">
                  <option>Primary 1 - 6</option>
                  <option>JSS 1 - 3</option>
                  <option>SSS 1 - 3</option>
                  <option>Tahfeez Only</option>
                </select>
              </div>
              <button className="w-full py-4 bg-maldino-gold hover:bg-maldino-gold-light text-maldino-navy font-bold rounded-lg transition-all shadow-md mt-2">
                {activeText.btn}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaldinoCTA;