// Slide5.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquareQuote, Target, ShieldCheck } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Strategic Pitching
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Formula Argumentasi Keberlanjutan (The Sustainability Pitch)
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-slate-950">1. Problem & Urgency</h3>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Sajikan masalah nyata lingkungan atau sosial di lokal Papua yang mendesak untuk diselesaikan.
          </p>
        </div>

        <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-slate-950">2. Viable Solution (SVP)</h3>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Jelaskan bagaimana produk/jasa Anda menawarkan nilai ekonomi sekaligus pelestarian ekologis.
          </p>
        </div>

        <div className="p-3 bg-white border border-slate-200 rounded-xl space-y-1 shadow-2xs">
          <h3 className="font-extrabold text-xs sm:text-sm text-slate-950">3. Measurable Impact</h3>
          <p className="text-[10px] sm:text-xs text-slate-600">
            Tunjukkan data kuantitatif indikator TBL yang membuktikan bahwa bisnis ini benar-benar berdampak.
          </p>
        </div>
      </div>
    </div>
  );
}