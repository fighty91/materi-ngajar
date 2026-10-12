'use client';

import SlideEngine from '@/app/socioecopreneur/components/SlideEngine';
import Slide1Cover from './Slide1Cover';
import Slide2PergeseranParadigma from './Slide2PergeseranParadigma';
import Slide3CoreBusinessModel from './Slide3CoreBusinessModel';
import Slide4BeneficiariesToStakeholders from './Slide4BeneficiariesToStakeholders';
import Slide5HumanDignity from './Slide5HumanDignity';
import Slide6PetaMasalahPapua from './Slide6PetaMasalahPapua';
import Slide7MatriksKomparasi from './Slide7MatriksKomparasi';
import Slide8ActCountThink from './Slide8ActCountThink';
import Slide9StudiKasus from './Slide9StudiKasus';
import Slide10TugasIndividu from './Slide10TugasIndividu';
import Slide11TugasKelompok from './Slide11TugasKelompok';

export default function Pertemuan3() {
  const pertemuan3Slides = [
    <Slide1Cover key="p3-1" />,
    <Slide2PergeseranParadigma key="p3-2" />,
    <Slide3CoreBusinessModel key="p3-3" />,
    <Slide4BeneficiariesToStakeholders key="p3-4" />,
    <Slide5HumanDignity key="p3-5" />,
    <Slide6PetaMasalahPapua key="p3-6" />,
    <Slide7MatriksKomparasi key="p3-7" />,
    <Slide8ActCountThink key="p3-8" />,
    <Slide9StudiKasus key="p3-9" />,
    <Slide10TugasIndividu key="p3-10" />,
    <Slide11TugasKelompok key="p3-11" />,
  ];

  return (
    <SlideEngine
      slides={pertemuan3Slides}
      currentPath="/socioecopreneur/pertemuan-3"
      currentPageTitle="Pertemuan 3"
    />
  );
}