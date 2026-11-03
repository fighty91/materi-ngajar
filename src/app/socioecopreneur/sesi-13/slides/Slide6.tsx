'use client';

import { motion } from 'framer-motion';
import { Table } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Matriks Kelayakan Usaha Akhir
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Format ringkas rangkuman evaluasi kelayakan yang harus disiapkan kelompok.
      </p>

      <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3 text-xs">
        <div className="grid grid-cols-3 gap-2 pb-2 border-b border-slate-800 font-bold text-emerald-400">
          <div>Komponen Evaluasi</div>
          <div>Temuan Lapangan / Hasil</div>
          <div>Status / Tindak Lanjut</div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-slate-800/60 text-slate-300">
          <div className="font-semibold text-white">Validasi Produk (MVP)</div>
          <div>Respon positif pada fungsi dasar pot sabut kelapa</div>
          <div className="text-emerald-400 font-semibold">Layak Produksi</div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-1.5 border-b border-slate-800/60 text-slate-300">
          <div className="font-semibold text-white">Kelayakan Harga & BEP</div>
          <div>HPP Rp6.000, Jual Rp16.000 (BEP tercapai di 60 unit)</div>
          <div className="text-emerald-400 font-semibold">Finansial Sehat</div>
        </div>
        <div className="grid grid-cols-3 gap-2 py-1.5 text-slate-300">
          <div className="font-semibold text-white">Dampak 3P</div>
          <div>Melibatkan 5 perajin & mengolah 50kg limbah/bulan</div>
          <div className="text-emerald-400 font-semibold">Tercapai</div>
        </div>
      </div>
    </div>
  );
}