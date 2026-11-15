import React from 'react';
import crest from '../assets/crest2.png';
import { useLanguage } from '../context/LanguageContext';

const MaldinoFooter: React.FC = () => {
  const { lang } = useLanguage();

  const t = {
    en: {
      schoolName: "Sheikh Tajudeen Gurumoh",
      motto: "Investing in Future Generation",
      desc: "Fostering a community of learners dedicated to academic excellence, moral integrity, and true Islamic values.",
      linksHeader: "Quick Links",
      links: ["Admissions", "Academic Calendar", "Student Portal"],
      contactHeader: "Contact",
      address: "FG87+HJM, Olorunsogo Rd, Oko Erin 240281, Kwara",
      rights: "© 2026 Sheikh Tajudeen Gurumoh Islamic Academy. All rights reserved.",
      dev: "Engineered by"
    },
    ar: {
      schoolName: "الشيخ تاج الدين غروما",
      motto: "الاستثمار في جيل المستقبل",
      desc: "رعاية مجتمع من المتعلمين المكرسين للتميز الأكاديمي والنزاهة الأخلاقية والقيم الإسلامية الحقيقية.",
      linksHeader: "روابط سريعة",
      links: ["القبول", "التقويم الأكاديمي", "بوابة الطلاب"],
      contactHeader: "اتصل بنا",
      address: "FG87+HJM، طريق أولورونسوغو، أوكو إيرين 240281، كوارا",
      rights: "© 2026 أكاديمية الشيخ تاج الدين غروما الإسلامية. جميع الحقوق محفوظة.",
      dev: "تم التطوير بواسطة"
    }
  };

  const activeText = t[lang];

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 font-sans border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-start">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded flex items-center justify-center bg-white p-0.5">
              <img src={crest} alt="Crest" className="w-full h-full object-contain" />
            </div>
            <span className="text-white font-serif font-bold text-lg">{activeText.schoolName}</span>
          </div>
          <p className="text-sm max-w-sm text-maldino-gold font-bold mb-2">{activeText.motto}</p>
          <p className="text-sm max-w-sm">{activeText.desc}</p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">{activeText.linksHeader}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-maldino-gold transition-colors">{activeText.links[0]}</a></li>
            <li><a href="#" className="hover:text-maldino-gold transition-colors">{activeText.links[1]}</a></li>
            <li><a href="/portal/login" className="hover:text-maldino-gold transition-colors">{activeText.links[2]}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4">{activeText.contactHeader}</h4>
          <ul className="space-y-2 text-sm">
            <li>{activeText.address}</li>
            <li dir="ltr" className="text-start">info@gurumohacademy.com</li>
            <li dir="ltr" className="text-start">+234 800 000 0000</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-12 pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <p>{activeText.rights}</p>
        <p>{activeText.dev} <span className="text-maldino-gold font-bold">Darkieson Code Studio</span></p>
      </div>
    </footer>
  );
};

export default MaldinoFooter;