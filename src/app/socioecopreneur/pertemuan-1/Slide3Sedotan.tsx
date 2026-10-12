'use client';

export default function Slide3Sedotan() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-400 text-center">
        Sama-Sama Menjual Sedotan, Apa Bedanya?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
        <div className="p-5 bg-slate-800/50 border border-slate-700 rounded-xl space-y-2 transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-slate-500 hover:shadow-lg cursor-pointer">
          <div className="text-xs text-slate-400 uppercase font-semibold">Konvensional</div>
          <div className="font-bold text-lg text-white">Sedotan Plastik</div>
          <p className="text-xs text-slate-400">Menjual murah untuk mengejar laba pribadi maksimal.</p>
        </div>

        <div className="p-5 bg-slate-800/50 border border-teal-500/40 rounded-xl space-y-2 transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/10 cursor-pointer">
          <div className="text-xs text-teal-400 uppercase font-semibold">Ecopreneurship</div>
          <div className="font-bold text-lg text-white">Sedotan Bambu</div>
          <p className="text-xs text-slate-400">Fokus mengganti plastik demi kelestarian alam (Planet).</p>
        </div>

        <div className="p-5 bg-slate-800/50 border border-cyan-500/40 rounded-xl space-y-2 transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer">
          <div className="text-xs text-cyan-400 uppercase font-semibold">Sociopreneurship</div>
          <div className="font-bold text-lg text-white">Sedotan Pengrajin</div>
          <p className="text-xs text-slate-400">Fokus memberdayakan warga desa kurang mampu (People).</p>
        </div>

        <div className="p-5 bg-emerald-950/40 border border-emerald-500 rounded-xl space-y-2 transition-all duration-300 hover:scale-105 hover:bg-emerald-900/60 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 cursor-pointer">
          <div className="text-xs text-emerald-400 uppercase font-bold">Socio-Ecopreneur</div>
          <div className="font-bold text-lg text-emerald-200">Sedotan Bambu Lokal</div>
          <p className="text-xs text-emerald-300">Ganti plastik sekaligus angkat ekonomi warga setempat!</p>
        </div>
      </div>
    </div>
  );
}