'use client';

import { motion } from 'framer-motion';
import { Store, Share2, Megaphone } from 'lucide-react';

export default function Slide5Channels() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Elemen 4: Channels (Kanal Edukasi & Penjualan)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Bagaimana cara produk dan pesan kebaikan lingkungan sampai ke tangan konsumen dan komunitas?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Store className="text-emerald-400" size={24} />
          <h4 className="font-bold text-white text-sm">Kanal Penjualan Langsung</h4>
          <p className="text-xs text-slate-400">Pameran UMKM lokal, lapak akhir pekan, dan kemitraan konsinyasi dengan toko tanaman.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Share2 className="text-cyan-400" size={24} />
          <h4 className="font-bold text-white text-sm">Kanal Edukasi Digital</h4>
          <p className="text-xs text-slate-400">Media sosial (Instagram/TikTok) untuk membagikan proses pemuatan ramah lingkungan dan cerita perajin.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Megaphone className="text-teal-400" size={24} />
          <h4 className="font-bold text-white text-sm">Kanal Kemitraan Komunitas</h4>
          <p className="text-xs text-slate-400">Kerja sama langsung dengan komunitas pemuda dan pengelola pasar lokal Jayapura.</p>
        </motion.div>
      </div>
    </div>
  );
}