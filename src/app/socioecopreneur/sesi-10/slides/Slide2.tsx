'use client';

import { motion } from 'framer-motion';
import { BookOpen, Lightbulb } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Konsep Green Marketing Edukatif
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Pemasaran edukatif tidak sekadar membujuk orang untuk membeli, melainkan memberikan pemahaman mendalam tentang krisis lingkungan dan bagaimana produk menjadi bagian dari solusi.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <BookOpen size={20} />
            <span>Pemasaran Konvensional</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Fokus utama pada keunggulan fitur produk, promosi diskon, dan mendorong konsumsi berlebihan tanpa memikirkan asal-usul bahan.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-emerald-500/40 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <Lightbulb size={20} />
            <span>Pemasaran Edukatif (Green)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Fokus mendidik konsumen tentang dampak limbah, transparansi rantai pasok bahan lokal, dan gaya hidup bertanggung jawab.
          </p>
        </motion.div>
      </div>
    </div>
  );
}