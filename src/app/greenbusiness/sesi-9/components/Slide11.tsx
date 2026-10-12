'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, CheckCircle } from 'lucide-react';

export default function Slide11() {
  return (
    <div className="text-center space-y-6 max-w-4xl mx-auto px-4 py-4">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-bold shadow-lg shadow-emerald-600/20"
      >
        <Compass size={16} className="animate-spin" /> Refleksi Akhir Sesi
      </motion.div>

      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight"
      >
        ACT . COUNT . THINK
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-3xl mx-auto pt-2">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-5 bg-emerald-600 text-white border border-emerald-500 rounded-3xl shadow-xl space-y-2"
        >
          <div className="font-extrabold text-emerald-100 text-sm flex items-center gap-2">
            <CheckCircle size={18} className="text-white" /> ACT (Aksi Nyata)
          </div>
          <p className="text-xs text-emerald-50 leading-relaxed font-medium">
            Memulai dari identifikasi masalah nyata di komunitas dan potensi komoditas lokal Papua.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="p-5 bg-teal-700 text-white border border-teal-600 rounded-3xl shadow-xl space-y-2"
        >
          <div className="font-extrabold text-teal-100 text-sm flex items-center gap-2">
            <CheckCircle size={18} className="text-white" /> COUNT (Akuntabilitas)
          </div>
          <p className="text-xs text-teal-50 leading-relaxed font-medium">
            Memastikan penciptaan nilai ganda yang terukur pada aspek ekonomi, sosial, dan ekologis.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="p-5 bg-slate-900 text-white border border-slate-800 rounded-3xl shadow-xl space-y-2"
        >
          <div className="font-extrabold text-emerald-400 text-sm flex items-center gap-2">
            <CheckCircle size={18} className="text-emerald-400" /> THINK (Refleksi Etis)
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-medium">
            Menjunjung tinggi etika bisnis, keberpihakan pada masyarakat, dan spiritualitas ekologis.
          </p>
        </motion.div>
      </div>
    </div>
  );
}