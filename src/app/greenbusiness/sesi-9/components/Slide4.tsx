'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mountain, Trees, Users } from 'lucide-react';

export default function Slide4() {
  const cards = [
    { icon: <Trees size={26} />, title: "Komoditas Endemik", desc: "Memanfaatkan kekayaan alam khas seperti sagu, pinang, buah merah, ikan lokal, dan hasil bumi bernutrisi tinggi.", bg: "bg-emerald-500 text-white", border: "border-emerald-600" },
    { icon: <Mountain size={26} />, title: "Kearifan & Tradisi", desc: "Menyelaraskan operasional bisnis dengan nilai konservasi leluhur dalam mengelola sumber daya alam secara bijak.", bg: "bg-teal-700 text-white", border: "border-teal-800" },
    { icon: <Users size={26} />, title: "Intelektual Populis", desc: "Kehadiran bisnis harus berpihak dan mengangkat potensi kelompok masyarakat lokal yang kurang terlayani.", bg: "bg-slate-900 text-white", border: "border-slate-800" },
  ];

  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4">
      <div className="text-center space-y-2">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-3.5 py-1.5 rounded-full shadow-sm">Kandungan Kontekstual</span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Menggali Kekayaan & Potensi Lokal Papua</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            whileHover={{ y: -8 }}
            className={`${c.bg} p-6 rounded-3xl shadow-xl space-y-4 border-2 ${c.border} flex flex-col justify-between`}
          >
            <div className="p-3 bg-white/20 w-fit rounded-2xl backdrop-blur-md">
              {c.icon}
            </div>
            <div className="space-y-2">
              <h3 className="font-extrabold text-lg">{c.title}</h3>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed">{c.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}