'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, PackageCheck, Users2, Trees } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      
      {/* Header Slide */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-0.5 sm:space-y-1.5 shrink-0"
      >
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-2xs inline-block">
          Studi Kasus (Bagian 1)
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Bedah Bisnis Berkelanjutan Lokal
        </h2>
      </motion.div>

      {/* Main Card */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-white border-2 border-teal-500/30 p-3.5 sm:p-6 rounded-xl sm:rounded-3xl shadow-sm sm:shadow-xl space-y-3 sm:space-y-5"
      >
        {/* Header Studi Kasus */}
        <div className="flex items-center gap-2 sm:gap-3 text-teal-950 font-bold text-xs sm:text-xl border-b border-slate-100 pb-2 sm:pb-3">
          <div className="p-1.5 sm:p-2.5 bg-teal-100 text-teal-700 rounded-lg sm:rounded-2xl shrink-0">
            <Lightbulb className="w-4 h-4 sm:w-6 sm:h-6" />
          </div>
          <span>Pengolahan Sagu & Pangan Lokal Papeda Instan</span>
        </div>

        {/* Deskripsi Naratif */}
        <p className="text-slate-700 text-[11px] sm:text-base leading-snug sm:leading-relaxed font-medium">
          Sebuah kelompok usaha lokal mengolah komoditas sagu & umbi-umbian menjadi produk pangan sehat higienis siap konsumsi dengan kemasan ramah lingkungan berbasis serat alam, bermitra langsung dengan masyarakat adat pemilik dusun sagu.
        </p>

        {/* Highlight Karakteristik Usaha */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 pt-1 sm:pt-2">
          {/* Box 1: Produk Higienis */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="p-2 sm:p-3.5 bg-slate-50 hover:bg-white rounded-lg sm:rounded-2xl border border-slate-200 hover:border-emerald-300 flex items-center gap-2 sm:gap-3 transition-colors duration-200 shadow-2xs cursor-default"
          >
            <PackageCheck className="text-emerald-600 shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-[10px] sm:text-xs text-slate-700 font-bold">Produk Higienis & Bebas Gluten</span>
          </motion.div>

          {/* Box 2: Kemitraan Adat */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.25 }}
            className="p-2 sm:p-3.5 bg-slate-50 hover:bg-white rounded-lg sm:rounded-2xl border border-slate-200 hover:border-sky-300 flex items-center gap-2 sm:gap-3 transition-colors duration-200 shadow-2xs cursor-default"
          >
            <Users2 className="text-sky-600 shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-[10px] sm:text-xs text-slate-700 font-bold">Kemitraan Masyarakat Adat</span>
          </motion.div>

          {/* Box 3: Perlindungan Dusun Sagu */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="p-2 sm:p-3.5 bg-slate-50 hover:bg-white rounded-lg sm:rounded-2xl border border-slate-200 hover:border-teal-300 flex items-center gap-2 sm:gap-3 transition-colors duration-200 shadow-2xs cursor-default"
          >
            <Trees className="text-teal-600 shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-[10px] sm:text-xs text-slate-700 font-bold">Perlindungan Dusun Sagu</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}