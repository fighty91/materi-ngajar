// Slide9.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Manajemen Data
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Tantangan Pengukuran & Solusi Lapangan
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-xs text-rose-900">
            <AlertTriangle size={15} className="text-rose-600" /> Keterbatasan Data Primer Lapangan
          </div>
          <p className="text-[10px] sm:text-xs text-slate-700">
            Sulit mencatat konsumsi energi/limbah di area terpencil. Solusi: Gunakan formulir pencatatan digital berbasis aplikasi seluler yang bisa digunakan offline.
          </p>
        </div>

        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-900">
            <ShieldCheck size={15} className="text-emerald-600" /> Bias Pengukuran Kualitatif
          </div>
          <p className="text-[10px] sm:text-xs text-slate-700">
            Penilaian dampak sosial bersifat subjektif. Solusi: Gunakan indeks kuisioner terstruktur & verifikasi pihak ketiga berkala.
          </p>
        </div>
      </div>
    </div>
  );
}