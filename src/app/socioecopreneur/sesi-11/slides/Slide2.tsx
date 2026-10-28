'use client';

import { motion } from 'framer-motion';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Mengapa Bisnis Sosial Butuh Indikator Dampak?
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Niat baik saja tidak cukup. Usaha sosial wajib memiliki alat ukur untuk membuktikan bahwa aktivitas bisnis benar-benar menghasilkan perubahan nyata.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Target size={20} />
            <span>Akuntabilitas & Kepercayaan</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Memberikan bukti transparan kepada konsumen, mitra, dan investor bahwa klaim keberlanjutan yang diiklankan benar-benar terjadi di lapangan.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <CheckCircle2 size={20} />
            <span>Panduan Evaluasi Internal</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Membantu kelompok usaha mengetahui apakah operasional yang berjalan sudah efektif menyelesaikan masalah sosial-ekologi atau perlu perbaikan.
          </p>
        </motion.div>
      </div>
    </div>
  );
}