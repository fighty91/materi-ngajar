'use client';

import { motion } from 'framer-motion';

export default function Slide7MatriksKomparasi() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 border-b border-slate-800 pb-2">
        Matriks Komparasi Pendekatan Sosial
      </h2>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="overflow-x-auto rounded-xl border border-slate-800"
      >
        <table className="w-full text-left text-xs border-collapse bg-slate-900/60">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 bg-slate-900/90">
              <th className="p-3">Dimensi</th>
              <th className="p-3 text-amber-400">Charity</th>
              <th className="p-3 text-cyan-400">CSR</th>
              <th className="p-3 text-emerald-400">Social Enterprise</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            <tr className="hover:bg-slate-800/40 transition-colors">
              <td className="p-3 font-semibold">Tujuan</td>
              <td className="p-3">Meringankan beban</td>
              <td className="p-3">Pelengkap bisnis</td>
              <td className="p-3 font-bold text-emerald-300">Mandiri & Berdampak</td>
            </tr>
            <tr className="hover:bg-slate-800/40 transition-colors">
              <td className="p-3 font-semibold">Komunitas</td>
              <td className="p-3">Penerima Pasif</td>
              <td className="p-3">Sasaran PR</td>
              <td className="p-3 font-bold text-emerald-300">Mitra Usaha / Pemilik</td>
            </tr>
            <tr className="hover:bg-slate-800/40 transition-colors">
              <td className="p-3 font-semibold">Pendanaan</td>
              <td className="p-3">Donasi / Hibah</td>
              <td className="p-3">Sisa Laba PT</td>
              <td className="p-3 font-bold text-emerald-300">Penjualan Mandiri</td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}