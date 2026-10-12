'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, DollarSign, Lightbulb } from 'lucide-react';

export default function Slide6BreakEvenPoint() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Menghitung Break-Even Point (BEP) Sosial
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Titik impas (*Break-Even Point*) membantu wirausaha sosial mengetahui kapan bisnis mulai menutup seluruh biaya operasional dan komponen sosialnya.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        
        {/* Kolom Rumus Dasar BEP */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Target size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">Formula Dasar BEP Unit</h4>
              <p className="text-xs text-emerald-400">Titik Impas Penjualan Produk</p>
            </div>
          </div>
          <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl text-center font-mono text-xs text-emerald-300">
            BEP (Unit) = Biaya Tetap / (Harga Jual - Biaya Variabel)
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Menghitung berapa banyak unit produk (misal: pot sabut kelapa atau kemasan sagu) yang harus terjual agar total pendapatan sama dengan total biaya.
          </p>
        </motion.div>

        {/* Kolom Faktor Sosial dalam BEP */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <TrendingUp size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">Penyesuaian Biaya Sosial</h4>
              <p className="text-xs text-cyan-400">Memasukkan Upah Layak & Mitigasi</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Pastikan biaya variabel mencakup standar upah adil bagi perajin/petani lokal.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Jangan menekan harga di bawah nilai wajar demi mengejar BEP cepat jika merugikan komunitas.</span>
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
        <Lightbulb className="text-emerald-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Catatan Praktis:</strong> BEP yang sehat memastikan bisnis tidak nombok, sehingga misi sosial dan kesejahteraan perajin lokal di Papua dapat terus berjalan secara konsisten.
        </span>
      </motion.div>
    </div>
  );
}