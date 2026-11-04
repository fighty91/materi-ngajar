'use client';

import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export default function Slide3() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Struktur 5 Bagian Wajib dalam Pitch
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Kerangka urutan penyampaian agar presentasi Anda terstruktur rapi dan mudah dipahami.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 text-xs pt-2">
        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-emerald-400 font-bold block">1. Hook & Problem</span>
          <span className="text-slate-400">Buka dengan keresahan lokal dan akar masalah nyata di lapangan.</span>
        </div>
        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-cyan-400 font-bold block">2. Solution & Prototype</span>
          <span className="text-slate-400">Perkenalkan produk MVP dan hasil uji coba awal Anda.</span>
        </div>
        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-teal-400 font-bold block">3. Business Model</span>
          <span className="text-slate-400">Strategi aktif penentuan harga, penjualan, dan perputaran modal usaha.</span>
        </div>
        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-amber-400 font-bold block">4. Impact</span>
          <span className="text-slate-400">Bukti nyata manfaat bagi People & Planet secara terukur.</span>
        </div>
        <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl space-y-1">
          <span className="text-purple-400 font-bold block">5. Call to Action</span>
          <span className="text-slate-400">Penutup kuat & ajakan kolaborasi/dukungan.</span>
        </div>
      </div>
    </div>
  );
}