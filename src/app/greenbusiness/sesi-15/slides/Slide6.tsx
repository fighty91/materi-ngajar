// Slide6.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Slide6() {
  const qa = [
    { q: "Bagaimana memastikan bisnis ini menguntungkan secara finansial?", a: "Tunjukkan validasi struktur biaya, margin harga wajar, dan efisiensi operasional." },
    { q: "Bagaimana membuktikan ini bukan sekadar Greenwashing?", a: "Sajikan indikator fisik terukur, laporan akuntansi hijau, dan keterlibatan audit mitra." },
    { q: "Bagaimana mitigasi risiko jika pasokan bahan baku lokal terganggu?", a: "Jelaskan jaringan kemitraan cadangan dengan komunitas adat dan diversifikasi pasokan." },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Keterampilan Komunikasi
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Antisipasi Pertanyaan Kritis Investor & Penguji
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
        {qa.map((item, idx) => (
          <div key={idx} className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1.5 shadow-2xs flex flex-col justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-800">
                <HelpCircle size={14} /> Pertanyaan {idx + 1}
              </div>
              <p className="text-[10px] sm:text-xs font-semibold text-slate-900">&ldquo;{item.q}&rdquo;</p>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-1">
                <strong>Respon:</strong> {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}