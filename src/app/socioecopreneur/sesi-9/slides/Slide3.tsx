'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, Cpu, HeartHandshake } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Urgensi Pembuatan MVP Sebelum Produksi
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Pembuatan sampel awal sangat krusial dalam wirausaha berbasis bahan alami dan komunitas lokal.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <ShieldAlert className="text-rose-400" size={24} />
          <h4 className="font-bold text-white text-sm">Efisiensi Modal</h4>
          <p className="text-xs text-slate-400">Mencegah risiko kerugian modal besar akibat membuat produk dalam jumlah banyak yang belum teruji.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Cpu className="text-emerald-400" size={24} />
          <h4 className="font-bold text-white text-sm">Uji Karakter Bahan</h4>
          <p className="text-xs text-slate-400">Memastikan ketahanan dan elastisitas bahan baku lokal (seperti sabut kelapa atau pelepah sagu).</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <HeartHandshake className="text-cyan-400" size={24} />
          <h4 className="font-bold text-white text-sm">Umpan Balik Cepat</h4>
          <p className="text-xs text-slate-400">Mendapatkan masukan langsung dari mitra perajin dan calon pembeli untuk penyempurnaan.</p>
        </motion.div>
      </div>
    </div>
  );
}