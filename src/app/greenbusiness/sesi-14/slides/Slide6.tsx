// Slide6.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Leaf } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Pembelajaran Nyata
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Studi Kasus: Transformasi Usaha Lokal Berkelanjutan
        </h2>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 space-y-2.5 shadow-2xs">
        <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-900">
          <Award size={18} className="text-emerald-700" /> Model Pengolahan Pangan Lokal & Ekowisata
        </div>
        <p className="text-[10px] sm:text-xs text-slate-700 leading-relaxed">
          Sebuah inisiatif pengolahan hasil bumi lokal (seperti sagu dan kopi) awalnya mendistribusikan produk melalui pengecer konvensional. Melalui validasi bersama koperasi tani dan masyarakat adat, model diubah menjadi penjualan langsung dengan sistem <i>Fair Trade</i> serta pelibatan edukasi ekowisata, yang terbukti meningkatkan margin laba dan kelestarian dusun.
        </p>
      </div>
    </div>
  );
}