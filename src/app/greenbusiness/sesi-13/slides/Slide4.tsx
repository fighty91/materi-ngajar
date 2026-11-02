// Slide4.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Manajemen Risiko
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Mengapa Penilaian Risiko (Risk Assessment) Krusial?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3 bg-white border border-rose-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-rose-800">
            <ShieldAlert size={16} className="text-rose-600" /> Definisi Risk Assessment
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Metode terstruktur untuk mengidentifikasi, menganalisis, dan mengevaluasi potensi hambatan atau ketidakpastian yang dapat menggagalkan tujuan bisnis hijau.
          </p>
        </div>

        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-900">
            <ShieldCheck size={16} className="text-emerald-600" /> Manfaat Strategis
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Memungkinkan perusahaan menyiapkan langkah mitigasi dini sehingga kerugian finansial maupun kerusakan ekologis dapat dihindari sebelum terjadi.
          </p>
        </div>
      </div>
    </div>
  );
}