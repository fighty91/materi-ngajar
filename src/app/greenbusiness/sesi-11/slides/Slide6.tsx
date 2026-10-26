// Slide6.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Zap, Recycle } from 'lucide-react';

export default function Slide6() {
  const metrics = [
    { title: "Jejak Karbon (Carbon Footprint)", desc: "Total emisi gas rumah kaca per unit produk yang dihasilkan.", icon: <Zap size={16} className="text-amber-600" /> },
    { title: "Efisiensi Konsumsi Air", desc: "Volume air yang digunakan per proses olahan bahan baku.", icon: <Droplets size={16} className="text-sky-600" /> },
    { title: "Tingkat Daur Ulang Limbah", desc: "Persentase limbah organik/anorganik yang diolah kembali.", icon: <Recycle size={16} className="text-emerald-600" /> },
    { title: "Perlindungan Keanekaragaman", desc: "Luas kawasan konservasi tutupan hutan/lahan yang dijaga.", icon: <Leaf size={16} className="text-teal-600" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Pilar 3: Ecological Metrics
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Indikator Kinerja Kelestarian Ekologis
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {metrics.map((m, idx) => (
          <div key={idx} className="p-3 bg-white border border-teal-200 rounded-xl flex items-center gap-3 shadow-2xs">
            <div className="p-2 bg-teal-50 rounded-lg shrink-0">
              {m.icon}
            </div>
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{m.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-tight">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}