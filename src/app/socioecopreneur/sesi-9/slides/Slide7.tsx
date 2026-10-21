'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Settings } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Tahapan Alur Kerja Pembuatan MVP
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Prosedur sistematis dalam memproses ide dari konsep visual hingga menjadi barang siap uji.
      </p>

      <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-center text-xs">
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold block">1. Fitur Utama</span>
            <span className="text-slate-400">Tentukan fungsi wajib produk</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold block">2. Sketsa Teknis</span>
            <span className="text-slate-400">Gambar ukuran & detail spesifikasi</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold block">3. Pembuatan Sampel</span>
            <span className="text-slate-400">Olah bahan asli/tiruan</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1">
            <span className="text-emerald-400 font-bold block">4. Lembar Revisi</span>
            <span className="text-slate-400">Catat kekurangan sampel</span>
          </div>
        </div>
      </div>
    </div>
  );
}