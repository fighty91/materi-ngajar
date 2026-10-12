'use client';

import { Presentation, Layers, Clock, Upload } from 'lucide-react';

export default function Slide9TugasKelompok() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <Presentation className="text-cyan-400" /> Panduan Tugas Kelompok (Mini Pitching)
      </h2>

      <div className="p-6 bg-slate-800/80 border border-cyan-500/40 rounded-2xl space-y-4 shadow-xl transition-all duration-300 hover:border-cyan-400">
        <div className="flex items-center justify-between border-b border-slate-700/60 pb-3">
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Format: 3 Slide Canva / PPT (Tim 3–4 Orang)
          </span>
          <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
            <Clock size={14} /> Durasi: 3 Menit di Kelas
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
          <div className="p-3 bg-slate-900/60 border border-slate-700/80 rounded-xl space-y-1">
            <div className="text-cyan-400 font-bold text-xs">Slide 1: Inovasi Medsos</div>
            <p className="text-[11px] text-slate-300">Pilih 1 eco-product viral (misal: Plastik Pati Singkong/Sedotan Kanji) & jelaskan keunggulannya.</p>
          </div>

          <div className="p-3 bg-slate-900/60 border border-slate-700/80 rounded-xl space-y-1">
            <div className="text-cyan-400 font-bold text-xs">Slide 2: Masalah Lokal</div>
            <p className="text-[11px] text-slate-300">Tampilkan foto 1 masalah sampah/plastik di Jayapura/Papua yang ingin diselesaikan.</p>
          </div>

          <div className="p-3 bg-slate-900/60 border border-slate-700/80 rounded-xl space-y-1">
            <div className="text-cyan-400 font-bold text-xs">Slide 3: Adaptasi Papua</div>
            <p className="text-[11px] text-slate-300">Gagasan bahan lokal Papua (Pati/Ampas Sagu/Ela/Serat Alam) yang bisa diolah jadi solusi.</p>
          </div>
        </div>

        <div className="pt-2 text-xs text-slate-400 flex items-center gap-2 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800">
          <Upload size={16} className="text-cyan-400 shrink-0" />
          <span>Kumpulkan file slide ke <b>Google Drive Kelas</b> sebelum Pertemuan 3 untuk dipresentasikan!</span>
        </div>
      </div>
    </div>
  );
}