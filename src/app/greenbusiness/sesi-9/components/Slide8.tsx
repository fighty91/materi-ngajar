'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, HeartHandshake, Leaf } from 'lucide-react';

export default function Slide8() {
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
          Studi Kasus (Bagian 2)
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Formulasi Sustainable Value Proposition
        </h2>
      </motion.div>

      {/* Formula Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="bg-slate-900 text-white p-3 sm:p-6 rounded-xl sm:rounded-3xl space-y-2 sm:space-y-3 border border-slate-800 shadow-md sm:shadow-xl"
      >
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-black uppercase tracking-wider text-amber-400">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" /> Statement Value Proposition (SVP)
        </div>
        <div className="text-[11px] sm:text-base text-slate-100 leading-snug sm:leading-relaxed font-medium italic bg-slate-800/80 p-2.5 sm:p-4 rounded-lg sm:rounded-2xl border border-slate-700/60">
          &ldquo;Menyediakan pangan olahan lokal yang praktis, sehat, dan bebas gluten, sekaligus menjaga kelestarian hutan sagu serta memberdayakan ekonomi perempuan adat di Papua.&rdquo;
        </div>
      </motion.div>

      {/* 3 Pillar Value Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3.5 pt-0.5">
        
        {/* Nilai Ekonomi */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="p-2.5 sm:p-4 bg-emerald-50 rounded-xl sm:rounded-2xl border border-emerald-200 hover:border-emerald-300 space-y-1 transition-colors duration-200 shadow-2xs cursor-default"
        >
          <div className="text-[10px] sm:text-xs font-black text-emerald-900 uppercase flex items-center gap-1.5">
            <ShieldCheck className="text-emerald-600 shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Nilai Ekonomi</span>
          </div>
          <p className="text-[10px] sm:text-sm text-slate-700 font-medium leading-tight sm:leading-relaxed">
            Praktis, daya tahan simpan lama, higienis, bebas gluten, dan harga bersaing.
          </p>
        </motion.div>

        {/* Nilai Sosial */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="p-2.5 sm:p-4 bg-sky-50 rounded-xl sm:rounded-2xl border border-sky-200 hover:border-sky-300 space-y-1 transition-colors duration-200 shadow-2xs cursor-default"
        >
          <div className="text-[10px] sm:text-xs font-black text-sky-900 uppercase flex items-center gap-1.5">
            <HeartHandshake className="text-sky-600 shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Nilai Sosial</span>
          </div>
          <p className="text-[10px] sm:text-sm text-slate-700 font-medium leading-tight sm:leading-relaxed">
            Pemberdayaan ibu rumah tangga lokal & jaminan harga adil bagi petani.
          </p>
        </motion.div>

        {/* Nilai Ekologis */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="p-2.5 sm:p-4 bg-teal-50 rounded-xl sm:rounded-2xl border border-teal-200 hover:border-teal-300 space-y-1 transition-colors duration-200 shadow-2xs cursor-default"
        >
          <div className="text-[10px] sm:text-xs font-black text-teal-950 uppercase flex items-center gap-1.5">
            <Leaf className="text-teal-600 shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Nilai Ekologis</span>
          </div>
          <p className="text-[10px] sm:text-sm text-slate-700 font-medium leading-tight sm:leading-relaxed">
            Kemasan biodegradable & penjagaan kelestarian tutupan hutan sagu.
          </p>
        </motion.div>

      </div>
    </div>
  );
}