'use client';

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Menjelaskan Kelayakan Finansial & 3P
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Investor dan evaluator ingin melihat apakah usaha ini dapat bertahan mandiri dan memberikan dampak nyata.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <DollarSign size={20} />
            <span>Kemandirian Finansial (Profit)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Sebutkan kisaran harga jual, HPP, margin keuntungan, dan titik impas (*Break-Even Point*) secara ringkas agar terlihat realistis.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <TrendingUp size={20} />
            <span>Dampak Sosial & Ekologi (3P)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Sebutkan angka konkret pencapaian dampak (contoh: melibatkan berapa banyak perajin lokal dan berapa kg limbah yang berhasil diolah per bulan).
          </p>
        </motion.div>
      </div>
    </div>
  );
}