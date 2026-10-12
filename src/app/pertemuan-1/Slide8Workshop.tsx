'use client';

export default function Slide8Workshop() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="p-8 bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/50 rounded-3xl space-y-4 shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:border-emerald-400 hover:shadow-emerald-500/10 cursor-pointer">
        <div className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold uppercase">
          Aktivitas Kelompok (15–20 Menit)
        </div>
        <h2 className="text-3xl font-extrabold text-white">Latihan Cepat: Temukan Masalah & Solusi!</h2>
        <ol className="text-slate-300 text-sm space-y-2 list-decimal pl-5 leading-relaxed">
          <li>Bentuk kelompok kecil bersama 3–4 teman di sampingmu.</li>
          <li>Sebutkan 1 masalah sampah/sosial yang paling sering kalian lihat di sekitar kampus.</li>
          <li>Diskusikan 1 ide sederhana produk/jasa yang bisa dijual untuk membantu masalah tersebut.</li>
          <li>Pilih 1 perwakilan untuk bercerita singkat 1 menit di depan kelas!</li>
        </ol>
      </div>
    </div>
  );
}