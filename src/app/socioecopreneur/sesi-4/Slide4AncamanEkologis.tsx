'use client';

import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export default function Slide4AncamanEkologis() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <AlertTriangle className="text-amber-400" /> Tantangan Ekologis di Tapak
      </h2>
      <div className="space-y-3">
        
        <motion.div 
          whileHover={{ x: 6 }}
          className="p-3.5 bg-slate-900/80 border-l-4 border-l-amber-500 border-slate-800 rounded-r-xl transition-all cursor-pointer"
        >
          <h4 className="font-bold text-white text-xs md:text-sm">1. Deforestasi & Alih Fungsi Lahan</h4>
          <p className="text-xs text-slate-300">Pembukaan hutan skala besar mengancam keanekaragaman hayati endemis dan tempat hidup flora-fauna langka.</p>
        </motion.div>

        <motion.div 
          whileHover={{ x: 6 }}
          className="p-3.5 bg-slate-900/80 border-l-4 border-l-cyan-500 border-slate-800 rounded-r-xl transition-all cursor-pointer"
        >
          <h4 className="font-bold text-white text-xs md:text-sm">2. Penumpukan Anorganik Perkotaan</h4>
          <p className="text-xs text-slate-300">Penggunaan plastik sekali pakai meningkat cepat tanpa dibarengi industri daur ulang limbah yang memadai.</p>
        </motion.div>

        <motion.div 
          whileHover={{ x: 6 }}
          className="p-3.5 bg-slate-900/80 border-l-4 border-l-emerald-500 border-slate-800 rounded-r-xl transition-all cursor-pointer"
        >
          <h4 className="font-bold text-white text-xs md:text-sm">3. Hilangnya Hasil Hutan Non-Kayu (HHNK)</h4>
          <p className="text-xs text-slate-300">Kurangnya inovasi hilirisasi produk hutan non-kayu membuat warga tergiur opsi ekonomi destruktif.</p>
        </motion.div>

      </div>
    </div>
  );
}