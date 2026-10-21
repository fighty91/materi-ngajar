'use client';

import { motion } from 'framer-motion';
import { Package, Droplets, Mountain } from 'lucide-react';

// Pastikan ada kata "default" di sini!
export default function Slide6StudiKasusHijau() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2">
        Inovasi Ecopreneurship Lokal Papua
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-3.5 bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-xl space-y-1 transition-all cursor-pointer"
        >
          <Package className="text-emerald-400" size={20} />
          <h4 className="font-bold text-white text-xs">Kemasan Serat Pati Sagu</h4>
          <p className="text-[11px] text-slate-400">Pengolahan limbah serat pati sagu menjadi pengganti plastik sekali pakai.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-3.5 bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 rounded-xl space-y-1 transition-all cursor-pointer"
        >
          <Droplets className="text-teal-400" size={20} />
          <h4 className="font-bold text-white text-xs">Minyak Atsiri Kayu Putih Adat</h4>
          <p className="text-[11px] text-slate-400">Minyak atsiri murni dari pemanenan daun kayu putih berkelanjutan tanpa menebang pohon.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-3.5 bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 rounded-xl space-y-1 transition-all cursor-pointer"
        >
          <Mountain className="text-cyan-400" size={20} />
          <h4 className="font-bold text-white text-xs">Ekowisata Berbasis Komunitas</h4>
          <p className="text-[11px] text-slate-400">Tur pengamatan Burung Cenderawasih yang hasilnya menjaga kelestarian kawasan hutan adat.</p>
        </motion.div>

      </div>
    </div>
  );
}