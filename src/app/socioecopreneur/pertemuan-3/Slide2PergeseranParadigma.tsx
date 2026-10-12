'item client';

import { ArrowRight, Gift, Building2, Rocket } from 'lucide-react';

export default function Slide3PergeseranParadigma() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 border-b border-slate-800 pb-2 md:pb-3">
        Pergeseran Paradigma Penanganan Masalah
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
        <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Gift size={18} /> Charity (Kedermawanan)
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Bantuan uang/barang langsung. Sifatnya sementara dan rentan menciptakan ketergantungan.
          </p>
        </div>
        <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <Building2 size={18} /> CSR Konvensional
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Menyisihkan sebagian laba. Misi sosial hanya program sampingan, bisnis utama tetap profit-first.
          </p>
        </div>
        <div className="p-4 bg-emerald-950/40 border border-emerald-500/50 rounded-2xl space-y-2 shadow-lg">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Rocket size={18} /> Social Business
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">
            Menjadikan solusi masalah sosial sebagai <b>jantung bisnis utama</b> yang mandiri secara finansial.
          </p>
        </div>
      </div>
    </div>
  );
}