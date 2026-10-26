// Slide6.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Etika Penyajian Data
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Menghindari Distorsi & Manipulasi Informasi
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-xs text-amber-900">
            <ShieldAlert size={15} className="text-amber-600" /> Jebakan Visual (Misleading Charts)
          </div>
          <p className="text-[10px] sm:text-xs text-slate-700">
            Memotong sumbu Y pada grafik batang agar perbedaan kecil terlihat sangat masif. Selalu gunakan skala grafik yang jujur dan proporsional.
          </p>
        </div>

        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-900">
            <CheckCircle2 size={15} className="text-emerald-600" /> Prinsip Transparansi Penuh
          </div>
          <p className="text-[10px] sm:text-xs text-slate-700">
            Sajikan juga pencapaian yang belum memenuhi target beserta hambatan lapangannya. Transparansi membangun kredibilitas jangka panjang.
          </p>
        </div>
      </div>
    </div>
  );
}