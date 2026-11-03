'use client';

import { motion } from 'framer-motion';
import { BarChart2, CheckCircle2 } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Mempertahankan Argumen dengan Data
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Setiap klaim yang disampaikan dalam presentasi akhir harus didukung oleh data valid dari hasil riset, uji coba konsumen, dan kalkulasi keuangan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <BarChart2 size={20} />
            <span>Hindari Asumsi Tanpa Bukti</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Jangan menjawab pertanyaan penguji dengan perkiraan kosong (contoh: *"Kira-kira pembelinya banyak"*). Gunakan data hasil wawancara atau kuesioner Sesi 12.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <CheckCircle2 size={20} />
            <span>Kuasai Angka Finansial</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Seluruh anggota kelompok harus memahami rincian HPP, harga jual, dan target volume penjualan minimal agar dapat menjelaskan dengan kompak.
          </p>
        </motion.div>
      </div>
    </div>
  );
}