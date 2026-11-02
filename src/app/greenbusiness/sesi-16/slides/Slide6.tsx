// Slide6.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Slide6() {
  const steps = [
    { title: "1. Dengarkan Sepenuhnya", desc: "Jangan memotong pembicaraan penguji; biarkan pertanyaan selesai disampaikan dengan utuh." },
    { title: "2. Ulangi & Klarifikasi", desc: "Konfirmasi kembali inti pertanyaan untuk memastikan pemahaman Anda sudah tepat." },
    { title: "3. Jawab Berdasarkan Data", desc: "Gunakan rujukan data BMC, indikator TBL, atau studi kasus mitra sebagai dasar argumen." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Strategi Diskusi
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Langkah Efektif Menghadapi Sesi Tanya Jawab Penguji
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        {steps.map((s, idx) => (
          <div key={idx} className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1.5 shadow-2xs">
            <div className="p-1.5 bg-emerald-50 rounded-lg w-fit text-emerald-700">
              <MessageSquare size={16} />
            </div>
            <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{s.title}</h3>
            <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}