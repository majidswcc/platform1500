import React from "react";
import { partners } from "../data/partners";
import { programsData } from "../data/programs";

const KPIs = [
  { label: "إجمالي المتدربين المستهدفين", value: "1500+" },
  { label: "شركاء رئيسيون", value: partners.length.toString() },
  { label: "برامج حالية", value: programsData.length.toString() },
];

export default function Home() {
  return (
    <main dir="rtl">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
            تمكين 1500 شابًا وشابة
            <span className="block text-sky-700">بمهارات نوعية وفرص عمل مستدامة</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl">
            منصة تربط الشباب بالشركاء (الخريف، سيبكو، الراشد، ABB، نسما…) عبر برامج عملية تنتهي بالتوظيف.
          </p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
            {KPIs.map(k => (
              <div key={k.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <p className="text-3xl font-extrabold text-slate-900">{k.value}</p>
                <p className="text-slate-600 text-sm mt-1">{k.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
