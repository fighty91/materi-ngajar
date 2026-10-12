'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4">
      <div className="text-center space-y-2">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-800 bg-emerald-200 px-3.5 py-1.5 rounded-full shadow-sm">Konsep Dasar</span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Apa itu Value Proposition?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white p-6 md:p-8 rounded-3xl space-y-4 shadow-xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-3 font-bold text-xl text-emerald-100">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
              <Target size={26} className="text-emerald-300" />
            </div>
            Definisi Sederhana
          </div>
          <p className="text-emerald-50 text-sm sm:text-base leading-relaxed font-medium">
            Proposisi nilai adalah alasan utama mengapa konsumen harus memilih produk atau jasa kita dibandingkan penawaran dari pesaing. Ini adalah inti dari nilai tukar antara bisnis dan pasar.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border-2 border-emerald-500/30 p-6 md:p-8 rounded-3xl space-y-4 shadow-xl flex flex-col justify-between"
        >
          <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
            <div className="p-3 bg-emerald-100 text-emerald-700 rounded-2xl">
              <HelpCircle size={26} />
            </div>
            Dua Pertanyaan Esensial
          </div>
          <ul className="space-y-3 text-sm sm:text-base text-slate-700">
            <li className="flex items-start gap-3 bg-emerald-50/80 p-3 rounded-xl border border-emerald-100">
              <CheckCircle2 size={20} className="text-emerald-600 mt-0.5 shrink-0" />
              <span><strong>Masalah nyata apa</strong> yang sedang kita selesaikan bagi pelanggan?</span>
            </li>
            <li className="flex items-start gap-3 bg-teal-50/80 p-3 rounded-xl border border-teal-100">
              <CheckCircle2 size={20} className="text-teal-600 mt-0.5 shrink-0" />
              <span><strong>Manfaat apa yang benar-benar dirasakan</strong> dan dihargai oleh mereka?</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}