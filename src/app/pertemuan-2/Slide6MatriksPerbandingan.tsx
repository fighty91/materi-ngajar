'use client';

export default function Slide6MatriksPerbandingan() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 text-center">
        Perbandingan Pendekatan Produk
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 pt-2">
        <div className="p-4 bg-slate-800/50 border border-slate-700 rounded-xl space-y-2 transition-all duration-300 hover:scale-105 hover:bg-slate-800 cursor-pointer">
          <div className="text-xs text-slate-400 uppercase font-semibold">Plastik Minyak Bumi</div>
          <div className="font-bold text-base text-white">Konvensional</div>
          <p className="text-xs text-slate-400">Butuh ratusan tahun hancur, meracuni tanah & laut Jayapura.</p>
        </div>

        <div className="p-4 bg-slate-800/50 border border-teal-500/40 rounded-xl space-y-2 transition-all duration-300 hover:scale-105 hover:bg-slate-800 hover:border-teal-400 cursor-pointer">
          <div className="text-xs text-teal-400 uppercase font-semibold">Pati Singkong / Beras</div>
          <div className="font-bold text-base text-white">Ecopreneurship</div>
          <p className="text-xs text-slate-400">Terurai alami cepat, manufaktur skala pabrik besar.</p>
        </div>

        <div className="p-4 bg-emerald-950/40 border border-emerald-500 rounded-xl space-y-2 transition-all duration-300 hover:scale-105 hover:bg-emerald-900/60 shadow-lg shadow-emerald-500/10 cursor-pointer">
          <div className="text-xs text-emerald-400 uppercase font-bold">Pati / Ampas Sagu</div>
          <div className="font-bold text-base text-emerald-200">Socio-Ecopreneur Papua</div>
          <p className="text-xs text-emerald-300">Hilangkan sampah sekaligus berdayakan masyarakat lokal!</p>
        </div>
      </div>
    </div>
  );
}