// Slide8.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trees, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Penerapan Lapangan Papua
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Studi Kelayakan & Risiko: Pengolahan Sagu & Pangan Lokal
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3.5 bg-white border border-rose-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-rose-900">
            <ShieldAlert size={15} className="text-rose-600" /> Risiko Utama Teridentifikasi
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Ketergantungan penuh pada pasokan batang sagu dari hutan adat dan potensi konflik hak ulayat jika mekanisme bagi hasil tidak transparan.
          </p>
        </div>

        <div className="p-3.5 bg-white border border-emerald-200 rounded-xl space-y-2 shadow-2xs">
          <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-900">
            <ShieldCheck size={15} className="text-emerald-600" /> Solusi Mitigasi Tepat
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Menjalin perjanjian kemitraan resmi berbasis musyawarah adat (MoU), menerapkan reboisasi pohon sagu secara berkala, dan menjamin harga adil bagi pemilik dusun.
          </p>
        </div>
      </div>
    </div>
  );
}