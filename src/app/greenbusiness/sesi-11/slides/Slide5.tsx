// Slide5.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, HeartHandshake, ShieldCheck, GraduationCap } from 'lucide-react';

export default function Slide5() {
  const metrics = [
    { title: "Penyerapan Tenaga Kerja Lokal", desc: "Persentase pekerja berasal dari komunitas lokal/masyarakat adat.", icon: <Users size={16} className="text-sky-600" /> },
    { title: "Kesetaraan & Inklusi", desc: "Partisipasi perempuan adat (misal: mama-mama Papua) dalam rantai nilai.", icon: <HeartHandshake size={16} className="text-emerald-600" /> },
    { title: "Standar Keselamatan (K3)", desc: "Tingkat kecelakaan kerja nol & jaminan kesehatan memadai.", icon: <ShieldCheck size={16} className="text-teal-600" /> },
    { title: "Pelatihan & Kapasitas", desc: "Jumlah jam pelatihan keterampilan teknis dan manajerial.", icon: <GraduationCap size={16} className="text-indigo-600" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-sky-800 bg-sky-200 px-2.5 py-0.5 rounded-full inline-block">
          Pilar 2: Social Metrics
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Indikator Kinerja Sosial & Kesejahteraan
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {metrics.map((m, idx) => (
          <div key={idx} className="p-3 bg-white border border-sky-200 rounded-xl flex items-center gap-3 shadow-2xs">
            <div className="p-2 bg-sky-50 rounded-lg shrink-0">
              {m.icon}
            </div>
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{m.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-tight">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}