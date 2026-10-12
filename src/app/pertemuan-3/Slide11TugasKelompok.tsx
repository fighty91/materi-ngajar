'use client';

import { motion } from 'framer-motion';
import { Presentation, Upload } from 'lucide-react';

export default function Slide11TugasKelompok() {
  return (
    <div className="space-y-4 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 border-b border-slate-800 pb-2 flex items-center gap-2">
        <Presentation className="text-cyan-400" /> Panduan Tugas Kelompok (Roadmap UTS)
      </h2>
      <motion.div 
        whileHover={{ borderColor: 'rgba(34, 211, 238, 0.6)' }}
        className="p-6 bg-slate-800/80 border border-cyan-500/40 rounded-2xl space-y-4 transition-all shadow-xl"
      >
        <div className="flex flex-col items-start gap-2 border-b border-slate-700/60 pb-3">
          <span className="text-xs md:text-sm font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
            Penambahan 2 Slide Baru ke Draf Master Pitch Deck
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-3.5 bg-slate-900/60 border border-slate-700 hover:border-cyan-400 rounded-xl space-y-1 transition-all cursor-pointer"
          >
            <h4 className="font-bold text-cyan-300 text-xs">Slide 4: Mitra Komunitas (People)</h4>
            <p className="text-[11px] text-slate-300">Tentukan siapa kelompok warga lokal yang akan diajak bekerja sama (misal: petani, mama-mama, pemuda perkotaan).</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="p-3.5 bg-slate-900/60 border border-slate-700 hover:border-cyan-400 rounded-xl space-y-1 transition-all cursor-pointer"
          >
            <h4 className="font-bold text-cyan-300 text-xs">Slide 5: Skema Kemitraan Inklusif</h4>
            <p className="text-[11px] text-slate-300">Jelaskan bentuk kerja sama dan pembagian nilai/keuntungan yang adil bagi komunitas mitra.</p>
          </motion.div>

        </div>
        <div className="pt-2 text-xs text-slate-400 flex items-center gap-2 bg-slate-900/40 p-2 rounded-lg">
          <Upload size={16} className="text-cyan-400 shrink-0" />
          <span>Simpan pembaruan slide ke file kelompok kalian di <b>Google Drive Kelas</b>!</span>
        </div>
      </motion.div>
    </div>
  );
}