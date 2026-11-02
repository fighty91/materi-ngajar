// Slide3.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users2, ShieldCheck, Store, Landmark } from 'lucide-react';

export default function Slide3() {
  const partners = [
    { title: "Masyarakat Adat & Petani Lokal", desc: "Memvalidasi kesesuaian nilai sosial dan ketersediaan bahan baku.", icon: <Users2 size={16} className="text-emerald-600" /> },
    { title: "Konsumen Akhir (Early Adopters)", desc: "Menguji daya tarik produk, harga, dan kesadaran lingkungan.", icon: <Store size={16} className="text-teal-600" /> },
    { title: "Regulator / Pemerintah Daerah", desc: "Memastikan kepatuhan terhadap regulasi lingkungan dan izin usaha.", icon: <Landmark size={16} className="text-sky-600" /> },
    { title: "Investor Hijau / Ahli Teknis", desc: "Menilai kelayakan finansial, tata kelola, dan standar akuntansi hijau.", icon: <ShieldCheck size={16} className="text-amber-600" /> },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-5 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <span className="text-[9px] sm:text-xs font-black uppercase tracking-widest text-teal-800 bg-teal-200 px-2.5 py-0.5 rounded-full inline-block">
          Spektrum Stakeholder
        </span>
        <h2 className="text-base sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
          Pemangku Kepentingan Utama dalam Proses Validasi
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
        {partners.map((p, idx) => (
          <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-2xs">
            <div className="p-2 bg-slate-50 rounded-lg shrink-0">
              {p.icon}
            </div>
            <div className="space-y-0.5">
              <h3 className="font-extrabold text-xs sm:text-sm text-slate-900">{p.title}</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 leading-tight">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}