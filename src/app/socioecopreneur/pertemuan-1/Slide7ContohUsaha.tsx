'use client';

export default function Slide7ContohUsaha() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-3">
        Contoh Usaha Nyata Berdampak Ganda
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        <div className="p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-emerald-500/80 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer space-y-2">
          <div className="text-emerald-400 font-bold text-lg">♻️ Daur Ulang Plastik Komunitas</div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Mengolah sampah plastik pasar menjadi meja/furnitur (Eco) sekaligus mempekerjakan warga pemukiman kurang mampu (Socio).
          </p>
        </div>

        <div className="p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-cyan-500/80 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer space-y-2">
          <div className="text-cyan-400 font-bold text-lg">👗 Fashion / Kain Pewarna Alami</div>
          <p className="text-slate-300 text-xs leading-relaxed">
            Menggunakan pewarna dari limbah tumbuhan (Eco) dan bermitra langsung dengan pengrajin tenun tradisional daerah (Socio).
          </p>
        </div>
      </div>
    </div>
  );
}