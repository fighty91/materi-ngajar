'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen, ChevronDown, Check, Sparkles } from 'lucide-react';
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
}

const meetingList: MeetingOption[] = [
  { label: 'Halaman Utama', subLabel: 'Pengantar & Visi OBE', path: '/socioecopreneur' },
  { label: 'Sesi 1: Pengantar', subLabel: 'Socio & Ecopreneurship', path: '/socioecopreneur/sesi-1' },
  { label: 'Sesi 2: Krisis & Peluang', subLabel: 'Mengenali Masalah Lingkungan', path: '/socioecopreneur/sesi-2' },
  { label: 'Sesi 3: Pemberdayaan', subLabel: 'Masalah Sosial & Komunitas', path: '/socioecopreneur/sesi-3' },
  { label: 'Sesi 4: Empati & Dampak', subLabel: 'Observasi & Pemetaan Stakeholder', path: '/socioecopreneur/sesi-4' },
  { label: 'Sesi 5: Value Proposition', subLabel: 'Formulasi Nilai & Potensi Lokal', path: '/socioecopreneur/sesi-5' },
  { label: 'Sesi 6: SBMC Bagian 1', subLabel: 'Segment, Channels & Impact Metrics', path: '/socioecopreneur/sesi-6' },
  { label: 'Sesi 7: SBMC Bagian 2', subLabel: 'Elemen Keuangan & Sumber Daya', path: '/socioecopreneur/sesi-7' },
  // { label: 'Sesi 8: Evaluasi UTS', subLabel: 'Ujian Tengah Semester', path: '/socioecopreneur/sesi-8' },
  { label: 'Sesi 9: Merancang MVP', subLabel: 'Sampel, Sketsa & Maket Produk Awal', path: '/socioecopreneur/sesi-9' },
  { label: 'Sesi 10: Pemasaran Edukatif', subLabel: 'Strategi Komunikasi Ramah Lingkungan', path: '/socioecopreneur/sesi-10' },
  { label: 'Sesi 11: Indikator Dampak 3P', subLabel: 'People, Planet & Profit Sederhana', path: '/socioecopreneur/sesi-11' },
  { label: 'Sesi 12: Umpan Balik Konsumen', subLabel: 'Validasi & Iterasi Produk Awal', path: '/socioecopreneur/sesi-12' },
];

