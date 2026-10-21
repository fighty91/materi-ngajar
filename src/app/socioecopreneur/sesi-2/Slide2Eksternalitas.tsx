'use client';

import { AlertTriangle, ShieldAlert } from 'lucide-react';

export default function Slide2Eksternalitas() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <AlertTriangle className="text-amber-400" /> Eksternalitas Negatif dalam Bisnis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-2">
        <div className="p-5 md:p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:bg-slate-800 hover:border-amber-500/80 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer space-y-2">
          <div className="text-amber-400 font-bold text-lg flex items-center gap-2">
            ⚠️ Masalah Bisnis Konvensional
          </div>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
            Perusahaan meraih profit dari kemasan plastik murah, namun biaya pengolahan sampah & kerusakan alam dibebankan ke masyarakat (Eksternalitas Negatif).
          </p>
        </div>

        <div className="p-5 md:p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:bg-slate-800 hover:border-emerald-500/80 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer space-y-2">
          <div className="text-emerald-400 font-bold text-lg flex items-center gap-2">
            🌱 Solusi Ecopreneurship
          </div>
          <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
            Menginternalisasi biaya lingkungan sejak awal dengan mendesain produk yang tidak meninggalkan limbah sejak tahap perencanaan (Design out waste).
          </p>
        </div>
      </div>
    </div>
  );
}