// Slide8.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle2 } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Evaluasi Diri
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Refleksi Pertumbuhan Intelektual & Profesional
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3.5 bg-white border border-emerald-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-900">
            <CheckCircle2 size={16} className="text-emerald-600" /> Perubahan Cara Pandang
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Melihat akuntansi dan bisnis bukan lagi sekadar instrumen pencari laba jangka pendek, melainkan alat strategis pencipta kesejahteraan sosial dan penjaga kelestarian bumi.
          </p>
        </div>

        <div className="p-3.5 bg-white border border-teal-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-teal-900">
            <Compass size={16} className="text-teal-600" /> Kesiapan Menghadapi Industri
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Memiliki keahlian analitis dalam menyusun BMC, menghitung indikator TBL, menilai risiko, dan mempertanggungjawabkannya secara etis dan profesional.
          </p>
        </div>
      </div>
    </div>
  );
}