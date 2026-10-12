'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle } from 'lucide-react';

export default function Slide11() {
  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center text-center">
      
      {/* Badge Refleksi */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] sm:text-sm font-bold shadow-md shadow-emerald-600/20 mx-auto shrink-0"
      >
        <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" /> Refleksi Akhir Sesi
      </motion.div>

      {/* Judul Utama */}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight"
      >
        ACT . COUNT . THINK
      </motion.h2>

      {/* Grid 3 Kartu Refleksi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 text-left max-w-3xl mx-auto pt-0.5">
        
        {/* ACT */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="p-2.5 sm:p-5 bg-emerald-600 text-white border border-emerald-500 rounded-xl sm:rounded-3xl shadow-sm sm:shadow-xl space-y-1 sm:space-y-2 flex flex-col justify-between"
        >
          <div className="font-extrabold text-emerald-100 text-xs sm:text-sm flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" /> 
            <span>ACT (Aksi Nyata)</span>
          </div>
          <p className="text-[10px] sm:text-xs text-emerald-50 leading-tight sm:leading-relaxed font-medium">
            Memulai dari identifikasi masalah nyata di komunitas dan potensi komoditas lokal Papua.
          </p>
        </motion.div>

        {/* COUNT */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-2.5 sm:p-5 bg-teal-700 text-white border border-teal-600 rounded-xl sm:rounded-3xl shadow-sm sm:shadow-xl space-y-1 sm:space-y-2 flex flex-col justify-between"
        >
          <div className="font-extrabold text-teal-100 text-xs sm:text-sm flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" /> 
            <span>COUNT (Akuntabilitas)</span>
          </div>
          <p className="text-[10px] sm:text-xs text-teal-50 leading-tight sm:leading-relaxed font-medium">
            Memastikan penciptaan nilai ganda yang terukur pada aspek ekonomi, sosial, dan ekologis.
          </p>
        </motion.div>

        {/* THINK */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="p-2.5 sm:p-5 bg-slate-900 text-white border border-slate-800 rounded-xl sm:rounded-3xl shadow-sm sm:shadow-xl space-y-1 sm:space-y-2 flex flex-col justify-between"
        >
          <div className="font-extrabold text-emerald-400 text-xs sm:text-sm flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0" /> 
            <span>THINK (Refleksi Etis)</span>
          </div>
          <p className="text-[10px] sm:text-xs text-slate-300 leading-tight sm:leading-relaxed font-medium">
            Menjunjung tinggi etika bisnis, keberpihakan pada masyarakat, dan spiritualitas ekologis.
          </p>
        </motion.div>

      </div>
    </div>
  );
}