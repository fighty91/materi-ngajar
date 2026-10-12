'use client';

import SlideEngine from '@/app/socioecopreneur/components/SlideEngine';
import Slide1PengantarP7 from './Slide1PengantarP7';
import Slide2CostStructure from './Slide2CostStructure';
import Slide3RevenueStreams from './Slide3RevenueStreams';
import Slide4KalkulasiHPP from './Slide4KalkulasiHPP';
import Slide5BEPSosial from './Slide5BEPSosial';
import Slide6AlokasiSurplus from './Slide6AlokasiSurplus';
import Slide7IntegrasiSBMC from './Slide7IntegrasiSBMC';
import Slide8KesiapanUTS from './Slide8KesiapanUTS';
import Slide9KonsultasiP7 from './Slide9KonsultasiP7';
import Slide10TugasIndividuP7 from './Slide10TugasIndividuP7';

export default function Pertemuan7() {
  const pertemuan7Slides = [
    <Slide1PengantarP7 key="p7-1" />,
    <Slide2CostStructure key="p7-2" />,
    <Slide3RevenueStreams key="p7-3" />,
    <Slide4KalkulasiHPP key="p7-4" />,
    <Slide5BEPSosial key="p7-5" />,
    <Slide6AlokasiSurplus key="p7-6" />,
    <Slide7IntegrasiSBMC key="p7-7" />,
    <Slide8KesiapanUTS key="p7-8" />,
    <Slide9KonsultasiP7 key="p7-9" />,
    <Slide10TugasIndividuP7 key="p7-10" />,
  ];

  return (
    <SlideEngine
      slides={pertemuan7Slides}
      currentPath="/socioecopreneur/pertemuan-7"
      currentPageTitle="Pertemuan 7"
    />
  );
}