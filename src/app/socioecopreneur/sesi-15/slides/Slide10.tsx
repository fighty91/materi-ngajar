'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Rangkuman Akhir Kuliah Socio & Ecopreneurship
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Poin rangkuman penutup rangkaian perkuliahan dari Sesi 1 hingga Sesi 15.
      </p>

      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="p-5 bg-slate-900/80 border border-emerald-500/40 rounded-2xl space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
            <Award size={22} />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm md:text-base">Esensi Pembelajaran Akhir</h4>
            <p className="text-xs text-emerald-400">Kesimpulan Sesi 15</p>
          </div>
        </div>

        <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-3">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Portofolio Profesional:** Dokumentasikan seluruh karya proyek Anda sebagai bukti kompetensi dan rekam jejak masa depan.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Integritas Etis:** Utamakan selalu keadilan sosial bagi komunitas dan kelestarian ekologis bumi.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Kekuatan Kolaborasi:** Apresiasi kerja sama tim yang solid sebagai kunci utama keberhasilan wirausaha sosial.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}