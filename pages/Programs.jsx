import React from "react";
import { programsData } from "../data/programs";

export default function Programs() {
  return (
    <main dir="rtl" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">البرامج التدريبية</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programsData.map(p => (
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
