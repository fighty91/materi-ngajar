'use client';

import { motion } from 'framer-motion';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Hakikat Pertanggungjawaban Komprehensif
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Ujian Akhir Semester (UAS) bukan sekadar menilai hasil akhir, melainkan menguji sejauh mana kelompok mampu mempertanggungjawabkan setiap keputusan strategis yang diambil.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Target size={20} />
            <span>Transparansi & Akuntabilitas</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Menjelaskan alasan di balik pemilihan bahan baku lokal Papua, penentuan harga jual, hingga cara pembagian nilai tambah kepada perajin mitra secara jujur dan transparan.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <CheckCircle2 size={20} />
            <span>Kesiapan Menghadapi Realitas</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Membuktikan bahwa kelompok memahami risiko operasional, potensi tantangan pasar, serta memiliki solusi mitigasi yang realistis.
          </p>
        </motion.div>
      </div>
    </div>
  );
}