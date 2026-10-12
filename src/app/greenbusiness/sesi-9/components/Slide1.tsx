'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Compass } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="text-center space-y-2.5 sm:space-y-3 max-w-4xl mx-auto px-4 py-2">
      {/* Badge Pertemuan */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs sm:text-sm font-bold shadow-sm shadow-emerald-600/20 mx-auto"
      >
        <Sparkles size={14} className="animate-spin" /> Pertemuan 9: Manajemen Berkelanjutan
      </motion.div>

      {/* Judul Utama (Diperbesar) */}
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
      >
        Sustainable Value Proposition &{' '}
        <span className="text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-xl inline-block mt-1 sm:mt-0">
          Potensi Lokal
        </span>
      </motion.h1>

      {/* Deskripsi */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-slate-700 text-xs sm:text-base max-w-2xl mx-auto font-medium leading-relaxed"
      >
        Menghubungkan keunggulan fungsional produk dengan nilai tambah sosial dan ekologis untuk menciptakan bisnis yang berdampak nyata di Papua.
      </motion.p>

      {/* Footer / Indicator Badge */}
      <motion.div 
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="pt-1 flex justify-center items-center gap-1.5 text-xs sm:text-sm text-teal-800 font-bold bg-teal-50 border border-teal-200 py-1 px-3.5 rounded-xl max-w-fit mx-auto shadow-2xs"
      >
        <Compass size={15} className="text-teal-600 animate-pulse shrink-0" /> 
        <span>Pendekatan ACT.COUNT.THINK & Kearifan Lokal</span>
      </motion.div>
    </div>
  );
}