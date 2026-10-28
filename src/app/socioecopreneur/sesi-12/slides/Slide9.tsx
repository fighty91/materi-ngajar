'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, Check } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Menghindari Jebakan Saat Wawancara Konsumen
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Hal-hal yang harus dihindari agar data umpan balik yang terkumpul benar-benar objektif dan bermanfaat.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-rose-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
            <ShieldAlert size={18} />
            <span>Jangan Berdebat dengan Responden</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Jika konsumen mengkritik produk Anda, jangan defensif atau mencoba membela diri. Dengarkan dan catat mengapa mereka merasa demikian.
          </p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-emerald-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <Check size={18} />
            <span>Jangan Hanya Bertanya ke Teman Dekat</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Teman satu kelompok atau sahabat cenderung selalu memuji hasil kerja Anda. Carilah responden netral yang belum pernah mengenal produk Anda.
          </p>
        </motion.div>
      </div>
    </div>
  );
}