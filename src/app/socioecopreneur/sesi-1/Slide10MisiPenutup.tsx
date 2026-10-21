'use client';

import { Camera } from 'lucide-react';

export default function Slide10MisiPenutup() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-3 flex items-center gap-2">
        <Camera className="text-cyan-400" /> Misi Ringan Minggu Ini & Penutup
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div className="p-6 bg-slate-800/80 border border-slate-700 rounded-2xl space-y-3 transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer">
          <div className="font-bold text-cyan-400 text-lg flex items-center gap-2">
            📸 Misi Foto & Description
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Ambil 1 foto benda ramah lingkungan / tempat usaha lokal di sekitarmu minggu ini. Tulis 2 kalimat penjelasan manfaatnya & kumpulkan ke grup!
          </p>
        </div>

        <div className="p-6 bg-emerald-950/30 border border-emerald-500/40 rounded-2xl space-y-3 text-center flex flex-col justify-center transition-all duration-300 hover:scale-105 hover:bg-emerald-900/40 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 cursor-pointer">
          <div className="font-extrabold text-xl text-emerald-300">"Impact First, Profit Always"</div>
          <p className="text-xs text-slate-400">
            Sampai jumpa di Pertemuan 2! Tetap peka terhadap lingkungan sekitar kita.
          </p>
        </div>
      </div>
    </div>
  );
}