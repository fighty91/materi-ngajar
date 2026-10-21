'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Layers } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Pergeseran dari BMC Biasa ke SBMC
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Business Model Canvas (BMC) konvensional hanya berfokus pada profit keuangan. SBMC mengadaptasi canvas agar berorientasi <span className="text-emerald-400 italic">Impact First, Profit Always</span>.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-rose-500/10 rounded-xl text-rose-400">
              <Layers size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">BMC Konvensional</h4>
              <p className="text-xs text-rose-400">Profit Centric</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Hanya mengukur keberhasilan bisnis dari pendapatan uang dan kepuasan pembeli komersial semata.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-emerald-500/40 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Heart size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Social BMC (SBMC)</h4>
              <p className="text-xs text-emerald-400">Triple Bottom Line (3P)</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Menyeimbangkan keuntungan finansial dengan kelestarian alam Papua (Planet) serta kesejahteraan komunitas perajin/warga lokal (People).
          </p>
        </motion.div>
      </div>
    </div>
  );
}