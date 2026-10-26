// Slide7.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Lightbulb } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Menghidupkan Angka dengan Cerita
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Menggabungkan Data Kuantitatif & Narasi Kualitatif
        </h2>
      </div>

      <div className="bg-slate-900 text-white p-4 rounded-2xl space-y-2 shadow-xs border border-slate-800">
        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400">
          <MessageSquareQuote size={16} /> Formula Narasi Dampak Efektif
        </div>
        <p className="text-[11px] sm:text-xs text-slate-200 leading-relaxed italic">
          &ldquo;Selama bulan ini, unit pengolahan sagu kami berhasil mengurangi limbah kulit sagu sebesar 450 kg (<span className="text-emerald-400 font-bold">Angka</span>), yang diolah kembali menjadi kompos organik oleh 5 kelompok ibu tani lokal Papua (<span className="text-teal-400 font-bold">Konteks Sosial</span>), menjaga kesuburan dusun sagu adat tanpa bahan kimia (<span className="text-sky-400 font-bold">Dampak Ekologis</span>).&rdquo;
        </p>
      </div>
    </div>
  );
}