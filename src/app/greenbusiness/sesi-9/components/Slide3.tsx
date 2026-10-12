'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Leaf, ArrowRight } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-5 sm:space-y-6 max-w-4xl mx-auto px-4 py-2">
      {/* Header Slide */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-1.5 sm:space-y-2"
      >
        <span className="text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-3 py-1 rounded-full shadow-2xs inline-block">
          Evolusi Strategi
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Dari Nilai Konvensional ke Sustainable Value
        </h2>
      </motion.div>

      {/* Grid 2 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 items-stretch">
        
        {/* Card 1: Bisnis Konvensional */}
        <motion.div 
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ scale: 1.015 }}
          className="bg-slate-900 text-white p-5 sm:p-6 md:p-7 rounded-3xl space-y-4 shadow-xl border border-slate-800 flex flex-col justify-start"
        >
          {/* Header Card */}
          <div className="flex items-center gap-2.5 font-bold text-base sm:text-lg text-rose-400 border-b border-slate-800 pb-3">
            <TrendingUp size={20} className="shrink-0" /> Bisnis Konvensional
          </div>

          {/* List Content (Rata Atas) */}
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300 grow">
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5" />
              <span>Fokus utama: Keuntungan finansial jangka pendek (Profit).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5" />
              <span>Ukuran sukses: Harga murah & volume penjualan tinggi.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-1.5" />
              <span>Sering mengabaikan eksternalitas negatif (limbah & eksploitasi).</span>
            </li>
          </ul>

          {/* Footer Card */}
          <div className="text-xs font-bold text-rose-400 uppercase tracking-wider pt-3 border-t border-slate-800/60 mt-auto">
            Paradoks Jangka Panjang
          </div>
        </motion.div>

        {/* Card 2: Bisnis Berkelanjutan */}
        <motion.div 
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.015 }}
          className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-5 sm:p-6 md:p-7 rounded-3xl space-y-4 shadow-xl shadow-emerald-600/20 flex flex-col justify-start"
        >
          {/* Header Card */}
          <div className="flex items-center gap-2.5 font-bold text-base sm:text-lg text-emerald-100 border-b border-emerald-400/30 pb-3">
            <Leaf size={20} className="text-emerald-200 shrink-0" /> Bisnis Berkelanjutan
          </div>

          {/* List Content (Rata Atas) */}
          <ul className="space-y-3 text-xs sm:text-sm text-emerald-50 font-medium grow">
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5" />
              <span>Mengintegrasikan pilar <strong>Triple Bottom Line</strong> (Profit, People, Planet).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5" />
              <span>Nilai tambah berbasis etika, regenerasi alam, dan keadilan sosial.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-2 h-2 rounded-full bg-white shrink-0 mt-1.5" />
              <span>Menjawab kebutuhan jangka panjang komunitas dan ekosistem.</span>
            </li>
          </ul>

          {/* Footer Card */}
          <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider pt-3 border-t border-emerald-400/30 mt-auto flex items-center gap-1">
            Masa Depan Bisnis <ArrowRight size={14} />
          </div>
        </motion.div>

      </div>
    </div>
  );
}