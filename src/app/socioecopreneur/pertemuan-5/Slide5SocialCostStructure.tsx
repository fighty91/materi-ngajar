'use client';

import { motion } from 'framer-motion';
import { Users, Leaf, GraduationCap, Calculator } from 'lucide-react';

export default function Slide5SocialCostStructure() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Menyusun Social Cost Structure
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Dalam menghitung Harga Pokok Penjualan (HPP) dan biaya operasional, bisnis sosial memiliki komponen unik yang wajib diperhitungkan secara adil.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        
        {/* Poin 1: Fair Living Wage */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-3 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 w-fit mb-3">
              <Users size={22} />
            </div>
            <h4 className="font-bold text-white text-sm md:text-base">Fair Living Wage (Upah Layak)</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Memastikan pekerja lokal atau perajin mendapatkan upah yang manusiawi dan di atas standar pasar lokal sebagai wujud penghargaan martabat kerja.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
            • Fokus: Kesejahteraan mitra produsen
          </div>
        </motion.div>

        {/* Poin 2: Environmental Mitigation */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-3 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400 w-fit mb-3">
              <Leaf size={22} />
            </div>
            <h4 className="font-bold text-white text-sm md:text-base">Environmental Mitigation Cost</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Alokasi anggaran khusus untuk pengelolaan limbah produksi yang ramah lingkungan atau pemulihan dampak ekologis dari proses pengolahan bahan baku.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-cyan-400 font-medium">
            • Fokus: Keberlanjutan alam tapak
          </div>
        </motion.div>

        {/* Poin 3: Capacity Building */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl space-y-3 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 bg-teal-500/10 rounded-xl text-teal-400 w-fit mb-3">
              <GraduationCap size={22} />
            </div>
            <h4 className="font-bold text-white text-sm md:text-base">Capacity Building Cost</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Biaya investasi untuk pelatihan peningkatan keterampilan berkala bagi komunitas lokal agar kualitas mutu produk terus meningkat dari waktu ke waktu.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-teal-400 font-medium">
            • Fokus: Pemberdayaan & transfer skill
          </div>
        </motion.div>

      </div>

      {/* Banner Ringkas */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-4 bg-slate-900/40 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-xs text-slate-300"
      >
        <Calculator className="text-emerald-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Prinsip Akuntansi Sosial:</strong> Komponen biaya sosial bukan beban (*expense* yang merugikan), melainkan investasi jangka panjang untuk membangun loyalitas komunitas dan kualitas produk yang unggul.
        </span>
      </motion.div>
    </div>
  );
}