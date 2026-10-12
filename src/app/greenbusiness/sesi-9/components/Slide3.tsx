'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Leaf, ArrowRight } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="w-full max-w-4xl mx-auto px-2 sm:px-4 pt-1 pb-16 sm:pb-4 space-y-3 sm:space-y-6 max-h-[calc(100vh-120px)] overflow-y-auto">
      
      {/* Header Slide */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-1"
      >
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-2xs inline-block">
          Evolusi Strategi
        </span>
        <h2 className="text-lg sm:text-3xl font-black text-slate-900 tracking-tight leading-snug">
          Dari Nilai Konvensional ke Sustainable Value
        </h2>
      </motion.div>

      {/* Grid 2 Kolom Responsif */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 items-stretch">
        
        {/* Card 1: Bisnis Konvensional */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-slate-900 text-white p-3.5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-4 shadow-lg border border-slate-800 flex flex-col justify-between"
        >
          {/* Header Card */}
          <div className="flex items-center gap-2 font-bold text-xs sm:text-lg text-rose-400 border-b border-slate-800 pb-2">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> 
            <span>Bisnis Konvensional</span>
          </div>

          {/* List Content */}
          <ul className="space-y-2 text-[11px] sm:text-sm text-slate-300 grow">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
              <span>Fokus utama: Keuntungan finansial jangka pendek (Profit).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
              <span>Ukuran sukses: Harga murah & volume penjualan tinggi.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-1.5" />
              <span>Sering mengabaikan eksternalitas negatif (limbah & eksploitasi).</span>
            </li>
          </ul>

          {/* Footer Card */}
          <div className="text-[9px] sm:text-xs font-bold text-rose-400 uppercase tracking-wider pt-2 border-t border-slate-800/60 mt-auto">
            Paradoks Jangka Panjang
          </div>
        </motion.div>

        {/* Card 2: Bisnis Berkelanjutan */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-3.5 sm:p-6 md:p-7 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-4 shadow-lg shadow-emerald-600/20 flex flex-col justify-between"
        >
          {/* Header Card */}
          <div className="flex items-center gap-2 font-bold text-xs sm:text-lg text-emerald-100 border-b border-emerald-400/30 pb-2">
            <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200 shrink-0" /> 
            <span>Bisnis Berkelanjutan</span>
          </div>

          {/* List Content */}
          <ul className="space-y-2 text-[11px] sm:text-sm text-emerald-50 font-medium grow">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5" />
              <span>Mengintegrasikan pilar <strong>Triple Bottom Line</strong> (Profit, People, Planet).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5" />
              <span>Nilai tambah berbasis etika, regenerasi alam, dan keadilan sosial.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0 mt-1.5" />
              <span>Menjawab kebutuhan jangka panjang komunitas dan ekosistem.</span>
            </li>
          </ul>

          {/* Footer Card */}
          <div className="text-[9px] sm:text-xs font-bold text-emerald-200 uppercase tracking-wider pt-2 border-t border-emerald-400/30 mt-auto flex items-center gap-1">
            <span>Masa Depan Bisnis</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}