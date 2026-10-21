'use client';

import { motion } from 'framer-motion';
import { Box, Sparkles, Layers, Compass } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-2 py-4">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium"
      >
        <Sparkles size={14} />
        <span>Pertemuan 9 • Socio & Ecopreneurship</span>
      </motion.div>

      <div className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          Merancang Sampel, Sketsa & <span className="text-emerald-400">Maket Produk Awal (MVP)</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl"
        >
          Teknik dan ketepatan merancang prototipe produk Minimum Viable Product berbasis potensi bahan lokal Papua.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
      >
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Box className="text-emerald-400" size={24} />
          <h3 className="font-bold text-white text-sm">Konsep MVP</h3>
          <p className="text-xs text-slate-400">Versi awal produk dengan fitur paling mendasar namun fungsional.</p>
        </div>

        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Layers className="text-cyan-400" size={24} />
          <h3 className="font-bold text-white text-sm">3 Tingkatan Prototipe</h3>
          <p className="text-xs text-slate-400">Pengembangan dari sketsa visual, maket, hingga sampel asli.</p>
        </div>

        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Compass className="text-teal-400" size={24} />
          <h3 className="font-bold text-white text-sm">Validasi Fungsi</h3>
          <p className="text-xs text-slate-400">Menguji kelayakan bahan dan kepuasan pengguna sejak dini.</p>
        </div>
      </motion.div>
    </div>
  );
}