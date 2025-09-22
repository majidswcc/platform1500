import React from "react";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

// إحداثيات تقريبية لمدن الشرقية
const cityCoords = {
  "الدمام":  [26.3927, 50.2030],
  "الخبر":   [26.2794, 50.2083],
  "الجبيل":  [27.0046, 49.6600],
  "الأحساء": [25.3833, 49.5833],
  "القطيف":  [26.5633, 50.0089],
  "الخفجي":  [28.4391, 48.4913],
};

const programs = [
  { id: 1, title: "أساسيات الصيانة الكهروميكانيكية", company: "ABB",    city: "الدمام",  status: "مفتوح" },
  { id: 2, title: "إدارة سلاسل الإمداد",            company: "الراشد", city: "الخبر",  status: "قادم" },
  { id: 3, title: "تشغيل محطات المياه",             company: "الخريف", city: "الجبيل", status: "مكتمل" },
  { id: 4, title: "السلامة والمهنية",               company: "نسما",   city: "الأحساء", status: "مفتوح" },
  { id: 5, title: "أساسيات الطاقة والتحكم",         company: "سيبكو",  city: "القطيف", status: "قادم" },
];

export default function Dashboard() {
  const pins = Object.keys(cityCoords).map((city) => ({
    city,
    coords: cityCoords[city],
    programs: programs.filter(p => p.city === city),
  })).filter(p => p.programs.length > 0);

  return (
    <main dir="rtl" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">📍 خريطة المنطقة الشرقية (تفاعلية)</h2>
        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow">
          <MapContainer center={[26.5, 49.9]} zoom={8} style={{ height: "70vh", width: "100%" }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
            {pins.map((pin, i) => (
              <CircleMarker key={i} center={pin.coords} radius={10}>
                <Popup>
                  <div className="text-sm">
                    <p className="font-bold text-slate-900 mb-1">{pin.city}</p>
                    <ul className="list-disc pr-4 space-y-1 text-slate-700">
                      {pin.programs.map(pg => (
                        <li key={pg.id}>{pg.title} - {pg.company} ({pg.status})</li>
                      ))}
                    </ul>
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>
      </div>
    </main>
  );
}
