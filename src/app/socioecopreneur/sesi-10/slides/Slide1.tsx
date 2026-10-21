'use client';

import { motion } from 'framer-motion';
import { Megaphone, Sparkles, ShieldCheck, Heart } from 'lucide-react';

export default function Slide1() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto px-2 py-4">
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium"
      >
        <Sparkles size={14} />
        <span>Pertemuan 10 • Socio & Ecopreneurship</span>
      </motion.div>

      <div className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
        >
          Strategi Komunikasi & <span className="text-emerald-400">Pemasaran Edukatif</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-sm md:text-base max-w-2xl"
        >
          Merancang pesan pemasaran ramah lingkungan yang otentik, mengedukasi publik, dan menggerakkan aksi nyata keberlanjutan.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4"
      >
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Megaphone className="text-emerald-400" size={24} />
          <h3 className="font-bold text-white text-sm">Green Marketing</h3>
          <p className="text-xs text-slate-400">Pemasaran bernilai guna tinggi yang mendidik kesadaran konsumen.</p>
        </div>

        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Heart className="text-cyan-400" size={24} />
          <h3 className="font-bold text-white text-sm">Green Storytelling</h3>
          <p className="text-xs text-slate-400">Mengangkat kisah nyata perajin dan pelestarian lingkungan Papua.</p>
        </div>

        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <ShieldCheck className="text-teal-400" size={24} />
          <h3 className="font-bold text-white text-sm">Anti-Greenwashing</h3>
          <p className="text-xs text-slate-400">Menjaga transparansi klaim dampak ekologis dan sosial produk.</p>
        </div>
      </motion.div>
    </div>
  );
}