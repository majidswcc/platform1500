import React from "react";

const programs = [
  { id: 1, title: "أساسيات الصيانة الكهروميكانيكية", company: "ABB",    city: "الدمام",  type: "تقني",  duration: "متوسط", status: "مفتوح" },
  { id: 2, title: "إدارة سلاسل الإمداد",            company: "الراشد", city: "الخبر",  type: "إداري", duration: "قصير",  status: "قادم" },
  { id: 3, title: "تشغيل محطات المياه",             company: "الخريف", city: "الجبيل", type: "تقني",  duration: "طويل",  status: "مكتمل" },
  { id: 4, title: "السلامة والمهنية",               company: "نسما",   city: "الأحساء", type: "مهني", duration: "متوسط", status: "مفتوح" },
  { id: 5, title: "أساسيات الطاقة والتحكم",         company: "سيبكو",  city: "القطيف", type: "تقني",  duration: "قصير",  status: "قادم" },
];

export default function Programs() {
  return (
    <main dir="rtl" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">البرامج التدريبية</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map(p => (
            <div key={p.id} className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-2">الشركة: {p.company} — {p.city}</p>
              <p className="text-sm text-slate-600">النوع: {p.type} | المدة: {p.duration}</p>
              <p className="text-sm text-slate-600">الحالة: {p.status}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
