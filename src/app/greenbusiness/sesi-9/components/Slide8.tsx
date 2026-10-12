'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, HeartHandshake, Leaf } from 'lucide-react';

export default function Slide8() {
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
          Studi Kasus (Bagian 2)
        </span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Formulasi Sustainable Value Proposition
        </h2>
      </motion.div>

      {/* Formula Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="bg-slate-900 text-white p-5 sm:p-6 rounded-3xl space-y-3 border border-slate-800 shadow-xl"
      >
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-amber-400">
          <Sparkles size={18} /> Statement Value Proposition (SVP)
        </div>
        <div className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium italic bg-slate-800/80 p-4 rounded-2xl border border-slate-700/60">
          &ldquo;Menyediakan pangan olahan lokal yang praktis, sehat, dan bebas gluten, sekaligus menjaga kelestarian hutan sagu serta memberdayakan ekonomi perempuan adat di Papua.&rdquo;
        </div>
      </motion.div>

      {/* 3 Pillar Value Grid (Dengan Animasi Hover) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
        {/* Nilai Ekonomi */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          whileHover={{ y: -3, scale: 1.02 }}
          className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 hover:border-emerald-300 space-y-1.5 transition-colors duration-200 shadow-2xs hover:shadow-md cursor-default"
        >
          <div className="text-xs font-black text-emerald-900 uppercase flex items-center gap-1.5">
            <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
            <span>Nilai Ekonomi</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            Praktis, daya tahan simpan lama, higienis, bebas gluten, dan harga bersaing.
          </p>
        </motion.div>

        {/* Nilai Sosial */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          whileHover={{ y: -3, scale: 1.02 }}
          className="p-4 bg-sky-50 rounded-2xl border border-sky-200 hover:border-sky-300 space-y-1.5 transition-colors duration-200 shadow-2xs hover:shadow-md cursor-default"
        >
          <div className="text-xs font-black text-sky-900 uppercase flex items-center gap-1.5">
            <HeartHandshake size={18} className="text-sky-600 shrink-0" />
            <span>Nilai Sosial</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            Pemberdayaan ibu rumah tangga lokal & jaminan harga adil bagi petani.
          </p>
        </motion.div>

        {/* Nilai Ekologis */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          whileHover={{ y: -3, scale: 1.02 }}
          className="p-4 bg-teal-50 rounded-2xl border border-teal-200 hover:border-teal-300 space-y-1.5 transition-colors duration-200 shadow-2xs hover:shadow-md cursor-default"
        >
          <div className="text-xs font-black text-teal-950 uppercase flex items-center gap-1.5">
            <Leaf size={18} className="text-teal-600 shrink-0" />
            <span>Nilai Ekologis</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            Kemasan biodegradable & penjagaan kelestarian tutupan hutan sagu.
          </p>
        </motion.div>
      </div>
    </div>
  );
}