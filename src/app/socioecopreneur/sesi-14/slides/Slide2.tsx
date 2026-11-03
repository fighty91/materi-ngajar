'use client';

import { motion } from 'framer-motion';
import { Target, CheckCircle2 } from 'lucide-react';

export default function Slide2() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Apa itu Pitching Ide Bisnis?
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        *Pitching* adalah presentasi lisan singkat (biasanya 3 hingga 5 menit) untuk menjelaskan inti gagasan usaha, nilai manfaat, dan potensi pertumbuhan bisnis kepada orang lain.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Target size={20} />
            <span>Bukan Sekadar Baca Slide</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Pitching yang baik bukanlah membaca seluruh teks pada layar, melainkan menyampaikan cerita emosional dan logis yang membuat audiens peduli.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <CheckCircle2 size={20} />
            <span>Fokus pada Solusi & Dampak</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Menunjukkan bagaimana kelompok Anda mampu mengubah masalah sosial atau lingkungan di Papua menjadi peluang usaha yang berkelanjutan.
          </p>
        </motion.div>
      </div>
    </div>
  );
}