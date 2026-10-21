'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, MessageCircle } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Metode Pengujian Sampel di Lapangan
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Dua jenis pengujian penting untuk memastikan kelayakan teknis dan penerimaan pasar.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <ClipboardCheck size={20} />
            <span>1. Uji Teknis Internal (Lab/Kerja)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Mengukur daya tahan beban, kerapian sambungan, tingkat kepresisian ukuran, dan keawetan bahan baku secara langsung.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <MessageCircle size={20} />
            <span>2. Uji Persepsi Konsumen (Pengguna)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Meminta calon pembeli mencoba langsung produk awal dan memberikan masukan terkait estetika, warna, dan harga yang bersaing.
          </p>
        </motion.div>
      </div>
    </div>
  );
}