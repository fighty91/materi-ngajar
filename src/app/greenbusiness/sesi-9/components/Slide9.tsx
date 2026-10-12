'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, ArrowRight } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      
      {/* Header Slide */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-0.5 sm:space-y-1.5 shrink-0"
      >
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-2xs inline-block">
          Tugas Kelompok (Bagian 1)
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Proyek: &ldquo;Local Hero Pitch&rdquo;
        </h2>
      </motion.div>

      {/* Grid 2 Kolom Responsif */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6 items-stretch">
        
        {/* Card 1: Ketentuan Tim */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-emerald-600 text-white p-3 sm:p-6 rounded-xl sm:rounded-3xl space-y-2 sm:space-y-4 shadow-md sm:shadow-xl shadow-emerald-600/20 flex flex-col justify-between border border-emerald-500"
        >
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3 font-bold text-xs sm:text-lg text-emerald-100 border-b border-emerald-500/60 pb-1.5 sm:pb-3">
              <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg sm:rounded-xl backdrop-blur-md shrink-0">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-200" />
              </div>
              <span>Ketentuan Tim & Objek</span>
            </div>

            <ul className="space-y-1.5 sm:space-y-2.5 text-[10px] sm:text-sm text-emerald-50 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-200 shrink-0 mt-1" />
                <span>Kerjakan secara berkelompok sesuai tim proyek.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-200 shrink-0 mt-1" />
                <span>
                  Pilih <strong>satu komoditas / potensi lokal Papua</strong> (sagu, pinang, kopi, noken, dll).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-200 shrink-0 mt-1" />
                <span>Identifikasi tantangan nyata yang sedang dihadapi komoditas tersebut.</span>
              </li>
            </ul>
          </div>

          <div className="text-[9px] sm:text-xs font-bold text-emerald-200 uppercase tracking-wider pt-2 sm:pt-3 border-t border-emerald-500/60 mt-auto">
            Fokus Pada Potensi Lokal
          </div>
        </motion.div>

        {/* Card 2: Instruksi Ringkas */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="bg-slate-900 text-white p-3 sm:p-6 rounded-xl sm:rounded-3xl space-y-2 sm:space-y-4 shadow-md sm:shadow-xl border border-slate-800 flex flex-col justify-between"
        >
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3 font-bold text-xs sm:text-lg text-amber-400 border-b border-slate-800 pb-1.5 sm:pb-3">
              <div className="p-1.5 sm:p-2 bg-slate-800 rounded-lg sm:rounded-xl shrink-0">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              </div>
              <span>Instruksi Tugas</span>
            </div>

            <ul className="space-y-1.5 sm:space-y-2.5 text-[10px] sm:text-sm text-slate-300 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 shrink-0 mt-1" />
                <span>
                  Buat <strong>1 kalimat Sustainable Value Proposition (SVP)</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 shrink-0 mt-1" />
                <span>Petakan dampak ke dalam 3 pilar: <strong>Ekonomi, Sosial, & Ekologis</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 shrink-0 mt-1" />
                <span>Siapkan bahan untuk dipresentasikan singkat (*pitching*).</span>
              </li>
            </ul>
          </div>

          <div className="text-[9px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider pt-2 sm:pt-3 border-t border-slate-800 flex items-center gap-1 mt-auto">
            <span>Siap Untuk Pitching</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}