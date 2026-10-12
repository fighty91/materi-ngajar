'use client';

import { Trees } from 'lucide-react';

export default function Slide5Papua() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-3 flex items-center gap-2">
        <Trees className="text-emerald-400" /> Relevansi & Potensi di Papua
      </h2>
      <div className="p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl space-y-4 transition-all duration-300 hover:border-emerald-500/50 hover:bg-slate-800/60">
        <p className="text-slate-300 text-sm leading-relaxed">
          Papua memiliki kekayaan alam luar biasa dan budaya gotong royong yang kuat. Socio & Ecopreneurship hadir untuk memastikan pembangunan ekonomi tidak merusak alam Papua.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-slate-900/60 border border-emerald-500/30 rounded-xl transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer">
            <h4 className="font-bold text-emerald-300 text-sm mb-1">🌿 Potensi Alam Lokal</h4>
            <p className="text-xs text-slate-400">Pengolahan hasil sagu, kopi, buah merah, tanaman obat, hingga kerajinan serat alam (Noken).</p>
          </div>
          <div className="p-4 bg-slate-900/60 border border-cyan-500/30 rounded-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 cursor-pointer">
            <h4 className="font-bold text-cyan-300 text-sm mb-1">🤝 Komunitas & Merek</h4>
            <p className="text-xs text-slate-400">Pemberdayaan mama-mama Papua, pemuda daerah, dan koperasi berbasis kampung.</p>
          </div>
        </div>
      </div>
    </div>
  );
}