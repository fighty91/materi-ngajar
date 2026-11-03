'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Sparkles } from 'lucide-react';

export default function Slide8() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Dari Ruang Kelas Menuju Eksekusi Nyata
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Pertanggungjawaban hari ini adalah batu loncatan pertama Anda untuk mendirikan usaha mikro sosial yang mandiri di tanah Papua.
      </p>

      <div className="p-5 bg-slate-900/90 border border-emerald-500/30 rounded-2xl space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
            <Sparkles size={22} />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">Semangat Kewirausahaan Berkelanjutan</h4>
            <p className="text-xs text-emerald-400">Ecopreneurship Masa Depan</p>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Teruslah merawat kepedulian terhadap lingkungan dan sesama. Jadilah wirausahawan yang tidak hanya mencari keuntungan finansial, tetapi juga membawa perubahan positif yang abadi.
        </p>
      </div>
    </div>
  );
}