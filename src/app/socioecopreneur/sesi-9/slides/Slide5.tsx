'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Kriteria Ketepatan Rancangan MVP (Prinsip 4T)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Empat indikator utama untuk mengukur kelayakan rancangan produk awal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <Check size={16} />
            <span>Tepat Fungsi (Functional Fit)</span>
          </div>
          <p className="text-xs text-slate-400">Produk mampu menjalankan fungsi dasarnya (contoh: wadah tidak bocor/retak).</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs">
            <Check size={16} />
            <span>Tepat Bahan (Material Fit)</span>
          </div>
          <p className="text-xs text-slate-400">Memanfaatkan bahan baku lokal terbarukan yang aman dan ramah lingkungan.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-xs">
            <Check size={16} />
            <span>Tepat Biaya (Cost Fit)</span>
          </div>
          <p className="text-xs text-slate-400">Proses pengerjaan efisien dan memiliki potensi biaya produksi yang masuk akal.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-xs">
            <Check size={16} />
            <span>Tepat Sasaran (User Fit)</span>
          </div>
          <p className="text-xs text-slate-400">Bentuk dan dimensi ergonomis sesuai dengan kenyamanan calon pengguna.</p>
        </motion.div>
      </div>
    </div>
  );
}