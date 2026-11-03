'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Settings, DollarSign } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        3 Pilar Aspek Kelayakan Usaha
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Analisis kelayakan mikro dinilai dari tiga sudut pandang esensial:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <ShoppingBag className="text-emerald-400" size={22} />
          <h4 className="font-bold text-white text-sm">1. Kelayakan Pasar</h4>
          <p className="text-xs text-slate-400">Apakah target pembeli dan penerima manfaat teridentifikasi jelas serta bersedia membeli dengan harga wajar?</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Settings className="text-cyan-400" size={22} />
          <h4 className="font-bold text-white text-sm">2. Kelayakan Operasional</h4>
          <p className="text-xs text-slate-400">Apakah bahan baku lokal mudah diakses dan perajin mitra memiliki kemampuan teknis untuk memproduksinya?</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <DollarSign className="text-teal-400" size={22} />
          <h4 className="font-bold text-white text-sm">3. Kelayakan Finansial</h4>
          <p className="text-xs text-slate-400">Apakah HPP akurat, margin keuntungan memadai, dan target penjualan BEP masuk akal untuk dicapai?</p>
        </motion.div>
      </div>
    </div>
  );
}