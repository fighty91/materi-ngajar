'use client';

import { motion } from 'framer-motion';
import { Users, Check, Target } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Merumuskan Indikator <span className="text-emerald-400">People</span> (Sosial)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Fokus pada peningkatan kualitas hidup manusia, pemberdayaan komunitas, dan keadilan bagi tenaga kerja lokal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Users className="text-emerald-400" size={22} />
          <h4 className="font-bold text-white text-sm">Penciptaan Lapangan Kerja</h4>
          <p className="text-xs text-slate-400">Jumlah warga atau ibu-ibu perajin lokal yang dilibatkan secara aktif dan mendapat upah layak.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Check className="text-cyan-400" size={22} />
          <h4 className="font-bold text-white text-sm">Peningkatan Pendapatan</h4>
          <p className="text-xs text-slate-400">Persentase kenaikan rata-rata pendapatan bulanan mitra perajin setelah bergabung dengan usaha.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Target className="text-teal-400" size={22} />
          <h4 className="font-bold text-white text-sm">Transfer Keterampilan</h4>
          <p className="text-xs text-slate-400">Jumlah jam pelatihan atau peningkatan keahlian teknis yang diberikan kepada komunitas.</p>
        </motion.div>
      </div>
    </div>
  );
}