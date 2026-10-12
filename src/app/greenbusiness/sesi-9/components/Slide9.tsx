'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, ArrowRight } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto px-4 py-2">
      {/* Header Slide */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-1.5"
      >
        <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-3 py-1 rounded-full shadow-2xs inline-block">
          Tugas Kelompok (Bagian 1)
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Proyek: &ldquo;Local Hero Pitch&rdquo;
        </h2>
      </motion.div>

      {/* Grid 2 Kolom */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
        
        {/* Card 1: Ketentuan Tim */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          whileHover={{ scale: 1.015, y: -2 }}
          className="bg-emerald-600 text-white p-5 sm:p-6 rounded-3xl space-y-4 shadow-xl shadow-emerald-600/20 flex flex-col justify-between border border-emerald-500"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-bold text-base sm:text-lg text-emerald-100 border-b border-emerald-500/60 pb-3">
              <div className="p-2 bg-white/10 rounded-xl backdrop-blur-md shrink-0">
                <Users size={20} className="text-emerald-200" />
              </div>
              <span>Ketentuan Tim & Objek</span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-50 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-200 shrink-0 mt-1.5" />
                <span>Kerjakan secara berkelompok sesuai tim proyek.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-200 shrink-0 mt-1.5" />
                <span>
                  Pilih <strong>satu komoditas / potensi lokal Papua</strong> (sagu, pinang, kopi, noken, dll).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-200 shrink-0 mt-1.5" />
                <span>Identifikasi tantangan nyata yang sedang dihadapi komoditas tersebut.</span>
              </li>
            </ul>
          </div>

          <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider pt-3 border-t border-emerald-500/60">
            Fokus Pada Potensi Lokal
          </div>
        </motion.div>

        {/* Card 2: Instruksi Ringkas */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          whileHover={{ scale: 1.015, y: -2 }}
          className="bg-slate-900 text-white p-5 sm:p-6 rounded-3xl space-y-4 shadow-xl border border-slate-800 flex flex-col justify-between"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-bold text-base sm:text-lg text-amber-400 border-b border-slate-800 pb-3">
              <div className="p-2 bg-slate-800 rounded-xl shrink-0">
                <Target size={20} className="text-amber-400" />
              </div>
              <span>Instruksi Tugas</span>
            </div>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span>
                  Buat <strong>1 kalimat Sustainable Value Proposition (SVP)</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span>Petakan dampak ke dalam 3 pilar: <strong>Ekonomi, Sosial, & Ekologis</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span>Siapkan bahan untuk dipresentasikan singkat (*pitching*).</span>
              </li>
            </ul>
          </div>

          <div className="text-xs font-bold text-amber-400 uppercase tracking-wider pt-3 border-t border-slate-800 flex items-center gap-1">
            Siap Untuk Pitching <ArrowRight size={14} />
          </div>
        </motion.div>

      </div>
    </div>
  );
}