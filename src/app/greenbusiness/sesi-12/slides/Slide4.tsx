// Slide4.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Table, Layers } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Struktur Tabel Dampak
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Tabulasi Sederhana Kinerja Triple Bottom Line
        </h2>
      </div>

      <div className="bg-white border border-emerald-200 rounded-xl p-3 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 font-bold text-xs text-emerald-900 border-b border-slate-100 pb-1.5">
          <Table size={16} className="text-emerald-600" /> Contoh Matriks Ringkas Laporan Dampak Bulanan
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-[10px] sm:text-xs text-slate-700">
            <thead>
              <tr className="bg-emerald-50 text-emerald-900">
                <th className="p-2 rounded-l-lg">Dimensi TBL</th>
                <th className="p-2">Indikator Utama</th>
                <th className="p-2">Target</th>
                <th className="p-2 rounded-r-lg">Realisasi Aktual</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="p-2 font-bold text-emerald-800">Ekonomi</td>
                <td className="p-2">Margin Laba & Pembelian Lokal</td>
                <td className="p-2">15% / 80%</td>
                <td className="p-2 font-semibold text-emerald-700">18% / 85% (Tercapai)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-sky-800">Sosial</td>
                <td className="p-2">Pekerja Lokal / Mama Papua</td>
                <td className="p-2">20 Orang</td>
                <td className="p-2 font-semibold text-sky-700">22 Orang (Tercapai)</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-teal-800">Lingkungan</td>
                <td className="p-2">Pengurangan Limbah Organik</td>
                <td className="p-2">500 Kg</td>
                <td className="p-2 font-semibold text-teal-700">450 Kg (Perlu Evaluasi)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}