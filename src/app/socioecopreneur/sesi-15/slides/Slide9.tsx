'use client';

import { motion } from 'framer-motion';
import { Heart, Trophy } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Pesan Penutup: Teruslah Berdampak
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Catatan motivasi untuk mengakhiri perjalanan perkuliahan *Socio & Ecopreneurship*.
      </p>

      <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3 text-xs">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
          <Trophy size={18} />
          <span>Wirausaha Berhati Nurani</span>
        </div>
        <p className="text-slate-300 leading-relaxed">
          "Kesuksesan sejati seorang *ecopreneur* bukan hanya seberapa besar omzet yang dihasilkan, tetapi seberapa besar martabat manusia yang diangkat dan seberapa lestari alam yang diwariskan."
        </p>
        <p className="text-slate-400 italic pt-1">
          — Anonym
        </p>
      </div>
    </div>
  );
}