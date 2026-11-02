// Slide9.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, ShieldCheck } from 'lucide-react';

export default function Slide9() {
  const indicators = [
    { title: "Komitmen Tertulis / MoU Mitra", desc: "Adanya kesepakatan awal dengan petani, pemasok, atau distributor lokal." },
    { title: "Tingkat Retensi Uji Coba", desc: "Konsumen awal kembali melakukan pembelian atau memberikan ulasan positif." },
    { title: "Kejelasan Struktur Biaya", desc: "Tidak ada kejutan biaya operasional tak terduga selama skala uji coba." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Tolok Ukur Uji
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Indikator Bahwa Model Bisnis Anda Telah Valid
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
        {indicators.map((ind, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
            <div className="p-1.5 bg-teal-50 rounded-lg w-fit text-teal-700">
              <ShieldCheck size={16} />
            </div>
            <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{ind.title}</h3>
            <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">{ind.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}