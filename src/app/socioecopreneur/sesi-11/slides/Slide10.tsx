'use client';

import { motion } from 'framer-motion';
import { Award, CheckCircle2 } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Rangkuman Kunci Indikator Dampak 3P
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Poin utama yang harus diterapkan kelompok dalam merumuskan ukuran keberhasilan usaha sosial.
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
            <h4 className="font-bold text-white text-sm md:text-base">Prinsip Pengukuran Utama</h4>
            <p className="text-xs text-emerald-400">Kesimpulan Pertemuan 11</p>
          </div>
        </div>

        <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-3">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Seimbangkan 3 Pilar:** Bisnis sosial harus sehat secara finansial (Profit) sekaligus memberi manfaat bagi warga (People) dan bumi (Planet).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Gunakan Indikator Sederhana & Realistis:** Pilih metrik yang mudah dihitung dan dibuktikan secara langsung di lapangan.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Dasar Komunikasi yang Kuat:** Jadikan angka dampak ini sebagai bukti autentik dalam strategi pemasaran edukatif.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}