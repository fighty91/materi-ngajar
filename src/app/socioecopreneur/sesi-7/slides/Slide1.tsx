'use client';

import { motion } from 'framer-motion';
import { Calculator, DollarSign, PieChart, Sparkles } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-2 py-4">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium"
      >
        <Sparkles size={14} />
        <span>Pertemuan 7 • Sosio & Ecopreneurship</span>
      </motion.div>

      <div className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          SBMC Bagian 2: <span className="text-emerald-400">Elemen Keuangan Sederhana</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl"
        >
          Menyusun struktur biaya, proyeksi pendapatan, perhitungan HPP, dan titik impas (BEP) sederhana berbasis prinsip akuntabilitas (Kerangka COUNT).
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
      >
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <PieChart className="text-emerald-400" size={24} />
          <h3 className="font-bold text-white text-sm">Struktur Biaya (Cost Structure)</h3>
          <p className="text-xs text-slate-400">Menghitung biaya bahan, operasional, dan upah adil perajin.</p>
        </div>

        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <DollarSign className="text-cyan-400" size={24} />
          <h3 className="font-bold text-white text-sm">Sumber Pendapatan</h3>
          <p className="text-xs text-slate-400">Memetakan arus kas dari B2C eceran dan kemitraan B2B.</p>
        </div>

        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Calculator className="text-teal-400" size={24} />
          <h3 className="font-bold text-white text-sm">Kalkulasi HPP & BEP</h3>
          <p className="text-xs text-slate-400">Menentukan harga jual wajar dan target penjualan impas.</p>
        </div>
      </motion.div>
    </div>
  );
}