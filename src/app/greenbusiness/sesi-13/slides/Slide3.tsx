// Slide3.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Users, Cpu, FileText } from 'lucide-react';

export default function Slide3() {
  const dims = [
    { title: "1. Market Feasibility", desc: "Analisis potensi permintaan konsumen terhadap produk ramah lingkungan.", icon: <Users size={16} className="text-emerald-600" /> },
    { title: "2. Technical Feasibility", desc: "Ketersediaan teknologi pengolahan, bahan baku, dan fasilitas produksi.", icon: <Cpu size={16} className="text-teal-600" /> },
    { title: "3. Financial Feasibility", desc: "Kelayakan arus kas, struktur modal, dan titik impas (Break-Even Point).", icon: <Coins size={16} className="text-sky-600" /> },
    { title: "4. Ecological/Social Feasibility", desc: "Dampak positif jangka panjang terhadap masyarakat adat dan ekosistem.", icon: <FileText size={16} className="text-indigo-600" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Pilar Analisis Kelayakan
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Empat Dimensi Utama Studi Kelayakan Bisnis
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {dims.map((d, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-2xs">
            <div className="p-2 bg-slate-50 rounded-lg shrink-0">
              {d.icon}
            </div>
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{d.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-tight">{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}