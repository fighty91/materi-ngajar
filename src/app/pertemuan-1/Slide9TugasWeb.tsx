'use client';

import { Laptop } from 'lucide-react';

export default function Slide9TugasWeb() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-3 flex items-center gap-2">
        <Laptop className="text-emerald-400" /> Tugas Wajib Individu: Resume Web AI
      </h2>
      <div className="p-6 bg-slate-800/60 border border-slate-700/60 rounded-2xl space-y-3 transition-all duration-300 hover:border-emerald-500/40">
        <p className="text-slate-300 text-sm">
          Buat halaman web portofolio pribadi menggunakan AI (Lovable):
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-slate-400 cursor-pointer">
            <div className="font-bold text-white text-xs mb-1">1. Rangkuman AI</div>
            <p className="text-xs text-slate-400">Gunakan AI untuk merangkum poin materi Pertemuan 1.</p>
          </div>
          <div className="p-4 bg-slate-900/60 rounded-xl border border-emerald-500/40 transition-all duration-300 hover:scale-105 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer">
            <div className="font-bold text-emerald-300 text-xs mb-1">2. Refleksi Pribadi</div>
            <p className="text-xs text-slate-400">Tulis 2-3 kalimat dari pemikiran sendiri (tanpa AI).</p>
          </div>
          <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/50 transition-all duration-300 hover:scale-105 hover:border-slate-400 cursor-pointer">
            <div className="font-bold text-white text-xs mb-1">3. Kumpulkan URL</div>
            <p className="text-xs text-slate-400">Setor tautan web sebelum Pertemuan 2 dimulai.</p>
          </div>
        </div>
      </div>
    </div>
  );
}