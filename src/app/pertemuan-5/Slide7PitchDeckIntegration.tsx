'use client';

import { motion } from 'framer-motion';
import { Presentation, DollarSign, PieChart, ShieldCheck } from 'lucide-react';

export default function Slide7PitchDeckIntegration() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Slide 7: Proyeksi Finansial & Alokasi Surplus
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Kerangka proyeksi keuangan yang menyeimbangkan kelayakan komersial, penciptaan lapangan kerja lokal, dan keberlanjutan dampak lingkungan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        
        {/* Poin 1: Sumber Pendapatan Utama */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <DollarSign size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">Arus Pendapatan Utama</h4>
              <p className="text-xs text-emerald-400">Model Bisnis Komersial Berkelanjutan</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Penjualan produk bernilai tambah tinggi secara langsung kepada konsumen (B2C) maupun kemitraan strategis (B2B).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Penetapan harga kompetitif yang mencakup struktur upah adil (*fair living wage*) bagi pengrajin lokal.</span>
            </li>
          </ul>
        </motion.div>

        {/* Poin 2: Alokasi Surplus & Reinvestasi */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <PieChart size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">Alokasi Surplus & Dampak</h4>
              <p className="text-xs text-cyan-400">Strategi Reinvestasi Laba Usaha</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Sebagian surplus laba dialokasikan kembali sebagai modal kerja lanjutan (*reinvestment*) untuk ekspansi kapasitas.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Pendanaan program peningkatan keterampilan komunitas dan mitigasi dampak lingkungan secara berkala.</span>
            </li>
          </ul>
        </motion.div>

      </div>

      {/* Banner Ringkas */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-4 bg-slate-900/40 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-xs text-slate-300"
      >
        <ShieldCheck className="text-emerald-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Komitmen Dual Bottom Line:</strong> Profitabilitas finansial berjalan beriringan dengan akuntabilitas sosial untuk memberikan manfaat jangka panjang bagi masyarakat Papua.
        </span>
      </motion.div>
    </div>
  );
}