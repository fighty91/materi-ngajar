'use client';

import { Flame } from 'lucide-react';

export default function Slide2Krisis() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-3 flex items-center gap-2">
        <Flame className="text-amber-400" /> Mengapa Paradigma Bisnis Harus Berubah?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div className="p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-amber-500/80 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer space-y-3">
          <div className="text-amber-400 font-bold text-xl">⚠️ Realitas Krisis Ganda</div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Dunia sedang menghadapi penumpukan limbah/plastik dan perubahan iklim, beriringan dengan ketimpangan ekonomi serta terbatasnya lapangan kerja.
          </p>
        </div>

        <div className="p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-cyan-500/80 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer space-y-3">
          <div className="text-cyan-400 font-bold text-xl">💡 Kekuatan Model Bisnis</div>
          <p className="text-slate-300 text-sm leading-relaxed">
            Bantuan hibah (charity) bersifat sementara. Wirausaha yang mandiri secara keuangan sanggup menghasilkan dampak sosial-ekologi secara berkelanjutan.
          </p>
        </div>
      </div>
    </div>
  );
}