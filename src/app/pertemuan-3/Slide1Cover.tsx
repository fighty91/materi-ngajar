'use client';

import { motion } from 'framer-motion';
import { Users, HeartHandshake, Compass } from 'lucide-react';

export default function Slide1Cover() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-2 text-center flex flex-col items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider hover:bg-cyan-500/20 hover:border-cyan-400 transition-all cursor-default"
      >
        <Users size={16} /> Pertemuan 3 • Pilar People
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight"
      >
        Pemetaan Masalah Sosial & <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
          Inklusi Ekonomi Lokal Papua
        </span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-slate-300 text-sm md:text-base max-w-2xl leading-relaxed"
      >
        Menggeser Paradigma dari Kedermawanan Pasif menuju Wirausaha Sosial Berkelanjutan dan Berkeadilan.
      </motion.p>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400 border-t border-slate-800/80 w-full max-w-md"
      >
        <span className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors cursor-default">
          <HeartHandshake size={16} className="text-cyan-400" /> Pemberdayaan
        </span>
        <span className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors cursor-default">
          <Compass size={16} className="text-emerald-400" /> Martabat Manusia
        </span>
      </motion.div>
    </div>
  );
}