'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto px-2 sm:px-4 pb-12 sm:pb-0">
      
      {/* Header Slide */}
      <div className="text-center space-y-1 sm:space-y-2">
        <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-3 py-1 rounded-full shadow-2xs inline-block">
          Konsep Dasar
        </span>
        <h2 className="text-xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Apa itu Value Proposition?
        </h2>
      </div>

      {/* Grid Responsif */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6 items-stretch">
        
        {/* Card 1: Definisi Sederhana */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-4 shadow-lg sm:shadow-xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-2.5 sm:gap-3 font-bold text-base sm:text-xl text-emerald-100">
            <div className="p-2 sm:p-3 bg-white/10 rounded-xl sm:rounded-2xl backdrop-blur-md shrink-0">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
            </div>
            <span>Definisi Sederhana</span>
          </div>
          <p className="text-emerald-50 text-xs sm:text-base leading-relaxed font-medium">
            Proposisi nilai adalah alasan utama mengapa konsumen harus memilih produk atau jasa kita dibandingkan penawaran dari pesaing. Ini adalah inti dari nilai tukar antara bisnis dan pasar.
          </p>
        </motion.div>

        {/* Card 2: Dua Pertanyaan Esensial */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-white border-2 border-emerald-500/30 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl space-y-2.5 sm:space-y-4 shadow-lg sm:shadow-xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-2.5 sm:gap-3 text-slate-900 font-bold text-base sm:text-xl">
            <div className="p-2 sm:p-3 bg-emerald-100 text-emerald-700 rounded-xl sm:rounded-2xl shrink-0">
              <HelpCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <span>Dua Pertanyaan Esensial</span>
          </div>
          
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-base text-slate-700">
            <li className="flex items-start gap-2.5 bg-emerald-50/80 p-2.5 sm:p-3 rounded-xl border border-emerald-100">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Masalah nyata apa</strong> yang sedang kita selesaikan bagi pelanggan?</span>
            </li>
            <li className="flex items-start gap-2.5 bg-teal-50/80 p-2.5 sm:p-3 rounded-xl border border-teal-100">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 mt-0.5 shrink-0" />
              <span><strong>Manfaat apa yang benar-benar dirasakan</strong> dan dihargai oleh mereka?</span>
            </li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}