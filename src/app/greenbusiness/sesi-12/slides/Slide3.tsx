// Slide3.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Filter, CheckCircle, XCircle } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Data Cleansing
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Menyaring Validitas Data Sebelum Dianalisis
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3 bg-white border border-rose-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-rose-800">
            <XCircle size={16} className="text-rose-600" /> Masalah Data Mentah Umum
          </div>
          <ul className="space-y-1 text-[10px] sm:text-xs text-slate-600">
            <li>• Pencatatan ganda atau selisih unit satuan timbangan.</li>
            <li>• Data yang hilang (missing records) pada minggu operasional tertentu.</li>
            <li>• Masuknya estimasi subjektif tanpa dasar hitung empiris.</li>
          </ul>
        </div>

        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-900">
            <CheckCircle size={16} className="text-emerald-600" /> Langkah Penyaringan Tepat
          </div>
          <ul className="space-y-1 text-[10px] sm:text-xs text-slate-600">
            <li>• Lakukan kroscek silang dengan nota fisik atau logbook produksi.</li>
            <li>• Standardisasi seluruh satuan metrik (misal: liter, kg, jam kerja).</li>
            <li>• Singkirkan anomali data ekstrem yang tidak wajar.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}