'use client';

import { motion } from 'framer-motion';
import { LayoutGrid, FileText } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Integrasi SBMC Lengkap (9 Elemen)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Memastikan seluruh 9 elemen Social Business Model Canvas terhubung secara logis dan saling mendukung.
      </p>

      <div className="p-4 bg-slate-900/80 border border-emerald-500/30 rounded-2xl space-y-3">
        {/* Baris 1: Operational Core & Value (5 Elemen Utama) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-[10px] text-center font-semibold">
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-emerald-400 flex flex-col justify-center min-h-[60px]">
            <span className="text-slate-400 block text-[9px]">1</span>
            Key Partners
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-emerald-400 flex flex-col justify-center min-h-[60px]">
            <span className="text-slate-400 block text-[9px]">2</span>
            Key Activities
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-emerald-400 flex flex-col justify-center min-h-[60px]">
            <span className="text-slate-400 block text-[9px]">3</span>
            Key Resources
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-emerald-500/40 bg-emerald-950/20 text-emerald-300 flex flex-col justify-center min-h-[60px] col-span-2 md:col-span-1">
            <span className="text-emerald-400 block text-[9px]">4</span>
            Value Proposition
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-cyan-400 flex flex-col justify-center min-h-[60px] col-span-2 md:col-span-1">
            <span className="text-slate-400 block text-[9px]">5</span>
            Customer & Beneficiary Segments
          </div>
        </div>

        {/* Baris 2: Delivery & Social Impact (2 Elemen Strategis) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[10px] text-center font-semibold">
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-cyan-400 flex flex-col justify-center min-h-[50px]">
            <span className="text-slate-400 block text-[9px]">6</span>
            Channels (Saluran Distribusi)
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-cyan-400 flex flex-col justify-center min-h-[50px]">
            <span className="text-slate-400 block text-[9px]">7</span>
            Impact Metrics (Ukuran Dampak Sosial/Eko)
          </div>
        </div>

        {/* Baris 3: Financial Foundation (2 Elemen Keuangan) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[10px] text-center font-semibold">
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-teal-400 flex flex-col justify-center min-h-[50px]">
            <span className="text-slate-400 block text-[9px]">8</span>
            Cost Structure (Struktur Biaya & HPP)
          </div>
          <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 text-teal-400 flex flex-col justify-center min-h-[50px]">
            <span className="text-slate-400 block text-[9px]">9</span>
            Revenue Streams (Arus Pendapatan & BEP)
          </div>
        </div>
      </div>
    </div>
  );
}