'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Rangkuman Kunci Pemasaran Edukatif
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Poin utama untuk membangun komunikasi bisnis sosial-ekologi yang kuat.
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
            <h4 className="font-bold text-white text-sm md:text-base">Prinsip Komunikasi Utama</h4>
            <p className="text-xs text-emerald-400">Kesimpulan Pertemuan 10</p>
          </div>
        </div>

        <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-3">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Edukasi Lebih Utama dari Sekadar Promosi:** Bangun kesadaran publik terhadap krisis lingkungan terlebih dahulu.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Otentisitas & Transparansi:** Jauhi klaim berlebihan untuk menghindari bahaya *greenwashing*.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Kisah Lokal Papua:** Angkat perjuangan komunitas perajin dan pelestarian alam sebagai inti narasi bisnis.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}