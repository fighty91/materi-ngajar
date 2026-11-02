// Slide9.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';

export default function Slide9() {
  const checks = [
    { title: "1. Kejelasan SVP", desc: "Apakah pernyataan nilai ekonomi, sosial, dan ekologis sudah terumus tajam?" },
    { title: "2. Kelengkapan BMC", desc: "Apakah 9 blok model bisnis terisi secara logis dan konsisten?" },
    { title: "3. Akurasi Indikator TBL", desc: "Apakah metrik pengukuran ekonomi, sosial, dan lingkungan sudah realistis?" },
    { title: "4. Mitigasi Risiko & Validasi", desc: "Apakah risiko utama sudah diantisipasi dan divalidasi bersama mitra?" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Quality Control
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Checklist Akhir Kualitas Proyek Bisnis Hijau
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {checks.map((c, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 shadow-2xs">
            <CheckSquare size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{c.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}