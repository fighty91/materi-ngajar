// Slide3.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, CheckCircle, RefreshCcw } from 'lucide-react';

export default function Slide3() {
  const steps = [
    { title: "Evaluasi Umpan Balik Mitra", desc: "Meninjau kembali catatan dan kritik dari masyarakat adat, konsumen, atau mentor." },
    { title: "Penyesuaian Angka Finansial", desc: "Memastikan struktur biaya dan aliran pendapatan selaras dengan prinsip akuntansi hijau." },
    { title: "Penguatan Dampak Ekologis", desc: "Memastikan operasional bisnis benar-benar meminimalkan jejak karbon dan limbah." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Continuous Improvement
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Prinsip Penyempurnaan Model Bisnis Berkelanjutan
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        {steps.map((s, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
            <div className="p-2 bg-teal-50 rounded-lg w-fit text-teal-700">
              <Wrench size={16} />
            </div>
            <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{s.title}</h3>
            <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}