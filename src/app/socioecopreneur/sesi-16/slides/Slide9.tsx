'use client';

import { motion } from 'framer-motion';
import { Trophy, Heart } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Apresiasi & Penutup Semester Ganjil
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Ucapan terima kasih dan penghargaan atas kerja keras seluruh mahasiswa selama satu semester penuh.
      </p>

      <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3 text-xs">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
          <Trophy size={18} />
          <span>Selamat & Sukses Ujian Akhir</span>
        </div>
        <p className="text-slate-300 leading-relaxed">
          "Terima kasih atas dedikasi, kreativitas, dan kolaborasi luar biasa kalian. Semoga ilmu dan proyek sosial yang telah dirancang membawa berkat bagi masyarakat Papua."
        </p>
        <p className="text-slate-400 italic pt-1">
          — Fighty Elia Ratag, S.Ak., M.Ak., CFTR. (Universitas Katolik Fajar Timur Papua)
        </p>
      </div>
    </div>
  );
}