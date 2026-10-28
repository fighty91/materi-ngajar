'use client';

import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export default function Slide4() {
  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto px-2">
      <h2 className="text-2xl md:text-3xl font-bold text-emerald-400 border-b border-slate-800 pb-2 md:pb-3">
        Seni Bertanya: Menghindari Pertanyaan Bias
      </h2>
      
      <p className="text-slate-300 text-xs md:text-sm">
        Konsumen sering merasa sungkan dan menjawab "bagus" demi sopan santun. Jangan tanyakan pendapat masa depan, tanyakan perilaku masa lalu.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
        <motion.div className="p-4 bg-slate-900/80 border border-rose-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-bold text-xs">
            <ShieldAlert size={18} />
            <span>Pertanyaan Lemah (Bias)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            ❌ *"Apakah menurut kamu pot ramah lingkungan ini bagus?"*<br />
            *(Jawaban umum: "Bagus kok." - Padahal belum tentu mau beli).*
          </p>
        </motion.div>

        <motion.div className="p-4 bg-slate-900/80 border border-emerald-500/30 rounded-2xl space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
            <CheckCircle2 size={18} />
            <span>Pertanyaan Kuat (Objektif)</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            ✅ *"Berapa kali dalam sebulan biasanya Anda membeli pot tanaman, dan apa kendala utama yang sering Anda hadapi saat merawat tanaman?"*
          </p>
        </motion.div>
      </div>
    </div>
  );
}