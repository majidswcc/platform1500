cat > src/LandingPage1500.jsx << 'EOF'
import React from "react";
import { motion } from "framer-motion";

// شركاء
const partners = [
  { name: "الخريف", short: "Al-Khorayef" },
  { name: "سيبكو", short: "SEPCO" },
  { name: "الراشد", short: "Al-Rashed" },
  { name: "ABB", short: "ABB" },
  { name: "نسما", short: "NESMA" },
];

// مصدر بيانات موحّد
const programsData = [
  { id: 1, title: "أساسيات الصيانة الكهروميكانيكية", company: "ABB",     city: "الدمام",  type: "تقني",  duration: "متوسط", status: "مفتوح" },
  { id: 2, title: "إدارة سلاسل الإمداد",            company: "الراشد",  city: "الخبر",  type: "إداري", duration: "قصير",  status: "قادم" },
  { id: 3, title: "تشغيل محطات المياه",             company: "الخريف",  city: "الجبيل", type: "تقني",  duration: "طويل",  status: "مكتمل" },
  { id: 4, title: "السلامة والمهنية",               company: "نسما",    city: "الأحساء", type: "مهني", duration: "متوسط", status: "مفتوح" },
  { id: 5, title: "أساسيات الطاقة والتحكم",         company: "سيبكو",   city: "القطيف", type: "تقني",  duration: "قصير",  status: "قادم" },
];

const KPIs = [
  { label: "إجمالي المتدربين المستهدفين", value: "1500+" },
  { label: "شركاء رئيسيون",                value: partners.length.toString() },
  { label: "مدن المنطقة الشرقية",          value: "6+" },
  { label: "برامج حالية",                  value: programsData.length.toString() },
];

