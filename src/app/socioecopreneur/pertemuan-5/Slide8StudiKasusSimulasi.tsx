'use client';

import { motion } from 'framer-motion';
import { Calculator, Coins, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Slide8StudiKasusSimulasi() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Studi Kasus Simulasi Keuangan UMKM Lokal
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Mari lihat gambaran riil dan sederhana bagaimana sebuah produk ecopreneurship menghitung biaya dan pendapatan di lapangan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        
        {/* Kolom Ilustrasi Angka Sederhana */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Coins size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">Ilustrasi Perhitungan Unit</h4>
              <p className="text-xs text-emerald-400">Contoh Produk Pot Sabut Kelapa / Wadah Sagu</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Biaya Bahan Baku & Upah:</strong> Rp 3.000 per unit (sudah termasuk upah adil perajin lokal).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Harga Jual ke Konsumen:</strong> Rp 5.000 per unit.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span><strong>Margin Laba Kotor:</strong> Rp 2.000 per unit untuk reinvestasi & pengembangan.</span>
            </li>
          </ul>
        </motion.div>

        {/* Kolom Prinsip Akuntabilitas */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">Transparansi Keuangan</h4>
              <p className="text-xs text-cyan-400">Kunci Kepercayaan Mitra & Komunitas</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Pencatatan kas masuk dan keluar dicatat harian secara sederhana menggunakan buku kas atau aplikasi ponsel.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Laporan keuangan terbuka bagi kelompok mitra lokal untuk memastikan pembagian hasil yang adil.</span>
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
        <Calculator className="text-emerald-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Pelajaran Utama:</strong> Angka yang sederhana namun transparan jauh lebih baik dan berkelanjutan daripada laporan rumit yang tidak dipahami oleh anggota kelompok sendiri.
        </span>
      </motion.div>
    </div>
  );
}