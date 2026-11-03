'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck } from 'lucide-react';

export default function Slide7() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Checklist Dokumen & Kesiapan Sidang
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Pastikan kelompok Anda telah melengkapi seluruh instrumen pertanggungjawaban berikut:
      </p>

      <div className="p-5 bg-slate-900/90 border border-slate-800 rounded-2xl space-y-3 text-xs">
        <ul className="space-y-2.5 text-slate-300">
          <li className="flex items-center gap-2">
            <ClipboardCheck className="text-emerald-400 shrink-0" size={16} />
            <span><strong>Proposal & Portofolio Lengkap:</strong> Dokumen tertulis dari latar belakang masalah hingga analisis keuangan.</span>
          </li>
          <li className="flex items-center gap-2">
            <ClipboardCheck className="text-emerald-400 shrink-0" size={16} />
            <span><strong>Sampel / Dokumentasi MVP:</strong> Visual atau fisik prototipe produk awal yang telah diuji coba.</span>
          </li>
          <li className="flex items-center gap-2">
            <ClipboardCheck className="text-emerald-400 shrink-0" size={16} />
            <span><strong>Slide Presentasi (Pitch Deck):</strong> Alur 5 bagian yang ringkas, menarik, dan tepat waktu.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}