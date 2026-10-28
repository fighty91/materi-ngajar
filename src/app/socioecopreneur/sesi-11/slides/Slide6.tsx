'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Karakteristik Indikator Sederhana (SMART)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Indikator dampak yang baik harus memenuhi kriteria praktis agar mudah dihitung oleh kelompok usaha.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs pt-2">
        <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">Specific (Spesifik)</span>
          <span className="text-slate-400">Fokus pada satu jenis perubahan nyata (contoh: berat limbah terolah, bukan "kebersihan umum").</span>
        </div>
        <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">Measurable (Terukur)</span>
          <span className="text-slate-400">Memiliki angka atau satuan yang jelas (kg, jumlah orang, rupiah, persentase).</span>
        </div>
        <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-teal-400 font-bold block">Achievable & Relevant (Realistis)</span>
          <span className="text-slate-400">Dapat dicapai dengan kapasitas kelompok dan selaras langsung dengan tujuan bisnis.</span>
        </div>
        <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-amber-400 font-bold block">Time-bound (Berbasis Waktu)</span>
          <span className="text-slate-400">Target pencapaian ditetapkan dalam kurun waktu tertentu (per bulan / per tahun).</span>
        </div>
      </div>
    </div>
  );
}