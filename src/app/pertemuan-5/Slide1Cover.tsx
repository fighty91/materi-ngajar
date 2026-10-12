'use client';

import { motion } from 'framer-motion';
import { DollarSign, ShieldCheck, TrendingUp, Cpu } from 'lucide-react';

export default function Slide1FinancialModel() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-2 py-4">
      {/* Header Badge */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium"
      >
        <Cpu size={14} />
        <span>Pertemuan 5 • Socio & Ecopreneurship</span>
      </motion.div>

      {/* Title & Subtitle */}
      <div className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          Model Keuangan untuk <span className="text-emerald-400">Social & Eco-Enterprise</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl"
        >
          Menyeimbangkan kelangsungan profitabilitas komersial dengan penciptaan dampak sosial dan pelestarian lingkungan hidup di Papua.
        </motion.p>
      </div>

      {/* Grid Highlights */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
      >
        <div className="p-4 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-2 transition-all">
          <DollarSign className="text-emerald-400" size={24} />
          <h3 className="font-bold text-white text-sm">Dual Bottom Line</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Mengejar keuntungan finansial yang sejalan dengan penciptaan dampak nyata bagi masyarakat.
          </p>
        </div>

        <div className="p-4 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-2 transition-all">
          <TrendingUp className="text-cyan-400" size={24} />
          <h3 className="font-bold text-white text-sm">Self-Sustaining</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Membangun model pendapatan mandiri agar usaha tidak selamanya bergantung pada dana hibah.
          </p>
        </div>

        <div className="p-4 bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl space-y-2 transition-all">
          <ShieldCheck className="text-teal-400" size={24} />
          <h3 className="font-bold text-white text-sm">Social Cost Structure</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Memasukkan komponen upah layak dan mitigasi lingkungan ke dalam struktur HPP usaha.
          </p>
        </div>
      </motion.div>
    </div>
  );
}