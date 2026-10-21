'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Award } from 'lucide-react';

export default function Slide10() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Rangkuman Kunci Keberhasilan MVP
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Poin utama yang harus diingat dalam merancang prototipe produk awal wirausaha sosial-ekologi.
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
            <h4 className="font-bold text-white text-sm md:text-base">Prinsip Utama Prototipe</h4>
            <p className="text-xs text-emerald-400">Kesimpulan Pertemuan 9</p>
          </div>
        </div>

        <ul className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-3">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**MVP Bukan Produk Sempurna:** Fokus utama adalah menguji fungsi dasar dan respon pasar secara cepat.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Mengutamakan Bahan Baku Lokal:** Memastikan ketersediaan dan karakteristik bahan alam Papua teruji secara nyata.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={16} />
            <span>**Gagal Lebih Awal, Belajar Lebih Cepat:** Menemukan kekurangan pada tahap prototipe menghemat biaya dan waktu secara signifikan.</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}