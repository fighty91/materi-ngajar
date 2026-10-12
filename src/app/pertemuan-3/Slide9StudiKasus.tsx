'use client';

import { motion } from 'framer-motion';
import { Coffee, Utensils, ShoppingBag } from 'lucide-react';

export default function Slide9StudiKasus() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 border-b border-slate-800 pb-2">
        Inovasi Socio-Entrepreneurship Papua
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-3.5 bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 rounded-xl space-y-1 transition-all cursor-pointer"
        >
          <Coffee className="text-amber-400" size={20} />
          <h4 className="font-bold text-white text-xs">Kopi Fair Trade</h4>
          <p className="text-[11px] text-slate-400">Membeli biji kopi petani pegunungan dengan harga adil dan pembinaan langsung.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-3.5 bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 rounded-xl space-y-1 transition-all cursor-pointer"
        >
          <Utensils className="text-teal-400" size={20} />
          <h4 className="font-bold text-white text-xs">Olahan Pangan Mama</h4>
          <p className="text-[11px] text-slate-400">Mendampingi standarisasi kemasan & sertifikasi olahan keladi/sagu mama-mama.</p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="p-3.5 bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 rounded-xl space-y-1 transition-all cursor-pointer"
        >
          <ShoppingBag className="text-emerald-400" size={20} />
          <h4 className="font-bold text-white text-xs">Noken Modern</h4>
          <p className="text-[11px] text-slate-400">Inovasi serat alam jadi produk modern (tas laptop/dompet) bermargin adil.</p>
        </motion.div>

      </div>
    </div>
  );
}