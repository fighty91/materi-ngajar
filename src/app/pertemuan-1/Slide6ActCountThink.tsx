'use client';

import { Sparkles } from 'lucide-react';

export default function Slide6ActCountThink() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-3 flex items-center gap-2">
        <Sparkles className="text-teal-300" /> Kerangka Pembelajaran: ACT.COUNT.THINK
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="p-5 bg-emerald-950/30 border border-emerald-500/40 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-emerald-900/50 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer">
          <div className="text-2xl font-black text-emerald-400 mb-2">ACT</div>
          <h4 className="font-bold text-white text-base mb-1">Aksi Nyata</h4>
          <p className="text-xs text-slate-300 leading-relaxed">Turun mengamati lingkungan sekitar dan merancang ide usaha nyata.</p>
        </div>

        <div className="p-5 bg-cyan-950/30 border border-cyan-500/40 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-cyan-900/50 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer">
          <div className="text-2xl font-black text-cyan-400 mb-2">COUNT</div>
          <h4 className="font-bold text-white text-base mb-1">Akuntabilitas</h4>
          <p className="text-xs text-slate-300 leading-relaxed">Mengukur dampak keuangan, sosial, dan efisiensi ekologis secara terukur.</p>
        </div>

        <div className="p-5 bg-amber-950/30 border border-amber-500/40 rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-amber-900/50 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer">
          <div className="text-2xl font-black text-amber-400 mb-2">THINK</div>
          <h4 className="font-bold text-white text-base mb-1">Refleksi Kritis</h4>
          <p className="text-xs text-slate-300 leading-relaxed">Memegang etika, kejujuran, dan nilai spiritualitas menjaga ciptaan.</p>
        </div>
      </div>
    </div>
  );
}