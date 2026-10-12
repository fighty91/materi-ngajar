// src/app/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  GraduationCap, 
  Building2, 
  Sparkles, 
  HeartHandshake, 
  Leaf, 
  ArrowRight, 
  BookOpen, 
  Compass, 
  ChevronDown,
  Globe2,
  Layers
} from 'lucide-react';

export default function GlobalPortalHome() {
  const router = useRouter();

  const activeCourses = [
    {
      id: 'socio',
      title: 'Socio & Ecopreneurship',
      subtitle: 'Kewirausahaan Sosial, Ekologis, & Model Bisnis Berbasis Kearifan Lokal',
      description: 'Mengembangkan model bisnis beretika yang memecahkan masalah sosial-ekologis di Papua dengan mengintegrasikan nilai-nilai lokal.',
      icon: <HeartHandshake size={28} className="text-cyan-400" />,
      path: '/socioecopreneur',
      badge: 'Sesi 1 - 7 Available',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
      gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
      borderColor: 'group-hover:border-cyan-500/50',
    },
    {
      id: 'green',
      title: 'Green Business & Sustainable Management',
      subtitle: 'Manajemen Keberlanjutan, Green Accounting, & Value Proposition',
      description: 'Pendekatan strategis Triple Bottom Line (Profit, People, Planet), pelaporan akuntansi hijau, dan perumusan nilai keberlanjutan bisnis.',
      icon: <Leaf size={28} className="text-emerald-400" />,
      path: '/greenbusiness',
      badge: 'Sesi 9+ Active',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
      borderColor: 'group-hover:border-emerald-500/50',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-x-hidden">
      
      {/* Background Neon Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-[600px] right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Hero Header Section */}
      <header className="relative pt-16 pb-12 md:pt-24 md:pb-16 px-6 max-w-6xl mx-auto border-b border-slate-800/80">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center md:text-left md:flex md:items-center md:justify-between"
        >
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-cyan-400 text-xs font-semibold shadow-inner">
              <Sparkles size={14} className="animate-pulse" /> Digital Academic Hub & Slide System
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight text-white">
              Platform Pembelajaran <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">Interaktif</span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              Pusat materi perkuliahan interaktif, kerangka kerja praktis, dan repositori modul presentasi terintegrasi.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center justify-center md:justify-start text-xs text-slate-400">
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <GraduationCap size={15} className="text-cyan-400" /> S1 Akuntansi
              </span>
              <span className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Building2 size={15} className="text-cyan-400" /> FEB – UNIKA Fajar Timur Papua
              </span>
            </div>
          </div>

          {/* Card Dosen Identitas */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 md:mt-0 p-6 bg-slate-900/90 border border-slate-800 rounded-3xl backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-slate-700 transition"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition" />
            <div className="relative z-10 space-y-2">
              <div className="text-[11px] font-bold tracking-widest text-cyan-400 uppercase">Pengampu Mata Kuliah</div>
              <h2 className="text-lg font-bold text-white">Fighty Elia Ratag, S.Ak., M.Ak., CFTR.</h2>
              <p className="text-xs text-slate-400 font-medium">Lecturer & Head of Accounting Lab</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex justify-center text-slate-500">
          <ChevronDown size={20} className="animate-bounce" />
        </div>
      </header>

      {/* Main Content Section */}
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-12">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/60 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400">
              <Layers size={16} /> Katalog Pembelajaran
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Pilih Mata Kuliah</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md">
            Akses modul presentasi, petunjuk tugas kelompok, dan materi perkuliahan interaktif secara langsung.
          </p>
        </div>

        {/* Grid Kursus Aktif */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              onClick={() => router.push(course.path)}
              className={`group relative bg-slate-900/60 border border-slate-800 ${course.borderColor} rounded-3xl p-8 shadow-2xl backdrop-blur-xl cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden`}
            >
              {/* Radial Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-slate-950 border border-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    {course.icon}
                  </div>
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${course.badgeColor}`}>
                    {course.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-cyan-400/90 leading-snug">
                    {course.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs font-bold text-slate-300 group-hover:text-cyan-300 relative z-10">
                <span>Buka Slide Interaktif</span>
                <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Placeholder Mata Kuliah Masa Depan */}
        <div className="pt-8">
          <div className="p-6 bg-slate-900/30 border border-slate-800/50 rounded-3xl text-center space-y-2">
            <Globe2 size={24} className="mx-auto text-slate-600" />
            <h4 className="text-sm font-bold text-slate-400">Mata Kuliah Mendatang</h4>
            <p className="text-xs text-slate-500">Materi pengajaran lain akan terus diperbarui dan ditambahkan ke dalam repositori web ini.</p>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-6 text-center text-xs text-slate-500 bg-slate-950/80">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p>&copy; {new Date().getFullYear()} Universitas Katolik Fajar Timur Papua.</p>
          <p className="flex items-center gap-2">
            <Compass size={14} className="text-cyan-500" /> Platform Media Pembelajaran Terpadu
          </p>
        </div>
      </footer>

    </div>
  );
}