'use client';

import { Laptop, CheckCircle2, Globe, FileText } from 'lucide-react';

export default function Slide8TugasIndividu() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <Laptop className="text-emerald-400" /> Panduan Tugas Individu
      </h2>

      <div className="p-6 bg-slate-800/80 border border-emerald-500/40 rounded-2xl space-y-4 shadow-xl transition-all duration-300 hover:border-emerald-400">
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Wadah: Web Lovable Pribadi
          </span>
          {/* <span className="text-xs text-slate-400 font-mono">Tagihan Portofolio</span> */}
        </div>

        <div className="space-y-3 pt-1">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs md:text-sm">1. Resume Ringkas Materi Pertemuan 2</h4>
              <p className="text-xs text-slate-300">Rangkum poin utama tentang Eksternalitas Negatif, Ekonomi Sirkular, dan Inovasi Bio-Product (Pati Singkong/Sagu).</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs md:text-sm">2. Refleksi Etis Pribadi (THINK)</h4>
              <p className="text-xs text-slate-300">Tuliskan 2–3 kalimat refleksi dari pemikiran sendiri tentang pentingnya menjaga alam Papua dari sampah plastik.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-white text-xs md:text-sm">3. Batas Pengumpulan</h4>
              <p className="text-xs text-slate-300">Dipublikasikan pada halaman portofolio web sebelum perkuliahan Pertemuan 3 dimulai.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}