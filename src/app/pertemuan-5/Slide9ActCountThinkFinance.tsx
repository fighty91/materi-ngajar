'use client';

import { motion } from 'framer-motion';
import { Eye, Calculator, HeartPulse, Cpu } from 'lucide-react';

export default function Slide9ActCountThinkFinance() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Framework ACT.COUNT.THINK (Aspek Finansial)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Penerapan kerangka kerja utama mata kuliah untuk memastikan pengelolaan keuangan usaha sosial tetap transparan dan berdampak luas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        
        {/* ACT */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-3 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400 w-fit mb-3">
              <Eye size={22} />
            </div>
            <h4 className="font-bold text-white text-sm md:text-base">ACT (Audit Transparansi)</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Memeriksa secara berkala bahwa setiap rupiah uang masuk dan keluar dicatat dengan jujur serta adil bagi seluruh anggota kelompok dan mitra lokal.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-emerald-400 font-medium">
            • Aksi: Buku kas harian terbuka
          </div>
        </motion.div>

        {/* COUNT */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-3 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400 w-fit mb-3">
              <Calculator size={22} />
            </div>
            <h4 className="font-bold text-white text-sm md:text-base">COUNT (Kuantifikasi Dampak)</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Menghitung persentase keuntungan yang berhasil dialokasikan kembali (*reinvestment*) untuk kesejahteraan perajin dan pelestarian lingkungan.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-cyan-400 font-medium">
            • Aksi: Metrik alokasi surplus
          </div>
        </motion.div>

        {/* THINK */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl space-y-3 transition-all flex flex-col justify-between"
        >
          <div>
            <div className="p-2.5 bg-teal-500/10 rounded-xl text-teal-400 w-fit mb-3">
              <HeartPulse size={22} />
            </div>
            <h4 className="font-bold text-white text-sm md:text-base">THINK (Refleksi Jangka Panjang)</h4>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Memastikan keputusan finansial hari ini tidak mengorbankan upah layak pekerja demi mengejar margin laba sesaat.
            </p>
          </div>
          <div className="pt-2 border-t border-slate-800 text-[11px] text-teal-400 font-medium">
            • Aksi: Keberlanjutan etis usaha
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
        <Cpu className="text-emerald-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Pijakan Kuat:</strong> Framework ini menjaga agar wirausaha tetap berpegang pada nilai kemanusiaan dan lingkungan di tengah perhitungan angka bisnis.
        </span>
      </motion.div>
    </div>
  );
}