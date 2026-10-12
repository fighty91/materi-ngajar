'use client';

import { motion } from 'framer-motion';

export default function Slide8ActCountThink() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2">
        Pilar People: Kerangka ACT.COUNT.THINK
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        
        <motion.div 
          whileHover={{ scale: 1.03, translateY: -4 }}
          className="p-4 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-1 transition-all cursor-pointer"
        >
          <span className="text-xs font-bold text-cyan-400 uppercase">ACT</span>
          <h4 className="font-bold text-white text-xs md:text-sm">Empathy Mapping</h4>
          <p className="text-[11px] text-slate-400">Turun ke lapangan dan mendengarkan masalah riil komunitas lokal.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03, translateY: -4 }}
          className="p-4 bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl space-y-1 transition-all cursor-pointer"
        >
          <span className="text-xs font-bold text-teal-400 uppercase">COUNT</span>
          <h4 className="font-bold text-white text-xs md:text-sm">Social KPI</h4>
          <p className="text-[11px] text-slate-400">Menghitung jumlah warga terberdayakan & kenaikan pendapatan mereka.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03, translateY: -4 }}
          className="p-4 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-1 transition-all cursor-pointer"
        >
          <span className="text-xs font-bold text-emerald-400 uppercase">THINK</span>
          <h4 className="font-bold text-white text-xs md:text-sm">Refleksi Etis</h4>
          <p className="text-[11px] text-slate-400">Memastikan bisnis menegakkan martabat manusia dan keadilan.</p>
        </motion.div>

      </div>
    </div>
  );
}