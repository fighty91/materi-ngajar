// Slide10.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Compass } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center text-center">
      
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs font-bold mx-auto shrink-0 shadow-2xs">
        <Compass size={14} /> Refleksi Penutup Sesi 10
      </div>

      <h2 className="text-lg sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
        BMC yang Tepat Menjamin Eksekusi Berdampak
      </h2>

      <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
        Penyusunan Business Model Canvas yang akurat dan selaras dengan prinsip keberlanjutan memberikan kejelasan arah navigasi, efisiensi modal, serta transparansi dampak sosial-ekologis dalam jangka panjang.
      </p>

      <div className="p-3 bg-slate-900 text-white rounded-xl sm:rounded-2xl max-w-xl mx-auto text-left space-y-1 shadow-xs border border-slate-800">
        <div className="text-[10px] font-bold text-teal-400 uppercase">Poin Kunci Sesi Ini</div>
        <p className="text-[11px] sm:text-xs text-slate-200">
          Kekuatan bisnis berkelanjutan bukan terletak pada kerumitan rencananya, melainkan pada ketepatan sinkronisasi antara nilai lokal, efisiensi operasional, dan komitmen menjaga kelestarian bumi.
        </p>
      </div>

    </div>
  );
}