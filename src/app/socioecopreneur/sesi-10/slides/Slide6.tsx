'use client';

import { motion } from 'framer-motion';
import { Share2, Smartphone, Store } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Pemilihan Saluran Komunikasi (Omnichannel)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Menjangkau konsumen komersial dan komunitas melalui kombinasi media digital dan interaksi langsung.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Smartphone className="text-emerald-400" size={24} />
          <h4 className="font-bold text-white text-sm">Media Sosial Visual</h4>
          <p className="text-xs text-slate-400">Instagram & TikTok untuk menampilkan konten video pendek *behind the scene* pembuatan produk.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Share2 className="text-cyan-400" size={24} />
          <h4 className="font-bold text-white text-sm">Komunitas & Pameran</h4>
          <p className="text-xs text-slate-400">Mengikuti pameran UMKM lokal Jayapura dan kolaborasi dengan komunitas peduli lingkungan.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Store className="text-teal-400" size={24} />
          <h4 className="font-bold text-white text-sm">Titip Jual (Konsinyasi)</h4>
          <p className="text-xs text-slate-400">Display produk edukatif di kafe, hotel, atau toko mitra lokal yang berorientasi ramah lingkungan.</p>
        </motion.div>
      </div>
    </div>
  );
}