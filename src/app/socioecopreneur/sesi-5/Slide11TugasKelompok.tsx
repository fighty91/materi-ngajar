'use client';

import { motion } from 'framer-motion';
import { Presentation, Hammer, CheckCircle2, Clock } from 'lucide-react';

export default function Slide11TugasKelompok() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Tugas Kelompok: Finalisasi Pitch Deck & Praktik MVP
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Langkah konkret kelompok untuk melengkapi draf presentasi UTS dan mengeksekusi uji coba purwarupa di lapangan selama 2 minggu ke depan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        
        {/* Poin 1: Fokus Isi Slide */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Presentation size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">1. Lengkapi Slide 7 Pitch Deck</h4>
              <p className="text-xs text-emerald-400">Proyeksi Finansial & Alokasi Surplus</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Buat slide yang berisi estimasi sumber pendapatan utama (B2B/B2C) serta harga jual per unit yang mencakup upah layak.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-emerald-400 font-bold">•</span>
              <span>Sertakan rincian alokasi surplus laba untuk reinvestasi dan pengembangan komunitas lokal.</span>
            </li>
          </ul>
        </motion.div>

        {/* Poin 2: Praktik Lapangan (2 Minggu) */}
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="p-5 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 rounded-2xl space-y-3 transition-all"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <Hammer size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm md:text-base">2. Perakitan Purwarupa (2 Minggu)</h4>
              <p className="text-xs text-cyan-400">Eksekusi Fisik & Uji Coba Lapangan</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Gunakan Lembar Uji Coba Purwarupa untuk merakit sampel fisik produk secara langsung di sekitar Jayapura.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 font-bold">•</span>
              <span>Hasil kerja kelompok dan progres fisik akan dikumpulkan dan dipresentasikan langsung kepada dosen pengampu.</span>
            </li>
          </ul>
        </motion.div>

      </div>

      {/* Banner Penutup */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="p-4 bg-slate-900/40 border border-emerald-500/30 rounded-xl flex items-center gap-3 text-xs text-slate-300"
      >
        <Clock className="text-emerald-400 shrink-0" size={20} />
        <span>
          <strong className="text-white">Timeline Pengerjaan:</strong> Alokasikan waktu 2 minggu ini dengan efektif untuk menyempurnakan purwarupa fisik bersama kelompok masing-masing. Semangat berkarya untuk Papua!
        </span>
      </motion.div>
    </div>
  );
}