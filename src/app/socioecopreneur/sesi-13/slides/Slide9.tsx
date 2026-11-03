'use client';

import { motion } from 'framer-motion';
import { RefreshCw, Award } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Mentalitas Wirausahawan Sosial
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Perjalanan membangun usaha tidak berhenti pada dokumen proposal, melainkan awal dari eksekusi nyata.
      </p>

      <div className="p-5 bg-slate-900/90 border border-emerald-500/30 rounded-2xl space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
            <RefreshCw size={22} />
          </div>
          <div>
            <h4 className="font-bold text-white text-sm">Belajar dari Setiap Iterasi</h4>
            <p className="text-xs text-emerald-400">Ecopreneurship yang Adaptif</p>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Bisnis sosial yang sukses adalah bisnis yang terus mendengarkan komunitasnya, beradaptasi dengan perubahan lingkungan, dan menjaga integritas dampak sosial serta ekologis di atas segalanya.
        </p>
      </div>
    </div>
  );
}