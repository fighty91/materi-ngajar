'use client';

import { motion } from 'framer-motion';
import { Scale, TreePine, Heart } from 'lucide-react';

export default function Slide6SocialEcoImpact() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Elemen 5: Social & Eco Impact Metrics
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Mengukur akuntabilitas dampak sosial dan efisiensi ekologis secara sederhana (Kerangka COUNT).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <TreePine size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Indikator Ekologi (Planet)</h4>
              <p className="text-xs text-emerald-400">Pengurangan Limbah</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Berapa Kilogram (kg) limbah sabut kelapa/sagu yang berhasil diolah.</li>
            <li>• Berapa unit wadah/pot plastik yang berhasil digantikan oleh produk kelompok.</li>
          </ul>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <Heart size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Indikator Sosial (People)</h4>
              <p className="text-xs text-cyan-400">Pemberdayaan Warga</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Berapa orang perajin/warga lokal yang terlibat dan menerima upah adil.</li>
            <li>• Peningkatan pendapatan tambahan bagi keluarga perajin mitra.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}