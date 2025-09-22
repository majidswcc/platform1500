import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function Dashboard() {
  return (
    <main dir="rtl" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
          📍 خريطة المنطقة الشرقية
        </h2>

        <div className="rounded-2xl overflow-hidden border border-slate-200 shadow">
          {/* ✅ خريطة أساسية فقط */}
          <MapContainer
            center={[26.5, 50.0]}   // الدمام تقريباً
            zoom={8}
            style={{ height: "70vh", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
          </MapContainer>
        </div>
      </div>
    </main>
  );
}
