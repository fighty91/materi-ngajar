'use client';

import { motion } from 'framer-motion';
import { PenTool, Box, CheckSquare } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        3 Tingkatan Bentuk MVP (Low to High Fidelity)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Progres pengembangan prototipe produk dari tahap konsep hingga bentuk fungsional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <PenTool className="text-teal-400" size={24} />
          <h4 className="font-bold text-white text-sm">1. Sketsa (Low-Fi)</h4>
          <p className="text-xs text-slate-400">Gambaran 2D (coretan tangan/digital) yang memuat ukuran, dimensi, dan struktur dasar produk.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Box className="text-cyan-400" size={24} />
          <h4 className="font-bold text-white text-sm">2. Maket (Mid-Fi)</h4>
          <p className="text-xs text-slate-400">Model tiruan 3D menggunakan bahan mudah diolah (karton/gipsum) untuk menguji proporsi visual.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <CheckSquare className="text-emerald-400" size={24} />
          <h4 className="font-bold text-white text-sm">3. Sampel (High-Fi)</h4>
          <p className="text-xs text-slate-400">Produk fisik awal menggunakan bahan baku asli yang siap diuji fungsi nyatanya.</p>
        </motion.div>
      </div>
    </div>
  );
}