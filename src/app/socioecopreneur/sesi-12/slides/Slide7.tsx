'use client';

import { motion } from 'framer-motion';
import { Filter, Check } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Kerangka Menyaring Umpan Balik (*Sorting*)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Tidak semua masukan harus langsung dikerjakan. Kelompok perlu memilah mana yang prioritas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
        <div className="p-4 bg-slate-900/80 border border-emerald-500/40 rounded-xl space-y-2">
          <span className="text-emerald-400 font-bold block text-sm">1. Wajib Segera (Critical)</span>
          <span className="text-slate-400">Masukan terkait fungsi utama yang gagal (contoh: pot mudah bocor atau retak saat diangkat).</span>
        </div>
        <div className="p-4 bg-slate-900/80 border border-cyan-500/40 rounded-xl space-y-2">
          <span className="text-cyan-400 font-bold block text-sm">2. Dipertimbangkan (Useful)</span>
          <span className="text-slate-400">Masukan estetika atau tambahan fitur pendukung yang sering diminta responden (contoh: variasi warna).</span>
        </div>
        <div className="p-4 bg-slate-900/80 border border-slate-700 rounded-xl space-y-2">
          <span className="text-slate-400 font-bold block text-sm">3. Diabaikan Sementera</span>
          <span className="text-slate-400">Permintaan ekstrem dari satu orang yang bertentangan dengan visi dasar produk sosial-ekologi.</span>
        </div>
      </div>
    </div>
  );
}