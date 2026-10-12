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
    <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto px-4 py-2">
      {/* Header Slide */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center space-y-1.5"
      >
        <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-3 py-1 rounded-full shadow-2xs inline-block">
          Tugas Kelompok (Bagian 2)
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Struktur Presentasi Wajib (&ldquo;Local Hero Pitch&rdquo;)
        </h2>
      </motion.div>

      {/* Grid Kartu 2x2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
        {steps.map((s, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.1 }}
            whileHover={{ y: -3, scale: 1.015 }}
            className="p-4 sm:p-5 bg-white border-2 border-emerald-500/20 hover:border-emerald-500 rounded-3xl shadow-lg space-y-2 transition-all duration-200 cursor-default"
          >
            <div className="flex items-center gap-3">
              <div className={`w-7 h-7 rounded-xl ${s.color} font-black flex items-center justify-center text-xs shadow-md shrink-0`}>
                {s.num}
              </div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">{s.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 font-medium pl-10 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}