// Slide5.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Leaf, Users, DollarSign, Cpu } from 'lucide-react';

export default function Slide5() {
  const risks = [
    { title: "Risiko Ekologis", desc: "Kerusakan ekosistem akibat kesalahan eksploitasi bahan baku alam.", icon: <Leaf size={16} className="text-emerald-600" /> },
    { title: "Risiko Sosial", desc: "Konflik dengan masyarakat adat atau penolakan warga lokal.", icon: <Users size={16} className="text-sky-600" /> },
    { title: "Risiko Finansial", desc: "Fluktuasi biaya bahan baku hijau atau keterlambatan balik modal.", icon: <DollarSign size={16} className="text-amber-600" /> },
    { title: "Risiko Operasional", desc: "Kendala teknis rantai pasok atau kerusakan alat pengolahan.", icon: <Cpu size={16} className="text-teal-600" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Spektrum Risiko
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Empat Kategori Risiko Utama Bisnis Berkelanjutan
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {risks.map((r, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-2xs">
            <div className="p-2 bg-slate-50 rounded-lg shrink-0">
              {r.icon}
            </div>
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{r.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-tight">{r.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}