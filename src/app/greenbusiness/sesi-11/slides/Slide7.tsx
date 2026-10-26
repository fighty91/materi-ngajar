// Slide7.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Trees, Users2 } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Penerapan Lokal Papua
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Menyesuaikan Indikator dengan Potensi Papua
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-800">
            <Trees size={15} /> Tutupan Dusun Sagu
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Mengukur rasio batang sagu panen dibanding pemudaan bibit alami untuk mencegah deforestasi.
          </p>
        </div>

        <div className="p-3 bg-white border border-sky-200 rounded-xl space-y-1 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-sky-800">
            <Users2 size={15} /> Kemitraan Hak Ulayat
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Mengukur transparansi distribusi bagi hasil komoditas dengan suku pemilik ulayat.
          </p>
        </div>

        <div className="p-3 bg-white border border-teal-200 rounded-xl space-y-1 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-teal-800">
            <Mountain size={15} /> Pelestarian Tradisi (Sasi)
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Mengukur integrasi aturan adat penutupan kawasan (Sasi) dalam operasional bisnis.
          </p>
        </div>
      </div>
    </div>
  );
}