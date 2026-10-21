'use client';

import { motion } from 'framer-motion';
import { FileText, CheckCircle2 } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Tugas Individu: Resume Pertemuan 6
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Tugas mandiri ditulis tangan atau diketik ringkas (1 halaman) untuk memperkuat pemahaman elemen awal SBMC.
      </p>

      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="p-5 bg-slate-900/80 border border-emerald-500/40 rounded-2xl space-y-4"
      >
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
            <FileText size={22} />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm md:text-base">Poin Resume Mandiri</h4>
            <p className="text-xs text-emerald-400">Pengumpulan: Pertemuan Berikutnya</p>
          </div>
        </div>

        <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-3">
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">•</span>
            <span>**Poin 1:** Jelaskan perbedaan antara *Business Model Canvas* (BMC) konvensional dengan *Social Business Model Canvas* (SBMC).</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">•</span>
            <span>**Poin 2:** Jelaskan perbedaan antara *Customer Segment* (Pembeli) dan *Beneficiary Segment* (Penerima Manfaat) dalam konteks usaha sosial di Papua.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-emerald-400 font-bold">•</span>
            <span>**Poin 3:** Tuliskan rumusan *Social & Eco Value Proposition* dari ide produk kelompok Anda.</span>
          </li>
        </ul>
      </motion.div>

      <div className="p-4 bg-slate-900/40 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-xs text-slate-300">
        <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Catatan:</strong> Tugas resume dikumpulkan secara individu pada awal kuliah Pertemuan 7 minggu depan. Selamat berdiskusi bersama kelompok!
        </span>
      </div>
    </div>
  );
}