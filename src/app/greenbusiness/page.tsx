// src/app/greenbusiness/page.tsx
'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import SlideEngine from '@/app/greenbusiness/components/SlideEngine';
import { GraduationCap, Building2, Sparkles, Leaf, Scale, TrendingUp } from 'lucide-react';

function GreenBusinessContent() {
  const searchParams = useSearchParams();
  const slideParam = searchParams.get('slide');
  const initialSlide = slideParam ? parseInt(slideParam, 10) : 0;

  const homeSlides = [
    // Slide 1: Cover Utama Identitas Dosen & Institusi (Ringkas & Proporsional)
    <div key="gb-home-1" className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2.5 sm:space-y-4 max-h-[calc(100dvh-130px)] flex flex-col justify-center text-center">
      <div className="flex justify-center mb-1 shrink-0">
        <div className="relative w-14 h-14 sm:w-20 sm:h-20 p-1.5 bg-emerald-50 rounded-2xl border border-emerald-200 shadow-md flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Logo UNIKA Fajar Timur Papua"
            width={80}
            height={80}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-[10px] sm:text-xs font-semibold mx-auto shrink-0">
        <Sparkles size={13} className="text-emerald-600" /> Media Pembelajaran Interaktif & Profesional
      </div>

      <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 leading-tight">
        Green Business & Sustainable Management
      </h1>

      <div className="pt-2 border-t border-emerald-100 max-w-2xl mx-auto space-y-0.5 shrink-0">
        <h2 className="text-sm sm:text-lg font-bold text-slate-800">
          Fighty Elia Ratag, S.Ak., M.Ak., CFTR.
        </h2>
        <p className="text-slate-600 text-[10px] sm:text-xs flex items-center justify-center gap-1.5 font-medium">
          <GraduationCap size={14} className="text-emerald-600" />
          Program Studi S1 Akuntansi &nbsp;|&nbsp; 
          <Building2 size={14} className="text-emerald-600 shrink-0" />
          FEB – UNIKA Fajar Timur Papua
        </p>
      </div>
    </div>,

    // Slide 2: Visi & Kerangka Pembelajaran (Padat, Efisien & Bebas Overflow di HP)
    <div key="gb-home-2" className="w-full max-w-4xl mx-auto px-1 sm:px-4 py-1 space-y-2 sm:space-y-4 max-h-[calc(100dvh-130px)] flex flex-col justify-center">
      <div className="text-center space-y-0.5 shrink-0">
        <h2 className="text-base sm:text-2xl font-extrabold text-emerald-800">Selamat Datang di Sesi Pembelajaran!</h2>
        <p className="text-slate-600 text-[10px] sm:text-xs font-medium">
          Integrasi Triple Bottom Line, Green Accounting, dan Transisi Bisnis Berkelanjutan
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-3 pt-0.5">
        {/* Kartu 1: Strategi Lingkungan (Planet) */}
        <div className="p-2.5 sm:p-4 bg-white/90 border border-emerald-200/80 rounded-xl sm:rounded-2xl shadow-xs flex flex-row md:flex-col items-center md:items-start gap-2.5 sm:gap-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-emerald-100 text-emerald-700 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 mb-0 md:mb-2">
            <Leaf size={16} />
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-base mb-0.5 text-slate-800">Strategi Ekologis</h3>
            <p className="text-[10px] sm:text-xs text-slate-600 leading-tight sm:leading-relaxed">
              Penerapan SBMC dan konservasi lokal untuk operasional ramah lingkungan.
            </p>
          </div>
        </div>

        {/* Kartu 2: Akuntansi Hijau (Profit & Akuntabilitas) */}
        <div className="p-2.5 sm:p-4 bg-white/90 border border-emerald-200/80 rounded-xl sm:rounded-2xl shadow-xs flex flex-row md:flex-col items-center md:items-start gap-2.5 sm:gap-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-teal-100 text-teal-700 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 mb-0 md:mb-2">
            <Scale size={16} />
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-base mb-0.5 text-slate-800">Green Accounting</h3>
            <p className="text-[10px] sm:text-xs text-slate-600 leading-tight sm:leading-relaxed">
              Manajemen keuangan dan transparansi pelaporan dampak lingkungan.
            </p>
          </div>
        </div>

        {/* Kartu 3: Aksi Transisi (People & Impact) */}
        <div className="p-2.5 sm:p-4 bg-white/90 border border-emerald-200/80 rounded-xl sm:rounded-2xl shadow-xs flex flex-row md:flex-col items-center md:items-start gap-2.5 sm:gap-0">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-emerald-100 text-emerald-800 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 mb-0 md:mb-2">
            <TrendingUp size={16} />
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-base mb-0.5 text-slate-800">Transformasi Bisnis</h3>
            <p className="text-[10px] sm:text-xs text-slate-600 leading-tight sm:leading-relaxed">
              Studi kasus praktis transisi model bisnis konvensional menuju berkelanjutan.
            </p>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <SlideEngine
      slides={homeSlides}
      currentPath="/greenbusiness"
      currentPageTitle="Halaman Utama Green Business"
      initialSlide={initialSlide}
    />
  );
}

export default function GreenBusinessHome() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400 text-sm">Memuat Halaman...</div>}>
      <GreenBusinessContent />
    </Suspense>
  );
}