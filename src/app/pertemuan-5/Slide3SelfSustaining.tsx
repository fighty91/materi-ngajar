'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle2, Zap } from 'lucide-react';

export default function Slide3SelfSustaining() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Mengapa Donasi Saja Tidak Cukup?
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Ketergantungan penuh pada hibah (*grant*) atau donasi luar sering kali membuat usaha sosial rapuh dan berumur pendek.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        
        {/* Kolom Bahaya Ketergantungan Donasi */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-red-500/30 hover:border-red-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-red-500/10 rounded-xl text-red-400">
              <ShieldAlert size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">Kelemahan Sistem Hibah</h4>
              <p className="text-xs text-red-400">Risiko Bisnis Rentan Berhenti</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span>Pendanaan bersifat sementara dan memiliki batas waktu (deadline project).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span>Fokus organisasi sering bergeser demi mengikuti proposal donor ketimbang kebutuhan riil warga lokal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400 font-bold">•</span>
              <span>Sulit memperbesar skala operasional secara konsisten.</span>
            </li>
          </ul>
        </motion.div>

        {/* Kolom Solusi Self-Sustaining Revenue */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <CheckCircle2 size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">Pendapatan Mandiri (Self-Sustaining)</h4>
              <p className="text-xs text-emerald-400">Solusi Ketahanan Jangka Panjang</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Menghasilkan arus kas aktif melalui penjualan produk atau jasa bernilai tambah.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Kebebasan strategis menentukan arah pemberdayaan tanpa intervensi pihak luar.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Kepercayaan mitra lokal dan pasar meningkat karena kemandirian bisnis terbukti nyata.</span>
            </li>
          </ul>
        </motion.div>

      </div>

      {/* Banner Kesimpulan */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-4 bg-slate-900/40 border border-cyan-500/30 rounded-xl flex items-center gap-3 text-xs text-slate-300"
      >
        <Zap className="text-cyan-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Kunci Sukses:</strong> Wirausaha sosial yang sukses memperlakukan misi sosial dengan hati, tetapi mengelola arus kas penjualannya dengan disiplin bisnis profesional.
        </span>
      </motion.div>
    </div>
  );
}