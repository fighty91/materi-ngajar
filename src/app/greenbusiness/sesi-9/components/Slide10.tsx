'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Slide10() {
  const steps = [
    { 
      num: "1", 
      title: "Komoditas & Tantangan", 
      desc: "Menjelaskan potensi lokal Papua yang dipilih beserta masalah nyata yang ingin diselesaikan.", 
      color: "bg-emerald-600 text-white" 
    },
    { 
      num: "2", 
      title: "Kalimat SVP", 
      desc: "Menampilkan 1 kalimat pernyataan resmi penawaran nilai berdasarkan formula baku.", 
      color: "bg-teal-700 text-white" 
    },
    { 
      num: "3", 
      title: "Penjabaran 3 Pilar", 
      desc: "Menguraikan rincian manfaat ke dalam aspek Ekonomi (Profit), Sosial (People), & Ekologis (Planet).", 
      color: "bg-emerald-700 text-white" 
    },
    { 
      num: "4", 
      title: "Rencana Pitching", 
      desc: "Menyampaikan kesiapan kelompok dalam mempresentasikan gagasan nilai keberlanjutan produk.", 
      color: "bg-slate-900 text-white" 
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      
      {/* Header Slide */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-0.5 sm:space-y-1.5 shrink-0"
      >
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-2xs inline-block">
          Tugas Kelompok (Bagian 2)
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Struktur Presentasi Wajib (&ldquo;Local Hero Pitch&rdquo;)
        </h2>
      </motion.div>

      {/* Grid Kartu 2x2 Responsif */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 pt-0.5">
        {steps.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="p-2.5 sm:p-5 bg-white border border-emerald-500/20 hover:border-emerald-500 rounded-xl sm:rounded-3xl shadow-xs sm:shadow-lg space-y-1 sm:space-y-2 transition-all duration-200 cursor-default"
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className={`w-5 h-5 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl ${s.color} font-black flex items-center justify-center text-[10px] sm:text-xs shadow-xs shrink-0`}>
                {s.num}
              </div>
              <h3 className="font-extrabold text-slate-900 text-xs sm:text-base leading-snug">{s.title}</h3>
            </div>
            <p className="text-[10px] sm:text-sm text-slate-600 font-medium pl-7 sm:pl-10 leading-tight sm:leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}