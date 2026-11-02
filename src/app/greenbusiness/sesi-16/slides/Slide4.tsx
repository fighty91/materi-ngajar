// Slide4.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckSquare, XSquare } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Etika Kerja
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Menjunjung Tinggi Integritas & Kejujuran Ilmiah
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-900">
            <CheckSquare size={16} className="text-emerald-600" /> Sikap Profesional yang Diharapkan
          </div>
          <ul className="space-y-1 text-[10px] sm:text-xs text-slate-600">
            <li>• Mengakui keterbatasan data atau asumsi yang masih perlu diuji.</li>
            <li>• Menghargai hak cipta, kearifan lokal, dan sumber referensi data.</li>
            <li>• Menyajikan argumen secara objektif tanpa manipulasi visual grafik.</li>
          </ul>
        </div>

        <div className="p-3 bg-white border border-rose-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-rose-800">
            <XSquare size={16} className="text-rose-600" /> Hal yang Harus Dihindari
          </div>
          <ul className="space-y-1 text-[10px] sm:text-xs text-slate-600">
            <li>• Melakukan klaim dampak lingkungan palsu (*greenwashing*).</li>
            <li>• Bersikap defensif berlebihan saat menerima masukan atau kritik penguji.</li>
            <li>• Mengabaikan aspek kesejahteraan sosial dan hak masyarakat adat.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}