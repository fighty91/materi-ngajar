'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Trees } from 'lucide-react';

export default function Slide9IntegrasiPitchDeck() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-teal-400 border-b border-slate-800 pb-2">
        Integrasi Pilar Planet ke Pitch Deck Kelompok
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-2 transition-all cursor-pointer"
        >
          <div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
            <Trees size={18} /> Aspek Produk & Bahan
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Menjelaskan bahwa bahan baku berasal dari sumber yang dapat diperbarui (*renewable*) dan tidak merusak hutan/biota laut Papua.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-2 transition-all cursor-pointer"
        >
          <div className="text-cyan-400 font-bold text-sm flex items-center gap-2">
            <ShieldCheck size={18} /> Aspek Operasional
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Menjelaskan rencana pengelolaan limbah hasil produksi dan skema kemasan ramah lingkungan yang digunakan.
          </p>
        </motion.div>

      </div>
    </div>
  );
}