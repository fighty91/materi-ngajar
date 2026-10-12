'use client';

import { RefreshCw, ArrowRight } from 'lucide-react';

export default function Slide3LinearVsSirkular() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <RefreshCw className="text-cyan-400" /> Ekonomi Linear vs Ekonomi Sirkular
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-2">
        <div className="p-5 md:p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:bg-slate-800 hover:border-rose-500/80 hover:shadow-xl hover:shadow-rose-500/10 cursor-pointer space-y-3">
          <div className="text-rose-400 font-bold text-lg">❌ Ekonomi Linear (Model Lama)</div>
          <div className="flex items-center gap-1 font-mono text-xs text-slate-300 bg-slate-900/60 p-2 rounded-lg justify-center">
            <span>Take</span> <ArrowRight size={12} /> <span>Make</span> <ArrowRight size={12} /> <span className="text-rose-400 font-bold">Waste</span>
          </div>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
            Mengambil bahan dari alam, diproduksi, lalu dibuang menjadi sampah yang merusak bumi.
          </p>
        </div>

        <div className="p-5 md:p-6 bg-emerald-950/30 border border-emerald-500/40 rounded-2xl transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:bg-emerald-900/40 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 cursor-pointer space-y-3">
          <div className="text-emerald-400 font-bold text-lg">🔄 Ekonomi Sirkular (Ecopreneur)</div>
          <div className="flex items-center gap-1 font-mono text-xs text-emerald-300 bg-slate-900/60 p-2 rounded-lg justify-center">
            <span>Redesign</span> <ArrowRight size={12} /> <span>Reuse</span> <ArrowRight size={12} /> <span className="text-emerald-400 font-bold">Regenerate</span>
          </div>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
            Limbah diolah kembali menjadi bahan baku baru sehingga tidak ada yang terbuang ke alam.
          </p>
        </div>
      </div>
    </div>
  );
}