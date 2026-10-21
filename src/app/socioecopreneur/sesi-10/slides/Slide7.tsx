'use client';

import { motion } from 'framer-motion';
import { Tag, Sparkles } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Kemasan & Label Edukatif (*Eco-Labeling*)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Kemasan bukan hanya pelindung produk, melainkan media komunikasi langsung kepada pembeli.
      </p>

      <div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
            <Tag size={22} />
          </div>
          <h4 className="font-bold text-white text-sm">Elemen Label Edukatif</h4>
        </div>
        <ul className="space-y-2 text-xs text-slate-400 pl-2">
          <li>• **Asal Bahan:** "Dibuat dari 100% limbah sabut kelapa Pasar Hamadi, Jayapura."</li>
          <li>• **Petunjuk Setelah Pakai:** "Dapat ditanam langsung ke dalam tanah (100% terurai)."</li>
          <li>• **Jejak Dampak:** "Setiap pembelian pot ini menyumbang porsi pendapatan layak bagi perajin lokal."</li>
        </ul>
      </div>
    </div>
  );
}