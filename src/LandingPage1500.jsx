import React from "react";
import { motion } from "framer-motion";

// الشركاء
const partners = [
  { name: "الخريف", short: "Al-Khorayef" },
  { name: "سيبكو", short: "SEPCO" },
  { name: "الراشد", short: "Al-Rashed" },
  { name: "ABB", short: "ABB" },
  { name: "نسما", short: "NESMA" },
];

// البرامج
const programsData = [
  { id: 1, title: "أساسيات الصيانة الكهروميكانيكية", company: "ABB", city: "الدمام", type: "تقني", duration: "متوسط", status: "مفتوح" },
  { id: 2, title: "إدارة سلاسل الإمداد", company: "الراشد", city: "الخبر", type: "إداري", duration: "قصير", status: "قادم" },
  { id: 3, title: "تشغيل محطات المياه", company: "الخريف", city: "الجبيل", type: "تقني", duration: "طويل", status: "مكتمل" },
  { id: 4, title: "السلامة والمهنية", company: "نسما", city: "الأحساء", type: "مهني", duration: "متوسط", status: "مفتوح" },
  { id: 5, title: "أساسيات الطاقة والتحكم", company: "سيبكو", city: "القطيف", type: "تقني", duration: "قصير", status: "قادم" },
];

const KPIs = [
  { label: "إجمالي المتدربين المستهدفين", value: "1500+" },
  { label: "شركاء رئيسيون", value: partners.length.toString() },
  { label: "مدن المنطقة الشرقية", value: "6+" },
  { label: "برامج حالية", value: programsData.length.toString() },
];

/* ----------------- المكونات ----------------- */

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-sky-600/10 flex items-center justify-center ring-1 ring-sky-600/20">
            <span className="text-sky-700 font-bold">1500</span>
          </div>
          <span className="font-semibold text-slate-800">منصة تدريب 1500 متدرب</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#about" className="hover:text-sky-700">عن المبادرة</a>
          <a href="#register" className="hover:text-sky-700">التسجيل</a>
          <a href="#programs" className="hover:text-sky-700">البرامج التدريبية</a>
          <a href="#partners" className="hover:text-sky-700">الشركاء</a>
          <a href="#dashboard" className="hover:text-sky-700">الداش بورد</a>
          <a href="#contact" className="hover:text-sky-700">تواصل معنا</a>
        </nav>
        <a href="#register" className="rounded-2xl px-4 py-2 text-sm font-semibold bg-sky-600 text-white hover:bg-sky-700 shadow-sm">سجل الآن</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" dir="rtl" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
              تمكين 1500 شابًا وشابة
              <span className="block text-sky-700">بمهارات نوعية وفرص عمل مستدامة</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl">
              المنصة تربط بين الشباب والشركاء (الخريف، سيبكو، الراشد، ABB، نسما…) عبر برامج عملية تؤدي للتوظيف،
              وداش بورد يعرض البرامج على خريطة المنطقة الشرقية.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#register"  className="rounded-2xl px-5 py-3 font-semibold bg-sky-600 text-white hover:bg-sky-700 shadow">ابدأ التسجيل</a>
              <a href="#programs"  className="rounded-2xl px-5 py-3 font-semibold bg-white text-slate-900 ring-1 ring-slate-200 hover:ring-slate-300">تصفح البرامج</a>
              <a href="#dashboard" className="rounded-2xl px-5 py-3 font-semibold bg-white text-slate-900 ring-1 ring-slate-200 hover:ring-slate-300">عرض الخريطة</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function KPIStrip() {
  return (
    <section className="py-10" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {KPIs.map((kpi) => (
            <div key={kpi.label} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <p className="text-3xl font-extrabold text-slate-900">{kpi.value}</p>
              <p className="text-slate-600 text-sm mt-1">{kpi.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">عن المبادرة</h2>
        <p className="mt-2 text-slate-600 max-w-3xl">تمكين الشباب السعودي بمهارات نوعية وفرص عمل مستدامة عبر برامج تدريبية متقدمة وشراكات استراتيجية بما يتوافق مع رؤية السعودية 2030.</p>
      </div>
    </section>
  );
}

function RegisterSection() {
  return (
    <section id="register" className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">التسجيل</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">🧑‍🎓 تسجيل المتدربين</h3>
            <form className="space-y-3">
              <input className="w-full rounded-xl border p-3" placeholder="الاسم الكامل" />
              <input className="w-full rounded-xl border p-3" placeholder="رقم الهوية" />
              <input className="w-full rounded-xl border p-3" placeholder="البريد الإلكتروني" />
              <input className="w-full rounded-xl border p-3" placeholder="رقم الجوال" />
              <button className="rounded-xl bg-sky-600 text-white px-5 py-3 font-semibold hover:bg-sky-700">إرسال الطلب</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  return (
    <section id="programs" className="py-12 sm:py-16" dir="rtl">
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
    </section>
  );
}

function Partners() {
  return (
    <section id="partners" className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200" dir="rtl">
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
      </div>
    </section>
  );
}

function DashboardSection() {
  const cityCoords = {
    "الدمام":  { top: "40%", left: "60%" },
    "الجبيل":  { top: "30%", left: "80%" },
    "الأحساء": { top: "70%", left: "55%" },
    "الخبر":   { top: "45%", left: "65%" },
    "القطيف":  { top: "50%", left: "50%" },
    "الخفجي":  { top: "15%", left: "75%" },
  };

  const pins = Object.entries(cityCoords).map(([city, pos]) => ({
    city, ...pos, programs: programsData.filter(p => p.city === city)
  })).filter(pin => pin.programs.length > 0);

  return (
    <section id="dashboard" className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">📊 الداش بورد التفاعلي</h2>
        <div className="relative w-full h-[500px] bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Saudi_Arabia_Eastern_Province_location_map.png/600px-Saudi_Arabia_Eastern_Province_location_map.png')] bg-cover bg-center rounded-2xl border shadow">
          {pins.map((pin, i) => (
            <div key={i} style={{ top: pin.top, left: pin.left }} className="absolute transform -translate-x-1/2 -translate-y-1/2">
              <details className="group">
                <summary className="cursor-pointer w-5 h-5 bg-red-600 rounded-full border-2 border-white shadow-lg"></summary>
                <div className="mt-2 w-56 rounded-xl bg-white border p-3 shadow-lg text-sm">
                  <h3 className="font-semibold text-slate-900 mb-1">{pin.city}</h3>
                  <ul className="list-disc pr-4 space-y-1 text-slate-700">
                    {pin.programs.map((pg) => (
                      <li key={pg.id}>{pg.title} - {pg.company} ({pg.status})</li>
                    ))}
                  </ul>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" dir="rtl" className="mt-8 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} منصة تدريب 1500 متدرب — جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}

/* ----------------- التصدير ----------------- */
export default function LandingPage1500() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <KPIStrip />
      <AboutSection />
      <RegisterSection />
      <ProgramsSection />
      <Partners />
      <DashboardSection />
      <Footer />
    </main>
  );
}
