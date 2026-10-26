// Slide9.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Smartphone, Presentation } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Teknologi Pendukung
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Tools Sederhana Pengolahan Data Bisnis Hijau
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1.5 shadow-2xs">
          <FileSpreadsheet size={20} className="text-emerald-600" />
          <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">Spreadsheet (Excel / Sheets)</h3>
          <p className="text-[10px] sm:text-xs text-slate-600">Alat utama tabulasi data, pembuatan tabel pivot, dan grafik otomatis berbiaya rendah.</p>
        </div>

        <div className="p-3 bg-white border border-teal-200 rounded-xl space-y-1.5 shadow-2xs">
          <Smartphone size={20} className="text-teal-600" />
          <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">Formulir Digital (Google Forms)</h3>
          <p className="text-[10px] sm:text-xs text-slate-600">Praktis menghimpun catatan harian dari mitra lapangan atau petani lokal secara langsung.</p>
        </div>

        <div className="p-3 bg-white border border-sky-200 rounded-xl space-y-1.5 shadow-2xs">
          <Presentation size={20} className="text-sky-600" />
          <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">Template Infografis</h3>
          <p className="text-[10px] sm:text-xs text-slate-600">Menyusun visual laporan ringkas yang estetis dan mudah dibagikan kepada publik.</p>
        </div>
      </div>
    </div>
  );
}