'use client';

import { motion } from 'framer-motion';
import { HeartHandshake, CheckCircle2, Award } from 'lucide-react';

export default function Slide5() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Evaluasi Kolaborasi & Peran Kelompok
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Keberhasilan menyelesaikan proyek satu semester adalah hasil dari pembagian tugas yang adil dan komunikasi tim yang solid.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <HeartHandshake className="text-emerald-400" size={22} />
          <h4 className="font-bold text-white text-sm">Pembagian Peran Jelas</h4>
          <p className="text-xs text-slate-400">Menilai bagaimana setiap anggota mengambil tanggung jawab di bidang riset, produksi, keuangan, atau pemasaran.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <CheckCircle2 className="text-cyan-400" size={22} />
          <h4 className="font-bold text-white text-sm">Pengelolaan Konflik</h4>
          <p className="text-xs text-slate-400">Bagaimana kelompok menyelesaikan perbedaan pendapat secara konstruktif demi kemajuan proyek bersama.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Award className="text-teal-400" size={22} />
          <h4 className="font-bold text-white text-sm">Saling Mendukung</h4>
          <p className="text-xs text-slate-400">Menumbuhkan budaya kerja sama yang saling menguatkan kelebihan dan menutupi kekurangan antaranggota.</p>
        </motion.div>
      </div>
    </div>
  );
}