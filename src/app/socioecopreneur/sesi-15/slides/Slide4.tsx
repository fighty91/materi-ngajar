'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, AlertCircle } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Refleksi Etis: Tanggung Moral Ecopreneur
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Bisnis sosial tidak boleh hanya mengejar keuntungan atau citra ramah lingkungan semata, melainkan wajib menjunjung tinggi etika kemanusiaan dan keadilan ekologis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <h4 className="font-bold text-emerald-400 text-sm flex items-center gap-2">
            <ShieldCheck size={18} /> Keadilan Bagi Komunitas (People)
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Memastikan kerja sama dengan perajin lokal dilandasi rasa hormat, transparansi upah yang adil, serta tidak mengeksploitasi tenaga kerja demi menekan HPP.
          </p>
        </motion.div>

        <motion.div className="p-5 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-3">
          <h4 className="font-bold text-cyan-400 text-sm flex items-center gap-2">
            <AlertCircle size={18} /> Integritas Ekologis (Planet)
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Menjaga agar proses pengolahan bahan baku alam benar-benar ramah lingkungan dan tidak menimbulkan masalah limbah baru di kemudian hari.
          </p>
        </motion.div>
      </div>
    </div>
  );
}