'use client';

import { motion } from 'framer-motion';
import { PenTool, Users, Clock } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Instruksi Workshop: Draf SBMC Kelompok
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Kerjakan draf awal Social Business Model Canvas (SBMC) bersama kelompok masing-masing di kelas.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <PenTool size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Langkah Diskusi Kelompok</h4>
              <p className="text-xs text-emerald-400">Penyusunan Bagian 1</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Isi matriks SBMC: *Value Proposition*, *Customer Segment*, *Beneficiary Segment*, *Channels*, dan *Social/Eco Impact*.</li>
            <li>• Pastikan ide usaha memanfaatkan potensi bahan lokal Papua (Pot Sabut Kelapa / Wadah Sagu).</li>
          </ul>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <Clock size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Persiapan Pertemuan 7</h4>
              <p className="text-xs text-cyan-400">Lanjutan Elemen Keuangan</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Draf bagian 1 ini akan dilanjutkan minggu depan dengan perhitungan struktur biaya dan proyeksi keuangan sederhana (SBMC Bagian 2).
          </p>
        </motion.div>
      </div>
    </div>
  );
}