'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

export default function Slide4BeneficiariesToStakeholders() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <Users className="text-cyan-400" /> Komunitas Sebagai Mitra Strategis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <motion.div 
          whileHover={{ scale: 1.02, translateY: -2 }}
          className="p-5 bg-rose-950/20 border border-rose-500/30 hover:border-rose-400/60 rounded-2xl space-y-2 transition-all cursor-pointer"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-rose-400">Pendekatan Lama</span>
          <h3 className="text-base font-bold text-white">Beneficiaries (Penerima Pasif)</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Masyarakat diposisikan sebagai "objek kasihan" yang hanya menerima bantuan konsumtif tanpa dilibatkan dalam proses ekonomi.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02, translateY: -2 }}
          className="p-5 bg-emerald-950/30 border border-emerald-500/40 hover:border-emerald-400 rounded-2xl space-y-2 transition-all shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">Pendekatan Baru</span>
          <h3 className="text-base font-bold text-white">Stakeholders (Mitra Bisnis)</h3>
          <p className="text-xs text-slate-200 leading-relaxed">
            Masyarakat lokal menjadi bagian dari rantai pasok: sebagai pemasok bahan baku, pengrajin terampil, produsen, atau pemilik saham.
          </p>
        </motion.div>

      </div>
    </div>
  );
}