export default function SlideEngine({
  slides,
  currentPath,
  currentPageTitle,
}: SlideEngineProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Mencari indeks sesi saat ini
  const currentMeetingIndex = meetingList.findIndex((m) => m.path === currentPath);
  const currentMeeting = meetingList[currentMeetingIndex] || meetingList[0];

  // 🔴 FIX BUG 1: Reset slide ke 0 setiap kali rute/pertemuan berpindah
  useEffect(() => {
    setCurrentSlide(0);
  }, [currentPath]);

  // Navigasi Slide Selanjutnya (Lanjut ke Sesi berikutnya jika slide habis)
  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    } else if (currentMeetingIndex < meetingList.length - 1) {
      router.push(meetingList[currentMeetingIndex + 1].path);
    }
  };

  // Navigasi Slide Sebelumnya (Kembali ke Sesi sebelumnya jika di slide 0)
  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    } else if (currentMeetingIndex > 0) {
      router.push(meetingList[currentMeetingIndex - 1].path);
    }
  };

  // 🔴 FIX BUG 2: Shortcut Keyboard dengan Handler yang selalu up-to-date
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Abaikan shortcut jika sedang mengetik di input/textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'Space') {
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
    <div className="relative w-screen h-screen overflow-hidden bg-slate-950 text-white flex flex-col justify-between p-4 md:p-8 select-none">
      
      {/* 1. CONTAINER UTAMA SLIDE PRESENTASI */}
      <div className="flex-1 flex items-center justify-center relative w-full max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentPath}-${currentSlide}`}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full h-full flex flex-col justify-center"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. BAR NAVIGASI BAWAH */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-6xl mx-auto pt-4 border-t border-slate-800/80 gap-3 text-sm text-slate-400 z-50">
        
        {/* SISI KIRI: CUSTOM DROPDOWN ELEGANT */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-3 bg-slate-900/90 hover:bg-slate-800/90 text-slate-200 px-4 py-2 rounded-xl border border-slate-700/60 backdrop-blur-md shadow-lg transition-all duration-200 cursor-pointer group"
          >
            <div className="p-1 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition">
              <BookOpen size={18} />
            </div>
            <div className="text-left">
              <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                {currentMeeting.label}
              </div>
              {currentMeeting.subLabel && (
                <div className="text-[10px] text-slate-400 font-normal">
                  {currentMeeting.subLabel}
                </div>
              )}
            </div>
            <ChevronDown
              size={16}
              className={`text-slate-400 transition-transform duration-300 ml-1 ${
                isDropdownOpen ? 'rotate-180 text-emerald-400' : ''
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
                className="absolute bottom-14 left-0 w-72 bg-slate-900/95 border border-slate-700/80 rounded-2xl shadow-2xl backdrop-blur-xl p-2 z-50 overflow-hidden"
              >
                <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 flex items-center gap-1">
                  <Sparkles size={12} className="text-emerald-400" /> Pilih Sesi Perkuliahan
                </div>
                <div className="mt-1 space-y-1 max-h-60 overflow-y-auto custom-scrollbar">
                  {meetingList.map((item) => {
                    const isActive = item.path === currentPath;
                    return (
                      <button
                        key={item.path}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          router.push(item.path);
                        }}
                        className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between group ${
                          isActive
                            ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-300'
                            : 'hover:bg-slate-800/80 text-slate-300'
                        }`}
                      >
                        <div>
                          <div className="text-xs font-semibold">{item.label}</div>
                          {item.subLabel && (
                            <div className="text-[10px] text-slate-400">{item.subLabel}</div>
                          )}
                        </div>
                        {isActive && <Check size={16} className="text-emerald-400" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SISI KANAN: KONTROL NAVIGASI SLIDE & INDIKATOR */}
        <div className="flex items-center space-x-3 bg-slate-900/90 p-1.5 px-3 rounded-xl backdrop-blur-md border border-slate-700/60 shadow-xl">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0 && currentMeetingIndex === 0}
            className="p-1.5 hover:bg-slate-800 disabled:opacity-20 disabled:hover:bg-transparent rounded-lg transition text-slate-200 flex items-center gap-1 text-xs font-medium"
            title={currentSlide === 0 && currentMeetingIndex > 0 ? "Ke Sesi Sebelumnya" : "Slide Sebelumnya"}
          >
            <ChevronLeft size={18} />
            {currentSlide === 0 && currentMeetingIndex > 0 && (
              <span className="hidden md:inline text-[11px] text-slate-400">Sesi Sblm</span>
            )}
          </button>

          <div className="px-2 font-mono text-xs text-emerald-400 font-semibold flex items-center gap-1">
            <span>Slide</span>
            <span className="text-white font-bold">{currentSlide + 1}</span>
            <span className="text-slate-500">/</span>
            <span>{slides.length}</span>
          </div>

          <button
            onClick={nextSlide}
            disabled={
              currentSlide === slides.length - 1 &&
              currentMeetingIndex === meetingList.length - 1
            }
            className="p-1.5 hover:bg-slate-800 disabled:opacity-20 disabled:hover:bg-transparent rounded-lg transition text-slate-200 flex items-center gap-1 text-xs font-medium"
            title={currentSlide === slides.length - 1 && currentMeetingIndex < meetingList.length - 1 ? "Ke Sesi Selanjutnya" : "Slide Selanjutnya"}
          >
            {currentSlide === slides.length - 1 && currentMeetingIndex < meetingList.length - 1 && (
              <span className="hidden md:inline text-[11px] text-emerald-400 font-semibold">Lanjut Sesi</span>
            )}
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </div>
  );
}