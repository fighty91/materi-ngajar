// Slide2.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, HelpCircle } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Uji Kelayakan Usaha
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Apakah Ide Bisnis Hijau Ini Layak Dijalankan?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-900">
            <HelpCircle size={16} className="text-emerald-600" /> Esensi Studi Kelayakan
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Proses analisis sistematis untuk menilai apakah sebuah proyek bisnis memiliki sumber daya, dukungan pasar, dan daya tahan operasional yang mencukupi untuk sukses jangka panjang.
          </p>
        </div>

        <div className="p-3 bg-slate-900 text-white rounded-xl space-y-2 shadow-2xs border border-slate-800">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-400">
            <CheckCircle2 size={16} /> Fokus Khusus Green Business
          </div>
          <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
            Kelayakan tidak hanya diukur dari pengembalian modal finansial semata, melainkan juga dari kelestarian lingkungan dan keadilan sosial (Triple Bottom Line).
          </p>
        </div>
      </div>
    </div>
  );
}