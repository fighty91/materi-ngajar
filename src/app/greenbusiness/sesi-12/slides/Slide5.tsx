// Slide5.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, PieChart, TrendingUp } from 'lucide-react';

export default function Slide5() {
  const charts = [
    { title: "Grafik Batang (Bar Chart)", desc: "Cocok untuk membandingkan pencapaian antar periode bulan atau target vs realisasi.", icon: <BarChart2 size={16} className="text-emerald-600" /> },
    { title: "Grafik Garis (Line Chart)", desc: "Terbaik untuk melihat tren kenaikan atau penurunan jejak karbon/efisiensi dari waktu ke waktu.", icon: <TrendingUp size={16} className="text-teal-600" /> },
    { title: "Diagram Lingkaran/Donat", desc: "Efektif menunjukkan proporsi komposisi sumber bahan baku atau alokasi biaya sosial.", icon: <PieChart size={16} className="text-sky-600" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Visual Storytelling
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Memilih Bentuk Visualisasi yang Tepat
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        {charts.map((c, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
            <div className="p-2 bg-slate-50 rounded-lg w-fit">
              {c.icon}
            </div>
            <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{c.title}</h3>
            <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}