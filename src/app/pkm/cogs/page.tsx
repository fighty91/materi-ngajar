'use client';

import React, { useState } from 'react';

interface BahanItem {
  id: number;
  nama: string;
  harga: string;
  qty: string;
}

interface SimpleItem {
  id: number;
  nama: string;
  biaya: string;
}

export default function KalkulatorHPPPage() {
  const [dataBahan, setDataBahan] = useState<BahanItem[]>([
    { id: 1, nama: '', harga: '', qty: '' },
  ]);
  const [dataTenaga, setDataTenaga] = useState<SimpleItem[]>([
    { id: 1, nama: '', biaya: '' },
  ]);
  const [dataOverhead, setDataOverhead] = useState<SimpleItem[]>([
    { id: 1, nama: '', biaya: '' },
  ]);
  const [jumlahUnit, setJumlahUnit] = useState<string>('');
  const [jual, setJual] = useState<string>('');
  const [idCounter, setIdCounter] = useState<number>(10);

  // Helper Formatting
  const fmt = (n: number) =>
    'Rp ' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 });
  
  const formatRibuan = (n: string | number) =>
    n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
  const bersihkanKoma = (str: string | number) =>
    Number(str.toString().replace(/,/g, '')) || 0;

  // Handlers
  const tambahBaris = (tipe: 'bahan' | 'tenaga' | 'overhead') => {
    setIdCounter((prev) => prev + 1);
    if (tipe === 'bahan') {
      setDataBahan([...dataBahan, { id: idCounter, nama: '', harga: '', qty: '' }]);
    } else if (tipe === 'tenaga') {
      setDataTenaga([...dataTenaga, { id: idCounter, nama: '', biaya: '' }]);
    } else if (tipe === 'overhead') {
      setDataOverhead([...dataOverhead, { id: idCounter, nama: '', biaya: '' }]);
    }
  };

  const hapusBaris = (tipe: 'bahan' | 'tenaga' | 'overhead', id: number) => {
    if (tipe === 'bahan' && dataBahan.length > 1) {
      setDataBahan(dataBahan.filter((i) => i.id !== id));
    } else if (tipe === 'tenaga' && dataTenaga.length > 1) {
      setDataTenaga(dataTenaga.filter((i) => i.id !== id));
    } else if (tipe === 'overhead' && dataOverhead.length > 1) {
      setDataOverhead(dataOverhead.filter((i) => i.id !== id));
    }
  };

  const updateBahanField = (id: number, field: keyof BahanItem, value: string) => {
    setDataBahan((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (field === 'harga') {
            let raw = bersihkanKoma(value);
            return { ...item, harga: raw > 0 ? formatRibuan(raw) : '' };
          }
          if (field === 'qty') {
            let val = value.replace(/,|\-/g, '');
            if (val !== '0' && /^0[0-9]/.test(val)) {
              val = val.replace(/^0+/, '');
            }
            return { ...item, qty: val };
          }
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  const updateSimpleField = (tipe: 'tenaga' | 'overhead', id: number, field: keyof SimpleItem, value: string) => {
    const updater = (prev: SimpleItem[]) =>
      prev.map((item) => {
        if (item.id === id) {
          if (field === 'biaya') {
            let raw = bersihkanKoma(value);
            return { ...item, biaya: raw > 0 ? formatRibuan(raw) : '' };
          }
          return { ...item, [field]: value };
        }
        return item;
      });

    if (tipe === 'tenaga') setDataTenaga(updater);
    if (tipe === 'overhead') setDataOverhead(updater);
  };

  const handleJumlahUnit = (e: React.ChangeEvent<HTMLInputElement>) => {
    let cleanVal = e.target.value.replace(/\D/g, '');
    setJumlahUnit(cleanVal === '' ? '' : parseInt(cleanVal, 10).toString());
  };

  const handleJual = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = bersihkanKoma(e.target.value);
    setJual(raw > 0 ? formatRibuan(raw) : '');
  };

  const resetForm = () => {
    setDataBahan([{ id: 1, nama: '', harga: '', qty: '' }]);
    setDataTenaga([{ id: 1, nama: '', biaya: '' }]);
    setDataOverhead([{ id: 1, nama: '', biaya: '' }]);
    setJumlahUnit('');
    setJual('');
  };

  // Calculations
  const totalBahan = dataBahan.reduce(
    (acc, i) => acc + bersihkanKoma(i.harga) * (parseFloat(i.qty) || 0),
    0
  );
  const totalTenaga = dataTenaga.reduce((acc, i) => acc + bersihkanKoma(i.biaya), 0);
  const totalOverhead = dataOverhead.reduce((acc, i) => acc + bersihkanKoma(i.biaya), 0);

  const totalHppBatch = totalBahan + totalTenaga + totalOverhead;
  const unitCount = jumlahUnit === '' || parseInt(jumlahUnit) <= 0 ? 0 : parseInt(jumlahUnit);

  const hppPerUnit = unitCount > 0 ? totalHppBatch / unitCount : 0;
  const salePerUnit = bersihkanKoma(jual);
  const profitPerUnit = salePerUnit > 0 && unitCount > 0 ? salePerUnit - hppPerUnit : 0;

  const bahanPerUnit = unitCount > 0 ? totalBahan / unitCount : 0;
  const tenagaPerUnit = unitCount > 0 ? totalTenaga / unitCount : 0;
  const overheadPerUnit = unitCount > 0 ? totalOverhead / unitCount : 0;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 bg-slate-50 min-h-screen font-sans text-slate-800">
      {/* Header */}
      <header className="bg-slate-900 text-white p-6 rounded-2xl mb-6 shadow-md">
        <h1 className="text-2xl font-bold mb-2">📦 Kalkulator HPP Total & Unit Produksi</h1>
        <p className="text-sm text-slate-300">
          Rincian biaya batch produksi total serta konversi otomatis ke HPP per 1 unit produk.
        </p>
      </header>

      {/* PANEL 1: BAHAN BAKU */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5 mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-slate-900">1. Biaya Bahan Baku (Direct Materials)</h2>
          <button
            onClick={() => tambahBaris('bahan')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg text-xs transition"
          >
            + Tambah Bahan
          </button>
        </div>

        <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_auto] gap-2 text-xs font-bold text-slate-500 mb-2 px-1">
          <div>Nama Bahan / Komponen</div>
          <div>Harga Satuan (Rp)</div>
          <div>Jumlah / Qty Batch</div>
          <div>Total Biaya</div>
          <div>Aksi</div>
        </div>

        {dataBahan.map((item) => {
          const itemCost = bersihkanKoma(item.harga) * (parseFloat(item.qty) || 0);
          return (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-2 items-end mb-3 bg-slate-50 p-3 md:p-2 rounded-xl border border-slate-100"
            >
              <div>
                <label className="block md:hidden text-xs text-slate-500 mb-1">Nama Bahan</label>
                <input
                  type="text"
                  placeholder="Contoh: Kain"
                  value={item.nama}
                  onChange={(e) => updateBahanField(item.id, 'nama', e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block md:hidden text-xs text-slate-500 mb-1">Harga Satuan (Rp)</label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="0"
                  value={item.harga}
                  onChange={(e) => updateBahanField(item.id, 'harga', e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block md:hidden text-xs text-slate-500 mb-1">Qty Batch</label>
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  value={item.qty}
                  onChange={(e) => updateBahanField(item.id, 'qty', e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block md:hidden text-xs text-slate-500 mb-1">Total Biaya</label>
                <input
                  type="text"
                  readOnly
                  value={fmt(itemCost)}
                  className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-100 text-slate-600 outline-none"
                />
              </div>
              <div>
                <button
                  onClick={() => hapusBaris('bahan', item.id)}
                  className="w-full md:w-auto bg-red-100 hover:bg-red-200 text-red-600 font-bold px-3 py-2.5 rounded-lg text-xs transition"
                >
                  Hapus
                </button>
              </div>
            </div>
          );
        })}

        <div className="flex justify-between items-center pt-3 border-t border-slate-200 mt-3 font-bold text-sm">
          <span>Total Biaya Bahan Baku (Batch)</span>
          <span className="text-blue-600">{fmt(totalBahan)}</span>
        </div>
      </section>

      {/* PANEL 2: TENAGA KERJA LANGSUNG */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5 mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-slate-900">2. Biaya Tenaga Kerja Langsung (Direct Labor)</h2>
          <button
            onClick={() => tambahBaris('tenaga')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg text-xs transition"
          >
            + Tambah Tenaga Kerja
          </button>
        </div>

        <div className="hidden md:grid grid-cols-[3fr_2fr_auto] gap-2 text-xs font-bold text-slate-500 mb-2 px-1">
          <div>Nama / Posisi Tenaga Kerja</div>
          <div>Total Upah Batch (Rp)</div>
          <div>Aksi</div>
        </div>

        {dataTenaga.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_auto] gap-2 items-end mb-3 bg-slate-50 p-3 md:p-2 rounded-xl border border-slate-100"
          >
            <div>
              <label className="block md:hidden text-xs text-slate-500 mb-1">Posisi Tenaga Kerja</label>
              <input
                type="text"
                placeholder="Contoh: Operator / Penjahit"
                value={item.nama}
                onChange={(e) => updateSimpleField('tenaga', item.id, 'nama', e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block md:hidden text-xs text-slate-500 mb-1">Total Upah Batch (Rp)</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={item.biaya}
                onChange={(e) => updateSimpleField('tenaga', item.id, 'biaya', e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <button
                onClick={() => hapusBaris('tenaga', item.id)}
                className="w-full md:w-auto bg-red-100 hover:bg-red-200 text-red-600 font-bold px-3 py-2.5 rounded-lg text-xs transition"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-3 border-t border-slate-200 mt-3 font-bold text-sm">
          <span>Total Tenaga Kerja Langsung (Batch)</span>
          <span className="text-blue-600">{fmt(totalTenaga)}</span>
        </div>
      </section>

      {/* PANEL 3: OVERHEAD PABRIK */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5 mb-4 shadow-sm">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
          <h2 className="text-lg font-semibold text-slate-900">3. Biaya Overhead Pabrik (BOP)</h2>
          <button
            onClick={() => tambahBaris('overhead')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-lg text-xs transition"
          >
            + Tambah Overhead
          </button>
        </div>

        <div className="hidden md:grid grid-cols-[3fr_2fr_auto] gap-2 text-xs font-bold text-slate-500 mb-2 px-1">
          <div>Nama Komponen Overhead</div>
          <div>Total Biaya Batch (Rp)</div>
          <div>Aksi</div>
        </div>

        {dataOverhead.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-[3fr_2fr_auto] gap-2 items-end mb-3 bg-slate-50 p-3 md:p-2 rounded-xl border border-slate-100"
          >
            <div>
              <label className="block md:hidden text-xs text-slate-500 mb-1">Komponen Overhead</label>
              <input
                type="text"
                placeholder="Contoh: Listrik / Penyusutan Alat"
                value={item.nama}
                onChange={(e) => updateSimpleField('overhead', item.id, 'nama', e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block md:hidden text-xs text-slate-500 mb-1">Total Biaya Batch (Rp)</label>
              <input
                type="text"
                inputMode="numeric"
                placeholder="0"
                value={item.biaya}
                onChange={(e) => updateSimpleField('overhead', item.id, 'biaya', e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div>
              <button
                onClick={() => hapusBaris('overhead', item.id)}
                className="w-full md:w-auto bg-red-100 hover:bg-red-200 text-red-600 font-bold px-3 py-2.5 rounded-lg text-xs transition"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center pt-3 border-t border-slate-200 mt-3 font-bold text-sm">
          <span>Total Overhead Pabrik (Batch)</span>
          <span className="text-blue-600">{fmt(totalOverhead)}</span>
        </div>
      </section>

      {/* PANEL 4: HASIL & KONVERSI UNIT */}
      <section className="bg-white border border-slate-200 rounded-2xl p-5 mb-4 shadow-sm">
        <h2 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100">
          4. Hasil HPP Total & Per Unit
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Jumlah Produk yang Dihasilkan (Unit)
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={jumlahUnit}
              placeholder="Contoh: 50"
              onChange={handleJumlahUnit}
              className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <span className="text-xs text-slate-500 mt-1 block">Total unit produk jadi dalam 1 kali batch produksi.</span>
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Harga Jual per 1 Unit (Rp)</label>
            <input
              type="text"
              inputMode="numeric"
              value={jual}
              placeholder="0"
              onChange={handleJual}
              className="w-full p-2.5 border border-slate-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-5 rounded-xl shadow-sm">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">
              HPP Total Produksi (Batch)
            </div>
            <div className="text-2xl font-extrabold">{fmt(totalHppBatch)}</div>
          </div>
          <div className="bg-gradient-to-br from-teal-800 to-teal-700 text-white p-5 rounded-xl shadow-sm">
            <div className="text-xs font-semibold text-teal-200 uppercase tracking-wide mb-1">
              HPP per 1 Unit Produk
            </div>
            <div className="text-2xl font-extrabold">{unitCount > 0 ? fmt(hppPerUnit) : 'Rp 0'}</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
            <div className="text-xs font-semibold text-slate-600 mb-1">Estimasi Laba per 1 Unit</div>
            <div className="text-lg font-bold text-slate-900">
              {unitCount > 0 && salePerUnit > 0 ? fmt(profitPerUnit) : 'Rp 0'}
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
            <div className="text-xs font-semibold text-slate-600 mb-1">Margin Keuntungan (% dari Harga Jual)</div>
            <div className="text-lg font-bold text-slate-900">
              {salePerUnit > 0 && unitCount > 0 ? `${(profitPerUnit / salePerUnit * 100).toFixed(2)}%` : '—'}
            </div>
          </div>
          <div className="md:col-span-2 bg-slate-100 border border-slate-200 p-4 rounded-xl">
            <div className="text-xs font-semibold text-slate-600 mb-1">Rincian Komponen Biaya per 1 Unit</div>
            <div className="text-sm font-medium text-slate-700 mt-1">
              {unitCount > 0
                ? `Bahan Baku: ${fmt(bahanPerUnit)} | Tenaga Kerja: ${fmt(tenagaPerUnit)} | Overhead: ${fmt(overheadPerUnit)}`
                : 'Silakan isi jumlah unit produk terlebih dahulu.'}
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-5 flex-wrap">
          <button
            onClick={resetForm}
            className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold px-4 py-2.5 rounded-lg text-sm transition"
          >
            Reset Hitungan
          </button>
          <button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 rounded-lg text-sm transition"
          >
            Cetak / Simpan PDF
          </button>
        </div>
      </section>
    </div>
  );
}
