'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, RefreshCw, Sparkles } from 'lucide-react';

export default function Slide2MengapaPlanet() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Mengapa Pilar Planet Berada di Inti Bisnis?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        
        <motion.div 
          whileHover={{ scale: 1.03, translateY: -4 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="p-4 bg-slate-900/60 border border-slate-800 hover:border-rose-500/50 rounded-2xl space-y-2 transition-all shadow-lg hover:shadow-rose-500/10 cursor-pointer"
        >
          <div className="flex items-center gap-2 text-rose-400 font-bold text-sm">
            <ShieldAlert size={18} /> Krisis Eksploitasi
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Bisnis konvensional menganggap alam sebagai bahan baku tak terbatas dan tempat pembuangan limbah gratis.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03, translateY: -4 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="p-4 bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 rounded-2xl space-y-2 transition-all shadow-lg hover:shadow-teal-500/10 cursor-pointer"
        >
          <div className="flex items-center gap-2 text-teal-400 font-bold text-sm">
            <RefreshCw size={18} /> Ekonomi Sirkular
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Ecopreneurship merancang ulang rantai produksi agar meminimalkan sampah (*zero waste*) dan memperpanjang siklus bahan.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03, translateY: -4 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="p-4 bg-emerald-950/40 border border-emerald-500/50 hover:border-emerald-400 rounded-2xl space-y-2 transition-all shadow-xl hover:shadow-emerald-500/20 cursor-pointer"
        >
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Sparkles size={18} /> Nilai Tambah Hijau
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            Konsumen global makin menghargai produk etis berlabel ramah lingkungan yang menjaga kelestarian bumi.
          </p>
        </motion.div>

      </div>
    </div>
  );
}