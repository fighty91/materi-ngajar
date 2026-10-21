'use client';

import { motion } from 'framer-motion';
import { HelpCircle, MessageSquare } from 'lucide-react';

export default function Slide9() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Ruang Konsultasi Draf SBMC Kelompok
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Sesi terbuka untuk mencocokkan angka-angka finansial dan merapikan draf SBMC sebelum diuji pada UTS minggu depan.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <HelpCircle size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Review Perhitungan Biaya</h4>
              <p className="text-xs text-emerald-400">Pemeriksaan HPP & BEP</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Pastikan alokasi upah adil perajin lokal sudah dimasukkan dengan benar ke dalam komponen HPP produk kelompok.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <MessageSquare size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Penyelarasan Narasi Slide</h4>
              <p className="text-xs text-cyan-400">Persiapan Pitching UTS</p>
            </div>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Konsultasikan alur pembagian presentasi antar anggota kelompok agar tampil kompak dan terstruktur.
          </p>
        </motion.div>
      </div>
    </div>
  );
}