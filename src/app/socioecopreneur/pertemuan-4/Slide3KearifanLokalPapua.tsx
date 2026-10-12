'use client';

import { motion } from 'framer-motion';
import { Shield, Compass, TreeDeciduous } from 'lucide-react';

export default function Slide3KearifanLokalPapua() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-teal-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <Compass className="text-teal-400" /> Hutan Papua & Kearifan Adat
      </h2>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-5 bg-slate-800/60 border border-slate-700/80 hover:border-teal-500/40 rounded-2xl space-y-4 transition-all"
      >
        <p className="text-slate-200 text-xs md:text-sm leading-relaxed">
          Papua menyimpan benteng hutan hujan tropis terbesar di Asia Pasifik. Masyarakat adat memiliki filosofi konservasi turun-temurun yang melarang perusakan alam.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-3.5 bg-slate-900/80 border border-slate-700/80 hover:border-emerald-400/60 rounded-xl flex items-start gap-3 transition-all cursor-pointer"
          >
            <Shield size={20} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs md:text-sm">Tradisi Sasi / Mbaham Matta</h4>
              <p className="text-[11px] text-slate-400">Aturan adat menutup wilayah hutan atau laut tertentu dalam periode tertentu agar ekosistem memulihkan diri.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-3.5 bg-slate-900/80 border border-slate-700/80 hover:border-teal-400/60 rounded-xl flex items-start gap-3 transition-all cursor-pointer"
          >
            <TreeDeciduous size={20} className="text-teal-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs md:text-sm">Hutan Sebagai Ibu</h4>
              <p className="text-[11px] text-slate-400">Filosofi hidup bahwa memelihara hutan berarti menjaga keberlangsungan hidup generasi mendatang.</p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}