'use client';

import { Trees, Lightbulb } from 'lucide-react';

export default function Slide5PotensiSaguPapua() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <Trees className="text-emerald-400" /> Adaptasi Lokal: Dari Singkong ke Pati Sagu!
      </h2>
      <div className="p-6 bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/50 rounded-2xl space-y-4 shadow-xl transition-all duration-300 hover:border-emerald-400">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-base md:text-lg">
          <Lightbulb size={22} /> Tantangan Bagi Mahasiswa Papua:
        </div>
        <p className="text-slate-200 text-xs md:text-sm leading-relaxed">
          "Jika pengusaha luar memakai singkong/rumput laut, Papua punya **potensi Pati & Ampas Sagu (Ela)** yang sangat melimpah. Bisakah kita mengolahnya menjadi kantong/kemasan alternatif ramah lingkungan lokal?"
        </p>
      </div>
    </div>
  );
}