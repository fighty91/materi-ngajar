// Slide5.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCcw, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Siklus Pembelajaran
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Prinsip Pivot & Iterasi Berkelanjutan
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3.5 bg-white border border-teal-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-teal-900">
            <RefreshCcw size={15} className="text-teal-600" /> Apa itu Pivot?
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Keputusan terstruktur untuk mengubah arah strategi (misalnya mengubah saluran distribusi atau format kemasan) berdasarkan temuan validasi mitra di lapangan.
          </p>
        </div>

        <div className="p-3.5 bg-slate-900 text-white rounded-xl space-y-2 shadow-2xs border border-slate-800">
          <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-400">
            <CheckCircle2 size={15} /> Kapan Harus Berubah?
          </div>
          <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
            Ketika umpan balik mitra menunjukkan bahwa asumsi biaya terlalu tinggi, produk tidak diminati, atau ada risiko ekologis yang tidak terduga dalam model awal.
          </p>
        </div>
      </div>
    </div>
  );
}