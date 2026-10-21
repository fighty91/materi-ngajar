'use client';

import { motion } from 'framer-motion';
import { Scale, TrendingUp } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Menghitung Titik Impas (BEP) Unit
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Mengetahui jumlah unit minimal yang harus terjual agar seluruh biaya operasional dan upah adil perajin tertutup sepenuhnya (Laba = 0).
      </p>

      <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-4">
        <div className="text-xs font-mono bg-slate-950 p-4 rounded-xl border border-slate-800 text-cyan-400">
          BEP (Unit) = Biaya Tetap / (Harga Jual per Unit - Biaya Variabel per Unit)
        </div>

        <div className="text-xs text-slate-300 space-y-1">
          <p>• Jika Biaya Tetap = Rp 200.000, Harga Jual = Rp 12.000, dan Biaya Variabel/HPP = Rp 7.000:</p>
          <p className="text-emerald-400 font-bold pl-3">BEP Unit = Rp 200.000 / (Rp 12.000 - Rp 7.000) = 40 Unit.</p>
        </div>
      </div>
    </div>
  );
}