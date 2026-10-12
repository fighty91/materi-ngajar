'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coins, HeartHandshake } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-6 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      
      {/* Header Slide */}
      <div className="text-center space-y-0.5 sm:space-y-2 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-2xs inline-block">
          Kerangka Analisis
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Penciptaan Nilai Ganda (Dual Value Creation)
        </h2>
      </div>

      {/* Grid 2 Kolom Responsif */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-6 items-stretch">
        
        {/* Card 1: Functional & Economic Value */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="bg-white border-2 border-emerald-500/40 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-3xl space-y-2 sm:space-y-4 shadow-sm sm:shadow-xl hover:border-emerald-600 transition flex flex-col justify-between"
        >
          <div className="space-y-1.5 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3 text-slate-900 font-bold text-xs sm:text-xl">
              <div className="p-1.5 sm:p-3 bg-emerald-600 text-white rounded-lg sm:rounded-2xl shadow-sm shrink-0">
                <Coins className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <span>Functional & Economic Value</span>
            </div>
            <p className="text-slate-700 text-[11px] sm:text-base leading-snug sm:leading-relaxed font-medium">
              Keunggulan produk atau jasa yang langsung dirasakan oleh konsumen: kualitas unggul, rasa, daya tahan, fungsi praktis, serta harga yang kompetitif dan wajar di pasar.
            </p>
          </div>
          <div className="pt-1.5 sm:pt-2 text-[9px] sm:text-xs font-bold text-emerald-700 uppercase tracking-wider border-t border-emerald-100 sm:border-transparent">
            Fokus Utama: Profit & Market Competitiveness
          </div>
        </motion.div>

        {/* Card 2: Social & Ecological Value */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="bg-white border-2 border-teal-500/40 p-3 sm:p-6 md:p-8 rounded-xl sm:rounded-3xl space-y-2 sm:space-y-4 shadow-sm sm:shadow-xl hover:border-teal-600 transition flex flex-col justify-between"
        >
          <div className="space-y-1.5 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3 text-slate-900 font-bold text-xs sm:text-xl">
              <div className="p-1.5 sm:p-3 bg-teal-700 text-white rounded-lg sm:rounded-2xl shadow-sm shrink-0">
                <HeartHandshake className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              <span>Social & Ecological Value</span>
            </div>
            <p className="text-slate-700 text-[11px] sm:text-base leading-snug sm:leading-relaxed font-medium">
              Manfaat nyata bagi lingkungan dan masyarakat: penciptaan lapangan kerja adil bagi warga lokal, perlindungan ekosistem, pengurangan limbah, serta pelestarian budaya.
            </p>
          </div>
          <div className="pt-1.5 sm:pt-2 text-[9px] sm:text-xs font-bold text-teal-800 uppercase tracking-wider border-t border-teal-100 sm:border-transparent">
            Fokus Utama: People & Planet
          </div>
        </motion.div>

      </div>
    </div>
  );
}