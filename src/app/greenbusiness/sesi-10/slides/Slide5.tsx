// Slide5.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Layers, Handshake } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Internal Infrastructure
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Fokus Kiri Canvas: Mengelola Infrastruktur Eksekusi
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
          <div className="flex items-center gap-2 font-extrabold text-xs text-teal-900">
            <Workflow size={16} className="text-teal-600" /> Key Activities
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Kegiatan inti dalam mengolah bahan baku lokal, proses produksi bebas limbah, dan pengemasan ramah lingkungan.
          </p>
        </div>

        <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
          <div className="flex items-center gap-2 font-extrabold text-xs text-emerald-900">
            <Layers size={16} className="text-emerald-600" /> Key Resources
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Aset fisik, pengetahuan tradisional (kearifan lokal), bahan baku alam endemik, dan tenaga kerja lokal.
          </p>
        </div>

        <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1.5 shadow-2xs">
          <div className="flex items-center gap-2 font-extrabold text-xs text-sky-900">
            <Handshake size={16} className="text-sky-600" /> Key Partners
          </div>
          <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">
            Masyarakat adat, kelompok tani lokal, lembaga akademik, distributor, dan regulator pemerintah lokal.
          </p>
        </div>
      </div>
    </div>
  );
}