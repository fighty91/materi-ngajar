'use client';

import { motion } from 'framer-motion';
import { Hammer, Pickaxe, MapPin } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Elemen 6 & 7: Aktivitas & Sumber Daya Lokal
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Memanfaat kearifan dan potensi bahan alam Papua sebagai fondasi utama operasional usaha.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Pickaxe size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Sumber Daya Utama (Key Resources)</h4>
              <p className="text-xs text-emerald-400">Bahan Baku & SDM Papua</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Pasokan limbah organik (sabut kelapa Pasar Hamadi / serat sagu Sentani).</li>
            <li>• Keterampilan tradisional perajin lokal dan cetakan kayu/paralon sederhana.</li>
          </ul>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <Hammer size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Aktivitas Utama (Key Activities)</h4>
              <p className="text-xs text-cyan-400">Proses Produksi Ramah Lingkungan</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Pemilahan & pembersihan bahan baku limbah.</li>
            <li>• Proses pencetakan dengan perekat organik & pengeringan alami sinar matahari.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}