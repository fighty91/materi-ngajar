'use client';

import { motion } from 'framer-motion';
import { Award, Sparkles } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Pencapaian Berbasis Outcome (OBE)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Selama satu semester, Anda tidak hanya menghafal teori, tetapi telah menghasilkan karya nyata berbasis pemecahan masalah.
      </p>

      <div className="p-5 bg-slate-900/90 border border-emerald-500/30 rounded-2xl space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
            <Sparkles size={22} />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">Transformasi Pola Pikir (Mindset Shift)</h4>
            <p className="text-xs text-emerald-400">Dari Mahasiswa Menjadi *Ecopreneur*</p>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Anda kini memiliki kemampuan merumuskan ide bisnis yang memadukan keuntungan ekonomi dengan kepedulian sosial dan kelestarian ekologis bumi Papua.
        </p>
      </div>
    </div>
  );
}