'use client';

import { Coins, Users, Globe } from 'lucide-react';

export default function Slide4TripleBottomLine() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2 max-h-[75vh] md:max-h-none custom-scrollbar">
      <h2 className="text-2xl sm:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Fondasi Utama: Triple Bottom Line (3P)
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 pt-1 md:pt-2">
        {/* PROFIT */}
        <div className="p-4 md:p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-center space-y-2 md:space-y-3 transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:bg-amber-500/20 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer">
          <Coins className="mx-auto text-amber-400 w-7 h-7 md:w-9 md:h-9" />
          <h3 className="font-bold text-lg md:text-xl text-amber-300">PROFIT</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Bisnis harus menguntungkan secara keuangan agar mandiri dan tidak bangkrut.
          </p>
        </div>

        {/* PEOPLE */}
        <div className="p-4 md:p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-center space-y-2 md:space-y-3 transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer">
          <Users className="mx-auto text-cyan-400 w-7 h-7 md:w-9 md:h-9" />
          <h3 className="font-bold text-lg md:text-xl text-cyan-300">PEOPLE</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Menciptakan lapangan kerja, martabat, dan kesejahteraan bagi warga.
          </p>
        </div>

        {/* PLANET */}
        <div className="p-4 md:p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2 md:space-y-3 transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:bg-emerald-500/20 hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer">
          <Globe className="mx-auto text-emerald-400 w-7 h-7 md:w-9 md:h-9" />
          <h3 className="font-bold text-lg md:text-xl text-emerald-300">PLANET</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Menjaga kebersihan tanah, air, udara, serta merawat kelestarian alam.
          </p>
        </div>
      </div>
    </div>
  );
}