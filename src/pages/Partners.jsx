import React from "react";

const partners = [
  { name: "الخريف", short: "Al-Khorayef" },
  { name: "سيبكو",  short: "SEPCO" },
  { name: "الراشد", short: "Al-Rashed" },
  { name: "ABB",    short: "ABB" },
  { name: "نسما",   short: "NESMA" },
];

export default function Partners() {
  return (
    <main dir="rtl" className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">الشركاء الرئيسيون</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white border p-5 text-center shadow-sm">
              <p className="text-base font-semibold text-slate-900">{p.name}</p>
              <p className="text-xs text-slate-500 mt-1">{p.short}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-sm mt-4">
          إبراز دور الشركاء في المسؤولية المجتمعية، إضافةً إلى الجمعيات الخيرية التي توفر قواعد بيانات دقيقة للمستفيدين.
        </p>
      </div>
    </main>
  );
}
