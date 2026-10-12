'use client';

import { Sparkles, Leaf } from 'lucide-react';

export default function Slide4BioPlasticViral() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <Sparkles className="text-amber-400" /> Fenomena Viral: Plastik Pati Singkong
      </h2>
      <div className="p-5 md:p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl space-y-3 transition-all duration-300 hover:border-emerald-500/50">
        <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
          Di media sosial marak inovasi kantong & sedotan dari pati singkong (*cassava starch*). Mengapa produk ini sangat revolusioner?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          <div className="p-3.5 bg-slate-900/60 border border-emerald-500/30 rounded-xl transition-all duration-300 hover:scale-105 hover:border-emerald-400 cursor-pointer">
            <h4 className="font-bold text-emerald-300 text-xs md:text-sm mb-1 flex items-center gap-1">
              <Leaf size={14} /> 100% Biodegradable
            </h4>
            <p className="text-[11px] md:text-xs text-slate-400">Terurai alami di tanah dalam hitungan minggu atau larut dalam air panas.</p>
          </div>
          <div className="p-3.5 bg-slate-900/60 border border-cyan-500/30 rounded-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400 cursor-pointer">
            <h4 className="font-bold text-cyan-300 text-xs md:text-sm mb-1">🌊 Aman Bagi Ekosistem Laut</h4>
            <p className="text-[11px] md:text-xs text-slate-400">Tidak meninggalkan racun mikroplastik jika tidak sengaja tertelan hewan laut.</p>
          </div>
        </div>
      </div>
    </div>
  );
}