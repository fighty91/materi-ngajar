// Slide10.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2 } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center text-center">
      
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs font-bold mx-auto shrink-0 shadow-2xs">
        <Compass size={14} /> Refleksi Penutup Sesi 13
      </div>

      <h2 className="text-lg sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
        Kelayakan Diuji, Risiko Dikelola, Bisnis Berkelanjutan
      </h2>

      <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
        Melakukan studi kelayakan dan penilaian risiko secara cermat memastikan bahwa bisnis hijau yang dibangun tidak hanya ambisius di atas kertas, tetapi juga tangguh menghadapi tantangan nyata di lapangan.
      </p>

      <div className="p-3 bg-slate-900 text-white rounded-xl sm:rounded-2xl max-w-xl mx-auto text-left space-y-1 shadow-xs border border-slate-800">
        <div className="text-[10px] font-bold text-emerald-400 uppercase">Poin Kunci Sesi Ini</div>
        <p className="text-[11px] sm:text-xs text-slate-200">
          Risiko terbesar dalam bisnis bukan terletak pada ketidakpastian pasar, melainkan kegagalan dalam merencanakan mitigasi sejak awal.
        </p>
      </div>

    </div>
  );
}