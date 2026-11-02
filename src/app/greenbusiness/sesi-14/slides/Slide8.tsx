// Slide8.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Target, Users, Coins } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Aplikasi Kanvas
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Blok BMC yang Paling Membutuhkan Validasi Mitra
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-900">
            <Users size={15} className="text-emerald-700" /> Customer Segments
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Memastikan pembeli benar-benar bersedia membayar harga yang mencerminkan nilai lingkungan.
          </p>
        </div>

        <div className="p-3 bg-white border border-teal-200 rounded-xl space-y-1 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-teal-900">
            <Target size={15} className="text-teal-700" /> Value Propositions
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Menguji apakah narasi keberlanjutan dan solusi produk menjawab kebutuhan nyata.
          </p>
        </div>

        <div className="p-3 bg-white border border-sky-200 rounded-xl space-y-1 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-sky-900">
            <Coins size={15} className="text-sky-700" /> Cost & Revenue Streams
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Memvalidasi struktur pembagian hasil dengan mitra lokal dan batas kewajaran harga.
          </p>
        </div>
      </div>
    </div>
  );
}