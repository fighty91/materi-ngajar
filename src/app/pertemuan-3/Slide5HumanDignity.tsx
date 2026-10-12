'use client';

import { motion } from 'framer-motion';
import { Heart, Scale } from 'lucide-react';

export default function Slide5HumanDignity() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-teal-400 border-b border-slate-800 pb-2 md:pb-3">
        Martabat Manusia & Fair Value Chain
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl space-y-2 transition-all cursor-pointer"
        >
          <div className="text-teal-400 font-bold text-sm flex items-center gap-2">
            <Heart size={18} /> Human Dignity (Martabat Manusia)
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Memberdayakan manusia berarti menghargai kemampuan mereka. Bukan sekadar memberi "ikan", tetapi memberikan "kail, pelatihan, dan akses pasar".
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-2 transition-all cursor-pointer"
        >
          <div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
            <Scale size={18} /> Fair Value Chain (Keadilan Margin)
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Memastikan bahwa porsi keuntungan terbesar dikembalikan secara adil kepada petani, pengrajin, atau masyarakat lokal yang bekerja.
          </p>
        </motion.div>

      </div>
    </div>
  );
}