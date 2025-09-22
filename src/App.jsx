import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import Partners from "./pages/Partners";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-900" dir="rtl">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* صفحات لاحقة: /about /register /contact ... */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
