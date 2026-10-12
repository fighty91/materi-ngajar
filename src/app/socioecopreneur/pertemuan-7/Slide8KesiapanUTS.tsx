'use client';

import { motion } from 'framer-motion';
import { Presentation, ShieldCheck, FileCheck } from 'lucide-react';

export default function Slide8KesiapanUTS() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Pengingat Ketentuan Presentasi UTS (Bobot 20%)
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Minggu depan (Pertemuan 8) adalah pelaksanaan Ujian Tengah Semester berupa **Presentasi Checkpoint Proposal Ide Usaha Kelompok**.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-400">
              <Presentation size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Dokumen yang Disiapkan</h4>
              <p className="text-xs text-emerald-400">Deck Presentasi & Proposal</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Slide Presentasi kelompok berbasis matriks SBMC lengkap.</li>
            <li>• Proposal ringkas analisis masalah lingkungan/sosial & solusi produk.</li>
          </ul>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-cyan-500/10 rounded-xl text-cyan-400">
              <FileCheck size={22} />
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">Elemen Penilaian Utama</h4>
              <p className="text-xs text-cyan-400">Kriteria Evaluasi Dosen</p>
            </div>
          </div>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>• Kedalaman analisis masalah lokal Papua & keterkaitan konsep 3P.</li>
            <li>• Kelayakan struktur biaya, penetapan harga jual, dan akurasi BEP.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}