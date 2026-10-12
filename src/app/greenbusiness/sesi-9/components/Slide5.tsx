'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Coins, HeartHandshake } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-4">
      <div className="text-center space-y-2">
        <span className="text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-3.5 py-1.5 rounded-full shadow-sm">Kerangka Analisis</span>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Penciptaan Nilai Ganda (Dual Value Creation)</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white border-2 border-emerald-500/40 p-6 md:p-8 rounded-3xl space-y-4 shadow-xl hover:border-emerald-600 transition"
        >
          <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
            <div className="p-3.5 bg-emerald-600 text-white rounded-2xl shadow-md">
              <Coins size={26} />
            </div>
            Functional & Economic Value
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Keunggulan produk atau jasa yang langsung dirasakan oleh konsumen: kualitas unggul, rasa, daya tahan, fungsi praktis, serta harga yang kompetitif dan wajar di pasar.
          </p>
          <div className="pt-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">Fokus Utama: Profit & Market Competitiveness</div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white border-2 border-teal-500/40 p-6 md:p-8 rounded-3xl space-y-4 shadow-xl hover:border-teal-600 transition"
        >
          <div className="flex items-center gap-3 text-slate-900 font-bold text-xl">
            <div className="p-3.5 bg-teal-700 text-white rounded-2xl shadow-md">
              <HeartHandshake size={26} />
            </div>
            Social & Ecological Value
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
            Manfaat nyata bagi lingkungan dan masyarakat: penciptaan lapangan kerja adil bagi warga lokal, perlindungan ekosistem, pengurangan limbah, serta pelestarian budaya.
          </p>
          <div className="pt-2 text-xs font-bold text-teal-800 uppercase tracking-wider">Fokus Utama: People & Planet</div>
        </motion.div>
      </div>
    </div>
  );
}