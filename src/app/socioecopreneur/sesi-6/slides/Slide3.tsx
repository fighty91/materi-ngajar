'use client';

import { motion } from 'framer-motion';
import { Leaf, Award, HeartHandshake } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Elemen 1: Social & Eco Value Proposition
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Nilai unik apa yang ditawarkan produk berbasis potensi lokal Papua untuk menyelesaikan krisis lingkungan dan sosial?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Leaf className="text-emerald-400" size={24} />
          <h4 className="font-bold text-white text-sm">Nilai Ekologis (Planet)</h4>
          <p className="text-xs text-slate-400">Mengolah limbah sabut kelapa / serat sagu menjadi produk pengganti plastik dan styrofoam.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <HeartHandshake className="text-cyan-400" size={24} />
          <h4 className="font-bold text-white text-sm">Nilai Sosial (People)</h4>
          <p className="text-xs text-slate-400">Membuka lapangan kerja dan memberikan upah adil (Fair Wage) bagi perajin lokal Jayapura.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Award className="text-teal-400" size={24} />
          <h4 className="font-bold text-white text-sm">Nilai Fungsional (Profit)</h4>
          <p className="text-xs text-slate-400">Produk yang kokoh, estetis, ramah lingkungan, dan bernilai jual tinggi di pasar komersial.</p>
        </motion.div>
      </div>
    </div>
  );
}