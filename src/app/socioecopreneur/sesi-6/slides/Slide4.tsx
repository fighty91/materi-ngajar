'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Users2 } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Elemen 2 & 3: Segmentasi Pengguna
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Di dalam wirausaha sosial, pembeli produk (*Customer*) dan pihak yang menerima manfaat sosial (*Beneficiary*) sering kali merupakan pihak yang terpisah.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <ShoppingBag size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Customer Segment (Pembeli)</h4>
              <p className="text-xs text-emerald-400">Pihak yang Membayar</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• **B2C:** Pecinta tanaman, masyarakat peduli lingkungan, wisatawan.</li>
            <li>• **B2B:** Kafe, depot kuliner, toko tanaman hias, dan instansi di Jayapura.</li>
          </ul>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <Users2 size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Beneficiary Segment (Penerima Manfaat)</h4>
              <p className="text-xs text-cyan-400">Komunitas Terdampak</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Petani/pemungut limbah sabut kelapa dan serat sagu di sekitar Jayapura/Sentani.</li>
            <li>• Perajin lokal dan kelompok ibu-ibu rumah tangga yang diberdayakan dalam perakitan.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}