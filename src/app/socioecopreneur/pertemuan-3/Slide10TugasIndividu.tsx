'use client';

import { motion } from 'framer-motion';
import { Laptop, CheckCircle2 } from 'lucide-react';

export default function Slide10TugasIndividu() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 flex items-center gap-2">
        <Laptop className="text-emerald-400" /> Panduan Tugas Individu
      </h2>
      <motion.div 
        whileHover={{ borderColor: 'rgba(52, 211, 153, 0.6)' }}
        className="p-6 bg-slate-800/80 border border-emerald-500/40 rounded-2xl space-y-4 transition-all shadow-xl"
      >
        <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 inline-block">
          Wadah: Web Lovable
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-200"><b>Resume Ringkas Pertemuan 3:</b> Tuliskan poin utama mengenai Pilar People, perbedaan Charity vs Social Business, dan Inklusi Ekonomi.</p>
          </div>
          <div className="flex items-start gap-2.5">
            <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
            <p className="text-xs text-slate-200"><b>Refleksi Etis Pribadi:</b> Tuliskan 2–3 kalimat pemikiranmu sendiri tentang pentingnya menghargai martabat warga lokal Papua melalui wirausaha sosial.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}