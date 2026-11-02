// Slide10.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center text-center">
      
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[10px] sm:text-xs font-bold mx-auto shrink-0 shadow-2xs">
        <Sparkles size={14} /> Penutup Rangkaian Perkuliahan
      </div>

      <h2 className="text-lg sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
        Green Business: Masa Depan Berkelanjutan Dimulai Dari Sini
      </h2>

      <p className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
        Terima kasih atas dedikasi dan partisipasi aktif sepanjang semester ini. Teruslah berkarya, merancang inovasi bisnis yang beretika, akuntabel, dan membawa kesejahteraan bagi masyarakat serta kelestarian alam Papua.
      </p>

      <div className="p-3 bg-slate-900 text-white rounded-xl sm:rounded-2xl max-w-xl mx-auto text-left space-y-1 shadow-xs border border-slate-800">
        <div className="text-[10px] font-bold text-emerald-400 uppercase">Pesan Akhir Kuliah</div>
        <p className="text-[11px] sm:text-xs text-slate-200">
          &ldquo;Bisnis yang hebat bukan yang paling banyak mengeruk keuntungan, melainkan yang paling banyak meninggalkan kebaikan dan kelestarian bagi bumi dan sesama.&rdquo;
        </p>
      </div>

    </div>
  );
}