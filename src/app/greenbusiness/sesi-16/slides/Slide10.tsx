// Slide10.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center text-center">
      
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs font-bold mx-auto shrink-0 shadow-2xs">
        <Award size={14} /> Sidang Akhir & Pertanggungjawaban Selesai
      </div>

      <h2 className="text-lg sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
        Selamat Menempuh Pertanggungjawaban Proyek Profesional!
      </h2>

      <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
        Anda telah menyelesaikan seluruh rangkaian materi dan perancangan proyek bisnis berkelanjutan. Tunjukkan kemampuan terbaik Anda dengan penuh percaya diri, integritas, dan semangat keberlanjutan!
      </p>

      <div className="p-3 bg-slate-900 text-white rounded-xl sm:rounded-2xl max-w-xl mx-auto text-left space-y-1 shadow-xs border border-slate-800">
        <div className="text-[10px] font-bold text-emerald-400 uppercase">Dosen Pengampu</div>
        <p className="text-[11px] sm:text-xs text-slate-200 font-bold">
          Fighty Elia Ratag, S.Ak., M.Ak., CFTR. <span className="font-normal text-slate-400">| FEB UNIKA Fajar Timur Papua</span>
        </p>
      </div>

    </div>
  );
}