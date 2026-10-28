'use client';

import { motion } from 'framer-motion';
import { MapPin, Users2, MessageSquare } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Strategi Uji Coba Lapangan (Contextual Testing)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Membawa prototipe produk langsung ke hadapan target sasaran yang tepat di wilayah lokal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <MapPin className="text-emerald-400" size={24} />
          <h4 className="font-bold text-white text-sm">Pasar / Pusat Komunitas</h4>
          <p className="text-xs text-slate-400">Menguji langsung pada pedagang atau pembeli di pasar tradisional (misal: Pasar Hamadi atau Entrop).</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Users2 className="text-cyan-400" size={24} />
          <h4 className="font-bold text-white text-sm">Lingkungan Kampus</h4>
          <p className="text-xs text-slate-400">Meminta dosen, rekan mahasiswa, atau staf universitas mencoba dan mengisi lembar evaluasi.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <MessageSquare className="text-teal-400" size={24} />
          <h4 className="font-bold text-white text-sm">Grup WhatsApp / Online</h4>
          <p className="text-xs text-slate-400">Membagikan tautan survei digital kepada komunitas pencinta tanaman atau pegiat lingkungan.</p>
        </motion.div>
      </div>
    </div>
  );
}