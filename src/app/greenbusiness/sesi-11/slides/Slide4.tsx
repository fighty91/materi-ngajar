// Slide4.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Coins, Scale, RefreshCw } from 'lucide-react';

export default function Slide4() {
  const metrics = [
    { title: "Profitabilitas Hijau", desc: "Margin laba bersih yang memperhitungkan biaya lingkungan.", icon: <Coins size={16} className="text-emerald-600" /> },
    { title: "Efisiensi Modal Baku", desc: "Rasio hasil produksi terhadap konsumsi bahan mentah.", icon: <TrendingUp size={16} className="text-teal-600" /> },
    { title: "Fair Trade Margin", desc: "Persentase harga jual yang kembali langsung ke petani/pemasok lokal.", icon: <Scale size={16} className="text-sky-600" /> },
    { title: "Investasi R&D Hijau", desc: "Alokasi dana untuk inovasi teknologi ramah lingkungan.", icon: <RefreshCw size={16} className="text-amber-600" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Pilar 1: Economic Metrics
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Indikator Kinerja Ekonomi Berkelanjutan
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {metrics.map((m, idx) => (
          <div key={idx} className="p-3 bg-white border border-emerald-200 rounded-xl flex items-center gap-3 shadow-2xs">
            <div className="p-2 bg-emerald-50 rounded-lg shrink-0">
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