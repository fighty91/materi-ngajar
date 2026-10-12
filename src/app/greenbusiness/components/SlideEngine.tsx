'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, ChevronDown, Check, Leaf } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface MeetingOption {
  label: string;
  subLabel?: string;
  path: string;
}

interface SlideEngineProps {
  slides: React.ReactNode[];
  currentPath: string;
  currentPageTitle?: string;
  initialSlide?: number;
  onSlideChange?: (index: number) => void;
}

// Daftar sesi untuk materi Green Business
const meetingList: MeetingOption[] = [
  { label: 'Pengantar', subLabel: 'Visi & Kerangka Sustainable Management', path: '/greenbusiness' },
  { label: 'Sesi 9: Nilai Bisnis', subLabel: 'Sustainable Value Proposition & Potensi Lokal', path: '/greenbusiness/sesi-9' },
];

export default function SlideEngine({
  slides,
  currentPath,
  currentPageTitle,
  initialSlide = 0,
  onSlideChange,
}: SlideEngineProps) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Mencari indeks sesi saat ini
  const currentMeetingIndex = meetingList.findIndex((m) => m.path === currentPath);
  const currentMeeting = meetingList[currentMeetingIndex] || meetingList[0];

  // Sinkronisasi jika initialSlide berubah dari luar (misal dari URL searchParams)
  useEffect(() => {
    if (initialSlide >= 0 && initialSlide < slides.length) {
      setCurrentSlide(initialSlide);
    }
  }, [initialSlide, slides.length]);

  // Reset slide ke 0 setiap kali rute/pertemuan berpindah (jika tidak ada initialSlide)
  useEffect(() => {
    if (initialSlide === 0) {
      setCurrentSlide(0);
    }
  }, [currentPath]);

  // Fungsi untuk memperbarui slide & memanggil callback onSlideChange
  const updateSlide = (newIndex: number) => {
    setCurrentSlide(newIndex);
    if (onSlideChange) {
      onSlideChange(newIndex);
    }
  };

  // Navigasi Slide Selanjutnya (Lanjut ke Sesi berikutnya jika slide habis)
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      const nextIdx = currentSlide + 1;
      updateSlide(nextIdx);
    } else if (currentMeetingIndex < meetingList.length - 1) {
      router.push(meetingList[currentMeetingIndex + 1].path);
    }
  };

  // Navigasi Slide Sebelumnya (Kembali ke Sesi sebelumnya jika di slide 0)
  const prevSlide = () => {
    if (currentSlide > 0) {
      const prevIdx = currentSlide - 1;
      updateSlide(prevIdx);
    } else if (currentMeetingIndex > 0) {
      router.push(meetingList[currentMeetingIndex - 1].path);
    }
  };

  // Shortcut Keyboard Handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, currentMeetingIndex, slides.length]);

  // Event listener untuk menutup dropdown saat mengklik di luar area
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50/40 to-slate-100 text-slate-800 flex flex-col justify-between p-4 md:p-8 select-none">
      
      {/* BACKGROUND DECORATIVE ELEMENTS (Eco Theme) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* 1. CONTAINER UTAMA SLIDE PRESENTASI */}
      <div className="flex-1 flex items-center justify-center relative w-full max-w-6xl mx-auto z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPath}-${currentSlide}`}
            initial={{ opacity: 0, y: 12, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.99 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full h-full flex flex-col justify-center bg-white/80 backdrop-blur-xl border border-emerald-100/80 rounded-3xl shadow-xl shadow-emerald-950/5 p-8 md:p-12 overflow-y-auto"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. BAR NAVIGASI BAWAH */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-6xl mx-auto pt-4 border-t border-emerald-900/10 gap-3 text-sm text-slate-600 z-50">
        
        {/* SISI KIRI: CUSTOM DROPDOWN ELEGANT (Tema Terang Hijau) */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 bg-white/90 hover:bg-white text-slate-700 px-4 py-2.5 rounded-2xl border border-emerald-200/80 backdrop-blur-md shadow-sm transition-all duration-200 cursor-pointer group"
          >
            <div className="p-1.5 rounded-xl bg-emerald-100 text-emerald-700 group-hover:bg-emerald-200 transition">
              <Leaf size={16} />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                {currentMeeting.label}
              </div>
              {currentMeeting.subLabel && (
                <div className="text-[10px] text-slate-500 font-medium">
                  {currentMeeting.subLabel}
                </div>
              )}
            </div>
            <ChevronDown
              size={16}
              className={`text-slate-400 transition-transform duration-300 ml-1 ${
                isDropdownOpen ? 'rotate-180 text-emerald-600' : ''
              }`}
            />
          </button>

          {/* Menu Pop-over Dropdown */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-16 left-0 w-80 bg-white border border-emerald-100 rounded-2xl shadow-2xl backdrop-blur-xl p-2 z-50 overflow-hidden"
              >
                <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-emerald-700 border-b border-slate-100 flex items-center gap-1.5">
                  <BookOpen size={12} className="text-emerald-600" /> Navigasi Materi Green Business
                </div>
                <div className="mt-1 space-y-1 max-h-60 overflow-y-auto">
                  {meetingList.map((item) => {
                    const isActive = item.path === currentPath;
                    return (
                      <button
                        key={item.path}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          router.push(item.path);
                        }}
                        className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between group ${
                          isActive
                            ? 'bg-emerald-50 border border-emerald-200 text-emerald-900 font-semibold'
                            : 'hover:bg-slate-50 text-slate-600'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-bold">{item.label}</div>
                          {item.subLabel && (
                            <div className="text-[10px] text-slate-500 font-normal">{item.subLabel}</div>
                          )}
                        </div>
                        {isActive && <Check size={16} className="text-emerald-600" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SISI KANAN: KONTROL NAVIGASI SLIDE & INDIKATOR */}
        <div className="flex items-center space-x-3 bg-white/90 p-1.5 px-4 rounded-2xl backdrop-blur-md border border-emerald-200/80 shadow-sm">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0 && currentMeetingIndex === 0}
            className="p-1.5 hover:bg-emerald-50 disabled:opacity-20 disabled:hover:bg-transparent rounded-xl transition text-slate-700 flex items-center gap-1 text-xs font-semibold cursor-pointer"
            title={currentSlide === 0 && currentMeetingIndex > 0 ? "Ke Sesi Sebelumnya" : "Slide Sebelumnya"}
          >
            <ChevronLeft size={18} />
            {currentSlide === 0 && currentMeetingIndex > 0 && (
              <span className="hidden md:inline text-[11px] text-emerald-700">Sesi Sblm</span>
            )}
          </button>

          <div className="px-3 font-mono text-xs text-emerald-700 font-bold flex items-center gap-1.5">
            <span>Slide</span>
            <span className="text-slate-900 bg-emerald-100 px-2 py-0.5 rounded-lg">{currentSlide + 1}</span>
            <span className="text-slate-400">/</span>
            <span>{slides.length}</span>
          </div>

          <button
            onClick={nextSlide}
            disabled={
              currentSlide === slides.length - 1 &&
              currentMeetingIndex === meetingList.length - 1
            }
            className="p-1.5 hover:bg-emerald-50 disabled:opacity-20 disabled:hover:bg-transparent rounded-xl transition text-slate-700 flex items-center gap-1 text-xs font-semibold cursor-pointer"
            title={currentSlide === slides.length - 1 && currentMeetingIndex < meetingList.length - 1 ? "Ke Sesi Selanjutnya" : "Slide Selanjutnya"}
          >
            {currentSlide === slides.length - 1 && currentMeetingIndex < meetingList.length - 1 && (
              <span className="hidden md:inline text-[11px] text-emerald-700 font-semibold">Lanjut Sesi</span>
            )}
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}