'use client';

import { motion } from 'framer-motion';
import { Presentation, Sparkles } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Struktur Presentasi Proposal Akhir (Pitch Deck)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Alur penyampaian ide bisnis yang ringkas, meyakinkan, dan berbobot akademis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs pt-2">
        <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">1. Masalah & Potensi</span>
          <span className="text-slate-400">Krisis lingkungan & sosial nyata di Papua.</span>
        </div>
        <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">2. Solusi & MVP</span>
          <span className="text-slate-400">Produk olahan & hasil uji coba konsumen.</span>
        </div>
        <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-teal-400 font-bold block">3. Model Bisnis (SBMC)</span>
          <span className="text-slate-400">Logika operasional & struktur keuangan.</span>
        </div>
        <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-amber-400 font-bold block">4. Dampak 3P</span>
          <span className="text-slate-400">Bukti nyata kontribusi sosial & ekologis.</span>
        </div>
      </div>
    </div>
  );
}