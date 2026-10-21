'use client';

import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Kekuatan Narasi: Green Storytelling
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Membangun ikatan emosional dengan konsumen melalui penyampaian cerita nyata di balik layar pembuatan produk.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Users className="text-emerald-400" size={22} />
          <h4 className="font-bold text-white text-sm">Kisah Komunitas Perajin</h4>
          <p className="text-xs text-slate-400">Menceritakan perjuangan ibu-ibu atau pemuda lokal Papua dalam mengolah bahan baku menjadi karya bernilai.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Heart className="text-cyan-400" size={22} />
          <h4 className="font-bold text-white text-sm">Perjalanan Bahan Baku</h4>
          <p className="text-xs text-slate-400">Menelusuri bagaimana limbah pasar (sabut kelapa/pelepah sagu) diselamatkan dari penumpukan sampah.</p>
        </motion.div>
      </div>
    </div>
  );
}