'use client';

import { Sparkles } from 'lucide-react';

export default function Slide7ActCountThink() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <Sparkles className="text-teal-300" /> Penerapan ACT.COUNT.THINK (Pilar Planet)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-emerald-900/50 cursor-pointer">
          <div className="text-xl font-black text-emerald-400 mb-1">ACT</div>
          <h4 className="font-bold text-white text-xs md:text-sm mb-1">Green Audit</h4>
          <p className="text-[11px] md:text-xs text-slate-300">Observasi langsung melihat sampah plastik sebagai bahan baku yang salah tempat.</p>
        </div>

        <div className="p-4 bg-cyan-950/30 border border-cyan-500/40 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-cyan-900/50 cursor-pointer">
          <div className="text-xl font-black text-cyan-400 mb-1">COUNT</div>
          <h4 className="font-bold text-white text-xs md:text-sm mb-1">Ukur Dampak</h4>
          <p className="text-[11px] md:text-xs text-slate-300">Menghitung potensi ribuan kantong plastik yang berhasil dicegah masuk ke laut.</p>
        </div>

        <div className="p-4 bg-amber-950/30 border border-amber-500/40 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-amber-900/50 cursor-pointer">
            <div className="text-xl font-black text-amber-400 mb-1">THINK</div>
            <h4 className="font-bold text-white text-xs md:text-sm mb-1">Refleksi Etis</h4>
            <p className="text-[11px] md:text-xs text-slate-300">
                Merawat tanah Papua sebagai "rumah bersama" (Spiritualitas Ekologis / <i>Laudato Si'</i>).
            </p>
        </div>
      </div>
    </div>
  );
}