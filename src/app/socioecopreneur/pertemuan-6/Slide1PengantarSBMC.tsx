'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, Sparkles, Target, Users } from 'lucide-react';

export default function Slide1PengantarSBMC() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-2 py-4">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium"
      >
        <Sparkles size={14} />
        <span>Pertemuan 6 • Sosio & Ecopreneurship</span>
      </motion.div>

      <div className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          Social Business Model Canvas <span className="text-emerald-400">(SBMC) — Bagian 1</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl"
        >
          Mendesain kerangka bisnis berbasis potensi lokal Papua yang mengintegrasikan penciptaan nilai komersial dan dampak sosial-ekologi.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
      >
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <LayoutGrid className="text-emerald-400" size={24} />
          <h3 className="font-bold text-white text-sm">Pemetaan 9 Elemen</h3>
          <p className="text-xs text-slate-400">Pola pikir visual untuk merancang ide usaha berdampak tinggi.</p>
        </div>

        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Users className="text-cyan-400" size={24} />
          <h3 className="font-bold text-white text-sm">Konsumen vs Penerima Manfaat</h3>
          <p className="text-xs text-slate-400">Membedakan pihak yang membayar dan komunitas lokal yang dibantu.</p>
        </div>

        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Target className="text-teal-400" size={24} />
          <h3 className="font-bold text-white text-sm">Nilai Tambah (3P)</h3>
          <p className="text-xs text-slate-400">Merumuskan tawaran nilai yang ramah ekosistem dan berkeadilan.</p>
        </div>
      </motion.div>
    </div>
  );
}