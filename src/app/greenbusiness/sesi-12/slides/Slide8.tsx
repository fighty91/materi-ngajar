// Slide8.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckSquare } from 'lucide-react';

export default function Slide8() {
  const sections = [
    { title: "1. Ringkasan Eksekutif", desc: "Poin utama pencapaian dan sorotan penting dalam 1 paragraf." },
    { title: "2. Metrik Kinerja TBL", desc: "Tabel ringkas perbandingan target dan realisasi indikator." },
    { title: "3. Cerita Lapangan (Highlights)", desc: "1-2 testimoni atau kisah sukses nyata dari mitra lokal." },
    { title: "4. Rencana Perbaikan", desc: "Evaluasi hambatan dan langkah mitigasi untuk periode berikutnya." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Struktur Pelaporan Praktis
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Format Laporan Dampak 1 Halaman (One-Page Report)
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {sections.map((sec, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 shadow-2xs">
            <CheckSquare size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{sec.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">{sec.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}