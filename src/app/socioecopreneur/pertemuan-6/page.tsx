'use client';

import SlideEngine from '@/app/socioecopreneur/components/SlideEngine';
import Slide1PengantarSBMC from './Slide1PengantarSBMC';
import Slide2MengapaSBMC from './Slide2MengapaSBMC';
import Slide3ValueProposition from './Slide3ValueProposition';
import Slide4Segmentasi from './Slide4Segmentasi';
import Slide5Channels from './Slide5Channels';
import Slide6SocialEcoImpact from './Slide6SocialEcoImpact';
import Slide7KeyResources from './Slide7KeyResources';
import Slide8KeyPartners from './Slide8KeyPartners';
import Slide9WorkshopSBMC from './Slide9WorkshopSBMC';
import Slide10TugasIndividu from './Slide10TugasIndividuP6';

export default function Pertemuan6() {
  const pertemuan6Slides = [
    <Slide1PengantarSBMC key="p6-1" />,
    <Slide2MengapaSBMC key="p6-2" />,
    <Slide3ValueProposition key="p6-3" />,
    <Slide4Segmentasi key="p6-4" />,
    <Slide5Channels key="p6-5" />,
    <Slide6SocialEcoImpact key="p6-6" />,
    <Slide7KeyResources key="p6-7" />,
    <Slide8KeyPartners key="p6-8" />,
    <Slide9WorkshopSBMC key="p6-9" />,
    <Slide10TugasIndividu key="p6-10" />,
  ];

  return (
    <SlideEngine
      slides={pertemuan6Slides}
      currentPath="/socioecopreneur/pertemuan-6"
      currentPageTitle="Pertemuan 6"
    />
  );
}