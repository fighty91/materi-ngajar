// Slide7.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Pembelajaran Komprehensif
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Studi Kasus: Perjalanan Menuju Bisnis Berkelanjutan
        </h2>
      </div>

      <div className="bg-slate-900 text-white p-4 rounded-2xl space-y-2 shadow-xs border border-slate-800">
        <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-teal-400">
          <BookOpen size={16} /> Refleksi Transformasi Sektor UMKM Papua
        </div>
        <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
          Dari gagasan awal komoditas lokal yang konvensional, melalui proses pemetaan BMC, penghitungan indikator hijau, uji kelayakan, hingga validasi bersama mama-mama Papua dan masyarakat adat, sebuah usaha terbukti mampu bertransformasi menjadi entitas bisnis yang menguntungkan secara finansial, adil secara sosial, dan menjaga kelestarian hutan sagu.
        </p>
      </div>
    </div>
  );
}