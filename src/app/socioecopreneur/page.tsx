// src/app/page.tsx
'use client';

import Image from 'next/image';
import SlideEngine from '@/app/socioecopreneur/components/SlideEngine';
import { GraduationCap, Building2, Sparkles } from 'lucide-react';

export default function SocioEcopreneur() {
  const homeSlides = [
    // Slide 1: Cover Utama Identitas Dosen & Institusi
    <div key="home-1" className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <div className="flex justify-center mb-2 md:mb-4">
        <div className="relative w-20 h-20 md:w-28 md:h-28 p-2 bg-slate-800 rounded-2xl border border-emerald-500/30 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-emerald-400">
          <Image
            src="/logo.png"
            alt="Logo UNIKA Fajar Timur Papua"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-medium">
        <Sparkles size={14} className="md:w-4 md:h-4" /> Media Pembelajaran Interaktif
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 leading-tight">
        Socio & Ecopreneurship
      </h1>

      <div className="pt-3 md:pt-4 border-t border-slate-800 max-w-2xl mx-auto space-y-1.5 md:space-y-2">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-200">
          Fighty Elia Ratag, S.Ak., M.Ak., CFTR.
        </h2>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base flex items-center justify-center gap-1.5 md:gap-2">
          <GraduationCap size={16} className="text-emerald-400 md:w-5 md:h-5" />
          Program Studi S1 Akuntansi
        </p>
        <p className="text-slate-400 text-xs sm:text-sm md:text-base flex items-center justify-center gap-1.5 md:gap-2 text-center">
          <Building2 size={16} className="text-emerald-400 shrink-0 md:w-5 md:h-5" />
          Fakultas Ekonomi dan Bisnis – UNIKA Fajar Timur Papua
        </p>
      </div>
    </div>,

    // Slide 2: Visi & Kerangka Pembelajaran (Responsif & Anti-Oversize HP)
    <div key="home-2" className="space-y-4 md:space-y-8 max-w-4xl mx-auto px-2 max-h-[75vh] md:max-h-none custom-scrollbar">
      <div className="text-center space-y-1 md:space-y-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-emerald-400">Selamat Datang di Kuliah Perdana!</h2>
        <p className="text-slate-400 text-xs md:text-sm">
          Model Pembelajaran Berbasis Outcome Based Education (OBE) & Project-Based Learning
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 pt-1 md:pt-2">
        {/* Kartu ACT */}
        <div className="p-4 md:p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:bg-slate-800 hover:border-emerald-500/80 hover:shadow-xl hover:shadow-emerald-500/10 cursor-pointer">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center mb-2 md:mb-4 font-bold text-lg md:text-xl">
            ACT
          </div>
          <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Aksi Nyata</h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            Merancang solusi wirausaha nyata bagi krisis lingkungan dan sosial di Papua.
          </p>
        </div>

        {/* Kartu COUNT */}
        <div className="p-4 md:p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:bg-slate-800 hover:border-cyan-500/80 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-500/20 text-cyan-400 rounded-xl flex items-center justify-center mb-2 md:mb-4 font-bold text-lg md:text-xl">
            COUNT
          </div>
          <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Akuntabilitas</h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            Pengukuran dampak sosial (People), ekologi (Planet), serta keuangan (Profit).
          </p>
        </div>

        {/* Kartu THINK */}
        <div className="p-4 md:p-6 bg-slate-800/40 border border-slate-700/60 rounded-2xl transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 hover:bg-slate-800 hover:border-amber-500/80 hover:shadow-xl hover:shadow-amber-500/10 cursor-pointer">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-amber-500/20 text-amber-400 rounded-xl flex items-center justify-center mb-2 md:mb-4 font-bold text-lg md:text-xl">
            THINK
          </div>
          <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-white">Refleksi Kritis</h3>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            Memegang teguh etika, nilai spiritualitas ekologis, dan kemanusiaan.
          </p>
        </div>
      </div>
    </div>,
  ];

  return (
    <SlideEngine
      slides={homeSlides}
      currentPath="/socioecopreneur"
      currentPageTitle="Halaman Utama"
    />
  );
}