'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Mitigasi Risiko & Antisipasi Kendala
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Identifikasi potensi masalah di masa depan dan cara kelompok mengatasinya.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-rose-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
            <ShieldAlert size={18} />
            <span>Risiko Ketersediaan Bahan Baku</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Musim atau pasokan limbah pasar yang tidak menentu. <br />
            <strong className="text-slate-300">Mitigasi:</strong> Menjalin kerja sama dengan lebih dari satu pemasok/pasar di Jayapura.
          </p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-emerald-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 size={18} />
            <span>Risiko Fluktuasi Permintaan Pasar</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Penjualan musiman saat pameran sepi. <br />
            <strong className="text-slate-300">Mitigasi:</strong> Membangun kerja sama konsinyasi rutin dengan toko tanaman lokal dan kafe.
          </p>
        </motion.div>
      </div>
    </div>
  );
}