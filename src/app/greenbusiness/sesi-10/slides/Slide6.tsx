// Slide6.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, ShieldCheck } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Financial Structure
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Dasar Bangunan Keuangan & Keseimbangan Nilai
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3.5 bg-slate-900 text-white rounded-xl sm:rounded-2xl space-y-2 shadow-xs border border-slate-800">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-rose-400">
            <DollarSign size={16} /> Cost Structure (Struktur Biaya)
          </div>
          <ul className="space-y-1 text-[10px] sm:text-xs text-slate-300">
            <li>• Biaya pembelian bahan baku berprinsip perdagangan adil (Fair Trade).</li>
            <li>• Biaya pengolahan limbah dan sertifikasi produk ramah lingkungan.</li>
            <li>• Biaya operasional, distribusi, dan kompensasi pekerja lokal.</li>
          </ul>
        </div>

        <div className="p-3.5 bg-emerald-700 text-white rounded-xl sm:rounded-2xl space-y-2 shadow-xs border border-emerald-600">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-100">
            <TrendingUp size={16} /> Revenue Streams (Aliran Pendapatan)
          </div>
          <ul className="space-y-1 text-[10px] sm:text-xs text-emerald-50">
            <li>• Penjualan langsung produk komoditas olahan bernilai tambah.</li>
            <li>• Pendapatan dari program edukasi/ekowisata berbasis lokasi usaha.</li>
            <li>• Penjualan sampingan produk olahan limbah sirkular (by-product).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}