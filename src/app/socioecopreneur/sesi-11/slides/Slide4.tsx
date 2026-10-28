'use client';

import { motion } from 'framer-motion';
import { Globe, Leaf, Target } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Merumuskan Indikator <span className="text-emerald-400">Planet</span> (Ekologi)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Fokus pada penyelamatan lingkungan, pemanfaatan limbah, dan pelestarian ekosistem alam.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Globe className="text-emerald-400" size={22} />
          <h4 className="font-bold text-white text-sm">Reduksi Limbah</h4>
          <p className="text-xs text-slate-400">Jumlah kilogram limbah organik (sabut kelapa/pelepah sagu) yang berhasil diolah per bulan.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Leaf className="text-cyan-400" size={22} />
          <h4 className="font-bold text-white text-sm">Penggantian Bahan Sintetis</h4>
          <p className="text-xs text-slate-400">Jumlah produk plastik konvensional yang berhasil digantikan oleh produk ramah lingkungan.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Target className="text-teal-400" size={22} />
          <h4 className="font-bold text-white text-sm">Jejak Karbon & Material</h4>
          <p className="text-xs text-slate-400">Persentase penggunaan bahan baku lokal terbarukan yang diambil dalam radius dekat.</p>
        </motion.div>
      </div>
    </div>
  );
}