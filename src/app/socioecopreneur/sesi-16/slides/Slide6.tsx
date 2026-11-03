'use client';

import { motion } from 'framer-motion';
import { Sparkles, Check } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Sintesis Perjalanan: Sesi 1 hingga Sesi 16
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Pertanggungjawaban akhir merupakan kulminasi dari seluruh proses pembelajaran berbasis OBE yang telah dilalui:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
          <span className="text-emerald-400 font-bold block text-sm">Fase 1 (Sesi 1–7)</span>
          <span className="text-slate-400">Eksplorasi krisis lingkungan Papua, pemetaan empati, perumusan Value Proposition, hingga SBMC.</span>
        </div>
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
          <span className="text-cyan-400 font-bold block text-sm">Fase 2 (Sesi 9–13)</span>
          <span className="text-slate-400">Perancangan MVP, strategi pemasaran edukatif, indikator 3P, validasi konsumen, dan analisis kelayakan.</span>
        </div>
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
          <span className="text-teal-400 font-bold block text-sm">Fase 3 (Sesi 14–16)</span>
          <span className="text-slate-400">Teknik pitching efektif, refleksi etis, portofolio akhir, dan sidang pertanggungjawaban komprehensif.</span>
        </div>
      </div>
    </div>
  );
}