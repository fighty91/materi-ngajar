'use client';

import { motion } from 'framer-motion';
import { Users, BarChart } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Pendekatan Pengumpulan Umpan Balik
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Kombinasi metode yang tepat menghasilkan pemahaman mendalam sekaligus data terukur.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Users size={20} />
            <span>1. Kualitatif (Wawancara & Diskusi)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            • Menggali *mengapa* seseorang menyukai atau menolak produk.<br />
            • Dilakukan secara tatap muka dengan calon pembeli atau perajin mitra di Papua.<br />
            • Menangkap ekspresi, keluhan tersembunyi, dan saran pengembangan.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <BarChart size={20} />
            <span>2. Kuantitatif (Kuesioner Singkat)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            • Mengukur tingkat kepuasan, rentang harga ideal, dan minat beli secara angka.<br />
            • Disebarkan melalui Google Forms atau formulir cetak singkat saat pameran.<br />
            • Mempermudah melihat tren jawaban dari banyak responden sekaligus.
          </p>
        </motion.div>
      </div>
    </div>
  );
}