'use client';

import { motion } from 'framer-motion';
import { RefreshCw, CheckCircle2 } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Penyempurnaan Akhir & Penyesuaian Model
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Berdasarkan umpan balik konsumen (Sesi 12) dan indikator dampak (Sesi 11), kelompok melakukan penyesuaian akhir.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <RefreshCw size={20} />
            <span>Penyesuaian Kecil (Fine-Tuning)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Mengubah ukuran produk, memperbaiki kemasan edukatif (*eco-labeling*), atau merevisi sedikit harga jual agar lebih kompetitif di pasaran lokal.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <CheckCircle2 size={20} />
            <span>Validasi Struktur Biaya</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Memastikan kembali bahwa komponen biaya tetap dan variabel pada struktur biaya (*Cost Structure*) sudah mencakup upah layak bagi perajin.
          </p>
        </motion.div>
      </div>
    </div>
  );
}