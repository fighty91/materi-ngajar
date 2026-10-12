'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Slide6PetaMasalahPapua() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-amber-400 border-b border-slate-800 pb-2 md:pb-3 flex items-center gap-2">
        <MapPin className="text-amber-400" /> Peta Masalah Sosial Material di Papua
      </h2>
      <div className="space-y-3">
        
        <motion.div 
          whileHover={{ x: 6 }}
          className="p-3.5 bg-slate-900/80 border-l-4 border-l-amber-500 border-slate-800 rounded-r-xl transition-all cursor-pointer"
        >
          <h4 className="font-bold text-white text-xs md:text-sm">1. Rantai Pasok Panjang & Tengkulak</h4>
          <p className="text-xs text-slate-300">Hasil kebun mama-mama Papua dihargai murah di tingkat tapak karena minim akses pasar & pengolahan pasca-panen.</p>
        </motion.div>

        <motion.div 
          whileHover={{ x: 6 }}
          className="p-3.5 bg-slate-900/80 border-l-4 border-l-cyan-500 border-slate-800 rounded-r-xl transition-all cursor-pointer"
        >
          <h4 className="font-bold text-white text-xs md:text-sm">2. Pengangguran Usia Muda Perkotaan</h4>
          <p className="text-xs text-slate-300">Banyak angkatan kerja muda sulit menembus pasar kerja formal karena minimnya pelatihan vokasi/keterampilan bisnis.</p>
        </motion.div>

        <motion.div 
          whileHover={{ x: 6 }}
          className="p-3.5 bg-slate-900/80 border-l-4 border-l-emerald-500 border-slate-800 rounded-r-xl transition-all cursor-pointer"
        >
          <h4 className="font-bold text-white text-xs md:text-sm">3. Pengabaian Kelembagaan Lokal</h4>
          <p className="text-xs text-slate-300">Modernisasi sering kali menggerus tradisi gotong royong dan potensi kelembagaan kampung berbasis adat.</p>
        </motion.div>

      </div>
    </div>
  );
}