'use client';

import SlideEngine from '@/components/SlideEngine';
import Slide1Cover from './Slide1Cover';
import Slide2Eksternalitas from './Slide2Eksternalitas';
import Slide3LinearVsSirkular from './Slide3LinearVsSirkular';
import Slide4BioPlasticViral from './Slide4BioPlasticViral';
import Slide5PotensiSaguPapua from './Slide5PotensiSaguPapua';
import Slide6MatriksPerbandingan from './Slide6MatriksPerbandingan';
import Slide7ActCountThink from './Slide7ActCountThink';
import Slide8PanduanTugas from './Slide8TugasIndividu';
import Slide9TugasKelompok from './Slide9TugasKelompok';

export default function Pertemuan2() {
  const pertemuan2Slides = [
    <Slide1Cover key="p2-1" />,
    <Slide2Eksternalitas key="p2-2" />,
    <Slide3LinearVsSirkular key="p2-3" />,
    <Slide4BioPlasticViral key="p2-4" />,
    <Slide5PotensiSaguPapua key="p2-5" />,
    <Slide6MatriksPerbandingan key="p2-6" />,
    <Slide7ActCountThink key="p2-7" />,
    <Slide8PanduanTugas key="p2-8" />,
    <Slide9TugasKelompok key="p2-9" />,
  ];

  return (
    <SlideEngine
      slides={pertemuan2Slides}
      currentPath="/pertemuan-2"
      currentPageTitle="Pertemuan 2"
    />
  );
}
