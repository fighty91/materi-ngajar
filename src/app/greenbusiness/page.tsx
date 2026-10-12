// src/app/greenbusiness/page.tsx
'use client';

import Image from 'next/image';
import SlideEngine from '@/app/greenbusiness/components/SlideEngine';
import { GraduationCap, Building2, Sparkles, Leaf, Scale, TrendingUp } from 'lucide-react';

export default function GreenBusinessHome() {
  const homeSlides = [
    // Slide 1: Cover Utama Identitas Dosen & Institusi (Ringkas & Proporsional)
    <div key="gb-home-1" className="text-center space-y-3 md:space-y-4 max-w-4xl mx-auto px-2">
      <div className="flex justify-center mb-1 md:mb-2">
        <div className="relative w-16 h-16 md:w-24 md:h-24 p-1.5 bg-emerald-50 rounded-2xl border border-emerald-200 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-emerald-400">
          <Image
            src="/logo.png"
            alt="Logo UNIKA Fajar Timur Papua"
            width={90}
            height={90}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs md:text-sm font-semibold">
        <Sparkles size={14} className="text-emerald-600" /> Media Pembelajaran Interaktif & Profesional
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 leading-tight">
        Green Business & Sustainable Management
      </h1>

      <div className="pt-2 md:pt-3 border-t border-emerald-100 max-w-2xl mx-auto space-y-1">
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-slate-800">
          Fighty Elia Ratag, S.Ak., M.Ak., CFTR.
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm flex items-center justify-center gap-1.5 font-medium">
          <GraduationCap size={15} className="text-emerald-600" />
          Program Studi S1 Akuntansi &nbsp;|&nbsp; 
          <Building2 size={15} className="text-emerald-600 shrink-0" />
          FEB – UNIKA Fajar Timur Papua
        </p>
      </div>
    </div>,

    // Slide 2: Visi & Kerangka Pembelajaran Green Business (Layout Kartu Lebih Padat)
    <div key="gb-home-2" className="space-y-3 md:space-y-5 max-w-4xl mx-auto px-2">
      <div className="text-center space-y-1">
        <h2 className="text-xl sm:text-2xl font-extrabold text-emerald-800">Selamat Datang di Sesi Pembelajaran!</h2>
        <p className="text-slate-600 text-xs sm:text-sm font-medium">
          Integrasi Triple Bottom Line, Green Accounting, dan Transisi Bisnis Berkelanjutan bagi UMKM & Korporasi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
        {/* Kartu 1: Strategi Lingkungan (Planet) */}
        <div className="p-3.5 md:p-4 bg-white/90 border border-emerald-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400 hover:shadow-md cursor-pointer flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-2">
              <Leaf size={18} />
            </div>
            <h3 className="font-bold text-sm md:text-base mb-1 text-slate-800">Strategi Ekologis</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Penerapan Social Business Model Canvas (SBMC) dan konservasi lokal untuk operasional ramah lingkungan.
            </p>
          </div>
        </div>

        {/* Kartu 2: Akuntansi Hijau (Profit & Akuntabilitas) */}
        <div className="p-3.5 md:p-4 bg-white/90 border border-emerald-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400 hover:shadow-md cursor-pointer flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center mb-2">
              <Scale size={18} />
            </div>
            <h3 className="font-bold text-sm md:text-base mb-1 text-slate-800">Green Accounting</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Manajemen keuangan, pengukuran efisiensi sumber daya, dan transparansi pelaporan dampak lingkungan.
            </p>
          </div>
        </div>

        {/* Kartu 3: Aksi Transisi (People & Impact) */}
        <div className="p-3.5 md:p-4 bg-white/90 border border-emerald-200/80 rounded-2xl shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400 hover:shadow-md cursor-pointer flex flex-col justify-between">
          <div>
            <div className="w-9 h-9 bg-emerald-100 text-emerald-800 rounded-xl flex items-center justify-center mb-2">
              <TrendingUp size={18} />
            </div>
            <h3 className="font-bold text-sm md:text-base mb-1 text-slate-800">Transformasi Bisnis</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Studi kasus praktis dan langkah nyata mengonversi model bisnis konvensional menuju tanggung jawab sosial.
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
    />
  );
}