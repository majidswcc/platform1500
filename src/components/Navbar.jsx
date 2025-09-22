import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const item = "hover:text-sky-700";
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200" dir="rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-sky-600/10 flex items-center justify-center ring-1 ring-sky-600/20">
            <span className="text-sky-700 font-bold">1500</span>
          </div>
          <span className="font-semibold text-slate-800">منصة تدريب 1500 متدرب</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <NavLink to="/about" className={item}>عن المبادرة</NavLink>
          <NavLink to="/register" className={item}>التسجيل</NavLink>
          <NavLink to="/programs" className={item}>البرامج التدريبية</NavLink>
          <NavLink to="/partners" className={item}>الشركاء</NavLink>
          <NavLink to="/dashboard" className={item}>الداش بورد</NavLink>
          <NavLink to="/contact" className={item}>تواصل معنا</NavLink>
        </nav>
        <Link to="/register" className="rounded-2xl px-4 py-2 text-sm font-semibold bg-sky-600 text-white hover:bg-sky-700 shadow-sm">سجل الآن</Link>
      </div>
    </header>
  );
}
