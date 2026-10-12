'use client';

import { motion } from 'framer-motion';
import { Calculator, Check } from 'lucide-react';

export default function Slide4KalkulasiHPP() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Praktikum: Menghitung HPP per Unit
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Rumus sederhana penentuan Harga Pokok Penjualan (HPP) usaha mikro sosial:
      </p>

      <motion.div className="p-5 bg-slate-900/90 border border-emerald-500/30 rounded-2xl space-y-3">
        <div className="text-xs font-mono bg-slate-950 p-4 rounded-xl border border-slate-800 text-emerald-400">
          HPP per Unit = (Total Biaya Bahan Baku + Total Upah Adil Perajin + Biaya Operasional) / Jumlah Unit Diproduksi
        </div>

        <div className="space-y-2 pt-2 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Check size={14} className="text-emerald-400" />
            <span>**Contoh:** Pembuatan 50 Pot Sabut Kelapa</span>
          </div>
          <p className="text-slate-400 pl-5">
            Bahan baku (Rp 100.000) + Upah Perajin (Rp 150.000) + Operasional (Rp 50.000) = Rp 300.000.<br />
            **HPP per Unit** = Rp 300.000 / 50 unit = **Rp 6.000 / unit**.
          </p>
        </div>
      </motion.div>
    </div>
  );
}