'use client';

import { motion } from 'framer-motion';
import { Heart, RefreshCw, PieChart } from 'lucide-react';

export default function Slide6AlokasiSurplus() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Skema Reinvestasi & Surplus Laba
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Bagaimana keuntungan bersih (*Surplus*) dikelola secara etis sesuai prinsip keberlanjutan wirausaha sosial.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <RefreshCw size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Reinvestasi Usaha (60%)</h4>
              <p className="text-xs text-emerald-400">Pengembangan Modal Kerja</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Digunakan untuk menambah persediaan alat cetak, pengembangan variasi produk ramah lingkungan, dan biaya pemasaran.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <Heart size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Dana Pemberdayaan Komunitas (40%)</h4>
              <p className="text-xs text-cyan-400">Dampak Sosial Direct</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Dikembalikan ke komunitas perajin Papua dalam bentuk pelatihan keterampilan, bantuan alat kerja, atau program lingkungan lokal.
          </p>
        </motion.div>
      </div>
    </div>
  );
}