'use client';

import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Formulasi Pesan: Kerangka AIDA Hijau
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Struktur komunikasi untuk mengubah perhatian publik menjadi dukungan dan pembelian nyata.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs pt-2">
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">1. Attention</span>
          <span className="text-slate-400">Tarik perhatian dengan fakta krisis limbah/lingkungan lokal.</span>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">2. Interest</span>
          <span className="text-slate-400">Tunjukkan inovasi produk olahan ramah lingkungan.</span>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <span className="text-teal-400 font-bold block">3. Desire</span>
          <span className="text-slate-400">Jelaskan dampak sosial (memberdayakan perajin Papua).</span>
        </div>
        <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl space-y-1">
          <span className="text-amber-400 font-bold block">4. Action</span>
          <span className="text-slate-400">Ajak membeli sambil berkontribusi pada kelestarian.</span>
        </div>
      </div>
    </div>
  );
}