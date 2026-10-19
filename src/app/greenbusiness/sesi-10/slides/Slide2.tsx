// Slide2.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Fondasi Logika Bisnis
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Pentingnya Memetakan Model Bisnis Sebelum Memulai
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border-2 border-teal-500/30 p-3 sm:p-5 rounded-xl sm:rounded-3xl shadow-xs space-y-2 flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 font-bold text-xs sm:text-base text-teal-900">
            <div className="p-1.5 bg-teal-100 text-teal-700 rounded-lg shrink-0">
              <CheckCircle2 size={18} />
            </div>
            <span>Keunggulan Pendekatan Canvas</span>
          </div>
          <ul className="space-y-1.5 text-[10px] sm:text-sm text-slate-700">
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
              <span><strong>Pandangan Visual Holistik:</strong> Menyajikan seluruh elemen operasional dan nilai dalam satu lembar.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
              <span><strong>Iterasi Cepat & Murah:</strong> Menemukan potensi kegagalan logika bisnis di atas kertas sebelum keluar modal.</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900 text-white p-3 sm:p-5 rounded-xl sm:rounded-3xl shadow-xs space-y-2 flex flex-col justify-between border border-slate-800"
        >
          <div className="flex items-center gap-2 font-bold text-xs sm:text-base text-rose-400">
            <div className="p-1.5 bg-slate-800 text-rose-400 rounded-lg shrink-0">
              <XCircle size={18} />
            </div>
            <span>Bahaya Tanpa Perencanaan BMC</span>
          </div>
          <ul className="space-y-1.5 text-[10px] sm:text-sm text-slate-300">
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
              <span><strong>Miskalkulasi Sumber Daya:</strong> Kehabisan modal karena mengabaikan struktur biaya tidak terduga.</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
              <span><strong>Produk Gagal Pasar:</strong> Produk berkualitas tinggi dibuat tanpa kejelasan siapa konsumen utamanya.</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}