'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Menghindari Bahaya Greenwashing
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        *Greenwashing* adalah klaim ramah lingkungan yang berlebihan atau palsu tanpa bukti autentik yang dapat dipertanggungjawabkan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-rose-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
            <ShieldAlert size={18} />
            <span>Ciri Greenwashing (Hindari!)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            • Menggunakan istilah ambigu ("100% Alam") tanpa sertifikasi/fakta.<br />
            • Menyembunyikan dampak negatif dari proses produksi lainnya.
          </p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-emerald-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 size={18} />
            <span>Komunikasi Jujur (Prinsip Kita)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            • Menyajikan data terukur (jumlah kg limbah yang terolah).<br />
            • Transparan mengenai keterbatasan proses produksi saat ini.
          </p>
        </motion.div>
      </div>
    </div>
  );
}