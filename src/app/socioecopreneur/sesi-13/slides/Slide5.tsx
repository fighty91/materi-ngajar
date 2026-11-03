'use client';

import { motion } from 'framer-motion';
import { Layers, Check, Target } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Audit Keterhubungan Elemen SBMC
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Periksa kembali kanvas model bisnis Anda. Apakah hubungan antar-elemen sudah saling mengunci?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Layers className="text-emerald-400" size={22} />
          <h4 className="font-bold text-white text-sm">Partner ➔ Activities</h4>
          <p className="text-xs text-slate-400">Apakah mitra utama perajin Papua sudah terlibat langsung dalam aktivitas produksi utama?</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Check className="text-cyan-400" size={22} />
          <h4 className="font-bold text-white text-sm">Channels ➔ Segments</h4>
          <p className="text-xs text-slate-400">Apakah saluran pemasaran (media sosial / pameran) tepat menjangkau segmen pelanggan?</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Target className="text-teal-400" size={22} />
          <h4 className="font-bold text-white text-sm">Revenue ➔ Impact</h4>
          <p className="text-xs text-slate-400">Apakah sumber pendapatan mendukung kelangsungan ukuran dampak 3P (People & Planet)?</p>
        </motion.div>
      </div>
    </div>
  );
}