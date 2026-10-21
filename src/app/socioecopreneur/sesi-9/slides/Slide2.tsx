'use client';

import { motion } from 'framer-motion';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Konsep Minimum Viable Product (MVP)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        MVP adalah versi paling awal dari suatu produk yang memiliki fitur/fungsi paling mendasar, namun sudah cukup layak untuk diuji coba dan divalidasi oleh calon konsumen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <h4 className="font-bold text-white text-sm flex items-center gap-2">
            <Target className="text-emerald-400" size={18} />
            Fungsi Utama MVP
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Menunjukkan nilai guna utama produk (*core value proposition*) tanpa harus menunggu produk selesai diproduksi secara sempurna atau massal.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <h4 className="font-bold text-white text-sm flex items-center gap-2">
            <CheckCircle2 className="text-cyan-400" size={18} />
            Pendekatan Terukur
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Membantu menguji hipotesis usaha sosial-ekologi dengan usaha, biaya, dan waktu pembuatan yang seminimal mungkin.
          </p>
        </motion.div>
      </div>
    </div>
  );
}