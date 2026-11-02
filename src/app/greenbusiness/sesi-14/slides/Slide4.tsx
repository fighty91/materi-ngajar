// Slide4.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, TestTube, FileSearch } from 'lucide-react';

export default function Slide4() {
  const methods = [
    { title: "1. Wawancara Mendalam (In-Depth Interview)", desc: "Menggali masukan kualitatif langsung dari mitra dan calon konsumen terkait pain points produk." },
    { title: "2. Uji Coba Terbatas (Pilot Project)", desc: "Menjalankan operasional skala kecil untuk melihat hambatan nyata di lapangan." },
    { title: "3. Focus Group Discussion (FGD)", desc: "Diskusi kelompok terarah bersama tokoh adat, akademisi, dan pelaku usaha." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Teknik Pengujian
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Tiga Metode Utama Validasi Lapangan
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        {methods.map((m, idx) => (
          <div key={idx} className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1.5 shadow-2xs flex flex-col justify-between">
            <div className="space-y-1">
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-mono text-[9px] font-bold">Metode 0{idx + 1}</span>
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{m.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}