'use client';

import { motion } from 'framer-motion';
import { UserCheck, FileText, CheckCircle2, BookOpen } from 'lucide-react';

export default function Slide10TugasIndividu() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Tugas Individu: Resume & Refleksi Finansial
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Panduan penugasan mandiri bagi mahasiswa untuk memperdalam pemahaman terkait struktur keuangan wirausaha sosial.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        
        {/* Poin 1: Resume Keuangan Sosial */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <FileText size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">1. Resume Keuangan Sosial</h4>
              <p className="text-xs text-emerald-400">Analisis Perbedaan Struktur</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Tuliskan ringkasan pemahaman Anda mengenai perbedaan mendasar antara struktur biaya dan pendapatan dalam bisnis konvensional versus wirausaha sosial (*dual bottom line*).
          </p>
        </motion.div>

        {/* Poin 2: Refleksi Akuntansi Berkelanjutan */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <UserCheck size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">2. Refleksi Akuntansi Berkelanjutan</h4>
              <p className="text-xs text-cyan-400">Transparansi & Kepercayaan</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Berikan ulasan singkat mengenai pentingnya akuntabilitas dan transparansi finansial dalam menjaga kepercayaan investor sosial serta mitra komunitas lokal.
          </p>
        </motion.div>

      </div>

      {/* Banner Pengumpulan */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-4 bg-slate-900/40 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-xs text-slate-300"
      >
        <BookOpen className="text-emerald-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Wadah Pengumpulan:</strong> Unggah hasil resume dan refleksi individu melalui web portofolio pribadi (*Lovable*) masing-masing mahasiswa paling lambat sebelum pertemuan berikutnya.
        </span>
      </motion.div>
    </div>
  );
}