'use client';

import { motion } from 'framer-motion';
import { TreePine, Sprout } from 'lucide-react';

export default function Slide6() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Studi Aplikasi MVP: Potensi Alami Papua
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Contoh penerapan perancangan produk awal menggunakan bahan baku spesifik wilayah Papua.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <TreePine size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Pot Sabut Kelapa (Cocopot)</h4>
              <p className="text-xs text-emerald-400">Pengujian Pres & Perekat Alami</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            MVP difokuskan pada kekuatan kepadatan serat sabut dan daya serap air agar pot tidak cepat rapuh saat disiram.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <Sprout size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Wadah Pelepah Sagu</h4>
              <p className="text-xs text-cyan-400">Pengujian Cetak & Ketahanan Panas</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            MVP difokuskan pada teknik penganyaman pelepah sagu agar tidak pecah serta mampu menampung makanan panas.
          </p>
        </motion.div>
      </div>
    </div>
  );
}