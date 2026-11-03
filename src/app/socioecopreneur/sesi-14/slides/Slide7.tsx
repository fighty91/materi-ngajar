'use client';

import { motion } from 'framer-motion';
import { Mic, UserCheck, Clock } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Teknik Penyampaian & Kepercayaan Diri
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Cara Anda membawakan presentasi sama pentingnya dengan isi materi yang Anda buat.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Mic className="text-emerald-400" size={22} />
          <h4 className="font-bold text-white text-sm">Intonasi & Kecepatan</h4>
          <p className="text-xs text-slate-400">Berbicara dengan jelas, tidak terlalu cepat, dan beri penekanan pada poin-poin penting.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <UserCheck className="text-cyan-400" size={22} />
          <h4 className="font-bold text-white text-sm">Kontak Mata & Senyum</h4>
          <p className="text-xs text-slate-400">Menatap audiens secara merata menunjukkan penguasaan materi dan rasa percaya diri.</p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-2">
          <Clock className="text-teal-400" size={22} />
          <h4 className="font-bold text-white text-sm">Manajemen Waktu</h4>
          <p className="text-xs text-slate-400">Latih presentasi berulang kali agar pas dengan durasi waktu yang diberikan (maksimal 3-5 menit).</p>
        </motion.div>
      </div>
    </div>
  );
}