'use client';

import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Contoh Contoh Narasi Pemasaran Edukatif
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Perbandingan narasi biasa vs narasi edukatif berbasis dampak lokal.
      </p>

      <div className="p-5 bg-slate-900/90 border border-emerald-500/30 rounded-2xl space-y-3">
        <div className="text-xs space-y-2">
          <div className="p-3 bg-slate-950 rounded-xl border border-rose-500/20 text-rose-300">
            <strong>Kurang Edukatif:</strong> "Beli pot sabut kelapa murah dan bagus untuk tanaman Anda."
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-emerald-500/40 text-emerald-300">
            <strong>Pemasaran Edukatif:</strong> "Tahukah Anda? Setiap pot sabut kelapa ini menyelamatkan 500gr limbah pasar di Jayapura dan memberikan pendapatan tambahan yang adil bagi ibu-ibu perajin lokal."
          </div>
        </div>
      </div>
    </div>
  );
}