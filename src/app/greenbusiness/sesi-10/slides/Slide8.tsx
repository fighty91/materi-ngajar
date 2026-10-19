// Slide8.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Slide8() {
  const steps = [
    { num: "Fase 1", title: "Validasi Masalah & Pasar", desc: "Uji asumsi kebutuhan konsumen dan pastikan isu lingkungan nyata." },
    { num: "Fase 2", title: "Minimum Viable Product (MVP)", desc: "Luncurkan sampel produk skala kecil untuk menguji penerimaan." },
    { num: "Fase 3", title: "Uji Efisiensi Operasional", desc: "Sempurnakan rantai pasok dan pencatatan akuntansi hijau." },
    { num: "Fase 4", title: "Peningkatan Skala (Scale-Up)", desc: "Perluas jangkauan saluran distribusi dan kemitraan strategis." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Peta Eksekusi
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Empat Tahap Transisi Ide Menjadi Operasional
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {steps.map((s, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 shadow-2xs">
            <span className="px-2 py-0.5 bg-teal-800 text-white rounded-md font-mono text-[9px] font-bold shrink-0">{s.num}</span>
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{s.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}