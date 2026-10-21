'use client';

import { motion } from 'framer-motion';
import { DollarSign, HeartHandshake, Wrench } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Elemen 9: Struktur Biaya Usaha Sosial
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Di dalam akuntansi sosial, komponen biaya tidak hanya mencakup bahan Baku, tetapi juga nilai keadilan sosial dan lingkungan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Wrench className="text-emerald-400" size={24} />
          <h4 className="font-bold text-white text-sm">Biaya Variabel (Material)</h4>
          <p className="text-xs text-slate-400">Biaya limbah sabut/sagu, perekat organik, bahan cetakan, dan kemasan ramah lingkungan.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <HeartHandshake className="text-cyan-400" size={24} />
          <h4 className="font-bold text-white text-sm">Biaya Upah Adil (Fair Wage)</h4>
          <p className="text-xs text-slate-400">Imbalan kerja yang adil dan bermartabat bagi perajin lokal Papua di atas standar kompensasi minimum.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <DollarSign className="text-teal-400" size={24} />
          <h4 className="font-bold text-white text-sm">Biaya Tetap Operasional</h4>
          <p className="text-xs text-slate-400">Alat perakitan sederhana, transportasi pengangkutan limbah, dan biaya promosi.</p>
        </motion.div>
      </div>
    </div>
  );
}