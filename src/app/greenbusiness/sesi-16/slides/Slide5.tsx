// Slide5.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2 } from 'lucide-react';

export default function Slide5() {
  const timeline = [
    { time: "Menit 1 - 2", title: "Hook & Identifikasi Masalah", desc: "Paparkan urgensi masalah lokal Papua dan potensi komoditas yang diangkat." },
    { time: "Menit 3 - 5", title: "Solusi & Model Bisnis (SVP & BMC)", desc: "Jelaskan penawaran nilai unik dan peta 9 blok model bisnis Anda." },
    { time: "Menit 6 - 8", title: "Dampak & Mitigasi Risiko", desc: "Tunjukkan metrik Triple Bottom Line dan cara mengantisipasi risiko lapangan." },
    { time: "Menit 9 - 10", title: "Kesimpulan & Penutup", desc: "Sampaikan ringkasan penutup yang kuat serta kesiapan eksekusi proyek." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Manajemen Durasi
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Alokasi Waktu Ideal Presentasi (Elevator to Defense Pitch)
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {timeline.map((t, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-start gap-2.5 shadow-2xs">
            <span className="px-2 py-0.5 bg-teal-700 text-white rounded-md font-mono text-[9px] font-bold shrink-0">{t.time}</span>
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{t.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}