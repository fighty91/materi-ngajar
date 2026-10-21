'use client';

import { motion } from 'framer-motion';
import { Store, Building2, Trees, Layers } from 'lucide-react';

export default function Slide4RevenueStreams() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Ragam Revenue Streams (Sumber Pendapatan)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Bagaimana sebuah wirausaha sosial menghasilkan arus kas secara etis, mandiri, dan berkelanjutan?
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        
        {/* Poin 1: Direct Sales */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-3 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 w-fit mb-3">
              <Store size={22} />
            </div>
            <h4 className="font-bold text-white text-sm md:text-base">Direct Sales (Penjualan Langsung)</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Menjual produk olahan lokal bernilai tambah tinggi secara langsung ke konsumen (B2C), seperti kerajinan ramah lingkungan atau makanan khas lokal.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
            • Contoh: Pot sabut kelapa / kemasan sagu
          </div>
        </motion.div>

        {/* Poin 2: B2B Ethical Supply */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-3 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400 w-fit mb-3">
              <Building2 size={22} />
            </div>
            <h4 className="font-bold text-white text-sm md:text-base">B2B Ethical Partnership</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Menjadi pemasok bahan baku atau komponen ramah lingkungan bersertifikat bagi perusahaan atau pabrik besar yang membutuhkan standar etis tinggi.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-cyan-400 font-medium">
            • Contoh: Suplai kemasan biodegradable industri
          </div>
        </motion.div>

        {/* Poin 3: Eco-Tourism & Experience */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl space-y-3 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 bg-teal-500/10 rounded-xl text-teal-400 w-fit mb-3">
              <Trees size={22} />
            </div>
            <h4 className="font-bold text-white text-sm md:text-base">Eco-Tourism & Experience</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Menyediakan layanan wisata edukasi atau ekowisata berbasis komunitas yang pendapatannya langsung dibagikan secara transparan kepada warga lokal.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-teal-400 font-medium">
            • Contoh: Wisata konservasi & budaya lokal
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
        <Layers className="text-emerald-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Strategi Diversifikasi:</strong> Memiliki lebih dari satu jalur pendapatan membuat wirausaha sosial jauh lebih tahan banting terhadap fluktuasi pasar.
        </span>
      </motion.div>
    </div>
  );
}