/* ============ المكونات ============ */
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
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-sky-100 to-white border border-sky-100 shadow-inner" />
              <div className="absolute inset-0 p-3 flex items-end">
                <div className="w-full grid grid-cols-2 gap-3">
                  {KPIs.map((kpi) => (
                    <div key={kpi.label} className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200 p-4 shadow">
                      <p className="text-2xl font-extrabold text-slate-900 text-center">{kpi.value}</p>
                      <p className="text-xs text-slate-600 text-center mt-1">{kpi.label}</p>
                    </div>
                  ))}
                </div>
              </div>
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
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">عن المبادرة</h2>
          <p className="mt-2 text-slate-600 max-w-3xl">تمكين الشباب السعودي بمهارات نوعية وفرص عمل مستدامة عبر برامج تدريبية متقدمة وشراكات استراتيجية مع القطاعين العام والخاص بما يتوافق مع رؤية السعودية 2030.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">✨ الرؤية</h3>
            <p className="mt-2 text-slate-700">تمكين الشباب السعودي بمهارات نوعية وفرص عمل مستدامة.</p>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">🎯 الرسالة</h3>
            <p className="mt-2 text-slate-700">برامج تدريبية متقدمة، وشراكات استراتيجية مع القطاعين العام والخاص.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">🎯 الأهداف</h3>
            <ul className="mt-3 space-y-2 text-slate-700 list-disc pr-6">
              <li>تأهيل 1500 متدرب.</li>
              <li>التوظيف المباشر بعد البرامج.</li>
              <li>شراكات مع الخريف/سيبكو/الراشد/ABB/نسما.</li>
              <li>تحفيز الابتكار وخدمة المجتمع.</li>
            </ul>
            <h3 className="mt-6 text-lg font-semibold text-slate-900">🧭 المحاور</h3>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {["التدريب","التوظيف","الشراكات","الابتكار","التنمية المجتمعية"].map((p) => (
                <div key={p} className="rounded-xl bg-slate-50 border border-slate-200 px-3 py-2 text-slate-800">{p}</div>
              ))}
            </div>
          </div>
        </div>
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
              <input className="w-full rounded-xl border p-3" placeholder="المؤهل الدراسي" />
              <input className="w-full rounded-xl border p-3" placeholder="التخصص" />
              <input className="w-full rounded-xl border p-3" placeholder="المدينة / المنطقة" />
              <select className="w-full rounded-xl border p-3">
                <option>الاهتمامات</option><option>الطاقة</option><option>المياه</option><option>التقنية</option><option>الإدارة</option><option>أخرى</option>
              </select>
              <button className="rounded-xl bg-sky-600 text-white px-5 py-3 font-semibold hover:bg-sky-700">إرسال الطلب</button>
            </form>
          </div>
          <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">🏢 تسجيل الشركاء</h3>
            <form className="space-y-3">
              <input className="w-full rounded-xl border p-3" placeholder="اسم الجهة" />
              <input className="w-full rounded-xl border p-3" placeholder="الممثل الرسمي" />
              <input className="w-full rounded-xl border p-3" placeholder="البريد الإلكتروني" />
              <input className="w-full rounded-xl border p-3" placeholder="رقم التواصل" />
              <select className="w-full rounded-xl border p-3">
                <option>نوع المشاركة</option><option>توظيف</option><option>تدريب</option><option>رعاية</option><option>أخرى</option>
              </select>
              <button className="rounded-xl bg-sky-600 text-white px-5 py-3 font-semibold hover:bg-sky-700">إرسال الطلب</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsSection() {
  const companies = ["الخريف","سيبكو","الراشد","ABB","نسما"];
  const cities    = ["الدمام","الجبيل","الأحساء","الخبر","القطيف","الخفجي"];
  const types     = ["تقني","إداري","مهني"];
  const durations = ["قصير","متوسط","طويل"];
  const statuses  = ["مفتوح","مكتمل","قادم"];

  const [filters, setFilters] = React.useState({ company:"",city:"",type:"",duration:"",status:"",search:"",sort:"latest" });

  const programs = React.useMemo(() => {
    let data = [...programsData];
    if (filters.company)  data = data.filter(p => p.company  === filters.company);
    if (filters.city)     data = data.filter(p => p.city     === filters.city);
    if (filters.type)     data = data.filter(p => p.type     === filters.type);
    if (filters.duration) data = data.filter(p => p.duration === filters.duration);
    if (filters.status)   data = data.filter(p => p.status   === filters.status);
    if (filters.search)   data = data.filter(p => p.title.includes(filters.search));
    if (filters.sort === "az") data.sort((a,b)=>a.title.localeCompare(b.title));
    if (filters.sort === "za") data.sort((a,b)=>b.title.localeCompare(a.title));
    return data;
  }, [filters]);

  const Select = ({label, value, onChange, options, placeholder}) => (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-slate-700">{label}</span>
      <select value={value} onChange={e=>onChange(e.target.value)} className="rounded-xl border p-3 bg-white">
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );

  return (
    <section id="programs" className="py-12 sm:py-16" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">البرامج التدريبية</h2>
          <a href="#dashboard" className="hidden sm:inline-flex rounded-xl px-4 py-2 text-sm font-semibold bg-white ring-1 ring-slate-200 hover:ring-slate-300">عرض على الخريطة</a>
        </div>

        <div className="rounded-2xl border bg-slate-50 p-4 sm:p-6 mb-6 grid md:grid-cols-3 lg:grid-cols-6 gap-3">
          <Select label="الشركة"      value={filters.company}  onChange={v=>setFilters(f=>({...f,company:v}))}  options={companies}  placeholder="كل الشركات" />
          <Select label="المدينة"      value={filters.city}     onChange={v=>setFilters(f=>({...f,city:v}))}     options={cities}     placeholder="كل المدن" />
          <Select label="نوع البرنامج" value={filters.type}     onChange={v=>setFilters(f=>({...f,type:v}))}     options={types}      placeholder="الكل" />
          <Select label="المدة"        value={filters.duration} onChange={v=>setFilters(f=>({...f,duration:v}))} options={durations}  placeholder="الكل" />
          <Select label="الحالة"       value={filters.status}   onChange={v=>setFilters(f=>({...f,status:v}))}   options={statuses}   placeholder="الكل" />
          <label className="flex flex-col gap-1">
            <span className="text-sm text-slate-700">بحث</span>
            <input value={filters.search} onChange={e=>setFilters(f=>({...f,search:e.target.value}))} placeholder="ابحث باسم البرنامج" className="rounded-xl border p-3 bg-white" />
          </label>
        </div>

        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-slate-600">النتائج: <span className="font-semibold text-slate-900">{programs.length}</span> برنامج</p>
          <select className="rounded-xl border p-2 text-sm" value={filters.sort} onChange={e=>setFilters(f=>({...f,sort:e.target.value}))}>
            <option value="latest">الأحدث</option><option value="az">أ-ي</option><option value="za">ي-أ</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {programs.map(p => (
            <div key={p.id} className="rounded-2xl border bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-700">
                <div className="rounded-xl bg-slate-50 border px-3 py-2">الشركة: <span className="font-semibold">{p.company}</span></div>
                <div className="rounded-xl bg-slate-50 border px-3 py-2">المدينة: <span className="font-semibold">{p.city}</span></div>
                <div className="rounded-xl bg-slate-50 border px-3 py-2">النوع: <span className="font-semibold">{p.type}</span></div>
                <div className="rounded-xl bg-slate-50 border px-3 py-2">المدة: <span className="font-semibold">{p.duration}</span></div>
                <div className="rounded-xl bg-slate-50 border px-3 py-2 col-span-2">الحالة: <span className="font-semibold">{p.status}</span></div>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <a href="#register" className="rounded-xl bg-sky-600 text-white px-4 py-2 text-sm font-semibold hover:bg-sky-700">التسجيل الآن</a>
                <button className="rounded-xl bg-white ring-1 ring-slate-200 px-4 py-2 text-sm font-semibold hover:ring-slate-300">تفاصيل البرنامج</button>
              </div>
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
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">الشركاء الرئيسيون</h2>
          <a href="#dashboard" className="hidden sm:inline-flex rounded-xl px-4 py-2 text-sm font-semibold bg-white ring-1 ring-slate-200 hover:ring-slate-300">عرض البرامج على الخريطة</a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {partners.map((p) => (
            <div key={p.name} className="rounded-2xl bg-white border p-5 text-center shadow-sm">
              <p className="text-base font-semibold text-slate-900">{p.name}</p>
              <p className="text-xs text-slate-500 mt-1">{p.short}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-600 text-sm mt-4">بالإضافة إلى الجمعيات الخيرية التي توفر قواعد بيانات دقيقة للمستفيدين لتعظيم الأثر المجتمعي.</p>
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

  const openPrograms     = programsData.filter(p => p.status === "مفتوح").length;
  const upcomingPrograms = programsData.filter(p => p.status === "قادم").length;

  return (
    <section id="dashboard" className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">📊 الداش بورد التفاعلي</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-2xl border bg-white p-4 text-center shadow-sm"><p className="text-2xl font-bold">{openPrograms}</p><p className="text-sm text-slate-600">برامج مفتوحة للتسجيل</p></div>
          <div className="rounded-2xl border bg-white p-4 text-center shadow-sm"><p className="text-2xl font-bold">{upcomingPrograms}</p><p className="text-sm text-slate-600">برامج قادمة</p></div>
          <div className="rounded-2xl border bg-white p-4 text-center shadow-sm"><p className="text-2xl font-bold">{programsData.length}</p><p className="text-sm text-slate-600">إجمالي البرامج</p></div>
        </div>

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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">© {new Date().getFullYear()} منصة تدريب 1500 متدرب — جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#register" className="hover:text-sky-700">التسجيل</a>
            <a href="#programs" className="hover:text-sky-700">البرامج</a>
            <a href="#partners" className="hover:text-sky-700">الشركاء</a>
            <a href="#dashboard" className="hover:text-sky-700">الداش بورد</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function LandingPage1500() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <KPIStrip />
      <AboutSection />
      <RegisterSection />
      <ProgramsSection />
      <section className="py-4" />
      <Partners />
      <DashboardSection />
      <Footer />
    </main>
  );
}
EOF
