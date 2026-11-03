'use client';

import { motion } from 'framer-motion';
import { HelpCircle, RefreshCw } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Sikap Profesional Menghadapi Pertanyaan Kritis
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Pertanyaan tajam dari penguji adalah bentuk uji kelayakan, bukan serangan personal. Responlah dengan profesionalisme tinggi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <HelpCircle size={20} />
            <span>Dengarkan & Catat Poin Pertanyaan</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Biarkan penguji menyelesaikan pertanyaannya. Catat inti permasalahan yang ditanyakan agar jawaban Anda terarah dan tidak melebar ke mana-mana.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <RefreshCw size={20} />
            <span>Akui Kekurangan dengan Solusi</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Jika ada celah atau risiko yang belum diantisipasi, akui secara sportif dan jelaskan bagaimana kelompok akan memperbaikinya ke depan.
          </p>
        </motion.div>
      </div>
    </div>
  );
}