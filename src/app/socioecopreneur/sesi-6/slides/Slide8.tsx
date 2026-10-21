'use client';

import { motion } from 'framer-motion';
import { Handshake, Building2, Store } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Elemen 8: Key Partners (Mitra Strategis)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Membangun kolaborasi profetik antara usaha sosial, komunitas lokal, dan sektor komersial di Jayapura.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Store className="text-emerald-400" size={24} />
          <h4 className="font-bold text-white text-sm">Pemasok Bahan Baku</h4>
          <p className="text-xs text-slate-400">Pedagang kelapa parut Pasar Hamadi & petani/pengolah sagu di kampung sekitar.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Handshake className="text-cyan-400" size={24} />
          <h4 className="font-bold text-white text-sm">Mitra Komunitas Perajin</h4>
          <p className="text-xs text-slate-400">Kelompok perajin lokal Papua sebagai mitra inti proses perakitan produk.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Building2 className="text-teal-400" size={24} />
          <h4 className="font-bold text-white text-sm">Mitra B2B & Penjualan</h4>
          <p className="text-xs text-slate-400">Toko tanaman hias, kafe, depot kuliner, dan komunitas lingkungan di Jayapura.</p>
        </motion.div>
      </div>
    </div>
  );
}