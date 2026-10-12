'use client';

import { motion } from 'framer-motion';

export default function Slide7IndikatorPlanet() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 border-b border-slate-800 pb-2">
        Mengukur Dampak Lingkungan (Environmental KPI)
      </h2>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="overflow-x-auto rounded-xl border border-slate-800"
      >
        <table className="w-full text-left text-xs border-collapse bg-slate-900/60">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 bg-slate-900/90">
              <th className="p-3">Kategori Dampak</th>
              <th className="p-3 text-amber-400">Bisnis Konvensional</th>
              <th className="p-3 text-emerald-400">Bisnis Ecopreneurship</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            <tr className="hover:bg-slate-800/40 transition-colors">
              <td className="p-3 font-semibold">Pengelolaan Limbah</td>
              <td className="p-3">Dibuang ke TPA / Laut</td>
              <td className="p-3 font-bold text-emerald-300">Sirkular / Didaur Ulang</td>
            </tr>
            <tr className="hover:bg-slate-800/40 transition-colors">
              <td className="p-3 font-semibold">Sumber Bahan Baku</td>
              <td className="p-3">Eksploitasi Masif</td>
              <td className="p-3 font-bold text-emerald-300">Organik / Sertifikasi Sasi</td>
            </tr>
            <tr className="hover:bg-slate-800/40 transition-colors">
              <td className="p-3 font-semibold">Jejak Karbon (Carbon Footprint)</td>
              <td className="p-3">Tinggi (Impor Komponen)</td>
              <td className="p-3 font-bold text-emerald-300">Rendah (Lokalitas Tapak)</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}