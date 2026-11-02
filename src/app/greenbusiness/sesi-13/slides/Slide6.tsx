// Slide6.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Grid, TrendingUp } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Alat Analisis Risiko
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Matriks Risiko: Probabilitas vs Dampak
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-emerald-900">1. Probabilitas (Kemungkinan)</h3>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Seberapa besar peluang risiko tersebut benar-benar terjadi di lapangan (Rendah, Sedang, Tinggi).
          </p>
        </div>

        <div className="p-3 bg-white border border-amber-200 rounded-xl space-y-1 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-amber-900">2. Dampak (Severity)</h3>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Seberapa parah kerugian finansial, sosial, atau ekologis yang ditimbulkannya jika terjadi.
          </p>
        </div>

        <div className="p-3 bg-white border border-rose-200 rounded-xl space-y-1 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-rose-900">3. Prioritas Penanganan</h3>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Fokuskan sumber daya mitigasi pada risiko yang memiliki probabilitas dan dampak tertinggi.
          </p>
        </div>
      </div>
    </div>
  );
}