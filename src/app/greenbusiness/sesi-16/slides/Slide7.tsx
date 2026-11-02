// Slide7.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Sparkles } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Nilai Jangka Panjang
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Proyek Ini Sebagai Portofolio Profesional Anda
        </h2>
      </div>

      <div className="bg-white border border-teal-200 rounded-2xl p-4 space-y-2 shadow-2xs">
        <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-teal-900">
          <Briefcase size={18} className="text-teal-700" /> Bukti Nyata Kompetensi Akuntansi & Manajemen Hijau
        </div>
        <p className="text-[10px] sm:text-xs text-slate-700 leading-relaxed">
          Dokumen rancangan bisnis berkelanjutan (*Green Business Project*) yang Anda susun bukan sekadar tugas akhir mata kuliah, melainkan portofolio profesional yang dapat dibawa ke dunia industri, inkubator bisnis, lembaga permodalan, maupun pengabdian masyarakat nyata di Papua.
        </p>
      </div>
    </div>
  );
}