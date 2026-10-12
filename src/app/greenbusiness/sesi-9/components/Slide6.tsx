'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Check } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4">
      <div className="text-center space-y-2">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-3.5 py-1.5 rounded-full shadow-sm">Penerapan Praktis</span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Formula Pernyataan Proposisi Nilai</h2>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 border border-slate-800"
      >
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm uppercase tracking-wider">
          <FileText size={20} /> Rumus Baku Penulisan:
        </div>
        
        <div className="p-5 bg-slate-800 rounded-2xl border border-emerald-500/40 text-emerald-100 font-mono text-xs sm:text-sm leading-relaxed shadow-inner">
          &ldquo;Kami menawarkan <span className="text-emerald-400 font-bold">[Produk/Jasa]</span> bagi <span className="text-emerald-400 font-bold">[Target Konsumen]</span> yang tidak hanya memberikan <span className="text-emerald-400 font-bold">[Keunggulan Ekonomi/Fungsional]</span>, tetapi juga menyelamatkan <span className="text-teal-400 font-bold">[Aspek Ekologis/Planet]</span> serta memberdayakan <span className="text-teal-400 font-bold">[Komunitas Lokal/People]</span>.&rdquo;
        </div>

        <div className="space-y-2 pt-2 border-t border-slate-800">
          <div className="text-xs font-bold text-slate-300 flex items-center gap-1.5">
            <Check size={16} className="text-emerald-400" /> Kunci Utama Penilaian:
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Pernyataan harus ringkas, jelas, dapat dibuktikan dengan data, dan berakar kuat dari potensi nyata di sekitar kita.
          </p>
        </div>
      </motion.div>
    </div>
  );
}