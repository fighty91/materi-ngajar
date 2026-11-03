'use client';

import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Tips Menghadapi Sesi Tanya Jawab (Q&A)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Sesi tanya jawab adalah momen untuk menunjukkan kematangan dan penguasaan kelompok terhadap bisnis Anda.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <HelpCircle size={20} />
            <span>Dengarkan Sampai Selesai</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Jangan terburu-buru memotong pembicaraan penanya. Dengarkan seluruh pertanyaan dengan seksama, catat poin utamanya, lalu jawab secara tenang dan terfokus.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <CheckCircle2 size={20} />
            <span>Jujur & Terbuka pada Masukan</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Jika ada pertanyaan yang datanya belum lengkap, akui dengan sportif dan jadikan masukan tersebut sebagai bahan perbaikan selanjutnya.
          </p>
        </motion.div>
      </div>
    </div>
  );
}