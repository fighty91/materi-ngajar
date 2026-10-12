'use client';

import { Globe } from 'lucide-react';

export default function Slide1Cover() {
  return (
    <div className="text-center space-y-6 max-w-4xl mx-auto px-2">
      <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-emerald-500/30 cursor-pointer">
        Pertemuan 2 – Pilar Planet
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
        Diagnostik Ekologi Papua: <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
          Isu Material & Inovasi Bio-Product
        </span>
      </h1>
      <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">
        Dari Fenomena Plastik Singkong di Medsos hingga Potensi Sagu Lokal Papua.
      </p>
    </div>
  );
}