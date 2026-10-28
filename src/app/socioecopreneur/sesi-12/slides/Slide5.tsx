'use client';

import { motion } from 'framer-motion';
import { ClipboardList, Star, MessageSquare } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Komponen Instrumen Umpan Balik Sederhana
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Poin inti yang wajib ada pada lembar wawancara atau kuesioner kelompok Anda.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <ClipboardList className="text-emerald-400" size={22} />
          <h4 className="font-bold text-white text-sm">1. Evaluasi Visual & Fungsi</h4>
          <p className="text-xs text-slate-400">Menilai bentuk fisik, kerapian, ukuran, dan kenyamanan penggunaan produk awal (MVP).</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Star className="text-cyan-400" size={22} />
          <h4 className="font-bold text-white text-sm">2. Uji Kelayakan Harga</h4>
          <p className="text-xs text-slate-400">Menanyakan batas harga tertinggi dan terendah yang wajar menurut persepsi calon pembeli.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <MessageSquare className="text-teal-400" size={22} />
          <h4 className="font-bold text-white text-sm">3. Saran Perbaikan Terbuka</h4>
          <p className="text-xs text-slate-400">Kolom bebas bagi responden untuk menuliskan apa yang perlu diubah dari produk tersebut.</p>
        </motion.div>
      </div>
    </div>
  );
}