'use client';

import { motion } from 'framer-motion';
import { ClipboardList } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Instrumen Refleksi Akhir Semester
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Tiga pertanyaan reflektif yang perlu dijawab secara jujur oleh setiap individu dalam kelompok:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-2">
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
          <span className="text-emerald-400 font-bold block text-sm">1. Pembelajaran Terbesar</span>
          <span className="text-slate-400">Apa hal paling berharga yang Anda pelajari mengenai tantangan wirausaha sosial di Papua?</span>
        </div>
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
          <span className="text-cyan-400 font-bold block text-sm">2. Kontribusi Pribadi</span>
          <span className="text-slate-400">Bagaimana Anda menilai kontribusi nyata yang telah Anda berikan untuk kesuksesan kelompok?</span>
        </div>
        <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl space-y-2">
          <span className="text-teal-400 font-bold block text-sm">3. Ruang Pengembangan</span>
          <span className="text-slate-400">Keahlian atau aspek apa yang ingin Anda tingkatkan lagi dalam dunia bisnis sosial ke depan?</span>
        </div>
      </div>
    </div>
  );
}