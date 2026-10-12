'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Trees, Users } from 'lucide-react';

export default function Slide4() {
  const cards = [
    { 
      icon: <Trees className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />, 
      title: "Komoditas Endemik", 
      desc: "Memanfaatkan kekayaan alam khas seperti sagu, pinang, buah merah, & hasil bumi lokal.", 
      bg: "bg-emerald-500 text-white", 
      border: "border-emerald-600" 
    },
    { 
      icon: <Mountain className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />, 
      title: "Kearifan & Tradisi", 
      desc: "Menyelaraskan operasional bisnis dengan nilai konservasi leluhur secara bijak.", 
      bg: "bg-teal-700 text-white", 
      border: "border-teal-800" 
    },
    { 
      icon: <Users className="w-4 h-4 sm:w-6 sm:h-6 shrink-0" />, 
      title: "Intelektual Populis", 
      desc: "Berpihak dan mengangkat potensi kelompok masyarakat lokal yang kurang terlayani.", 
      bg: "bg-slate-900 text-white", 
      border: "border-slate-800" 
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-6 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      
      {/* Header Slide */}
      <div className="text-center space-y-0.5 sm:space-y-2 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-2 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full shadow-2xs inline-block">
          Kandungan Kontekstual
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Menggali Kekayaan & Potensi Lokal Papua
        </h2>
      </div>

      {/* Grid Kartu Responsif (Flex Row Ringkas di Mobile, Grid 3-Kolom di Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className={`${c.bg} p-2.5 sm:p-6 rounded-xl sm:rounded-3xl shadow-sm sm:shadow-xl border ${c.border} flex flex-row md:flex-col items-center md:items-start gap-2.5 sm:gap-4`}
          >
            <div className="p-1.5 sm:p-3 bg-white/20 w-fit rounded-lg sm:rounded-2xl backdrop-blur-md shrink-0">
              {c.icon}
            </div>
            <div className="space-y-0.5 sm:space-y-2">
              <h3 className="font-extrabold text-xs sm:text-lg leading-snug">{c.title}</h3>
              <p className="text-[10px] sm:text-sm opacity-90 leading-tight sm:leading-relaxed font-normal">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}