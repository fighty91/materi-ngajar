// Slide3.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart3, Rocket } from 'lucide-react';

export default function Slide3() {
  const pillars = [
    { title: "1. Kejelasan Konsep & Logika", desc: "Penyusunan alur dari masalah nyata, pemilihan komoditas lokal, hingga solusi Sustainable Value Proposition.", icon: <FileText size={16} className="text-emerald-600" /> },
    { title: "2. Akurasi Data & Kelayakan", desc: "Ketepatan pengisian 9 blok BMC, perhitungan finansial, dan pemilihan indikator Triple Bottom Line.", icon: <BarChart3 size={16} className="text-teal-600" /> },
    { title: "3. Validasi & Mitigasi Risiko", desc: "Bukti keterlibatan mitra lapangan (masyarakat adat/pemasok) serta strategi antisipasi risiko ekologis.", icon: <Rocket size={16} className="text-sky-600" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Struktur Pertahanan
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Tiga Pilar Utama Pemaparan Proyek Profesional
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        {pillars.map((p, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs flex flex-col justify-between">
            <div className="space-y-1">
              <div className="p-2 bg-slate-50 rounded-lg w-fit">
                {p.icon}
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{p.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}