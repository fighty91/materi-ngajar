// Slide1.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, CheckCircle2 } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-3 sm:space-y-6 max-h-[calc(100dvh-130px)] flex flex-col justify-center text-center">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] sm:text-xs font-bold mx-auto shrink-0 shadow-2xs"
      >
        <Sparkles size={14} className="text-emerald-600 animate-pulse" /> Pertemuan 14: Green Business & Sustainable Management
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-800 via-teal-700 to-slate-900 tracking-tight leading-tight"
      >
        Ketepatan Memvalidasi Model dengan Mitra & Studi Kasus
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-xs sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium"
      >
        Menguji ketahanan model bisnis hijau di dunia nyata melalui pelibatan pemangku kepentingan, mitra strategis, serta pembelajaran dari studi kasus lapangan.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-2.5 pt-2 shrink-0">
        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-200">
          <Users size={14} /> Stakeholder Validation
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold px-3 py-1 bg-teal-50 text-teal-700 rounded-lg border border-teal-200">
          <CheckCircle2 size={14} /> Real-World Case Study
        </span>
      </div>
    </div>
  );
}