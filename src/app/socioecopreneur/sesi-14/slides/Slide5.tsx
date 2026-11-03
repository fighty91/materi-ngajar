'use client';

import { motion } from 'framer-motion';
import { Box, CheckCircle2 } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Menjelaskan Solusi & Prototipe (MVP)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Tunjukkan bagaimana produk Anda bekerja dan mengapa calon konsumen telah memberikan respon positif.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Box size={20} />
            <span>Fokus pada Keunggulan Utama</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Jangan jelaskan teknis yang terlalu rumit. Sampaikan apa fungsi utama produk, mengapa bahan bakunya ramah lingkungan, dan apa keunikannya dibanding produk biasa.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <CheckCircle2 size={20} />
            <span>Sertakan Bukti Validasi</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Sampaikan hasil umpan balik awal dari calon konsumen atau hasil uji coba lapangan untuk membuktikan bahwa produk Anda benar-benar diminati.
          </p>
        </motion.div>
      </div>
    </div>
  );
}