// Slide3.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Slide3() {
  const blocks = [
    { title: "KP (Key Partners)", desc: "Mitra kerja strategis" },
    { title: "KA (Key Activities)", desc: "Aktivitas utama operasional" },
    { title: "KR (Key Resources)", desc: "Aset penting bisnis" },
    { title: "VP (Value Propositions)", desc: "Nilai/solusi yang ditawarkan" },
    { title: "CR (Customer Relationships)", desc: "Hubungan dengan pelanggan" },
    { title: "CH (Channels)", desc: "Saluran distribusi & promosi" },
    { title: "CS (Customer Segments)", desc: "Target pembeli/konsumen" },
    { title: "CS (Cost Structure)", desc: "Struktur alokasi biaya" },
    { title: "RS (Revenue Streams)", desc: "Sumber arus pendapatan" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2 sm:space-y-4 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Struktur Kerangka Kerja
        </span>
        <h2 className="text-base sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
          Pemetaan 9 Blok Dasar Business Model Canvas
        </h2>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 gap-1.5 sm:gap-2">
        {blocks.map((b, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            className="p-2 sm:p-3 bg-white border border-teal-200/80 rounded-lg sm:rounded-xl shadow-2xs space-y-0.5"
          >
            <h3 className="font-extrabold text-[10px] sm:text-xs text-teal-900 leading-tight">{b.title}</h3>
            <p className="text-[9px] sm:text-[11px] text-slate-600 font-medium leading-tight">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}