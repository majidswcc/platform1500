import React from "react";

export default function Footer() {
  return (
    <footer id="contact" dir="rtl" className="mt-8 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-slate-600 text-sm">© {new Date().getFullYear()} منصة تدريب 1500 متدرب — جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
