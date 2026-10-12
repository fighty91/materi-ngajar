'use client';

import { motion } from 'framer-motion';
import { Recycle, Sun, Feather, RefreshCcw } from 'lucide-react';

export default function Slide5PrinsipEcopreneurship() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 border-b border-slate-800 pb-2 md:pb-3">
        4 Pilar Bisnis Hijau (Ecopreneurship)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
        
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-4 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-1 transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <Recycle className="text-emerald-400 mb-2" size={20} />
            <h4 className="font-bold text-white text-xs md:text-sm">Sustainable Sourcing</h4>
          </div>
          <p className="text-[11px] text-slate-400 pt-1">Mengambil bahan baku tanpa merusak populasi alam asli.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-4 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-1 transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <Sun className="text-cyan-400 mb-2" size={20} />
            <h4 className="font-bold text-white text-xs md:text-sm">Eco-Efficient Process</h4>
          </div>
          <p className="text-[11px] text-slate-400 pt-1">Proses produksi hemat energi dan efisien dalam konsumsi air.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-4 bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl space-y-1 transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <Feather className="text-teal-400 mb-2" size={20} />
            <h4 className="font-bold text-white text-xs md:text-sm">Biodegradable Packaging</h4>
          </div>
          <p className="text-[11px] text-slate-400 pt-1">Menggunakan kemasan ramah lingkungan yang mudah terurai bumi.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-4 bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 rounded-2xl space-y-1 transition-all cursor-pointer flex flex-col justify-between"
        >
          <div>
            <RefreshCcw className="text-amber-400 mb-2" size={20} />
            <h4 className="font-bold text-white text-xs md:text-sm">Extended Responsibility</h4>
          </div>
          <p className="text-[11px] text-slate-400 pt-1">Tanggung jawab penuh terhadap siklus daur ulang sisa produk.</p>
        </motion.div>

      </div>
    </div>
  );
}