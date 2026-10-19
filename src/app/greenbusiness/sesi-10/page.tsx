// src/app/greenbusiness/sesi-10/page.tsx
'use client';

import React, { Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import SlideEngine from '@/app/greenbusiness/components/SlideEngine';

// Import 10 Slide Komponen
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';


function Sesi10Content() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Mengambil parameter 'slide' dari URL (default ke 1 jika tidak ada atau tidak valid)
  const slideParam = searchParams.get('slide');
  const initialSlide = slideParam ? Math.max(0, parseInt(slideParam, 10) - 1) : 0;

  const slides = [
    <Slide1 key="s1" />,
    <Slide2 key="s2" />,
    <Slide3 key="s3" />,
    <Slide4 key="s4" />,
    <Slide5 key="s5" />,
    <Slide6 key="s6" />,
    <Slide7 key="s7" />,
    <Slide8 key="s8" />,
    <Slide9 key="s9" />,
    <Slide10 key="s10" />,
  ];

  // Fungsi untuk memperbarui URL setiap kali slide berubah (opsional, agar URL selalu sinkron)
  const handleSlideChange = (index: number) => {
    router.replace(`/greenbusiness/sesi-10?slide=${index + 1}`, { scroll: false });
  };

  return (
    <SlideEngine
      slides={slides}
      currentPath="/greenbusiness/sesi-10"
      currentPageTitle="Sesi 10: Ketepatan Menyusun BMC & Strategi Implementasi"
      initialSlide={initialSlide}
      onSlideChange={handleSlideChange}
    />
  );
}

export default function Sesi10Page() {
  return (
    <Suspense fallback={<div className="w-screen h-screen bg-slate-950 flex items-center justify-center text-white">Memuat Sesi...</div>}>
      <Sesi10Content />
    </Suspense>
  );
}