// Slide2.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ShieldAlert } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Uji Realitas Bisnis
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Teori di Atas Kertas vs Realitas Lapangan
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3 bg-white border border-rose-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-rose-800">
            <ShieldAlert size={16} className="text-rose-600" /> Bahaya Asumsi Internal
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Model bisnis yang terlihat sempurna di ruang kelas atau dokumen perencanaan sering kali gagal karena mengabaikan dinamika perilaku konsumen dan kondisi sosial lokal.
          </p>
        </div>

        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-900">
            <Compass size={16} className="text-emerald-600" /> Esensi Validasi Mitra
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Melibatkan mitra kunci secara aktif untuk menguji apakah nilai tawaran (SVP) dan operasional bisnis benar-benar solutif dan dapat diterima di ekosistem nyata.
          </p>
        </div>
      </div>
    </div>
  );
}