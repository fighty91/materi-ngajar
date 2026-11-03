'use client';

import { motion } from 'framer-motion';
import { Layers, ShieldCheck, DollarSign } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Tiga Pilar Utama Evaluasi Penguji
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Tim penguji akan menilai pertanggungjawaban kelompok berdasarkan tiga aspek krusial berikut:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Layers className="text-emerald-400" size={22} />
          <h4 className="font-bold text-white text-sm">1. Ketepatan Konsep & Solusi</h4>
          <p className="text-xs text-slate-400">Kesesuaian antara masalah sosial-ekologi nyata dengan prototipe produk (MVP) yang dirancang.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <DollarSign className="text-cyan-400" size={22} />
          <h4 className="font-bold text-white text-sm">2. Kelayakan Model Bisnis</h4>
          <p className="text-xs text-slate-400">Keakuratan HPP, struktur biaya, margin keuntungan, dan titik impas (BEP) yang realistis.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <ShieldCheck className="text-teal-400" size={22} />
          <h4 className="font-bold text-white text-sm">3. Kejelasan Dampak 3P</h4>
          <p className="text-xs text-slate-400">Bukti terukur kontribusi nyata bagi kesejahteraan manusia (People) dan kelestarian bumi (Planet).</p>
        </motion.div>
      </div>
    </div>
  );
}