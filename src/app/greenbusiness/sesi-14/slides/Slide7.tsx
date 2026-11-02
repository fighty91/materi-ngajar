// Slide7.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EyeOff, CheckCircle, ShieldAlert } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Integritas Riset
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Menghindari Bias Konfirmasi (Confirmation Bias)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-4">
        <div className="p-3 bg-white border border-rose-200 rounded-xl space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-xs text-rose-900">
            <ShieldAlert size={15} className="text-rose-600" /> Jebakan Bias Konfirmasi
          </div>
          <p className="text-[10px] sm:text-xs text-slate-700">
            Hanya mendengarkan pujian atau masukan yang sejalan dengan ide kita, serta mengabaikan kritik atau penolakan dari mitra lapangan.
          </p>
        </div>

        <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1">
          <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-900">
            <CheckCircle size={15} className="text-emerald-600" /> Sikap Objektif & Terbuka
          </div>
          <p className="text-[10px] sm:text-xs text-slate-700">
            Aktif mencari umpan balik negatif atau hal-hal yang belum berjalan baik agar model bisnis dapat diperbaiki secara fundamental sebelum peluncuran penuh.
          </p>
        </div>
      </div>
    </div>
  );
}