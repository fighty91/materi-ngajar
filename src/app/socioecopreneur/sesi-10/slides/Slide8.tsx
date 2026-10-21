'use client';

import { motion } from 'framer-motion';
import { BarChart2, CheckCircle2 } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Metrik Pengukuran Keberhasilan Kampanye
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Memastikan pesan edukasi yang disampaikan memberikan dampak kesadaran dan penjualan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
            <BarChart2 size={18} /> Metrik Kesadaran (Awareness)
          </h4>
          <p className="text-xs text-slate-400">
            • Tingkat keterlibatan (*engagement rate*) di media sosial.<br />
            • Jumlah interaksi atau pertanyaan masyarakat mengenai isu lingkungan yang diangkat.
          </p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <h4 className="font-bold text-cyan-400 text-sm flex items-center gap-2">
            <CheckCircle2 size={18} /> Metrik Konversi (Conversion)
          </h4>
          <p className="text-xs text-slate-400">
            • Tingkat penjualan produk melalui saluran pemasaran edukatif.<br />
            • Pelanggan setia yang melakukan pembelian ulang (*repeat order*).
          </p>
        </motion.div>
      </div>
    </div>
  );
}