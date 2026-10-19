// Slide4.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Megaphone, Heart, Target } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Market-Facing Aspect
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Fokus Kanan Canvas: Menjangkau & Memikat Konsumen
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-900">
            <Users size={16} className="text-emerald-700" /> Customer Segments
          </div>
          <p className="text-[10px] sm:text-xs text-slate-700">
            Penetapan profil konsumen secara spesifik (demografi, psikografi, dan kesadaran ekologis).
          </p>
        </div>

        <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl space-y-1">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-teal-900">
            <Target size={16} className="text-teal-700" /> Value Proposition Alignment
          </div>
          <p className="text-[10px] sm:text-xs text-slate-700">
            Memastikan manfaat fungsional, sosial, dan ekologis menjawab masalah nyata konsumen.
          </p>
        </div>

        <div className="p-3 bg-sky-50 border border-sky-200 rounded-xl space-y-1">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-sky-900">
            <Megaphone size={16} className="text-sky-700" /> Channels
          </div>
          <p className="text-[10px] sm:text-xs text-slate-700">
            Media interaksi & penyampaian produk (penjualan langsung, pasar digital, atau komunitas lokal).
          </p>
        </div>

        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl space-y-1">
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-amber-900">
            <Heart size={16} className="text-amber-700" /> Customer Relationships
          </div>
          <p className="text-[10px] sm:text-xs text-slate-700">
            Membangun kepercayaan dan loyalitas pelanggan melalui transparansi produk hijau.
          </p>
        </div>
      </div>
    </div>
  );
}