// Slide2.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Cpu, Presentation, ArrowRight } from 'lucide-react';

export default function Slide2() {
  const steps = [
    { title: "1. Pengumpulan (Raw Data)", desc: "Menghimpun catatan fisik/digital dari aktivitas operasional harian.", icon: <FileSpreadsheet size={16} className="text-emerald-600" /> },
    { title: "2. Pengolahan & Validasi", desc: "Membersihkan data, mengelompokkan, dan menghitung total metrik TBL.", icon: <Cpu size={16} className="text-teal-600" /> },
    { title: "3. Penyajian (Reporting)", desc: "Memvisualisasikan data ke dalam bentuk grafik atau tabel naratif.", icon: <Presentation size={16} className="text-sky-600" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 rounded-full inline-block">
          Alur Informasi
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Siklus Pengolahan Data Menjadi Nilai Strategis
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3">
        {steps.map((s, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08 }}
            className="p-3 bg-white border border-emerald-200 rounded-xl space-y-1.5 shadow-2xs flex flex-col justify-between"
          >
            <div className="space-y-1">
              <div className="p-2 bg-emerald-50 rounded-lg w-fit">
                {s.icon}
              </div>
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{s.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}