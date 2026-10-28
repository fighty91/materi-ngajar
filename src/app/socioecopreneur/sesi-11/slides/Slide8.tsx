'use client';

import { motion } from 'framer-motion';
import { Megaphone, CheckCircle2 } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Mengubah Angka Dampak Menjadi Bukti Pemasaran
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Indikator 3P yang telah dirumuskan dapat langsung digunakan sebagai bahan *storytelling* yang kuat kepada konsumen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
            <Megaphone size={18} /> Transparansi Publik
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Menampilkan data nyata pada kemasan atau media sosial (contoh: *"Setiap pembelian Anda berkontribusi mengolah 500g limbah lokal Papua"*).
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <h4 className="font-bold text-cyan-400 text-sm flex items-center gap-2">
            <CheckCircle2 size={18} /> Menghindari Klaim Kosong
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Memastikan bisnis Anda memiliki kredibilitas tinggi di mata publik karena setiap klaim didukung oleh angka pencapaian yang jelas.
          </p>
        </motion.div>
      </div>
    </div>
  );
}