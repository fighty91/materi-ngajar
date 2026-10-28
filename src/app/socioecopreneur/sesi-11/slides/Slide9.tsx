'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, RefreshCw } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Mengatasi Tantangan Pengukuran Sederhana
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Beberapa kendala yang sering dihadapi wirausahawan pemula dan cara mengatasinya.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-rose-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
            <ShieldAlert size={18} />
            <span>Tantangan: Terlalu Rumit</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Mencoba mengukur metrik yang terlalu muluk dan sulit dihitung dengan sumber daya mahasiswa yang terbatas.
          </p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-emerald-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <RefreshCw size={18} />
            <span>Solusi: Mulai dari Angka Dasar</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Gunakan pencatatan manual yang konsisten setiap minggu (misal: buku kas harian dan catatan timbangan bahan baku).
          </p>
        </motion.div>
      </div>
    </div>
  );
}