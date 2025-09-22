import React from "react";

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
        </div>
      </section>
    </main>
  );
}
