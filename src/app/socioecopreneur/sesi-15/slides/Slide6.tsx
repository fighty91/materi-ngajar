'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Compass } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Langkah Lanjutan: Dari Tugas Kuliah ke Nyata
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Bagaimana menjaga agar ide bisnis yang telah dirancang tidak berhenti setelah perkuliahan selesai.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Compass size={20} />
            <span>Inkumbasi & Pengembangan Usaha</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Mmembawa proposal bisnis ke inkubator wirausaha kampus, mengikuti kompetisi pendanaan, atau bermitra dengan UMKM lokal di Papua untuk eksekusi riil.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <TrendingUp size={20} />
            <span>Jaringan Kolaborasi Berkelanjutan</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Menjaga hubungan baik dengan komunitas perajin, mentor, dan rekan satu tim sebagai jaringan profesional di masa depan.
          </p>
        </motion.div>
      </div>
    </div>
  );
}