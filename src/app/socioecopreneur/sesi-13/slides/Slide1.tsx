'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, TrendingUp, ShieldCheck, Layers } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl mx-auto px-3 sm:px-4 py-2 sm:py-4">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] sm:text-xs font-medium"
      >
        <Sparkles size={13} className="shrink-0" />
        <span>Pertemuan 13 • Socio & Ecopreneurship</span>
      </motion.div>

      <div className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight"
        >
          Analisis Kelayakan Usaha & <span className="text-emerald-400">Perbaikan Akhir Model Bisnis</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-xs sm:text-sm md:text-base max-w-2xl leading-relaxed"
        >
          Evaluasi komprehensif kelayakan finansial, operasional, dan pasar untuk menyempurnakan model bisnis sosial secara final.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 pt-2 sm:pt-4"
      >
        <div className="p-3.5 sm:p-4 bg-slate-900/80 border border-slate-800/80 rounded-xl sm:rounded-2xl flex md:flex-col items-start gap-3 md:gap-2 backdrop-blur-sm">
          <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 shrink-0">
            <ShieldCheck size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-white text-xs sm:text-sm">Kelayakan Usaha</h3>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-normal">Pengujian aspek pasar, operasional, dan finansial.</p>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 bg-slate-900/80 border border-slate-800/80 rounded-xl sm:rounded-2xl flex md:flex-col items-start gap-3 md:gap-2 backdrop-blur-sm">
          <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 shrink-0">
            <Layers size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-white text-xs sm:text-sm">Penyempurnaan SBMC</h3>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-normal">Menyelaraskan kembali seluruh elemen model bisnis.</p>
          </div>
        </div>

        <div className="p-3.5 sm:p-4 bg-slate-900/80 border border-slate-800/80 rounded-xl sm:rounded-2xl flex md:flex-col items-start gap-3 md:gap-2 backdrop-blur-sm">
          <div className="p-2 bg-teal-500/10 rounded-lg text-teal-400 shrink-0">
            <TrendingUp size={20} className="sm:w-6 sm:h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-white text-xs sm:text-sm">Kesiapan Final</h3>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-normal">Memastikan proyek siap dipresentasikan secara utuh.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}