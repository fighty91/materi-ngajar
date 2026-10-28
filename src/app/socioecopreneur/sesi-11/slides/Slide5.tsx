'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Merumuskan Indikator <span className="text-emerald-400">Profit</span> (Finansial)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Fokus pada kemandirian bisnis agar dampak sosial dan ekologi dapat berjalan berkelanjutan tanpa ketergantungan donasi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <TrendingUp className="text-emerald-400" size={22} />
          <h4 className="font-bold text-white text-sm">Margin & Arus Kas Sehat</h4>
          <p className="text-xs text-slate-400">Kemampuan produk menutupi HPP dan menghasilkan surplus laba bersih untuk operasional lanjutan.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <DollarSign className="text-cyan-400" size={22} />
          <h4 className="font-bold text-white text-sm">Volume Penjualan Mandiri</h4>
          <p className="text-xs text-slate-400">Jumlah unit produk yang terjual stabil tiap bulan untuk menjamin kelangsungan usaha.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Target className="text-teal-400" size={22} />
          <h4 className="font-bold text-white text-sm">Reinvestasi Dampak</h4>
          <p className="text-xs text-slate-400">Persentase keuntungan bersih yang disisihkan kembali untuk pengembangan kapasitas perajin.</p>
        </motion.div>
      </div>
    </div>
  );
}