// Slide2.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Eye, ShieldAlert } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Mengapa Perlu Indikator Terukur?
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          &ldquo;What Gets Measured, Gets Managed&rdquo;
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1.5 shadow-2xs"
        >
          <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm text-emerald-900">
            <Activity size={16} className="text-emerald-600" /> Pengambilan Keputusan
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Menyediakan data objektif untuk mengevaluasi efisiensi operasional dan dampak lingkungan secara akurat.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-3 bg-white border border-teal-200 rounded-xl space-y-1.5 shadow-2xs"
        >
          <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm text-teal-900">
            <Eye size={16} className="text-teal-600" /> Transparansi Stakeholder
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Meningkatkan kepercayaaan konsumen, investor hijau, dan masyarakat adat melalui pelaporan terbuka.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-3 bg-slate-900 text-white rounded-xl space-y-1.5 shadow-2xs border border-slate-800"
        >
          <div className="flex items-center gap-2 font-extrabold text-xs sm:text-sm text-amber-400">
            <ShieldAlert size={16} /> Mencegah Greenwashing
          </div>
          <p className="text-[10px] sm:text-xs text-slate-300 leading-relaxed">
            Memastikan klaim keberlanjutan didukung data fakta empiris, bukan sekadar opini atau jargon pemasaran.
          </p>
        </motion.div>
      </div>
    </div>
  );
}