'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, Check } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Kesalahan yang Harus Dihindari Saat Pitching
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Beberapa hal fatal yang sering membuat presentasi proposal bisnis kurang meyakinkan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-rose-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
            <ShieldAlert size={18} />
            <span>Slide Terlalu Penuh Teks</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Menampilkan paragraf panjang yang membuat audiens sibuk membaca alih-alih mendengarkan suara Anda. Gunakan poin ringkas dan visual pendukung.
          </p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-emerald-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <Check size={18} />
            <span>Melewati Batas Waktu</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Berbicara terlalu lama hingga kehabisan waktu di bagian terpenting (Dampak & Keuangan). Latihlah durasi presentasi Anda sebelum hari H.
          </p>
        </motion.div>
      </div>
    </div>
  );
}