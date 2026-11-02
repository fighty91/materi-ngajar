// Slide7.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, RefreshCw, XSquare, CheckSquare } from 'lucide-react';

export default function Slide7() {
  const strategies = [
    { title: "Avoid (Menghindari)", desc: "Menghentikan aktivitas yang memicu risiko tinggi jika dampaknya merusak lingkungan/sosial." },
    { title: "Mitigate (Mengurangi)", desc: "Menurunkan probabilitas atau tingkat keparahan risiko melalui prosedur pengamanan." },
    { title: "Transfer (Mengalihkan)", desc: "Mengalihkan risiko finansial melalui asuransi hijau atau kemitraan strategis." },
    { title: "Accept (Menerima)", desc: "Menerima risiko skala kecil dengan menyiapkan dana cadangan darurat." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Respon Risiko
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Empat Strategi Utama Mitigasi Risiko
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {strategies.map((s, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 shadow-2xs">
            <CheckSquare size={16} className="text-emerald-600 shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{s.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}