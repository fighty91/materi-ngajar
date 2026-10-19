// Slide7.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Coins } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Sinergi Lokal & Keberlanjutan
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Menyuntikkan Nilai Lokal Papua ke dalam Canvas
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-800">
            <Coins size={15} /> Economic (Profit)
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Mengolah bahan baku lokal (sagu, pinang, buah merah) menjadi produk bernilai ekonomi tinggi.
          </p>
        </div>

        <div className="p-3 bg-white border border-sky-200 rounded-xl space-y-1 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-sky-800">
            <Users size={15} /> Social (People)
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Pemberdayaan ekonomi mama-mama Papua dan perlindungan hak-hak masyarakat adat.
          </p>
        </div>

        <div className="p-3 bg-white border border-teal-200 rounded-xl space-y-1 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-teal-800">
            <Leaf size={15} /> Ecological (Planet)
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Menjaga kearifan tradisi konservasi hutan sagu & alam Papua agar tetap lestari.
          </p>
        </div>
      </div>
    </div>
  );
}