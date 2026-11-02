// Slide9.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, CheckCircle2 } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Keterkaitan Perencanaan
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Menghubungkan Kelayakan dengan Blok BMC
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        <div className="p-3 bg-white border border-teal-200 rounded-xl space-y-1 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-teal-900">Key Partners & Resources</h3>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Diuji melalui feasibility teknis & sosial untuk memastikan ketersediaan mitra dan bahan baku yang berkelanjutan.
          </p>
        </div>

        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-emerald-900">Cost Structure</h3>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Dievaluasi melalui penilaian risiko finansial untuk mengantisipasi pembengkakan biaya tak terduga.
          </p>
        </div>

        <div className="p-3 bg-white border border-sky-200 rounded-xl space-y-1 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-sky-900">Value Propositions</h3>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Diuji kelayakan pasarnya guna memastikan solusi yang ditawarkan benar-benar dibutuhkan oleh konsumen.
          </p>
        </div>
      </div>
    </div>
  );
}