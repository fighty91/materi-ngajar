'use client';

import { motion } from 'framer-motion';
import { Sparkles, MessageSquare } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Teknik Membuka Pitch ("The Hook")
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        30 detik pertama menentukan apakah audiens akan mendengarkan Anda atau mengalihkan perhatian.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
            <Sparkles size={18} /> Pilihan Cara Membuka
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            • Mengajukan pertanyaan reflektif kepada audiens.<br />
            • Menyebutkan data statistik mengejutkan tentang limbah di Papua.<br />
            • Menceritakan kisah singkat pengalaman nyata di lapangan.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <h4 className="font-bold text-cyan-400 text-sm flex items-center gap-2">
            <MessageSquare size={18} /> Contoh Kalimat Pembuka
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed italic">
            "Tahukah Anda, setiap hari ribuan kilogram limbah sabut kelapa terbuang sia-sia di Pasar Hamadi Jayapura? Bagaimana jika limbah ini kita ubah menjadi solusi hijau yang memberdayakan perajin lokal?"
          </p>
        </motion.div>
      </div>
    </div>
  );
}