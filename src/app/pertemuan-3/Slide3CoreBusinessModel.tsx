'use client';

import { motion } from 'framer-motion';
import { Flame, Repeat, ShieldCheck } from 'lucide-react';

export default function Slide3CoreBusinessModel() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <Flame className="text-amber-400 animate-pulse" /> Core Business Model: Impact First
      </h2>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 bg-slate-800/60 border border-slate-700/80 hover:border-emerald-500/40 rounded-2xl space-y-4 transition-all"
      >
        <p className="text-slate-200 text-xs md:text-sm leading-relaxed">
          Dalam <i>Sociopreneurship</i>, keuntungan finansial (<i>Profit</i>) bukanlah tujuan akhir mutlak, melainkan bahan bakar untuk menjaga agar misi sosial (<i>Impact</i>) dapat berjalan secara berkelanjutan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-3.5 bg-slate-900/80 border border-slate-700/80 hover:border-teal-400/60 rounded-xl flex items-start gap-3 transition-all cursor-pointer"
          >
            <Repeat size={20} className="text-teal-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs md:text-sm">Self-Sustaining Cycle</h4>
              <p className="text-[11px] text-slate-400">Tidak bergantung pada donasi atau hibah yang bisa habis kapan saja.</p>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-3.5 bg-slate-900/80 border border-slate-700/80 hover:border-emerald-400/60 rounded-xl flex items-start gap-3 transition-all cursor-pointer"
          >
            <ShieldCheck size={20} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs md:text-sm">Mandiri & Bermartabat</h4>
              <p className="text-[11px] text-slate-400">Menghasilkan nilai ekonomi nyata melalui transaksi produk atau jasa yang kompetitif.</p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  );
}