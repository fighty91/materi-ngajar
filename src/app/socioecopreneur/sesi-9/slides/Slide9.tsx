'use client';

import { motion } from 'framer-motion';
import { RefreshCw, Zap } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Siklus Iterasi: Build - Measure - Learn
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Proses penyempurnaan produk secara terus-menerus berdasarkan hasil pengujian sampel awal.
      </p>

      <div className="p-5 bg-slate-900/80 border border-emerald-500/30 rounded-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <h4 className="font-bold text-emerald-400 text-sm">BUILD (Buat)</h4>
            <p className="text-[11px] text-slate-400">Buat sampel MVP dari sketsa yang dirancang.</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <h4 className="font-bold text-cyan-400 text-sm">MEASURE (Ukur)</h4>
            <p className="text-[11px] text-slate-400">Uji performa produk dan kumpulkan respon pengguna.</p>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <h4 className="font-bold text-teal-400 text-sm">LEARN (Pelajari)</h4>
            <p className="text-[11px] text-slate-400">Evaluasi kelemahan untuk revisi ke versi berikutnya.</p>
          </div>
        </div>
      </div>
    </div>
  );
}