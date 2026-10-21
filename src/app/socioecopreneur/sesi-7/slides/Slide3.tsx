'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Building, RefreshCw } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Elemen 10: Revenue Streams (Sumber Pendapatan)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Untuk menjaga keberlanjutan mandiri (*Self-Sustaining*), wirausaha sosial harus memiliki lebih dari satu saluran arus kas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <ShoppingCart size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Penjualan Eceran (B2C)</h4>
              <p className="text-xs text-emerald-400">Konsumen Individu</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Pendapatan dari penjualan langsung pot sabut kelapa atau wadah makanan sagu di pameran UMKM dan toko tanaman.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <Building size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Kemitraan Kontrak (B2B)</h4>
              <p className="text-xs text-cyan-400">Pesanan Komersial Rutin</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Pendapatan berkala dari pasokan wadah kuliner organik ke kafe/depot atau pot tanaman ke pengembang/instansi.
          </p>
        </motion.div>
      </div>
    </div>
  );
}