// Slide2.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Target, CheckCircle2 } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Sintesis Semester
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Menghubungkan Titik-Titik Rangkaian Pembelajaran
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1.5 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-emerald-900">1. Nilai & Kerangka (Sesi 1-9)</h3>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Memahami Triple Bottom Line, merumuskan Sustainable Value Proposition (SVP), dan mengangkat potensi lokal Papua.
          </p>
        </div>

        <div className="p-3 bg-white border border-teal-200 rounded-xl space-y-1.5 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-teal-900">2. Struktur & Analisis (Sesi 10-13)</h3>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Menyusun Business Model Canvas (BMC), memilih indikator kinerja, mengolah data, serta uji kelayakan & risiko.
          </p>
        </div>

        <div className="p-3 bg-white border border-sky-200 rounded-xl space-y-1.5 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-sky-900">3. Validasi & Refleksi (Sesi 14-15)</h3>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Menguji model bersama mitra lapangan, menyempurnakan strategi, dan menyusun argumentasi keberlanjutan yang kuat.
          </p>
        </div>
      </div>
    </div>
  );
}