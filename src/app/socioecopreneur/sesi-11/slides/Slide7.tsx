'use client';

import { motion } from 'framer-motion';
import { Table } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Contoh Penerapan Matriks 3P (Studi Kasus Papua)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Ilustrasi perumusan indikator sederhana pada usaha pengolahan sabut kelapa atau pelepah sagu.
      </p>

      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3 text-xs">
        <div className="grid grid-cols-3 gap-2 pb-2 border-b border-slate-800 font-bold text-emerald-400">
          <div>Pilar 3P</div>
          <div>Indikator Utama</div>
          <div>Target Sederhana</div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-slate-800/60 text-slate-300">
          <div className="font-semibold text-white">People</div>
          <div>Jumlah ibu perajin mitra</div>
          <div className="text-slate-400">5 orang aktif per bulan</div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-slate-800/60 text-slate-300">
          <div className="font-semibold text-white">Planet</div>
          <div>Limbah sabut yang diolah</div>
          <div className="text-slate-400">50 kg limbah pasar / bulan</div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-1.5 text-slate-300">
          <div className="font-semibold text-white">Profit</div>
          <div>Unit pot terjual & surplus</div>
          <div className="text-slate-400">100 unit/bulan (BEP tercapai)</div>
        </div>
      </div>
    </div>
  );
}