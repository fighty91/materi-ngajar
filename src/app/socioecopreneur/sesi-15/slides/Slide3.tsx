'use client';

import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Struktur Isi Portofolio Proyek Sosial
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Dokumen portofolio akhir kelompok minimal harus memuat komponen-komponen inti berikut:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-xs pt-2">
        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">1. Latar Belakang</span>
          <span className="text-slate-400">Analisis masalah sosial & ekologi lokal Papua yang diangkat.</span>
        </div>
        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">2. Solusi & MVP</span>
          <span className="text-slate-400">Dokumentasi sketsa, maket, atau sampel produk awal.</span>
        </div>
        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-teal-400 font-bold block">3. Model Bisnis</span>
          <span className="text-slate-400">Kanvas SBMC, struktur keuangan & analisis kelayakan.</span>
        </div>
        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-amber-400 font-bold block">4. Dampak & Refleksi</span>
          <span className="text-slate-400">Pencapaian indikator 3P & evaluasi pembelajaran tim.</span>
        </div>
      </div>
    </div>
  );
}