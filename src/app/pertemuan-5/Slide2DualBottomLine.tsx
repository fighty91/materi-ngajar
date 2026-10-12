'use client';

import { motion } from 'framer-motion';
import { Scale, HeartHandshake, Briefcase, ArrowRight } from 'lucide-react';

export default function Slide2DualBottomLine() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Konsep Dual Bottom Line (Profit vs. Impact)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Wirausaha sosial mendobrak batasan bisnis konvensional dengan menyeimbangkan dua pilar utama secara simultan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        
        {/* Kolom 1: Profitabilitas Komersial */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Briefcase size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">Financial Bottom Line</h4>
              <p className="text-xs text-emerald-400">Kelangsungan Profitabilitas Komersial</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Bisnis wajib mandiri secara finansial, menghasilkan pendapatan operasional yang stabil, dan tidak selamanya bergantung pada subsidi atau donasi luar.
          </p>
        </motion.div>

        {/* Kolom 2: Dampak Sosial & Lingkungan */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <HeartHandshake size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">Impact Bottom Line</h4>
              <p className="text-xs text-cyan-400">Pemberdayaan & Kelestarian Lingkungan</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Keuntungan yang diperoleh sebagian besar dialokasikan kembali untuk memperbesar skala misi sosial dan menjaga ekosistem alam tapak (misal: di Papua).
          </p>
        </motion.div>

      </div>

      {/* Banner Sinergi */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-4 bg-slate-900/40 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-xs text-slate-300"
      >
        <Scale className="text-emerald-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Prinsip Utama:</strong> Profit bukan tujuan akhir, melainkan bahan bakar utama untuk melipatgandakan dampak sosial dan lingkungan.
        </span>
      </motion.div>
    </div>
  );
}