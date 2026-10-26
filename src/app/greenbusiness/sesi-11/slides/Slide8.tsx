// Slide8.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Layers, CheckSquare } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Standar Pelaporan Global & Lokal
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Mentransformasi Indikator ke Laporan Akuntabel
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3.5 bg-white border border-teal-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-teal-900">
            <FileText size={16} className="text-teal-600" /> Global Reporting Initiative (GRI)
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Penggunaan standar internasional GRI Standards sebagai rujukan pengelompokan indikator ekonomi, sosial, dan lingkungan agar diakui pasar global.
          </p>
        </div>

        <div className="p-3.5 bg-white border border-emerald-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-900">
            <Layers size={16} className="text-emerald-600" /> Integrasi Akuntansi Hijau
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Menyajikan angka indikator fisik (liter air, ton limbah, jumlah pekerja) bersamaan dengan pencatatan beban biaya lingkungan pada Laporan Keuangan.
          </p>
        </div>
      </div>
    </div>
  );
}