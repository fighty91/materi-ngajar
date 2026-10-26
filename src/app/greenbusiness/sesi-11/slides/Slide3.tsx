// Slide3.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Slide3() {
  const criteria = [
    { code: "S", title: "Specific", desc: "Fokus pada 1 dimensi dampak yang jelas." },
    { code: "M", title: "Measurable", desc: "Dapat dihitung secara kuantitatif/kualitatif baku." },
    { code: "A", title: "Actionable", desc: "Dapat ditindaklanjuti dengan strategi riil." },
    { code: "R", title: "Relevant", desc: "Sesuai dengan skala & konteks bisnis lokal." },
    { code: "T", title: "Time-bound", desc: "Memiliki target batas waktu pencapaian." },
    { code: "S", title: "Sustainable", desc: "Menjaga daya dukung ekosistem jangka panjang." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Standar Pemilihan Metrics
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Kriteria Memilih Indikator yang Tepat (SMART-S)
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        {criteria.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="p-2.5 sm:p-3 bg-white border border-teal-200 rounded-lg sm:rounded-xl shadow-2xs space-y-0.5"
          >
            <div className="flex items-center gap-1.5 font-extrabold text-xs sm:text-sm text-teal-900">
              <span className="w-5 h-5 bg-teal-700 text-white rounded-md flex items-center justify-center text-[10px] font-mono shrink-0">
                {c.code}
              </span>
              <span>{c.title}</span>
            </div>
            <p className="text-[9px] sm:text-xs text-slate-600 font-medium leading-tight">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}