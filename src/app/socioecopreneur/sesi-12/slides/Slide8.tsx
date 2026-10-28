'use client';

import { motion } from 'framer-motion';
import { ArrowRight, RefreshCw } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Studi Kasus: Dari Umpan Balik ke Aksi Nyata
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Ilustrasi bagaimana kelompok merespons keluhan lapangan untuk menyempurnakan produk.
      </p>

      <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3 text-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 bg-slate-950 rounded-xl border border-rose-500/20 space-y-1">
            <span className="text-rose-400 font-bold block">1. Umpan Balik Diterima</span>
            <span className="text-slate-400">"Pot sabut kelapa ini terlalu tipis di bagian bawah, jadi gampang lembek kalau disiram air terlalu sering."</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-cyan-500/20 space-y-1">
            <span className="text-cyan-400 font-bold block">2. Evaluasi Tim</span>
            <span className="text-slate-400">Struktur ketebalan dinding bawah kurang padat. Perlu penambahan takaran perekat alami dan tekanan press.</span>
          </div>
          <div className="p-3 bg-slate-950 rounded-xl border border-emerald-500/20 space-y-1">
            <span className="text-emerald-400 font-bold block">3. Tindakan Perbaikan</span>
            <span className="text-slate-400">Revisi cetakan sampel (MVP V2) dengan ketebalan ekstra 3mm di bagian dasar.</span>
          </div>
        </div>
      </div>
    </div>
  );
}